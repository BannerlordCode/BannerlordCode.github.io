---
title: "IBrushAnimationState"
description: "IBrushAnimationState：TaleWorlds.GauntletUI 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs。"
---
# IBrushAnimationState

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IBrushAnimationState`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs`

## 概述

IBrushAnimationState 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs。它是一个 public 接口，继承链为 IBrushAnimationState。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IBrushAnimationState 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 IBrushAnimationState。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillFrom` | `void FillFrom(IDataSource source);` | 方法 |
| `LerpFrom` | `void LerpFrom(IBrushAnimationState start, IDataSource end, float ratio);` | 方法 |
| `GetValueAsFloat` | `float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |
| `GetValueAsColor` | `Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |
| `GetValueAsSprite` | `Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |
| `SetValueAsFloat` | `void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value);` | 方法 |
| `SetValueAsColor` | `void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value);` | 方法 |
| `SetValueAsSprite` | `void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value);` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
