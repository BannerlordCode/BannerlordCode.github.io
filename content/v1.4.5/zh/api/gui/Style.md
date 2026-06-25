---
title: "Style"
description: "Style 的自动生成类参考。"
---
# Style

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Style : IDataSource`
**Base:** `IDataSource`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/Style.cs`

## 概述

`Style` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DefaultStyle` | `public Style DefaultStyle { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Version` | `public long Version { get; }` |
| `AnimationToPlayOnBegin` | `public string AnimationToPlayOnBegin { get; set; }` |
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
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `Font` | `public Font Font { get; set; }` |
| `FontStyle` | `public FontStyle FontStyle { get; set; }` |
| `FontSize` | `public int FontSize { get; set; }` |

## 主要方法

### FillFrom
`public void FillFrom(Style style)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
style.FillFrom(style);
```

### AddLayer
`public void AddLayer(StyleLayer layer)`

**用途 / Purpose:** 将 layer 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
style.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(string layerName)`

**用途 / Purpose:** 从当前容器或状态中移除 layer。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
style.RemoveLayer("example");
```

### GetLayer
`public StyleLayer GetLayer(int index)`

**用途 / Purpose:** 读取并返回当前对象中 layer 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetLayer(0);
```

### GetLayer
`public StyleLayer GetLayer(string name)`

**用途 / Purpose:** 读取并返回当前对象中 layer 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetLayer("example");
```

### GetLayers
`public StyleLayer GetLayers()`

**用途 / Purpose:** 读取并返回当前对象中 layers 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetLayers();
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 构建一个新的 text material 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.CreateTextMaterial(drawContext);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 value as float 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 value as color 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 读取并返回当前对象中 value as sprite 的结果。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
var result = style.GetValueAsSprite(propertyType);
```

### SetAsDefaultStyle
`public void SetAsDefaultStyle()`

**用途 / Purpose:** 为 as default style 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Style 实例
Style style = ...;
style.SetAsDefaultStyle();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Style style = ...;
style.FillFrom(style);
```

## 参见

- [本区域目录](../)