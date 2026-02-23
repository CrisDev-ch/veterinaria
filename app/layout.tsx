// app/layout.tsx (RootLayout)
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import InstagramFooter from "@/components/InstagramFooter";
import FacebookFooter from "@/components/FacebookFooter";
import TikTokFooter from "@/components/TikTokFooter";
import EmailFooter from "@/components/EmailFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen flex flex-col">
        <SideMenu />
        <main className="flex-grow">
          {children}
        </main>
        <div className="mt-0">
          <Footer
            customSocialSection={
              <div className="flex justify-center w-full">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-center items-center">
                  <InstagramFooter />
                  <FacebookFooter />
                  <TikTokFooter />
                  <EmailFooter />
                </div>
              </div>
            }
          />
        </div>
      </body>
    </html>
  );
}