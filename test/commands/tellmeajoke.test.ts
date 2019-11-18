import {expect, test} from '@oclif/test'

describe('tellmeajoke', () => {
  // Todo:: test cases
  test
    .stdout()
    .command(['tellmeajoke'])
    .it('runs hello', ctx => {
      expect(ctx.stdout).to.contain('hello world')
    })

  test
    .stdout()
    .command(['tellmeajoke', '--name', 'jeff'])
    .it('runs hello --name jeff', ctx => {
      expect(ctx.stdout).to.contain('hello jeff')
    })
})
