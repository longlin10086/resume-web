function Link({ href, text, className }) {
  return (
    <a
      href={href}
      className={`${className} dark:text-neutral-300 text-slate-950 hover:text-cyan-600 font-zhuque underline decoration-1 text-nowrap`}
    >
      {text}
    </a>
  );
}

export default Link;
