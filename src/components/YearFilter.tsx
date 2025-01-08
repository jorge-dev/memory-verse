"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronDown, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface YearFilterProps {
  years: number[];
  selectedYear: number | null;
  onYearSelectAction: (year: number | null) => void;
}

export function YearFilter({
  years,
  selectedYear,
  onYearSelectAction,
}: YearFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-auto sm:w-[180px] justify-between"
        >
          <Filter className="h-4 w-4 sm:inline-block" />
          <span className="hidden sm:inline ml-2">
            {selectedYear ? `Year: ${selectedYear}` : "Filter by Year"}
          </span>
          <ChevronDown className="hidden sm:inline-block ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]">
        <DropdownMenuItem onSelect={() => onYearSelectAction(null)}>
          All Years
          {selectedYear === null && <Check className="ml-auto h-4 w-4" />}
        </DropdownMenuItem>
        {years.map((year) => (
          <DropdownMenuItem
            key={year}
            onSelect={() => onYearSelectAction(year)}
          >
            {year}
            {selectedYear === year && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
