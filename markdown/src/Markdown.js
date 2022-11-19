import './Markdown.css';
import React from 'react';
import { marked } from 'marked';

const initial = `
# Hi, I'm Dory!
## Let's go!
	
[Dory Song](https://www.youtube.com/watch?v=xYuczKmkhPU)
	
> Hi, I'm Dory. Let's go!
	
This is inline code \`let Dory = true;\`
	
\`\`\`js 
// this is multi-line code
function findingDory(Dory) {
	if (Dory === found) {
		return rejoice;
	}
	else {
		return findingSequence;
	}
}
\`\`\`

- Dory.
  - Nemo.
     - Orange and blue fish.

**Do you like Dory?**

![Dory](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ccfd2fb-a249-41fa-9698-717068b31cb5/da8asyh-7407a19e-4a60-4cc6-9c39-0b9f35863047.jpg/v1/fill/w_600,h_777,q_75,strp/baby_dory__by_lilliemuyskens_da8asyh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjY2ZkMmZiLWEyNDktNDFmYS05Njk4LTcxNzA2OGIzMWNiNVwvZGE4YXN5aC03NDA3YTE5ZS00YTYwLTRjYzYtOWMzOS0wYjlmMzU4NjMwNDcuanBnIiwiaGVpZ2h0IjoiPD03NzciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzNjY2ZkMmZiLWEyNDktNDFmYS05Njk4LTcxNzA2OGIzMWNiNVwvbGlsbGllbXV5c2tlbnMtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.RmWXA7AH8OL1QJIThbD9jpdMj2Uz4ZbUTAmgrwGiW5Q)

`;

class Markdown extends React.Component {
	state = {
		markdown: initial
	}
	
	handleChange = (e) => {
		this.setState({
			markdown: e.target.value
		});
		console.log(e.target.value);
	}
	
	render() {
		const { markdown } = this.state;
		const result = marked.parse(markdown, {breaks:true});
		return(
			<div>
				<h3 className="text-center m-2">Markdown Previewer</h3>
				<div className="row my-4 justify-content-center">
					<div className="col-5 m-2">
						<textarea className="form-control shadow-sm" id="editor" rows="13" defaultValue={markdown} onInput={this.handleChange}/>
					</div>
					
					<div className="col-5 card shadow-sm m-2 p-2" id="preview" dangerouslySetInnerHTML={{ __html: result}}/>
				</div>
			</div>
		);
	}
}
export default Markdown;