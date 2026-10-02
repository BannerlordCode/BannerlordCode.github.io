---
title: "LauncherBoolBrushWidget"
description: "LauncherBoolBrushWidget：TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets 的 public 类，继承 BrushWidget；公开成员 6 个（方法 1、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherBoolBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherBoolBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

LauncherBoolBrushWidget 位于 TaleWorlds.MountAndBlade.Launcher.Library 模块，源文件 TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 LauncherBoolBrushWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LauncherBoolBrushWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`，继承链 LauncherBoolBrushWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LauncherBoolBrushWidget` | `public LauncherBoolBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | 方法 |
| `BoolVariable` | `public bool BoolVariable` | 属性 |
| `TargetWidget` | `public BrushWidget TargetWidget` | 属性 |
| `OnTrueBrush` | `public Brush OnTrueBrush` | 属性 |
| `OnFalseBrush` | `public Brush OnFalseBrush` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../../gui/BrushWidget/)
- [同命名空间 LauncherCircleLoadingAnimWidget](../LauncherCircleLoadingAnimWidget/)
- [同命名空间 LauncherDragWindowAreaWidget](../LauncherDragWindowAreaWidget/)
- [同命名空间 LauncherHintTriggerWidget](../LauncherHintTriggerWidget/)
- [同命名空间 LauncherHintWidget](../LauncherHintWidget/)
