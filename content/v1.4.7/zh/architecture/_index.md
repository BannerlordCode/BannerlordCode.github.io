---
title: "Bannerlord v1.4.7 架构总览"
description: "v1.4.7 文档的架构入口：程序集分层、模块加载、存档栈、界面栈与版本差异，共 5 页。回答大局观问题的那一层。"
---
# Bannerlord v1.4.7 架构总览

这一节回答"大局观"问题：**v1.4.7 的代码是怎么分层的、模组从哪个程序集引用什么、哪些层之间不能互相调用。**

这一节一共 **5 页**，全部有内容。想直接查某个类，去 [API 参考](../api/)；想知道这一版和上一版差在哪，去 [版本差异](./version-delta)。API 类页的缺口在这一节里是可见的 —— 五张图能让你建立正确的分层直觉，但具体某个类型有没有页面由各桶的索引页回答。

## 五张图，按这个顺序读

| 页面 | 回答什么问题 | 读完你应该能 |
| --- | --- | --- |
| [SDK 总览](./sdk-overview) | 程序集怎么分层，我该引用哪一个 | 说出 `TaleWorlds.Core` / `MountAndBlade` / `CampaignSystem` 各自负责什么 |
| [模块系统](./module-system) | `Module` 和 `MBSubModuleBase` 是怎么被加载和回调的 | 写出自己的 `SubModule` 类并挂到正确的生命周期回调上 |
| [存档系统](./save-system) | 自己的字段怎么进存档、怎么在读档时回来 | 用 `SaveableTypeDefiner` 与 `SaveManager` 把自定义数据持久化 |
| [界面栈](./ui-stack) | `ScreenBase` / `ScreenLayer` / `GauntletLayer` / `ViewModel` 四层怎么叠 | 推一个自定义界面出来并接上属性通知 |
| [版本差异](./version-delta) | 1.4.7 相比 1.4.5、1.3.15 到底变了什么 | 判断自己的模组要不要改、能不能直接升级 |

这五页是整棵树里最完整的部分：架构性的知识没有跟着那批生成的类页一起撤走，所以从这里入手不会被缺口挡住。

## 心智模型：五层，不要跨层写

```text
┌─ sandbox ──────────────── 具体玩法内容（可换、可关）
├─ campaign / campaign-ext ── 战役世界状态与规则（持久，随存档）
├─ mission / mission-ext ──── 战斗场景状态（临时，不进存档）
├─ gui / viewmodel ────────── 界面与绑定（临时）
└─ core / core-extra ──────── 基础设施：加载、事件、集合、平台
```

三条经验规则，比记住任何一张类表都管用：

1. **状态属于某一层，事件属于同一层。** 想改战役数据，走 `CampaignEvents` → `*Action.Apply`；
   想改战斗内状态，走 `Mission` 上的事件。不要在战斗行为里直接写 `Hero` 的字段。
2. **基础层不知道业务层。** `TaleWorlds.Core` 里没有任何 `Hero` 引用。方向永远是
   campaign → core，不是反过来。
3. **能注册就不要继承。** 游戏把绝大多数扩展点做成注册（`CampaignGameStarter.AddBehavior`、
   `ScreenManager.AddGlobalLayer`），继承整类只在框架明确留了虚方法时才用。

## 从哪里开始

| 我想做的事 | 先读 | 再读 |
| --- | --- | --- |
| 让模组被加载 | [模块系统](./module-system) | [Core](../api/core/) |
| 在战役里挂行为 | [模块系统](./module-system) | [Campaign-Ext](../api/campaign-ext/) |
| 做界面 | [界面栈](./ui-stack) | [GUI](../api/gui/) |
| 存自己的数据 | [存档系统](./save-system) | [Save System](../api/save-system/) |
| 用调试控制台 | [SDK 总览](./sdk-overview) | [Engine](../api/engine/) |
| 排查"升级后炸了" | [版本差异](./version-delta) | [跨版本类对比](../../../versions/) |
| 查某个类型有没有页面 | [缺口清单](../../GAPS) | [API 参考](../api/) |

## 参见

- ↑ [语言首页](../)
- ↔ [API 参考](../api/)
- ↘ [缺口清单](../../GAPS)
- ↗ [跨版本类对比](../../../versions/)
- ↘ [v1.4.5 架构](../../../v1.4.5/zh/architecture/) · [v1.3.15 架构](../../../v1.3.15/zh/architecture/)