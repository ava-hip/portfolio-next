"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {Button} from "@/src/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            className={className}
            variant="outline"
            size="icon"
            aria-label="theme toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <Sun className="size-5 dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
        </Button>
    )
}
