import * as path from 'path'
import * as fse from 'fs-extra'
// tslint:disable-next-line
const junk = require('junk')
import Model from './model'
import { ITheme } from './interfaces/theme'

export default class Theme extends Model {
  themeDir: string
  themeList: string[]

  constructor(appInstance: any) {
    super(appInstance)
    this.themeDir = path.join(this.appDir, 'themes')
    this.themeList = []
  }

  /**
   * 获取主题列表
   */
  async getThemeList() {
    let themes = await fse.readdir(this.themeDir)
    themes = themes.filter(junk.not)
    return themes
  }

  /**
   * 选择主题
   */
  async getThemeConfig() {
    const themeConfig = await this.$theme.get('config').value()
    return themeConfig
  }

  /**
   * 保存主题配置
   */
  public async saveThemeConfig(themeConfig: ITheme) {
    await this.$theme.set('config', themeConfig).write()
    return themeConfig
  }

}
