export default function Settings() {
  return (
    <div className="fadeContent">
      <h1>Settings</h1>
      <h4>Change language</h4>
      <p>
        All text is translated from English to your native language
        automatically by Google Translate, this may lead to translation errors.
      </p>
      <h4>Turn off recently used</h4>
      <p>
        We store your recently used modules in your browser local storage for
        faster access, if you don't want that you can turn it off here and we'll
        stop saving any activety.
      </p>
      <h4>Turn off max page width</h4>
      <p>
        The max width of the page is 1920px by default to avoid stretching too
        wide on large screens. If you don't want that you can turn it off here.
      </p>
      <hr />
      <h4>Report a bug</h4>
      <p>If you find a bug or have a suggestion you can report it here.</p>
      <h4>Request a feature</h4>
      <p>
        If you would like a feature to be added to Wisp you can request it here.
      </p>
      <hr />
      <h4>Privacy Policy</h4>
      <p>
        We don't collect any data from you, all data is stored in your browser
        local storage.
      </p>
      <h4>Credits</h4>
      <p>View every module's contributors.</p>
    </div>
  );
}
