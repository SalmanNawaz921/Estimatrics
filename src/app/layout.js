// These styles apply to every route in the application
import "./globals.css";

export const metadata = {
  title: "Estimatrics",
  description: "Estimatrics - Your Partner in Construction Estimation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body
        style={{
          overflowX: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
