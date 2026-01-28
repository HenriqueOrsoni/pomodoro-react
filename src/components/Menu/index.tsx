import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(e: React.MouseEvent) {
        e.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme;
        })
    }
    
    return <nav className={styles.menu}>
        <a className={styles.menuLink} href="" aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="" aria-label='Ver histórico' title='Ver Histórico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Alterar Tema do Site' title='Alterar Tema' onClick={handleThemeChange}>
            <SunIcon />
        </a>
    </nav>;
}