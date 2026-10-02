---
title: "IBrushLayerData"
description: "IBrushLayerData：TaleWorlds.GauntletUI 的 public 接口；公开成员 35 个（方法 3、属性 32、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBrushLayerData

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

IBrushLayerData 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs。它是一个 public 接口，继承链为 IBrushLayerData。public/protected 成员共 35 个：3 方法、32 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IBrushLayerData 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 IBrushLayerData。成员构成以属性为主（属性 32/35，方法 3/35），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushLayerData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `string Name` | 属性 |
| `Sprite` | `Sprite Sprite` | 属性 |
| `Color` | `Color Color` | 属性 |
| `ColorFactor` | `float ColorFactor` | 属性 |
| `AlphaFactor` | `float AlphaFactor` | 属性 |
| `HueFactor` | `float HueFactor` | 属性 |
| `SaturationFactor` | `float SaturationFactor` | 属性 |
| `ValueFactor` | `float ValueFactor` | 属性 |
| `IsHidden` | `bool IsHidden` | 属性 |
| `XOffset` | `float XOffset` | 属性 |
| `YOffset` | `float YOffset` | 属性 |
| `Rotation` | `float Rotation` | 属性 |
| `ExtendLeft` | `float ExtendLeft` | 属性 |
| `ExtendRight` | `float ExtendRight` | 属性 |
| `ExtendTop` | `float ExtendTop` | 属性 |
| `ExtendBottom` | `float ExtendBottom` | 属性 |
| `OverridenWidth` | `float OverridenWidth` | 属性 |
| `OverridenHeight` | `float OverridenHeight` | 属性 |
| `WidthPolicy` | `BrushLayerSizePolicy WidthPolicy` | 属性 |
| `HeightPolicy` | `BrushLayerSizePolicy HeightPolicy` | 属性 |
| `HorizontalFlip` | `bool HorizontalFlip` | 属性 |
| `VerticalFlip` | `bool VerticalFlip` | 属性 |
| `UseOverlayAlphaAsMask` | `bool UseOverlayAlphaAsMask` | 属性 |
| `OverlayMethod` | `BrushOverlayMethod OverlayMethod` | 属性 |
| `OverlaySprite` | `Sprite OverlaySprite` | 属性 |
| `OverlayXOffset` | `float OverlayXOffset` | 属性 |
| `OverlayYOffset` | `float OverlayYOffset` | 属性 |
| `UseRandomBaseOverlayXOffset` | `bool UseRandomBaseOverlayXOffset` | 属性 |
| `UseRandomBaseOverlayYOffset` | `bool UseRandomBaseOverlayYOffset` | 属性 |
| `ImageFitType` | `ImageFit.ImageFitTypes ImageFitType` | 属性 |
| `ImageFitHorizontalAlignment` | `ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment` | 属性 |
| `ImageFitVerticalAlignment` | `ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment` | 属性 |
| `GetValueAsFloat` | `float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |
| `GetValueAsColor` | `Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |
| `GetValueAsSprite` | `Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
