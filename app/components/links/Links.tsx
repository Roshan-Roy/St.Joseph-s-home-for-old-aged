import styles from "./link.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Links = ({ name, path, func }: {
    name: string;
    path: string;
    func: () => {};
}) => {
    const pathName = usePathname()
    return (
        <Link href={path} className={pathName === path ? `${styles.link} ${styles.active}` : styles.link} onClick={func}>{name}</Link>
    )
}

export default Links