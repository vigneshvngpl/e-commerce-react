import { useMemo } from "react";
import { useAppContext } from "../context/AppContext";


export function useThemeTokens() {
  const { theme, config } = useAppContext();
  const spacing = config.spacing;
  const fonts = config.fonts;


  const styles = useMemo(
    () => ({

      card: {
        background: theme.cardBg,
        border: `1px solid ${theme.border}`,
        borderRadius: "16px",
      },
   
      btnPrimary: {
        background: theme.accent,
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        padding: `${spacing.sm} ${spacing.lg}`,
        fontFamily: fonts.body,
        fontWeight: 700,
        cursor: "pointer",
      },
    
      btnGhost: {
        background: "transparent",
        color: theme.textPrimary,
        border: `1px solid ${theme.border}`,
        borderRadius: "12px",
        padding: `${spacing.sm} ${spacing.lg}`,
        fontFamily: fonts.body,
        fontWeight: 600,
        cursor: "pointer",
      },
    
      heading: {
        fontFamily: fonts.display,
        color: theme.textPrimary,
      },
   
      muted: {
        color: theme.textSecondary,
        fontFamily: fonts.body,
      },
    
      input: {
        background: theme.cardBg,
        color: theme.textPrimary,
        border: `1px solid ${theme.border}`,
        borderRadius: "10px",
        padding: `${spacing.sm} ${spacing.md}`,
        fontFamily: fonts.body,
        fontSize: "0.95rem",
        width: "100%",
        outline: "none",
      },
     
      badge: {
        background: theme.accentSoft,
        color: theme.accent,
        borderRadius: "20px",
        padding: `3px ${spacing.sm}`,
        fontSize: "0.75rem",
        fontWeight: 700,
        fontFamily: fonts.body,
      },
    
      page: {
        background: theme.bgSecondary,
        minHeight: "100vh",
        paddingTop: "68px",
      },
    }),
    [theme, spacing, fonts]
  );

 
  const s = (key) => spacing[key] ?? key;


  const c = (key) => theme[key] ?? key;

  return { styles, s, c, theme, spacing, fonts };
}