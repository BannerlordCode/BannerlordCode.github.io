<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StyleLayer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StyleLayer

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`StyleLayer` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `SourceLayer` | `public BrushLayer SourceLayer { get; }` |
| `Version` | `public uint Version { get; set; }` |
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


## 主要方法

### CreateFrom

```csharp
public static StyleLayer CreateFrom(StyleLayer source)
```

### FillFrom

```csharp
public void FillFrom(StyleLayer source)
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

### GetIsValueChanged

```csharp
public bool GetIsValueChanged(BrushAnimationProperty.BrushAnimationPropertyType propertyType)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)