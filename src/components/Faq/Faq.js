import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div>
        <h2>Q.1: How Does React Works? </h2>
        <p>
          <strong>Ans:</strong> React uses a declarative paradigm that makes it
          easier to reason about your application and aims to be both efficient
          and flexible. It designs simple views for each state in your
          application, and React will efficiently update and render just the
          right component when your data changes. React is not a framework. It
          is just a library developed by Facebook to solve some problems that we
          were facing earlier.
        </p>
      </div>
      <div>
        <h2>Q.2: What is difference between props and state? </h2>
        <strong>Ans:</strong>
        <table>
          <tr>
            <th>PROPS</th>
            <th>STATE</th>
          </tr>
          <tr>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
          </tr>
          <tr>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
          </tr>
          <tr>
            <td>Props can be used with state and functional components.</td>
            <td>
              State can be used only with the state components/class component
              (Before 16.0).
            </td>
          </tr>
          <tr>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
          </tr>
        </table>
      </div>
      <div>
        <h2>
          Q.3: Without calling API what is the use of useEffect in React ?
        </h2>
        <p>
          <strong>Ans:</strong> The useEffect Hook allows you to perform side
          effects in your components. Some examples of side effects are:
          fetching data, directly updating the DOM, and timers. useEffect
          accepts two arguments. The second argument is optional.
        </p>
      </div>
    </div>
  );
};

export default Faq;
