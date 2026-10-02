---
title: "Brush"
description: "Brush：TaleWorlds.GauntletUI 的 public 类；公开成员 48 个（方法 14、属性 33、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Brush

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Brush`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

Brush 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs。它是一个 public 类，继承链为 Brush。public/protected 成员共 48 个：14 方法、33 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Brush 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 Brush。成员构成以属性为主（属性 33/48，方法 14/48），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClonedFrom` | `public Brush ClonedFrom` | 属性 |
| `OverriddenBrush` | `public Brush OverriddenBrush` | 属性 |
| `Name` | `public string Name` | 属性 |
| `TransitionDuration` | `public float TransitionDuration` | 属性 |
| `DefaultStyle` | `public Style DefaultStyle` | 属性 |
| `Font` | `public Font Font` | 属性 |
| `FontStyle` | `public FontStyle FontStyle` | 属性 |
| `FontSize` | `public int FontSize` | 属性 |
| `TextHorizontalAlignment` | `public TextHorizontalAlignment TextHorizontalAlignment` | 属性 |
| `TextVerticalAlignment` | `public TextVerticalAlignment TextVerticalAlignment` | 属性 |
| `GlobalColorFactor` | `public float GlobalColorFactor` | 属性 |
| `GlobalAlphaFactor` | `public float GlobalAlphaFactor` | 属性 |
| `GlobalColor` | `public Color GlobalColor` | 属性 |
| `SoundProperties` | `public SoundProperties SoundProperties` | 属性 |
| `Sprite` | `public Sprite Sprite` | 属性 |
| `VerticalFlip` | `public bool VerticalFlip` | 属性 |
| `HorizontalFlip` | `public bool HorizontalFlip` | 属性 |
| `Color` | `public Color Color` | 属性 |
| `ColorFactor` | `public float ColorFactor` | 属性 |
| `AlphaFactor` | `public float AlphaFactor` | 属性 |
| `HueFactor` | `public float HueFactor` | 属性 |
| `SaturationFactor` | `public float SaturationFactor` | 属性 |
| `ValueFactor` | `public float ValueFactor` | 属性 |
| `FontColor` | `public Color FontColor` | 属性 |
| `TextColorFactor` | `public float TextColorFactor` | 属性 |
| `TextAlphaFactor` | `public float TextAlphaFactor` | 属性 |
| `TextHueFactor` | `public float TextHueFactor` | 属性 |
| `TextSaturationFactor` | `public float TextSaturationFactor` | 属性 |
| `TextValueFactor` | `public float TextValueFactor` | 属性 |
| `Layers` | `public Dictionary<string, BrushLayer>.ValueCollection Layers` | 属性 |
| `DefaultStyleLayer` | `public StyleLayer DefaultStyleLayer` | 属性 |
| `DefaultLayer` | `public BrushLayer DefaultLayer` | 属性 |
| `Brush` | `public Brush()` | 构造函数 |
| `GetStyle` | `public Style GetStyle(string name)` | 方法 |
| `Styles` | `public Dictionary<string, Style>.ValueCollection Styles` | 属性 |
| `GetStyleOrDefault` | `public Style GetStyleOrDefault(string name)` | 方法 |
| `AddStyle` | `public void AddStyle(Style style)` | 方法 |
| `RemoveStyle` | `public void RemoveStyle(string styleName)` | 方法 |
| `AddLayer` | `public void AddLayer(BrushLayer layer)` | 方法 |
| `RemoveLayer` | `public void RemoveLayer(string layerName)` | 方法 |
| `GetLayer` | `public BrushLayer GetLayer(string name)` | 方法 |
| `FillFrom` | `public void FillFrom(Brush brush)` | 方法 |
| `Clone` | `public Brush Clone()` | 方法 |
| `AddAnimation` | `public void AddAnimation(BrushAnimation animation)` | 方法 |
| `GetAnimation` | `public BrushAnimation GetAnimation(string name)` | 方法 |
| `IEnumerable` | `public IEnumerable<BrushAnimation>GetAnimations()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `IsCloneRelated` | `public bool IsCloneRelated(Brush brush)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
