---
title: "SandBoxViewSubModule"
description: "SandBoxViewSubModule：SandBox.View 的 public 类，继承 MBSubModuleBase；公开成员 13 个（方法 10、属性 3、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/SandBoxViewSubModule.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxViewSubModule

**Namespace:** `SandBox.View`
**Module:** `SandBox.View`
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`
**File:** `SandBox.View/SandBoxViewSubModule.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxViewSubModule 位于 SandBox.View 模块，源文件 SandBox.View/SandBoxViewSubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 SandBoxViewSubModule → MBSubModuleBase。public/protected 成员共 13 个：10 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxViewSubModule 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View`，继承链 SandBoxViewSubModule → MBSubModuleBase。成员构成以方法为主（方法 10/13，属性 3/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/SandBoxViewSubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxViewVisualManager` | `public static SandBoxViewVisualManager SandBoxViewVisualManager` | 属性 |
| `ConversationViewManager` | `public static ConversationViewManager ConversationViewManager` | 属性 |
| `MapConversationDataProvider` | `public static IMapConversationDataProvider MapConversationDataProvider` | 属性 |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | 方法 |
| `OnSubModuleUnloaded` | `protected override void OnSubModuleUnloaded()` | 方法 |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | 方法 |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | 方法 |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` | 方法 |
| `OnAfterGameInitializationFinished` | `public override void OnAfterGameInitializationFinished(Game game, object starterObject)` | 方法 |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | 方法 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 方法 |
| `OnInitialState` | `public override void OnInitialState()` | 方法 |
| `SetMapConversationDataProvider` | `public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBSubModuleBase](../../core/MBSubModuleBase/)
- [同命名空间 CampaignMusicHandler](../CampaignMusicHandler/)
- [同命名空间 IChangeableScreen](../IChangeableScreen/)
- [同命名空间 MainHeroSaveVisualSupplier](../MainHeroSaveVisualSupplier/)
- [同命名空间 PreloadScreen](../PreloadScreen/)
