---
title: "Core 核心 — 只放入口类"
description: "模块加载的 2 个入口类 MBSubModuleBase 与 Module 所在的目录。目前 2 页。"
---
# Core 核心 — 只放入口类

这个目录**只有 2 个类**，而且不是按命名空间挑的，是按名字挑的：`MBSubModuleBase` 和 `Module`。模组继承 `MBSubModuleBase`，游戏把它加载起来；`Module` 是宿主，sealed 单例，不该被继承。

之所以单独开一个桶，是因为"我要让模组被加载"这件事应该点到就到。它紧挨着 [core-extra](../core-extra/)（兜底桶），但两件事不是一回事：这里管启动，那里管你随后要建东西的运行时。

`Game` 在 1.4.5 的文档树里同时出现在 `core/` 和 `core-extra/`。v1.4.7 按命名空间只保留 `core-extra/` 一份，因为 `Game` 的命名空间是 `TaleWorlds.Core`。本目录没有 `Game`。

## 本区页面（2）

| 页面 | 讲的是什么 |
| --- | --- |
| [MBSubModuleBase](./MBSubModuleBase) | 模组被加载时继承的那个抽象类，回调都在这上面 |
| [Module](./Module) | 宿主：持有 submodule 列表并决定模块的加载顺序 |

这 2 页覆盖了桶里的全部内容。英文树里目前只有 `MBSubModuleBase` 一页。

## 尚未收录

按规则这里没有缺的东西：这个桶就定义为那 2 个入口类，两页都在。缺的是把两者串起来的那一页 —— `Module` 怎么找到你的 `MBSubModuleBase`、按什么顺序回调。那件事在 [模块系统](../../architecture/module-system)。

## 相邻目录

[core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)