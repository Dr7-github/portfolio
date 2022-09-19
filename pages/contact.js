import styles from '../styles/contact.module.css'
import Link from 'next/link'

const svg_item={
  
}

export default function Contact() {
    return(
      <div className='page'>
        <div className={styles.profile_hero}>
          <div className={styles.profile_wrapper}>
            
            <h3 style={{color:'rgb(243, 89, 89)'}}>About Me</h3>

            <div className={styles.profile_img}>
              <img src='/icon/profile.jpg' style={{width:'7em',borderRadius:'1em'}} />
            </div>

            <div className={styles.info_wrapper}>
              <li><span style={{fontWeight:'bold'}}>Name:</span> Zacky Zhang</li>
              <li><span style={{fontWeight:'bold'}}>Email:</span> zackyzhang299@gmail.com</li>
              <li><span style={{fontWeight:'bold'}}>Location:</span> Shenzhen, China</li>
              <li><span style={{fontWeight:'bold'}}>ENS:</span> 0xzqq.eth</li>
              
              <p className={styles.info_tag}>Crossover</p>
              <p className={styles.info_tag}>Design</p>
              <p className={styles.info_tag}>Develop</p>
              <p className={styles.info_tag}>Crypto</p>
            </div>
            
            <div className={styles.contact_wrapper}>
              <h3 style={{color:'rgb(243, 89, 89)'}}>Link</h3>
              <ul className={styles.contact_ul}>  
                <li className={styles.contact_li}>
                  <Link href='https://github.com/Dr7-github'>
                    <img src='/icon/github.svg' alt='github' style={{width:'2em'}}/>
                  </Link>
                </li>          
                <li className={styles.contact_li}>
                  <Link href='https://rainbow.me/0xzqq.eth'>
                    <img src='/icon/ens.svg' alt='ens' style={{width:'1.8em'}}/>
                  </Link>
                </li>
                <li className={styles.contact_li}>
                  <Link href='https://jike.city/zacky'>
                    <img src='/icon/jike.png' alt='jike' style={{width:'2em'}}/>
                  </Link> 
                </li>
                <li className={styles.contact_li}>
                  <Link href='https://twitter.com/zacky_zhang'>
                    <img src='/icon/twitter.svg' alt='twitter' style={{width:'2em'}}/>
                  </Link>                
                </li>            
              </ul>
            </div> 

          </div>       
        </div>        
      </div>
    )
  }