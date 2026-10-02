---
title: "ViewSubModule"
description: "ViewSubModule：TaleWorlds.MountAndBlade.View 的 public 类，继承 MBSubModuleBase；公开成员 16 个（方法 14、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ViewSubModule

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ViewSubModule : MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ViewSubModule 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 ViewSubModule → MBSubModuleBase。public/protected 成员共 16 个：14 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ViewSubModule 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 ViewSubModule → MBSubModuleBase。成员构成以方法为主（方法 14/16，属性 2/16），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Material>BannerTexturedMaterialCache` | `public static Dictionary<Tuple<Material, Banner>, Material>BannerTexturedMaterialCache` | 属性 |
| `GameStateScreenManager` | `public static GameStateScreenManager GameStateScreenManager` | 属性 |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | 方法 |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | 方法 |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | 方法 |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | 方法 |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | 方法 |
| `AfterAsyncTickTick` | `protected override void AfterAsyncTickTick(float dt)` | 方法 |
| `OnGameStart` | `protected override void OnGameStart(Game game, IGameStarter gameStarterObject)` | 方法 |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | 方法 |
| `OnMultiplayerGameStart` | `public override void OnMultiplayerGameStart(Game game, object starterObject)` | 方法 |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | 方法 |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | 方法 |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | 方法 |
| `DoLoading` | `public override bool DoLoading(Game game)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBSubModuleBase](../../core/MBSubModuleBase/)
- [同命名空间 AgentVisuals](../AgentVisuals/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisual](../BannerVisual/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
