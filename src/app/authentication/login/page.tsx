"use client";

import OnBoardingBenefit from "@/app/components/molecules/OnBoardingBenefit";
import Container from "@/app/components/organisms/container";

const LoginPage = () => {

  return (
    <Container>
      <main className="min-h-screen relative p-4 ">
        <OnBoardingBenefit />
      </main>
    </Container>
  );
};

export default LoginPage;
