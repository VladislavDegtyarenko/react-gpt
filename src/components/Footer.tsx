const Footer = () => {
  return (
    <footer className="flex justify-center py-1 fixed w-full bottom-0">
      <small className="text-xs text-center">
        @{new Date().getFullYear()} Developed by{" "}
        <a href="https://www.vddeveloper.online/" target="_blank">
          Vladyslav Dihtiarenko
        </a>
      </small>
    </footer>
  );
};

export default Footer;
