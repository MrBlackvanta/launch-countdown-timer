const ridges = (
  <>
    <path
      className="fill-hill-far"
      d="M1440 50.205L1088.504 0 949.669 50.205 878 25.102 556 0 398.525 50.205l-95.807-25.103-51.328 16.761L45.704 0 0 17.701V160h1440z"
    />
    <path
      className="fill-hill-peak"
      d="M1394.296 1l94.649 69.336 50.047-49.449zM1137.282 42.576l51.328 27.76 80.6-5.426zM884 1l157.475 83.151 80.929-26.062zM351.496 1l138.835 83.151 49.321-28.526z"
    />
    <path
      className="fill-hill-near"
      d="M0 84.151L351.496 1l138.835 83.151L562 42.576 884 1l157.475 83.151 95.807-41.575 51.328 27.76L1394.296 1 1440 30.317V266H0z"
    />
  </>
);

export default function HillRange() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="743 0 594 266"
        preserveAspectRatio="xMidYMin slice"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 max-h-42 w-full md:hidden"
      >
        {ridges}
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 197"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden w-full md:block"
      >
        {ridges}
      </svg>
    </>
  );
}
