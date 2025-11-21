import { auth } from "@/auth";
import Navbar from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default async function Home() {
	const session = await auth();

	return (
		<div className="flex min-h-screen w-full flex-col bg-background">
			<header className="container mx-auto px-4">
				<Navbar />
			</header>
			<main className="flex-1">
				<section className="container mx-auto px-4 py-24 text-center lg:py-32">
					<div className="mx-auto max-w-3xl space-y-8">
						<div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent">
							<span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
							Zero Dependências Externas
						</div>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Autenticação Segura e <br className="hidden sm:inline" />
							<span className="text-primary">Totalmente Local</span>
						</h1>
						<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Um starter kit moderno com Next.js, Prisma (SQLite) e NextAuth v5.
							Perfeito para prototipagem rápida e projetos independentes.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							{session ? (
								<Button asChild size="lg" className="h-12 px-8 text-lg">
									<Link href="/settings">
										Ir para Dashboard <ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
							) : (
								<Button asChild size="lg" className="h-12 px-8 text-lg">
									<Link href="/auth/login">
										Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
									</Link>
								</Button>
							)}
							<Button variant="outline" size="lg" asChild className="h-12 px-8 text-lg">
								<a href="https://github.com/devdeck101/authjs-prisma-template" target="_blank" rel="noopener noreferrer">
									GitHub
								</a>
							</Button>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-4 py-16 lg:py-24">
					<div className="grid gap-8 md:grid-cols-3">
						<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl border bg-card shadow-sm">
							<div className="p-3 rounded-full bg-primary/10">
								<Lock className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Autenticação Segura</h3>
							<p className="text-muted-foreground">
								Implementação robusta com NextAuth v5, protegendo suas rotas e dados de usuário.
							</p>
						</div>
						<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl border bg-card shadow-sm">
							<div className="p-3 rounded-full bg-primary/10">
								<Shield className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Zero Dependências</h3>
							<p className="text-muted-foreground">
								Login totalmente local via Credentials. Sem chaves de API externas ou serviços de terceiros.
							</p>
						</div>
						<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl border bg-card shadow-sm">
							<div className="p-3 rounded-full bg-primary/10">
								<Zap className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Stack Moderna</h3>
							<p className="text-muted-foreground">
								Construído com Next.js 15, Tailwind CSS, Shadcn UI e Prisma com SQLite.
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="border-t py-8">
				<div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Auth Starter Kit. Código aberto sob licença MIT.
				</div>
			</footer>
		</div>
	);
}
