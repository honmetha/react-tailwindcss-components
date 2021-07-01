import * as React from "react";

const recaptcha = () => {
  const SITE_KEY = "6Leyk2obAAAAAPmT3DvxTjOgsNJkBgtjJCFjtfAJ";

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);

      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (isScriptExist && callback) callback();
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`,
      function () {
        console.log("Script loaded!");
      }
    );
  }, []);

  const handleOnClick = (e) => {
    e.preventDefault();
    setLoading(true);
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "submit" })
        .then((token) => {
          submitData(token);
        });
    });
  };

  const submitData = (token) => {
    // call a backend API to verify reCAPTCHA response
  };

  return (
    <div className="App">
      <h3>reCAPTCHA v3 in React - TDPK</h3>
      <div className="box">
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="box">
        <label>Email: </label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button onClick={handleOnClick} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      <br />
      <br />
      {response && (
        <label>
          Output:
          <br />
          <pre>{JSON.stringify(response, undefined, 2)}</pre>
        </label>
      )}
    </div>
  );
};

export default recaptcha;
