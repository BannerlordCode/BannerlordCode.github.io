<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BrushState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushState

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 结构体 struct struct
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`BrushState` 是 `TaleWorlds.GauntletUI` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要方法

### FillFrom

```csharp
public void FillFrom(Style style)
```

### LerpFrom

```csharp
public void LerpFrom(BrushState start, Style end, float ratio)
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

### SetValueAsFloat

```csharp
public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)
```

### SetValueAsColor

```csharp
public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)
```

### SetValueAsSprite

```csharp
public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)
```

### CreateTextMaterial

```csharp
public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)