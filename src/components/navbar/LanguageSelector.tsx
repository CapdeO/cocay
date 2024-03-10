import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xl">
        ES <span className="ml-2">▼</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Español</DropdownMenuItem>
        <DropdownMenuItem>Inglés</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
