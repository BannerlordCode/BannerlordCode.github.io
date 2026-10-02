---
title: "BrushLayer"
description: "BrushLayer：TaleWorlds.GauntletUI 的 public 类，继承 IBrushLayerData；公开成员 39 个（方法 5、属性 33、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushLayer

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushLayer : IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

BrushLayer 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs。它是一个 public 类，实现/继承 IBrushLayerData，继承链为 BrushLayer → IBrushLayerData。public/protected 成员共 39 个：5 方法、33 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BrushLayer 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 BrushLayer → IBrushLayerData。成员构成以属性为主（属性 33/39，方法 5/39），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Version` | `public uint Version` | 属性 |
| `Name` | `public string Name` | 属性 |
| `Sprite` | `public Sprite Sprite` | 属性 |
| `ImageFitType` | `public ImageFit.ImageFitTypes ImageFitType` | 属性 |
| `ImageFitHorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment` | 属性 |
| `ImageFitVerticalAlignment` | `public ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment` | 属性 |
| `Color` | `public Color Color` | 属性 |
| `ColorFactor` | `public float ColorFactor` | 属性 |
| `AlphaFactor` | `public float AlphaFactor` | 属性 |
| `HueFactor` | `public float HueFactor` | 属性 |
| `SaturationFactor` | `public float SaturationFactor` | 属性 |
| `ValueFactor` | `public float ValueFactor` | 属性 |
| `IsHidden` | `public bool IsHidden` | 属性 |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask` | 属性 |
| `XOffset` | `public float XOffset` | 属性 |
| `YOffset` | `public float YOffset` | 属性 |
| `Rotation` | `public float Rotation` | 属性 |
| `ExtendLeft` | `public float ExtendLeft` | 属性 |
| `ExtendRight` | `public float ExtendRight` | 属性 |
| `ExtendTop` | `public float ExtendTop` | 属性 |
| `ExtendBottom` | `public float ExtendBottom` | 属性 |
| `OverridenWidth` | `public float OverridenWidth` | 属性 |
| `OverridenHeight` | `public float OverridenHeight` | 属性 |
| `WidthPolicy` | `public BrushLayerSizePolicy WidthPolicy` | 属性 |
| `HeightPolicy` | `public BrushLayerSizePolicy HeightPolicy` | 属性 |
| `HorizontalFlip` | `public bool HorizontalFlip` | 属性 |
| `VerticalFlip` | `public bool VerticalFlip` | 属性 |
| `OverlayMethod` | `public BrushOverlayMethod OverlayMethod` | 属性 |
| `OverlaySprite` | `public Sprite OverlaySprite` | 属性 |
| `OverlayXOffset` | `public float OverlayXOffset` | 属性 |
| `OverlayYOffset` | `public float OverlayYOffset` | 属性 |
| `UseRandomBaseOverlayXOffset` | `public bool UseRandomBaseOverlayXOffset` | 属性 |
| `UseRandomBaseOverlayYOffset` | `public bool UseRandomBaseOverlayYOffset` | 属性 |
| `BrushLayer` | `public BrushLayer()` | 构造函数 |
| `FillFrom` | `public void FillFrom(BrushLayer brushLayer)` | 方法 |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IBrushLayerData](../IBrushLayerData/)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
