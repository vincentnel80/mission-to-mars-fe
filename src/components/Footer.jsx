function Footer() {

  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <footer>
      <ul>
        <li>Mission to Mars © {date}</li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">YouTube</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Flickr</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Suppliers</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
