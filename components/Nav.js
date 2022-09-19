import styles from '../styles/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav(){
    const router = useRouter()
    const currentRouter = router.pathname
    console.log(currentRouter)

    const HandleClick = event =>{        
        let currentBar = document.getElementById('bar')
        var targetBar = event.currentTarget.textContent
        
        if (targetBar==='Main'){
            currentBar.style.marginLeft = '0%'
        }else if (targetBar==='Work'){
            currentBar.style.marginLeft = '33%'
        }else {
            currentBar.style.marginLeft = '65%'
        }        
    }

    return(
        <nav className={styles.nav}>
            <h2 className={styles.nav_title}>Bio</h2>
            <ul className={styles.nav_ul}>
                <li className={styles.nav_bar} id='bar'></li>
                <Link href='/' passHref>
                    <li className={styles.nav_list} onClick={HandleClick}>Main</li>
                </Link>
                <Link href='/work/Work'>
                    <li className={styles.nav_list} onClick={HandleClick}>Work</li>
                </Link>
                <Link href='/blog/Blog'>
                    <li className={styles.nav_list} onClick={HandleClick}>Blog</li>
                </Link>                
            </ul>
            <ul className={styles.nav_contact}>
                <Link href='/contact'>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}