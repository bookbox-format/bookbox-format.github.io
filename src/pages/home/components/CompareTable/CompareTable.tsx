import type { Component } from "solid-js";

import "./CompareTable.css";

export const CompareTable: Component = () => {
  return (
    <table class="compareTable">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Bookbox</th>
          <th>LaTeX</th>
          <th>Markdown</th>
          <th>Pollen</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Generator</td>
          <td>Anyπ</td>
          <td>TeX</td>
          <td>md</td>
          <td>racket</td>
        </tr>
        <tr>
          <td>View</td>
          <td>Anyπ</td>
          <td>PDF</td>
          <td>HTML</td>
          <td>HTML</td>
        </tr>
        <tr>
          <td>Easy read/write</td>
          <td>β</td>
          <td>β</td>
          <td>π</td>
          <td>π€</td>
        </tr>
        <tr>
          <td>Programmable</td>
          <td>β</td>
          <td>β</td>
          <td>β</td>
          <td>β</td>
        </tr>
        <tr>
          <td>Extensible</td>
          <td>β</td>
          <td>β</td>
          <td>π€</td>
          <td>β</td>
        </tr>
        <tr>
          <td>Adaptive</td>
          <td>β</td>
          <td>β</td>
          <td>β</td>
          <td>β</td>
        </tr>
        <tr>
          <td>Math</td>
          <td>β</td>
          <td>π</td>
          <td>π€</td>
          <td>π€</td>
        </tr>
      </tbody>
    </table>
  );
};
