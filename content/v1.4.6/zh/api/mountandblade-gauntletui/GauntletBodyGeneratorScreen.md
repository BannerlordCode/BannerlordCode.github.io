---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 ScreenBase、IFaceGeneratorScreen；公开成员 8 个（方法 6、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs。"
---
# GauntletBodyGeneratorScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs`

## 概述

GauntletBodyGeneratorScreen 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IFaceGeneratorScreen，继承链为 GauntletBodyGeneratorScreen → ScreenBase。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletBodyGeneratorScreen 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator），继承链 GauntletBodyGeneratorScreen → ScreenBase。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。继承链上的 ScreenBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Handler` | `public IFaceGeneratorHandler Handler` | 属性 |
| `GauntletBodyGeneratorScreen` | `public GauntletBodyGeneratorScreen(BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter)` | 构造函数 |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | 方法 |
| `OnExit` | `public void OnExit()` | 方法 |
| `OnInitialize` | `protected override void OnInitialize()` | 方法 |
| `OnFinalize` | `protected override void OnFinalize()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BodyGeneratorView](../BodyGeneratorView)
