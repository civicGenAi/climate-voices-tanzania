import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Leaf } from "lucide-react";
import authHero from "@/assets/auth-hero.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={authHero}
          alt="Youth planting trees in a forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--forest-deep))] via-[hsl(var(--forest-deep)/0.4)] to-transparent" />
        <div className="relative z-10 flex flex-col justify-end p-12 pb-16">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold font-display text-foreground">
              Chanya Change
            </span>
          </div>
          <h2 className="text-4xl font-bold font-display text-foreground leading-tight mb-4">
            Empowering youth to<br />
            <span className="text-accent">protect our planet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Join thousands of young climate leaders making a real difference in their communities.
          </p>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-background px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 justify-center mb-4">
            <Leaf className="h-7 w-7 text-accent" />
            <span className="text-xl font-bold font-display text-foreground">
              Chanya Change
            </span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold font-display text-foreground">
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to continue your impact
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <button
                  type="button"
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
