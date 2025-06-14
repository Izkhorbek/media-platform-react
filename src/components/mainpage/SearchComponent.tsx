import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useRef } from "react";

interface SearchComponentProps {
  callbackText?: (searchText: string) => void;
  placeholder?: string;
  tags?: string[];
  btnClick?: () => void;
  tagClick?: (tag: string) => void;
}

function SearchComponent({
  callbackText,
  placeholder,
  tags,
  btnClick,
  tagClick,
}: SearchComponentProps) {
  const [inputValue, setInputValue] = useState("");
  const tagsContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function handleInputValue(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    setInputValue(event.target.value);

    if (callbackText) callbackText(event.target.value);
    console.log(event);
  }

  function handleBtnClickAndEnter(
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void {
    if (event.key === "Enter" && btnClick) {
      // It's a KeyboardEvent
      // Invoke parent class
      btnClick();
    }
  }

  function handleTagClick(tag: string): void {
    if (tagClick) {
      tagClick(tag);
    }
  }

  // Mouse drag to scroll
  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    isDragging.current = true;
    startX.current = e.pageX - (tagsContainerRef.current?.offsetLeft ?? 0);
    scrollLeft.current = tagsContainerRef.current?.scrollLeft ?? 0;
  }

  function handleMouseLeave() {
    isDragging.current = false;
  }

  function handleMouseUp() {
    isDragging.current = false;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDragging.current || !tagsContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - tagsContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    tagsContainerRef.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <>
      <div className="w-full h-full">
        {/* Search */}
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-search"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={handleBtnClickAndEnter}
            placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <ArrowCircleRightIcon
                    fontSize="large"
                    className="text-primary"
                  />
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {/* Tags */}
        <div
          ref={tagsContainerRef}
          className="flex gap-4 overflow-x-scroll p-4  scrollbar-invisible cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tags?.map((tag, index) => (
            <Button
              variant="contained"
              sx={{ borderRadius: 8, paddingX: 4, minWidth: "unset" }}
              key={index}
              aria-label={tag}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchComponent;
