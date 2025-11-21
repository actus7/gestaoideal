import { auth } from "@/auth";
import Navbar from "@/components/site/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, Lock } from "lucide-react";
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
					<div className="mx-auto max-w-4xl space-y-8">
						<div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-accent">
							<span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
							Solução Empresarial Completa
						</div>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
							Otimize a gestão da sua <br className="hidden sm:inline" />
							<span className="text-primary">Empresa com Eficiência</span>
						</h1>
						<p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
							Gestão Ideal é a plataforma definitiva para controle financeiro, organização de equipe e crescimento escalável.
							Segurança, performance e simplicidade em um só lugar.
						</p>
						<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
							{session ? (
								<Button asChild size="lg" className="h-12 px-8 text-lg">
									<Link href="/settings">
										Acessar Painel <ArrowRight className="ml-2 h-5 w-5" />
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
								<Link href="/features">
									Conheça os Recursos
								</Link>
							</Button>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-4 py-16 lg:py-24 bg-muted/30 rounded-3xl">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight mb-4">Tudo o que você precisa</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Ferramentas poderosas para simplificar o dia a dia do seu negócio.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow">
							<div className="p-4 rounded-full bg-primary/10">
								<BarChart3 className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Relatórios Detalhados</h3>
							<p className="text-muted-foreground">
								Acompanhe o desempenho da sua empresa com gráficos intuitivos e dados em tempo real.
							</p>
						</div>
						<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow">
							<div className="p-4 rounded-full bg-primary/10">
								<Building2 className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Gestão Multi-Empresa</h3>
							<p className="text-muted-foreground">
								Centralize o controle de múltiplas filiais ou organizações em uma única conta segura.
							</p>
						</div>
						<div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border bg-card shadow-sm hover:shadow-md transition-shadow">
							<div className="p-4 rounded-full bg-primary/10">
								<Lock className="h-8 w-8 text-primary" />
							</div>
							<h3 className="text-xl font-bold">Segurança Total</h3>
							<p className="text-muted-foreground">
								Seus dados protegidos com criptografia de ponta a ponta e autenticação robusta.
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="border-t py-8 mt-12">
				<div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Gestão Ideal. Todos os direitos reservados.
				</div>
			</footer>
		</div>
	);
}
