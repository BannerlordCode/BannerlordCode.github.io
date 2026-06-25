---
title: "Style"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Style`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Style

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Style : IDataSource`
**Base:** `IDataSource`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Style.cs`

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
| `Font` | `public Font Font { get; set; }` |
| `FontStyle` | `public FontStyle FontStyle { get; set; }` |
| `FontSize` | `public int FontSize { get; set; }` |

## 主要方法

### FillFrom
`public void FillFrom(Style style)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### AddLayer
`public void AddLayer(StyleLayer layer)`

**用途 / Purpose:** 向当前集合/状态中添加 `layer`。

### RemoveLayer
`public void RemoveLayer(string layerName)`

**用途 / Purpose:** 从当前集合/状态中移除 `layer`。

### GetLayer
`public StyleLayer GetLayer(int index)`

**用途 / Purpose:** 获取 `layer` 的当前值。

### GetLayer
`public StyleLayer GetLayer(string name)`

**用途 / Purpose:** 获取 `layer` 的当前值。

### GetLayers
`public StyleLayer GetLayers()`

**用途 / Purpose:** 获取 `layers` 的当前值。

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**用途 / Purpose:** 创建一个 `text material` 实例或对象。

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as float` 的当前值。

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as color` 的当前值。

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**用途 / Purpose:** 获取 `value as sprite` 的当前值。

### SetAsDefaultStyle
`public void SetAsDefaultStyle()`

**用途 / Purpose:** 设置 `as default style` 的值或状态。

## 使用示例

```csharp
var value = new Style();
value.FillFrom(style);
```

## 参见

- [完整类目录](../catalog)