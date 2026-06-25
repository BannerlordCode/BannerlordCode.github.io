---
title: "StyleLayer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StyleLayer`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StyleLayer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StyleLayer : IBrushLayerData, IDataSource`
**Base:** `IBrushLayerData`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/StyleLayer.cs`

## 概述

`StyleLayer` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SourceLayer` | `public BrushLayer SourceLayer { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `ImageFitType` | `public ImageFit.ImageFitTypes ImageFitType { get; set; }` |
| `ImageFitHorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments ImageFitHorizontalAlignment { get; }` |
| `ImageFitVerticalAlignment` | `public ImageFit.ImageVerticalAlignments ImageFitVerticalAlignment { get; }` |
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

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### FillFrom
`public void FillFrom(StyleLayer source)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as float` 的当前值。

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as color` 的当前值。

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as sprite` 的当前值。

### GetIsValueChanged
`public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `is value changed` 的当前值。

## 使用示例

```csharp
StyleLayer.CreateFrom(source);
```

## 参见

- [完整类目录](../catalog)