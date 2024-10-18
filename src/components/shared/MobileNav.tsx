import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { RiAddLine, RiMenuLine } from "@remixicon/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";

const MobileNav = () => {
  return (
    <div className="flex items-center lg:hidden py-5 justify-between px-8">
      <h1 className="font-bold text-3xl">animanga tracker</h1>

      <Sheet>
        <SheetTrigger asChild>
          <RiMenuLine className="size-12 border-2 rounded-lg p-1" />
        </SheetTrigger>

        <SheetContent side="bottom" className="h-screen space-y-7">
          <h1 className="font-bold text-3xl text-primary">animanga tracker</h1>

          <nav>
            <Accordion type="single" collapsible>
              <AccordionItem value="anime">
                <AccordionTrigger className="text-3xl font-semibold">
                  Anime
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-10 mt-2">
                    {navLinks.anime.map((item, index) => (
                      <ListItem
                        key={index}
                        title={item.title}
                        href={item.href}
                      ></ListItem>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="manga">
                <AccordionTrigger className="text-3xl font-semibold">
                  Manga
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-10 mt-2">
                    {navLinks.manga.map((item, index) => (
                      <ListItem
                        key={index}
                        title={item.title}
                        href={item.href}
                      ></ListItem>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none rounded-md leading-none no-underline outline-none",
          className
        )}
        {...props}
      >
        <div className="text-[22px] font-medium leading-none flex items-center">
          <RiAddLine className="size-5 mr-2" />
          {title}
        </div>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MobileNav;
