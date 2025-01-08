"use client";

import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
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
        <Button variant="outline" className="w-[180px] justify-between">
          {selectedYear ? `Year: ${selectedYear}` : "Filter by Year"}
          <ChevronDown className="ml-2 h-4 w-4" />
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
