---
title: "BrushAnimationKeyFrame"
description: "BrushAnimationKeyFrame：TaleWorlds.GauntletUI 的 public 类；公开成员 13 个（方法 9、属性 3、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs。"
---
# BrushAnimationKeyFrame

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushAnimationKeyFrame`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs`

## 概述

BrushAnimationKeyFrame 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs。它是一个 public 类，继承链为 BrushAnimationKeyFrame。public/protected 成员共 13 个：9 方法、3 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushAnimationKeyFrame 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 BrushAnimationKeyFrame。成员构成以方法为主（方法 9/13，属性 3/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Time` | `public float Time` | 属性 |
| `Index` | `public int Index` | 属性 |
| `InitializeAsFloat` | `public void InitializeAsFloat(float time, float value)` | 方法 |
| `InitializeAsColor` | `public void InitializeAsColor(float time, Color value)` | 方法 |
| `InitializeAsSprite` | `public void InitializeAsSprite(float time, Sprite value)` | 方法 |
| `InitializeIndex` | `public void InitializeIndex(int index)` | 方法 |
| `GetValueAsFloat` | `public float GetValueAsFloat()` | 方法 |
| `GetValueAsColor` | `public Color GetValueAsColor()` | 方法 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite()` | 方法 |
| `GetValueAsObject` | `public object GetValueAsObject()` | 方法 |
| `Clone` | `public BrushAnimationKeyFrame Clone()` | 方法 |
| `ValueType` | `public enum ValueType` | 属性 |
| `ValueType` | `public enum ValueType` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
