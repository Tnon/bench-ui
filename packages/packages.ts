/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2022-03-23 10:39:47
 * @LastEditTime: 2022-03-23 11:08:59
 */
import { App } from 'vue';
import { bcButton } from './button';
function install(app: App) {
  const packages = [bcButton];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}
export { install };
