import {Command, flags} from '@oclif/command'
import {request} from 'https'

export default class Tellmeajoke extends Command {
  static description = 'would you like to list to a joke?'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Tellmeajoke)
    // Todo:: implementation another function
    this.log('api load .... ')

    request(
      {
        host: 'geek-jokes.sameerkumar.website',
        path: '/api',
        method: 'GET',
      },
      response => {
        // Todo:: implementation 30 time second
        if (response.statusMessage === 'OK')
          response.on('data', (result) => {
            this.log(`${result}`)
          })
        else
          this.log('the request not working or your device is offline')
      }
    ).end()

  }

}
