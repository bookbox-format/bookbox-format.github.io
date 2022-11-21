import {
  Component,
  createEffect,
  createSignal,
  JSX,
  onCleanup,
  onMount,
} from "solid-js";

type Route = {
  title?: string;
  component: Component;
};

type Props = {
  config: Record<string, Route>;
};

const getRoute = () => {
  const params = new URLSearchParams(location.search);
  return params.get("path") ?? "home";
};

export const Router: Component<Props> = (props) => {
  const [current, setCurrent] = createSignal("home");

  const updateRoute = function () {
    const route = getRoute();
    setCurrent(route);
    document.body.dataset.page = route;
  };

  onMount(() => {
    updateRoute();

    window.addEventListener("router-popstate", updateRoute);
  });

  onCleanup(() => {
    window.removeEventListener("router-popstate", updateRoute);
  });

  createEffect(() => {
    const path = current();
    const { title = "" } = props.config[path];
    document.title = `${title === "" ? "" : title + " | "}Bookbox`;
  });

  return <>{props.config[current()]?.component({}) ?? ""}</>;
};

export const A: Component<JSX.AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  type Props = typeof props;

  const onClick: Props["onClick"] = (event) => {
    if (event.ctrlKey || event.metaKey) return; // for new page
    event.preventDefault();
    window.history.pushState({}, "", props.href);
    window.dispatchEvent(new Event("router-popstate"));
  };

  return (
    <a {...props} onClick={onClick}>
      {props.children}
    </a>
  );
};



