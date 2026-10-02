---
title: "StateSyncWidget"
description: "StateSyncWidget：TaleWorlds.GauntletUI.ExtraWidgets 的 public 类，继承 BrushWidget；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StateSyncWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class StateSyncWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

StateSyncWidget 位于 TaleWorlds.GauntletUI.ExtraWidgets 模块，源文件 TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 StateSyncWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StateSyncWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI.ExtraWidgets`，继承链 StateSyncWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StateSyncWidget` | `public StateSyncWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `SourceWidget` | `public Widget SourceWidget` | 属性 |
| `TargetWidget` | `public Widget TargetWidget` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 BrushWidget](../BrushWidget/)
- [同命名空间 AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [同命名空间 CustomWidgetManager](../CustomWidgetManager/)
- [同命名空间 DelayedStateChanger](../DelayedStateChanger/)
- [同命名空间 DialogButtonsParentWidget](../DialogButtonsParentWidget/)
