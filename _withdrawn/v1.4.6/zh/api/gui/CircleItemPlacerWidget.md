---
title: "CircleItemPlacerWidget"
description: "CircleItemPlacerWidget：TaleWorlds.GauntletUI 的 public 类，继承 Widget；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CircleItemPlacerWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class CircleItemPlacerWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

CircleItemPlacerWidget 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CircleItemPlacerWidget → Widget → PropertyOwnerObject。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CircleItemPlacerWidget 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 CircleItemPlacerWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier` | 属性 |
| `DirectionWidget` | `public Widget DirectionWidget` | 属性 |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier` | 属性 |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController` | 属性 |
| `CircleItemPlacerWidget` | `public CircleItemPlacerWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `AnimateDistanceFromCenterTo` | `public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
