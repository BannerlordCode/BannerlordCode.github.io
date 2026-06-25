---
title: "Brush"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Brush`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Brush`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Brush.cs`

## 概述

`Brush` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClonedFrom` | `public Brush ClonedFrom { get; }` |
| `OverriddenBrush` | `public Brush OverriddenBrush { get; }` |
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DefaultStyle` | `public Style DefaultStyle { get; }` |
| `Font` | `public Font Font { get; set; }` |
| `FontStyle` | `public FontStyle FontStyle { get; set; }` |
| `FontSize` | `public int FontSize { get; set; }` |
| `TextHorizontalAlignment` | `public TextHorizontalAlignment TextHorizontalAlignment { get; set; }` |
| `TextVerticalAlignment` | `public TextVerticalAlignment TextVerticalAlignment { get; set; }` |
| `GlobalColorFactor` | `public float GlobalColorFactor { get; set; }` |
| `GlobalAlphaFactor` | `public float GlobalAlphaFactor { get; set; }` |
| `GlobalColor` | `public Color GlobalColor { get; set; }` |
| `SoundProperties` | `public SoundProperties SoundProperties { get; set; }` |
| `Sprite` | `public Sprite Sprite { get; set; }` |
| `VerticalFlip` | `public bool VerticalFlip { get; set; }` |
| `HorizontalFlip` | `public bool HorizontalFlip { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |
| `TextColorFactor` | `public float TextColorFactor { get; set; }` |
| `TextAlphaFactor` | `public float TextAlphaFactor { get; set; }` |
| `TextHueFactor` | `public float TextHueFactor { get; set; }` |
| `TextSaturationFactor` | `public float TextSaturationFactor { get; set; }` |
| `TextValueFactor` | `public float TextValueFactor { get; set; }` |
| `Layers` | `public Dictionary<string, BrushLayer>.ValueCollection Layers { get; }` |
| `DefaultStyleLayer` | `public StyleLayer DefaultStyleLayer { get; }` |
| `DefaultLayer` | `public BrushLayer DefaultLayer { get; }` |
| `Styles` | `public Dictionary<string, Style>.ValueCollection Styles { get; }` |

## 主要方法

### GetStyle
`public Style GetStyle(string name)`

**用途 / Purpose:** 获取 `style` 的当前值。

### GetStyleOrDefault
`public Style GetStyleOrDefault(string name)`

**用途 / Purpose:** 获取 `style or default` 的当前值。

### AddStyle
`public void AddStyle(Style style)`

**用途 / Purpose:** 向当前集合/状态中添加 `style`。

### RemoveStyle
`public void RemoveStyle(string styleName)`

**用途 / Purpose:** 从当前集合/状态中移除 `style`。

### AddLayer
`public void AddLayer(BrushLayer layer)`

**用途 / Purpose:** 向当前集合/状态中添加 `layer`。

### RemoveLayer
`public void RemoveLayer(string layerName)`

**用途 / Purpose:** 从当前集合/状态中移除 `layer`。

### GetLayer
`public BrushLayer GetLayer(string name)`

**用途 / Purpose:** 获取 `layer` 的当前值。

### FillFrom
`public void FillFrom(Brush brush)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### Clone
`public Brush Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### AddAnimation
`public void AddAnimation(BrushAnimation animation)`

**用途 / Purpose:** 向当前集合/状态中添加 `animation`。

### GetAnimation
`public BrushAnimation GetAnimation(string name)`

**用途 / Purpose:** 获取 `animation` 的当前值。

### GetAnimations
`public IEnumerable<BrushAnimation> GetAnimations()`

**用途 / Purpose:** 获取 `animations` 的当前值。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### IsCloneRelated
`public bool IsCloneRelated(Brush brush)`

**用途 / Purpose:** 处理 `is clone related` 相关逻辑。

## 使用示例

```csharp
var value = new Brush();
value.GetStyle("example");
```

## 参见

- [完整类目录](../catalog)