// import styles from './modules.css'

const styles = {
    bold : {
        fontWeight : "bold"
      },
    code :{
      fontFamily : 'monospace',
      backgroundColor: 'rgb(242, 242, 242)',
      padding : '2px 4px',
      borderRadius : '2px',
    },
    italic :{
      fontStyle : 'italic'
    },
    strikethrough: {
      textDecoration : 'line-through'
    },
    underline :{
      textDecoration : 'underline'
    }
}

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;


    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};
export default Text;