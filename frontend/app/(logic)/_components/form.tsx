const Form = () => {
  return (
    <>
      <form>
        <label>Book Title:</label>
        <input type="text" required name="title" />
        <label>Book Author:</label>
        <input type="text" required name="author" />
        <label>Optional Image:</label>
        <input type="file" required name="cover" accept="image/png, image/jpeg" />
      </form>
      <p>Form goes here</p>
    </>
  );
}

export default Form;