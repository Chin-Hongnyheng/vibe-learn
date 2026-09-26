import type { ComponentProps } from "react"
import type { SignIn } from "@clerk/clerk-react"

type Appearance = NonNullable<ComponentProps<typeof SignIn>["appearance"]>

export const vibeLearnClerkAppearance: Appearance = {
  variables: {
    colorPrimary: "#10B981",
    colorDanger: "#EF4444",
    borderRadius: "0.75rem",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "0.875rem",
  },
  elements: {
    rootBox: "w-full max-w-md mx-auto",
    card: "bg-card text-card-foreground shadow-xl border border-border rounded-2xl p-6 sm:p-8 transition-colors duration-200",
    headerTitle: "font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center",
    headerSubtitle: "font-sans text-sm text-muted-foreground mt-1 text-center",
    socialButtonsBlockButton:
      "border border-border bg-card hover:bg-muted text-foreground font-sans font-medium text-sm rounded-xl h-11 transition-all duration-200 shadow-sm hover:border-primary/40",
    socialButtonsBlockButtonText: "font-medium text-foreground text-sm",
    socialButtonsProviderIcon: "w-5 h-5",
    dividerRow: "my-6",
    dividerLine: "bg-border",
    dividerText: "text-xs uppercase tracking-wider text-muted-foreground font-sans font-medium bg-card px-3",
    formButtonPrimary:
      "bg-primary text-primary-foreground hover:bg-primary-600 font-sans font-semibold rounded-xl h-11 text-sm transition-all duration-200 shadow-sm active:scale-[0.99]",
    formFieldLabel: "font-sans text-xs font-semibold text-foreground tracking-wide uppercase mb-1.5",
    formFieldInput:
      "h-11 rounded-xl border border-input bg-background/60 px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none",
    footer: "bg-transparent border-t border-border/60 pt-4 mt-4",
    footerActionText: "font-sans text-sm text-muted-foreground",
    footerActionLink: "font-sans font-semibold text-primary hover:text-primary-600 transition-colors ml-1",
    identityPreview: "bg-muted/60 border border-border rounded-xl p-3",
    identityPreviewText: "font-sans text-sm font-medium text-foreground",
    identityPreviewEditButton: "text-primary hover:text-primary-600 text-xs font-medium",
    formFieldSuccessText: "text-primary text-xs mt-1",
    formFieldErrorText: "text-destructive text-xs mt-1",
    alert: "bg-destructive/10 border border-destructive/20 text-destructive rounded-xl p-3",
    alertText: "text-destructive text-sm font-medium",
    logoImage: "h-9 w-auto mx-auto mb-2",
    headerBackLink: "text-muted-foreground hover:text-foreground transition-colors",
    headerBackIcon: "text-muted-foreground hover:text-foreground",
    formFieldInputShowPasswordButton: "text-muted-foreground hover:text-foreground",
    otpCodeFieldInput:
      "border border-input bg-background text-foreground rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20",
    formHeaderTitle: "font-serif text-xl font-bold text-foreground text-center",
    formHeaderSubtitle: "font-sans text-sm text-muted-foreground text-center",
  },
  layout: {
    socialButtonsVariant: "blockButton",
    socialButtonsPlacement: "top",
  },
}
