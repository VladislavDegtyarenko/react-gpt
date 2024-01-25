import Container from "./Container";
import GPTModelSelect from "./GPTModelSelect";
import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="py-2 border-b-muted border-b-[1px] sticky top-0 w-full backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between space-x-2">
          <div className="text-base font-bold">ReactGPT</div>
          <div className="flex space-x-2">
            <GPTModelSelect />
            <ThemeSelect />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
