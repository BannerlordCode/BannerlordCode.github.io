---
title: "BrushAnimation"
description: "BrushAnimation：TaleWorlds.GauntletUI 的 public 类；公开成员 12 个（方法 5、属性 6、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushAnimation

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushAnimation`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

BrushAnimation 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs。它是一个 public 类，继承链为 BrushAnimation。public/protected 成员共 12 个：5 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushAnimation 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 BrushAnimation。成员构成以属性为主（属性 6/12，方法 5/12），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Duration` | `public float Duration` | 属性 |
| `Loop` | `public bool Loop` | 属性 |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType` | 属性 |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction` | 属性 |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation` | 属性 |
| `BrushAnimation` | `public BrushAnimation()` | 构造函数 |
| `AddAnimationProperty` | `public void AddAnimationProperty(BrushAnimationProperty property)` | 方法 |
| `RemoveAnimationProperty` | `public void RemoveAnimationProperty(BrushAnimationProperty property)` | 方法 |
| `FillFrom` | `public void FillFrom(BrushAnimation animation)` | 方法 |
| `GetLayerAnimation` | `public BrushLayerAnimation GetLayerAnimation(string name)` | 方法 |
| `IEnumerable` | `public IEnumerable<BrushLayerAnimation>GetLayerAnimations()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
