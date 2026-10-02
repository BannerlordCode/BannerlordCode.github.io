---
title: "GauntletCharacterDeveloperScreen"
description: "GauntletCharacterDeveloperScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 3 个（方法 2、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletCharacterDeveloperScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletCharacterDeveloperScreen : ScreenBase, IGameStateListener, IChangeableScreen, ICharacterDeveloperStateHandler`
**File:** `SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

GauntletCharacterDeveloperScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener、IChangeableScreen、ICharacterDeveloperStateHandler，继承链为 GauntletCharacterDeveloperScreen → ScreenBase。public/protected 成员共 3 个：2 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletCharacterDeveloperScreen 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI`，继承链 GauntletCharacterDeveloperScreen → ScreenBase。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/GauntletCharacterDeveloperScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GauntletCharacterDeveloperScreen` | `public GauntletCharacterDeveloperScreen(CharacterDeveloperState clanState)` | 构造函数 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IGameStateListener](../../core-extra/IGameStateListener/)
- [基类/接口 IChangeableScreen](../IChangeableScreen/)
- [同命名空间 GauntletBarberScreen](../GauntletBarberScreen/)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen/)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen/)
- [同命名空间 GauntletEducationScreen](../GauntletEducationScreen/)
