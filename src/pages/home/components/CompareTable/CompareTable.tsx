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
          <td>Any🏆</td>
          <td>TeX</td>
          <td>md</td>
          <td>racket</td>
        </tr>
        <tr>
          <td>View</td>
          <td>Any🏆</td>
          <td>PDF</td>
          <td>HTML</td>
          <td>HTML</td>
        </tr>
        <tr>
          <td>Easy read/write</td>
          <td>✅</td>
          <td>✅</td>
          <td>🏆</td>
          <td>🤔</td>
        </tr>
        <tr>
          <td>Programmable</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Extensible</td>
          <td>✅</td>
          <td>✅</td>
          <td>🤔</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Adaptive</td>
          <td>✅</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Math</td>
          <td>✅</td>
          <td>🏆</td>
          <td>🤔</td>
          <td>🤔</td>
        </tr>
      </tbody>
    </table>
  );
};
