<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Style`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Style

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Style` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultStyle` | `public Style DefaultStyle { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Version` | `public long Version { get; }` |
| `AnimationToPlayOnBegin` | `public string AnimationToPlayOnBegin { get; set; }` |
| `LayerCount` | `public int LayerCount { get; set; }` |
| `DefaultLayer` | `public StyleLayer DefaultLayer { get; set; }` |
| `AnimationMode` | `public StyleAnimationMode AnimationMode { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |
| `TextGlowColor` | `public Color TextGlowColor { get; set; }` |
| `TextOutlineColor` | `public Color TextOutlineColor { get; set; }` |
| `TextOutlineAmount` | `public float TextOutlineAmount { get; set; }` |
| `TextGlowRadius` | `public float TextGlowRadius { get; set; }` |
| `TextBlur` | `public float TextBlur { get; set; }` |
| `TextShadowOffset` | `public float TextShadowOffset { get; set; }` |
| `TextShadowAngle` | `public float TextShadowAngle { get; set; }` |
| `TextColorFactor` | `public float TextColorFactor { get; set; }` |
| `TextAlphaFactor` | `public float TextAlphaFactor { get; set; }` |
| `TextHueFactor` | `public float TextHueFactor { get; set; }` |
| `TextSaturationFactor` | `public float TextSaturationFactor { get; set; }` |
| `TextValueFactor` | `public float TextValueFactor { get; set; }` |


## 主要方法

### FillFrom

```csharp
public void FillFrom(Style style)
```

### AddLayer

```csharp
public void AddLayer(StyleLayer layer)
```

### RemoveLayer

```csharp
public void RemoveLayer(string layerName)
```

### GetLayer

```csharp
public StyleLayer GetLayer(int index)
```

### GetLayer

```csharp
public StyleLayer GetLayer(string name)
```

### GetLayers

```csharp
public StyleLayer GetLayers()
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)
```

### GetValueAsFloat

```csharp
public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### GetValueAsColor

```csharp
public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### GetValueAsSprite

```csharp
public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

### SetAsDefaultStyle

```csharp
public void SetAsDefaultStyle()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)