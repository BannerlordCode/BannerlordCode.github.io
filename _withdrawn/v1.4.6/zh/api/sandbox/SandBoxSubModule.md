---
title: "SandBoxSubModule"
description: "SandBoxSubModule：SandBox 的 public 类，继承 MBSubModuleBase；公开成员 10 个（方法 10、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/SandBoxSubModule.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxSubModule

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxSubModule : MBSubModuleBase`
**File:** `SandBox/SandBoxSubModule.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxSubModule 位于 SandBox 模块，源文件 SandBox/SandBoxSubModule.cs。它是一个 public 类，实现/继承 MBSubModuleBase，继承链为 SandBoxSubModule → MBSubModuleBase。public/protected 成员共 10 个：10 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxSubModule 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 SandBoxSubModule → MBSubModuleBase。成员构成以方法为主（方法 10/10，属性 0/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/SandBoxSubModule.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | 方法 |
| `InitializeGameStarter` | `protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)` | 方法 |
| `OnCampaignStart` | `public override void OnCampaignStart(Game game, object starterObject)` | 方法 |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | 方法 |
| `RegisterSubModuleObjects` | `public override void RegisterSubModuleObjects(bool isSavedCampaign)` | 方法 |
| `AfterRegisterSubModuleObjects` | `public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 方法 |
| `OnGameLoaded` | `public override void OnGameLoaded(Game game, object starterObject)` | 方法 |
| `OnBeforeInitialModuleScreenSetAsRoot` | `protected override void OnBeforeInitialModuleScreenSetAsRoot()` | 方法 |
| `OnConfigChanged` | `public override void OnConfigChanged()` | 方法 |
| `OnNewModuleLoad` | `protected override void OnNewModuleLoad()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBSubModuleBase](../../core/MBSubModuleBase/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
