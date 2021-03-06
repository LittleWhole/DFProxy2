class PacketEvent {
      /**
             * Spammy :)
             * @type {Spammy}
             */
  constructor (dfproxy, options) {
    this.dfproxy = dfproxy;

    this.name = options.name; // Packet name
    this.canceled = false;
  }

  chat (text) {
    if (!this.dfproxy.client) return;
    this.dfproxy.client.write('chat', { message: `{"extra":[{"text":"${text}"}],"text":""}`, position: 1 });
  }

  cancelPacket () {
    this.canceled = true;
  }
}

// Export the command class
module.exports = PacketEvent;
