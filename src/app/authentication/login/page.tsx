"use client";

import LoginForm from "@/app/components/molecules/LoginForm";
import OnBoardingBenefit from "@/app/components/molecules/OnBoardingBenefit";
import Container from "@/app/components/organisms/container";

const LoginPage = () => {
  return (
    <Container>
      <main className="min-h-screen relative lg:p-4 flex flex-col md:flex-row items-center md:items-start ">
      
        <div className="lg:block  w-full md:w-3/5 max-w-3xl">
          <div className="relative w-full h-[28vh] md:h-[95vh] lg:rounded-4xl overflow-hidden">
            <OnBoardingBenefit />
          </div>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-4 overflow-y-hidden">
          <LoginForm />
        </div>
      </main>
    </Container>
  );
};

export default LoginPage;
