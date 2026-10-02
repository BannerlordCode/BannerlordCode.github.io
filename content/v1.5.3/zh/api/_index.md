---
title: "API 参考 — v1.5.3"
description: "Bannerlord v1.5.3 API 参考入口：按子系统目录进入类型页，目录划分来自 tools/_dir-map-canonical.json 的权威命名空间映射。"
---
<!-- BEGIN API INDEX -->
# API 参考：v1.5.3

本树由 `tools/_v153_inventory.mjs` 扫描 `bannerlord-1.5.3` 反编译源码生成清单，再由 `tools/_v153_stubs.mjs` 落盘页面。类型页中的 `Type:` 声明行与成员签名均照抄源码（已剥离 ILSpy 的 Token/RVA 注释）；页面正文目前是自动生成占位，后续波次会替换为手写深写。

## 目录命名规则

- 目录名（小写 slug）由权威表 `tools/_dir-map-canonical.json` 决定：先查 `entryPointDirs`（按类型名小写匹配的门面类），再按**最长命名空间前缀**匹配，最后落到 `defaultDir: core-extra`。
- 一个类型只对应一个页面路径，不重复落盘。桶内跨命名空间同名时按 `<命名空间末段>__<类型名>` 命名，约定写在各目录索引页。
- 页面若已存在（深写波次产物）则原样保留，生成器只补缺失文件。

## 子目录

| 目录 | 类型页数 | 说明 |
| --- | --- | --- |
| [achievementsystem](./achievementsystem/) | 4 | TaleWorlds.AchievementSystem 成就系统类参考目录 |
| [activitysystem](./activitysystem/) | 6 | TaleWorlds.ActivitySystem 活动系统类参考目录 |
| [campaign](./campaign/) | 706 | TaleWorlds.CampaignSystem 根命名空间的战役世界状态层类参考目录 |
| [campaign-ext](./campaign-ext/) | 772 | TaleWorlds.ObjectSystem 与 TaleWorlds.CampaignSystem 行为/组件子域的类参考目录 |
| [core](./core/) | 2 | 模块加载入口（MBSubModuleBase / Module / ModuleManager）类参考目录 |
| [core-extra](./core-extra/) | 516 | TaleWorlds.Core / Library / DotNet / Starter 运行时基础类型类参考目录 |
| [custombattle](./custombattle/) | 40 | TaleWorlds.MountAndBlade.CustomBattle 自定义战斗类参考目录 |
| [engine](./engine/) | 216 | TaleWorlds.Engine 引擎层类参考目录 |
| [gui](./gui/) | 273 | TaleWorlds.ScreenSystem / GauntletUI / TwoDimension 界面层类参考目录 |
| [localization](./localization/) | 21 | TaleWorlds.Localization 本地化类参考目录 |
| [mission](./mission/) | 5 | 战斗场景门面类型（Mission / Agent / Formation）类参考目录 |
| [mission-ext](./mission-ext/) | 2065 | TaleWorlds.MountAndBlade / TaleWorlds.Mission 战斗扩展类参考目录 |
| [modulemanager](./modulemanager/) | 9 | TaleWorlds.ModuleManager 模块管理类参考目录 |
| [network](./network/) | 32 | TaleWorlds.Network 网络层类参考目录 |
| [sandbox](./sandbox/) | 1247 | SandBox 沙盒模块类参考目录 |
| [save-system](./save-system/) | 56 | TaleWorlds.SaveSystem 存档系统类参考目录 |
| [storymode](./storymode/) | 183 | StoryMode 故事模式模块类参考目录 |
| [system](./system/) | 19 | TaleWorlds.InputSystem / TaleWorlds.System 系统层类参考目录 |
| [viewmodel](./viewmodel/) | 653 | ViewModelCollection 视图模型类参考目录 |

## 参见

- ↑ [版本首页](../)
