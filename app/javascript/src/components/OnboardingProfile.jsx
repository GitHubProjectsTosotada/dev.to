import { h, render, Component } from 'preact';

const OnboardingProfile = () => {
  const wrapInYellow = message => <strong className="yellow">{message}</strong>;

  return (
    <div>
      <p>Profile {wrapInYellow('Update your bio')}.</p>
    </div>
  );
};
export default OnboardingProfile;