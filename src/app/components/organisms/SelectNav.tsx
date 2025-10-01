import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";

const CategorySelectData = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "Women", value: "women" },
  { id: 3, label: "Man", value: "man" },
  { id: 5, label: "Sports", value: "sports" },
  { id: 6, label: "Kids", value: "kids" },
  { id: 7, label: "Brand", value: "brand" },
  { id: 8, label: "Sale", value: "sale" },
];

const ProductCategorySelectData = [
  { id: 1, label: "All", value: "all" },
  { id: 2, label: "T-Shirts", value: "tshirt" },
  { id: 3, label: "Shirts", value: "shirt" },
  { id: 4, label: "Hoodies & Sweatshirts", value: "hoodie" },
  { id: 5, label: "Jackets & Coats", value: "jacket" },
  { id: 6, label: "Jeans", value: "jeans" },
  { id: 7, label: "Trousers & Chinos", value: "trousers" },
  { id: 8, label: "Shorts", value: "shorts" },
  { id: 9, label: "Skirts", value: "skirts" },
  { id: 10, label: "Sneakers", value: "sneakers" },
  { id: 11, label: "Boots", value: "boots" },
  { id: 12, label: "Sandals", value: "sandals" },
  { id: 13, label: "Bags", value: "bags" },
  { id: 14, label: "Watches", value: "watches" },
  { id: 15, label: "Caps & Hats", value: "caps" },
  { id: 16, label: "Belts", value: "belts" },
];

const SearchNav = () => {
  const [active, setActive] = useState<string | null>("all");
   const [search, setSearch] = useState("");


  const ToggleHandler = (value: string) => {
    setActive(value);
  };

  return (
    <div className="w-full py-4 lg:flex-row flex flex-col lg:items-center justify-between lg:gap-6 gap-4  border-gray-100">
      <div className="lg:flex hidden lg:items-center lg:gap-6 gap-4 flex-wrap">
        {CategorySelectData.map((item) => (
          <Button
            key={item.id}
            onClick={() => ToggleHandler(item.value)}
            className={`${
              active === item.value ? "text-pink-500" : "text-neutral-900"
            } bg-transparent px-0 max-h-max border-0 text-xs font-medium shadow-none hover:bg-transparent`}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-3 lg:w-1/2">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 shadow-none bg-gray-50 lg:rounded-full rounded-md text-xs border-0 focus-visible:ring-1"
          />
          {/* Left Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={16} className="text-gray-500" />
          </div>
          {/* Right Clear Button */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <X size={16} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
        <Select>
          <SelectTrigger className="lg:w-[180px] w-max lg:bg-gray-50 lg:border-0 border  lg:rounded-full rounded-md shadow-none  border-gray-100 text-sm">
            <div className="lg:block hidden">
              <SelectValue placeholder="Product categories" />
            </div>
            <div className="lg:hidden">
              <BiFilter />
            </div>
          </SelectTrigger>
          <SelectContent>
            {ProductCategorySelectData.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="lg:hidden flex lg:items-center lg:gap-6 gap-4 flex-wrap">
        {CategorySelectData.map((item) => (
          <Button
            key={item.id}
            onClick={() => ToggleHandler(item.value)}
            className={`${
              active === item.value ? "text-pink-500" : "text-neutral-900"
            } bg-transparent px-0 max-h-max border-0 text-xs font-medium shadow-none hover:bg-transparent`}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SearchNav;
