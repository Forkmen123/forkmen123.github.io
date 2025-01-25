function UnstaticForm() {
    return (
      <form
        action="https://forms.un-static.com/forms/277542ee94b68bb235a365330d693cbd353d13d3"
        method="POST"
      >
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Adresse courriel:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="email">Message:</label>
        <input type="message" id="message" name="message" required />

        <button type="submit">Envoyer</button>
      </form>
    );
  }
  
  export default UnstaticForm;
  