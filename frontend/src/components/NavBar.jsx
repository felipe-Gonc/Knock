const NavBar = () => {
  return (
    <div class="navbar rounded-md bg-[#3e304d]">
      <div class="flex-1">
        <a class="btn btn-ghost font-major md:text-3xl text-xl">Knock</a>
      </div>
      <div class="flex-none ">
        <ul class="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-tilt md:text-2xl text-xl">Links</summary>
              <ul class="font-tilt bg-[#3e304d] rounded-t-none p-2">
                <li>
                  <a href="https://www.linkedin.com/in/desenvolvedormatheusfelipe/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/felipe-Gonc">github</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
