---
title: "Style"
description: "Style：TaleWorlds.GauntletUI 的 public 类，继承 IDataSource；公开成员 37 个（方法 11、属性 25、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Style

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Style : IDataSource`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

Style 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs。它是一个 public 类，实现/继承 IDataSource，继承链为 Style → IDataSource。public/protected 成员共 37 个：11 方法、25 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Style 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 Style → IDataSource。成员构成以属性为主（属性 25/37，方法 11/37），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultStyle` | `public Style DefaultStyle` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Version` | `public long Version` | 属性 |
| `AnimationToPlayOnBegin` | `public string AnimationToPlayOnBegin` | 属性 |
| `LayerCount` | `public int LayerCount` | 属性 |
| `DefaultLayer` | `public StyleLayer DefaultLayer` | 属性 |
| `AnimationMode` | `public StyleAnimationMode AnimationMode` | 属性 |
| `FontColor` | `public Color FontColor` | 属性 |
| `TextGlowColor` | `public Color TextGlowColor` | 属性 |
| `TextOutlineColor` | `public Color TextOutlineColor` | 属性 |
| `TextOutlineAmount` | `public float TextOutlineAmount` | 属性 |
| `TextGlowRadius` | `public float TextGlowRadius` | 属性 |
| `TextBlur` | `public float TextBlur` | 属性 |
| `TextShadowOffset` | `public float TextShadowOffset` | 属性 |
| `TextShadowAngle` | `public float TextShadowAngle` | 属性 |
| `TextColorFactor` | `public float TextColorFactor` | 属性 |
| `TextAlphaFactor` | `public float TextAlphaFactor` | 属性 |
| `TextHueFactor` | `public float TextHueFactor` | 属性 |
| `TextSaturationFactor` | `public float TextSaturationFactor` | 属性 |
| `TextValueFactor` | `public float TextValueFactor` | 属性 |
| `XOffset` | `public float XOffset` | 属性 |
| `YOffset` | `public float YOffset` | 属性 |
| `Font` | `public Font Font` | 属性 |
| `FontStyle` | `public FontStyle FontStyle` | 属性 |
| `FontSize` | `public int FontSize` | 属性 |
| `Style` | `public Style(IEnumerable<BrushLayer>layers)` | 构造函数 |
| `FillFrom` | `public void FillFrom(Style style)` | 方法 |
| `AddLayer` | `public void AddLayer(StyleLayer layer)` | 方法 |
| `RemoveLayer` | `public void RemoveLayer(string layerName)` | 方法 |
| `GetLayer` | `public StyleLayer GetLayer(int index)` | 方法 |
| `GetLayer` | `public StyleLayer GetLayer(string name)` | 方法 |
| `StyleLayer[]GetLayers` | `public StyleLayer[]GetLayers()` | 方法 |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)` | 方法 |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `SetAsDefaultStyle` | `public void SetAsDefaultStyle()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IDataSource](../IDataSource/)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
