"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {clearLibrary} from "@/lib/clearLibrary";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Menu} from 'lucide-react';

const Navbar = () => {
    const router = useRouter();
    const [sidebar, setSidebar] = useState(false);

    const handleClear = async () => {
        await clearLibrary();
        router.refresh();
    };

    const handleSidebar = () => {
        if (sidebar) {
            setSidebar(false);
        } else {
            setSidebar(true);
        }
    }

    return (
        <div className="p-5 border-b-2 border-surface-a10">
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-between">
                <p className="text-primary-a50 text-3xl font-bold uppercase">
                    Books Central
                </p>
                <ul className="flex items-center gap-3">
                    <Button
                        variant="destructive"
                        className="text-lg font-bold uppercase"
                        onClick={handleClear}
                    >
                        Clear Library
                    </Button>
                    <Link href="/add">
                        <Button className="text-lg font-bold uppercase">Add a Book</Button>
                    </Link>
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="flex md:hidden items-center justify-between">
                <p className="text-primary-a50 text-2xl md:text-3xl font-bold uppercase">
                    Books Central
                </p>
                <Menu onClick={handleSidebar} size={30} className="cursor-pointer"/>
            </div>

            {/* Mobile Sidebar/Menu */}
            {sidebar && (
                <div className="md:hidden mt-3 space-y-2">
                    <Button
                        variant="destructive"
                        className="w-full text-lg font-bold uppercase"
                        onClick={handleClear}
                    >
                        Clear Library
                    </Button>
                    <Link href="/add">
                        <Button className="w-full text-lg font-bold uppercase">
                            Add a Book
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
