import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const currentPath = usePathname();


    const navItems = [
        { name: 'Students', path: '/students' },
        { name: 'Groups', path: '/groups' },
        { name: 'Admin', path: '/admin', role: 'ADMIN' },
    ];

    return (
        <Navbar maxWidth="full" isBordered isBlurred={false}>
            <NavbarBrand>
                <a className="font-semibold text-inherit" href="/">StudNet Administration</a>
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
                                <Avatar size="sm" src="/avatar.jpg" />
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