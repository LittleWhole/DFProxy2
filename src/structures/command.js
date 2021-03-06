class Command {
  constructor (dfproxy, options) {
    this.dfproxy = dfproxy;

    this.name = options.name || 'unset';
    this.description = options.description || 'No description provided.';
    this.usage = options.usage || '';
  }

  chat (text) {
    if (!this.dfproxy.client) return;
    this.dfproxy.client.write('chat', { message: `{"extra":[{"text":"${text}"}],"text":""}`, position: 1 });
  }

  announce (text) {
    if (!this.dfproxy.client) return;
    this.dfproxy.client.write('title', { action: 0, text: '{"extra":[{"color":"gray","text":"["},{"color":"green","text":"DFProxy"},{"color":"gray","text":"]"}],"text":""}' });
    this.dfproxy.client.write('title', { action: 1, text: `{"extra":[{"color":"aqua","text":"${text}"}],"text":""}` });
  }
}

module.exports = Command;
