import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Các ngôn ngữ được hỗ trợ
const languages = ["vi", "en"];
const defaultLanguage = "vi";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Kiểm tra xem pathname hiện tại có chứa locale không
  const pathnameHasLocale = languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Chuyển hướng về ngôn ngữ mặc định
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url)
    );
  }
}

// Chỉ áp dụng middleware cho các route không phải static files
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};
