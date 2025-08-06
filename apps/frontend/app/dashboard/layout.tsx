import { Authguard } from "@/modules/auth/ui/component/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/component/organization-guard";

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Authguard>
      <OrganizationGuard>{children}</OrganizationGuard>
    </Authguard>
  );
};

export default DashbaordLayout;
