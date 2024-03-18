'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const currentPath = usePathname();


    const navItems = [
        { name: 'Item1', path: '/itemone' },
        { name: 'Item2', path: '/itemtwo' },
        { name: 'Item3', path: '/itemthree', role: 'ADMIN' },
    ];

    return (
        <Navbar maxWidth="full" isBordered isBlurred={false}>
            <NavbarBrand>
                <a className="font-semibold text-inherit" href="/">Nextjs Template</a>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                {navItems.map((item, index) => (
                    <NavbarItem key={index} isActive={currentPath === item.path}>
                        <Link href={item.path}>{item.name}</Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button>
                                Login
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem>
                                <Link href="/profile">Profile</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/settings">Settings</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Button onClick={() => signOut()}>Sign out</Button>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}