import { Authguard } from "@/modules/auth/ui/component/auth-guard";

const DashbaordLayout = ({ children }: { children: React.ReactNode }) => {
  return <Authguard>{children}</Authguard>;
};

export default DashbaordLayout;
