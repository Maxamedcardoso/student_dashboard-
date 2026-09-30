type AvatarHeaderProps = {
  initials: string;
  title: string;
  meta?: string;
  metaClassName?: string;
  label?: string;
};

function AvatarHeader({
  initials,
  title,
  meta,
  metaClassName = 'meta',
  label = 'Student',
}: AvatarHeaderProps) {
  return (
    <div className="card-header-row">
      <div className="avatar">{initials}</div>
      <div>
        {label && <p className="label">{label}</p>}
        <h3>{title}</h3>
        {meta && <p className={metaClassName}>{meta}</p>}
      </div>
    </div>
  );
}

export default AvatarHeader;
