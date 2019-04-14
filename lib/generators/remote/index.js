const chalk = require('chalk');
const BasicGenerator = require('../../BasicGenerator');

class AntDesignProGenerator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'repo',
        message: `What's the remote repo ? (such as umijs/ant-design-pro)`,
      },
      {
        name: 'name',
        message: `What's the project name?`,
      },
      {
        name: 'author',
        message: `What's your name?`,
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  async writing() {
    const { repo, path } = this.prompts;

    const gitArgs = [
      `clone`,
      `https://github.com/${repo}`,
      `--depth=1`,
      path,
    ];

    console.log(`${chalk.gray('>')} git ${gitArgs.join(' ')}`);

    await require('execa')(
      `git`,
      gitArgs,
    );
  }
}

module.exports = AntDesignProGenerator;
