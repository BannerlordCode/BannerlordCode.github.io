---
title: "GauntletBarberScreen"
description: "GauntletBarberScreen：SandBox.GauntletUI 的 public 类，继承 ScreenBase、IGameStateListener；公开成员 8 个（方法 6、属性 1、字段 0）。源文件 SandBox.GauntletUI/GauntletBarberScreen.cs。"
---
# GauntletBarberScreen

**Namespace:** `SandBox.GauntletUI`
**Module:** `SandBox.GauntletUI`
**Type:** `public class GauntletBarberScreen : ScreenBase, IGameStateListener, IFaceGeneratorScreen`
**File:** `SandBox.GauntletUI/GauntletBarberScreen.cs`

## 概述

GauntletBarberScreen 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/GauntletBarberScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IGameStateListener、IFaceGeneratorScreen，继承链为 GauntletBarberScreen → ScreenBase。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletBarberScreen 是 SandBox.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 GauntletBarberScreen → ScreenBase。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/GauntletBarberScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Handler` | `public IFaceGeneratorHandler Handler` | 属性 |
| `GauntletBarberScreen` | `public GauntletBarberScreen(BarberState state)` | 构造函数 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnExit` | `public void OnExit()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |

## 参见

- [↑ sandbox-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletCharacterDeveloperScreen](../GauntletCharacterDeveloperScreen)
- [同命名空间 GauntletClanScreen](../GauntletClanScreen)
- [同命名空间 GauntletCraftingScreen](../GauntletCraftingScreen)
- [同命名空间 GauntletEducationScreen](../GauntletEducationScreen)
