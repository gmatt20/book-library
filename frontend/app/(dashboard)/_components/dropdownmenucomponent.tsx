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
  bookTitle: string,
  bookAuthor: string,
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, author: string) => void;
};

const DropdownMenuComponent = ({ bookId, bookTitle, bookAuthor, onDelete, onEdit }: Props) => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Book Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => onEdit(bookId, bookTitle, bookAuthor)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onDelete(bookId)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
