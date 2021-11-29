// hooks
import UseTheme from '../../hooks/UseTheme'
// styles
import './ThemeSelector.css'
// svg
import Icon from '../../assets/themeSwitch.svg'
const colors = ['#58249c', '#249c6b', '#b70233']
export default function ThemeSelector() {
    const { theme, changeTheme, changeColor} =  UseTheme();
    function handleThemeSwitch(){
        changeTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <div className="theme-selector">
            <div className="theme-toggle">
                <img style={{filter: theme === 'dark' ? 'invert(100%)' : 'invert(20%)'}} onClick={() => handleThemeSwitch()} src={Icon} alt="Theme Switch" title="Switch for theme" />
            </div>
            <div className="theme-buttons">
                {colors.map((color) => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{backgroundColor:color}}
                    />
                ))}
            </div>
            
        </div>
    )
}
