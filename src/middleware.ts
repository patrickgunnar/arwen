import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/system",
    "/system/documents",
    "/system/integrations",
    "/system/reports",
    "/system/settings",
    "/system/home",
    "/system/home/overview",
    "/system/home/announcements",
    "/system/home/getting-started",
    "/system/home/recent-updates",
    "/system/inventory",
    "/system/inventory/adjustments",
    "/system/inventory/groups",
    "/system/inventory/items",
    "/system/purchases",
    "/system/purchases/bills",
    "/system/purchases/expenses",
    "/system/purchases/payment-made",
    "/system/purchases/purchase-orders",
    "/system/purchases/purchase-receives",
    "/system/purchases/vendor-credits",
    "/system/purchases/vendors",
    "/system/sales",
    "/system/sales/customers",
    "/system/sales/credit-notes",
    "/system/sales/invoices",
    "/system/sales/packages",
    "/system/sales/payment-received",
    "/system/sales/sales-orders",
    "/system/sales/sales-receipt",
    "/system/sales/sales-returns",
    "/system/sales/shipments",
    "/system(.*)",
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
