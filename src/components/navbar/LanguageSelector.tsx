import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Lenguaje</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Español</DropdownMenuItem>
        <DropdownMenuItem>Inglés</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
