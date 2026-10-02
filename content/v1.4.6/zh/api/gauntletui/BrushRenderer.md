---
title: "BrushRenderer"
description: "BrushRenderer：TaleWorlds.GauntletUI 的 public 类；公开成员 14 个（方法 6、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs。"
---
# BrushRenderer

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushRenderer`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`

## 概述

BrushRenderer 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs。它是一个 public 类，继承链为 BrushRenderer。public/protected 成员共 14 个：6 方法、6 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushRenderer 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 BrushRenderer。成员构成以方法为主（方法 6/14，属性 6/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber` | 属性 |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement` | 属性 |
| `CurrentStyle` | `public Style CurrentStyle` | 属性 |
| `Brush` | `public Brush Brush` | 属性 |
| `CurrentState` | `public string CurrentState` | 属性 |
| `BrushRenderer` | `public BrushRenderer()` | 构造函数 |
| `Update` | `public void Update(ulong frameNumber, float globalAnimTime, float dt)` | 方法 |
| `IsUpdateNeeded` | `public bool IsUpdateNeeded()` | 方法 |
| `Render` | `public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))` | 方法 |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)` | 方法 |
| `RestartAnimation` | `public void RestartAnimation()` | 方法 |
| `SetSeed` | `public void SetSeed(int seed)` | 方法 |
| `BrushRendererAnimationState` | `public enum BrushRendererAnimationState` | 属性 |
| `BrushRendererAnimationState` | `public enum BrushRendererAnimationState` | 嵌套类型 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)
