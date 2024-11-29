function Link({ href, text, className }) {
  return (
    <a
      href={href}
      className={`${className} hover:text-cyan-600 font-zhuque underline decoration-1 text-nowrap`}
    >
      {text}
    </a>
  );
}

export default Link;
