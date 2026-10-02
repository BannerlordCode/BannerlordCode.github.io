---
title: "GauntletBodyGeneratorScreen"
description: "GauntletBodyGeneratorScreen：TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator 的 public 类，继承 ScreenBase、IFaceGeneratorScreen；公开成员 8 个（方法 6、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletBodyGeneratorScreen

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class GauntletBodyGeneratorScreen : ScreenBase, IFaceGeneratorScreen`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GauntletBodyGeneratorScreen 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs。它是一个 public 类，实现/继承 ScreenBase、IFaceGeneratorScreen，继承链为 GauntletBodyGeneratorScreen → ScreenBase。public/protected 成员共 8 个：6 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GauntletBodyGeneratorScreen 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`，继承链 GauntletBodyGeneratorScreen → ScreenBase。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/GauntletBodyGeneratorScreen.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScreenBase](../../gui/ScreenBase/)
- [基类/接口 IFaceGeneratorScreen](../IFaceGeneratorScreen/)
- [同命名空间 BodyGeneratorView](../BodyGeneratorView/)
