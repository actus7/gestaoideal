import { auth } from "@/auth";
import LoginBadge from "@/components/auth/login-badge";
import { Fingerprint } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav className="w-full flex items-center justify-between py-4">
			<Link href="/" className="flex items-center gap-2 text-lg font-semibold">
				<Fingerprint className="h-6 w-6 text-primary" />
				<span>Auth Starter</span>
			</Link>
			<div className="flex items-center gap-4">
				<ThemeToggle />
				<LoginBadge user={session?.user} />
			</div>
		</nav>
	);
};

export default Navbar;
