import { Button } from "@/components/ui/button";

const ClearMessagesButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      variant="secondary"
      className="mx-auto hover:bg-destructive dark:hover:bg-destructive"
      onClick={onClick}
    >
      Clear messages
    </Button>
  );
};

export default ClearMessagesButton;
