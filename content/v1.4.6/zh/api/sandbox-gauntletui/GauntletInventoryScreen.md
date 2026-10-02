---
title: "GauntletInventoryScreen"
description: "GauntletInventoryScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、IInventoryStateHandler；公开成员 19 个（方法 17、属性 1、字段 0）。源文件 SandBox.GauntletUI/GauntletInventoryScreen.cs。"
---
# GauntletInventoryScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletInventoryScreen : ScreenBase, IInventoryStateHandler, IGameStateListener, IChangeableScreen`
**File:** `SandBox.GauntletUI/GauntletInventoryScreen.cs`

## 概述

GauntletInventoryScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/GauntletInventoryScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IInventoryStateHandler、IGameStateListener、IChangeableScreen，继承链为 GauntletInventoryScreen → ScreenBase。public/protected 成员共 19 个：17 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletInventoryScreen 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletInventoryScreen → ScreenBase。成员构成以方法为主（方法 17/19，属性 1/19），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/GauntletInventoryScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `InventoryState` | `public InventoryState InventoryState` | 属性 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `GauntletInventoryScreen` | `public GauntletInventoryScreen(InventoryState inventoryState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnReady` | `protected override void OnReady()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `ExecuteLootingScript` | `public void ExecuteLootingScript()` | 方法 |
| `ExecuteSellAllLoot` | `public void ExecuteSellAllLoot()` | 方法 |
| `ExecuteCancel` | `public void ExecuteCancel()` | 方法 |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | 方法 |
| `ExecuteSwitchToPreviousTab` | `public void ExecuteSwitchToPreviousTab()` | 方法 |
| `ExecuteSwitchToNextTab` | `public void ExecuteSwitchToNextTab()` | 方法 |
| `ExecuteBuySingle` | `public void ExecuteBuySingle()` | 方法 |
| `ExecuteSellSingle` | `public void ExecuteSellSingle()` | 方法 |
| `ExecuteTakeAll` | `public void ExecuteTakeAll()` | 方法 |
| `ExecuteGiveAll` | `public void ExecuteGiveAll()` | 方法 |
| `ExecuteBuyConsumableItem` | `public void ExecuteBuyConsumableItem()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen)
