import { Routes as AppRoutes, Route } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import { UserPage, UsersPage } from "@/modules/users";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/users/:userId" element={<UserPage />} />

      <Route path="*" element={<Text>NOT FOUND | 404</Text>} />
    </AppRoutes>
  );
};

export default Routes;
