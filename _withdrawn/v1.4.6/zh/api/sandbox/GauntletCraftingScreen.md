---
title: "GauntletCraftingScreen"
description: "GauntletCraftingScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、ICraftingStateHandler；公开成员 7 个（方法 6、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/GauntletCraftingScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletCraftingScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletCraftingScreen : ScreenBase, ICraftingStateHandler, IGameStateListener`
**File:** `SandBox.GauntletUI/GauntletCraftingScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletCraftingScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/GauntletCraftingScreen.cs。它是一个 public 类，实现/继承 ScreenBase、ICraftingStateHandler、IGameStateListener，继承链为 GauntletCraftingScreen → ScreenBase。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletCraftingScreen 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI`，继承链 GauntletCraftingScreen → ScreenBase。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/GauntletCraftingScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletCraftingScreen` | `public GauntletCraftingScreen(CraftingState craftingState)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnCraftingLogicInitialized` | `public void OnCraftingLogicInitialized()` | 方法 |
| `OnCraftingLogicRefreshed` | `public void OnCraftingLogicRefreshed()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 ICraftingStateHandler](../../campaign/ICraftingStateHandler/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen/)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen/)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen/)
- [同命名空间 GauntletEducationScreen](../GauntletEducationScreen/)
