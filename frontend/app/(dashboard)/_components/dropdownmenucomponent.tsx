import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

type Props = {
  bookId: number;
  onDelete: (id: number) => void;
};

const DropdownMenuComponent = ({ bookId, onDelete }: Props) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Book Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDelete(bookId)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
