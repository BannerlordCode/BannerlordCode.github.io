---
title: "Modulemanager — ModuleManager：模块元数据"
description: "TaleWorlds.ModuleManager 所在的目录，读模块清单用的 8 个类型，目前一个页面都没有。"
---
# Modulemanager — ModuleManager：模块元数据

这个桶装命名空间 `TaleWorlds.ModuleManager`，1.4.7 源码树里 8 个类型。它的职责很窄但很清楚：**读**模块清单 —— 某个模块加载了没有、被谁依赖、版本号是多少、属于哪一类。

要**加入**一个模块不在这儿，去 [core](../core/) 看 `Module` 与 `MBSubModuleBase`，再读 [模块系统](../../architecture/module-system)。这个桶只回答"已加载的模块有哪些、什么关系"。

有一件事值得单说，免得你在这里找半天：**任何版本里都不存在名为 `ModuleManager` 的类型**（已对 1.4.5 / 1.4.6 / 1.4.7 / 1.5.3 全量扫描确认）。目录名沿用了模块名，但 `ModuleManager.md` 这个页面在这个版本里不存在。

## 本区页面（0）

本目录收录 `TaleWorlds.ModuleManager` 的全部类型，约 8 个。**本区当前没有页面**（撰写进度：0/8）。

## 尚未收录

8 个类型全部没有页面：`ModuleInfo`（一个模块的元数据）、`SubModuleInfo`（一个子模块的元数据）、`ModuleCategory`（原生 / 官方 / 社区一类的分类）、`ModuleType`、`SubModuleTags`（标签位）、`DependedModule`（依赖声明）、`IPlatformModuleExtension`（平台侧扩展点）、`Extensions` 与 `ModuleHelper`（工具类）。

`ModuleInfo` 和 `SubModuleInfo` 是这套机制的核心数据结构，其余六个都是围绕它们的辅助。因为总数只有 8，这个桶缺的量很小 —— 但缺的部分正好是判断"我的模组为什么没被加载"时最想看的那两个类。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [custombattle](../custombattle/) · [sandbox](../sandbox/) · [system](../system/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [模块系统](../../architecture/module-system)