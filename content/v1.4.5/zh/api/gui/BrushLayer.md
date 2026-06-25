---
title: "BrushLayer"
description: "BrushLayer 的自动生成类参考。"
---
# BrushLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushLayer : IBrushLayerData`
**Base:** `IBrushLayerData`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushLayer.cs`

## 概述

`BrushLayer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Version` | `public uint Version { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `ImageFitType` | `public ImageFit.ImageFitTypes ImageFitType { get; set; }` |
| `ImageFitHorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment { get; set; }` |
| `ImageFitVerticalAlignment` | `public ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask { get; set; }` |
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `Rotation` | `public float Rotation { get; set; }` |
| `ExtendLeft` | `public float ExtendLeft { get; set; }` |
| `ExtendRight` | `public float ExtendRight { get; set; }` |
| `ExtendTop` | `public float ExtendTop { get; set; }` |
| `ExtendBottom` | `public float ExtendBottom { get; set; }` |
| `OverridenWidth` | `public float OverridenWidth { get; set; }` |
| `OverridenHeight` | `public float OverridenHeight { get; set; }` |
| `WidthPolicy` | `public BrushLayerSizePolicy WidthPolicy { get; set; }` |
| `HeightPolicy` | `public BrushLayerSizePolicy HeightPolicy { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `OverlayMethod` | `public BrushOverlayMethod OverlayMethod { get; set; }` |
| `OverlaySprite` | `public Sprite OverlaySprite { get; set; }` |
| `OverlayXOffset` | `public float OverlayXOffset { get; set; }` |
| `OverlayYOffset` | `public float OverlayYOffset { get; set; }` |
| `UseRandomBaseOverlayXOffset` | `public bool UseRandomBaseOverlayXOffset { get; set; }` |
| `UseRandomBaseOverlayYOffset` | `public bool UseRandomBaseOverlayYOffset { get; set; }` |

## 主要方法

### FillFrom
`public void FillFrom(BrushLayer brushLayer)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BrushLayer 实例
BrushLayer brushLayer = ...;
brushLayer.FillFrom(brushLayer);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as float」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayer 实例
BrushLayer brushLayer = ...;
var result = brushLayer.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as color」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayer 实例
BrushLayer brushLayer = ...;
var result = brushLayer.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as sprite」 的结果。

```csharp
// 先通过子系统 API 拿到 BrushLayer 实例
BrushLayer brushLayer = ...;
var result = brushLayer.GetValueAsSprite(propertyType);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BrushLayer 实例
BrushLayer brushLayer = ...;
var result = brushLayer.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BrushLayer brushLayer = ...;
brushLayer.FillFrom(brushLayer);
```

## 参见

- [本区域目录](../)