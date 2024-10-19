import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="py-5 container mx-auto hidden lg:flex justify-between items-center *:flex-1">
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Anime
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="p-2 w-[200px]">
                  {navLinks.anime.map((item, index) => (
                    <ListItem
                      key={index}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Manga
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="p-2 w-[200px]">
                  {navLinks.manga.map((item, index) => (
                    <ListItem
                      key={index}
                      title={item.title}
                      href={item.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Industry News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <Link href="/" className="text-center">
        <h1 className="font-bold text-3xl text-primary">animanga tracker</h1>
      </Link>

      <div className="text-right">
        <Button className="font-bold">Sign In</Button>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
