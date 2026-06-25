---
title: "StyleLayer"
description: "StyleLayer 的自动生成类参考。"
---
# StyleLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StyleLayer : IBrushLayerData, IDataSource`
**Base:** `IBrushLayerData`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/StyleLayer.cs`

## 概述

`StyleLayer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SourceLayer` | `public BrushLayer SourceLayer { get; }` |
| `Version` | `public uint Version { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
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

### CreateFrom
`public static StyleLayer CreateFrom(StyleLayer source)`

**用途 / Purpose:** 构建一个新的 「from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
StyleLayer.CreateFrom(source);
```

### FillFrom
`public void FillFrom(StyleLayer source)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 StyleLayer 实例
StyleLayer styleLayer = ...;
styleLayer.FillFrom(source);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as float」 的结果。

```csharp
// 先通过子系统 API 拿到 StyleLayer 实例
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as color」 的结果。

```csharp
// 先通过子系统 API 拿到 StyleLayer 实例
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「value as sprite」 的结果。

```csharp
// 先通过子系统 API 拿到 StyleLayer 实例
StyleLayer styleLayer = ...;
var result = styleLayer.GetValueAsSprite(propertyType);
```

### GetIsValueChanged
`public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 「is value changed」 的结果。

```csharp
// 先通过子系统 API 拿到 StyleLayer 实例
StyleLayer styleLayer = ...;
var result = styleLayer.GetIsValueChanged(propertyType);
```

## 使用示例

```csharp
StyleLayer.CreateFrom(source);
```

## 参见

- [本区域目录](../)