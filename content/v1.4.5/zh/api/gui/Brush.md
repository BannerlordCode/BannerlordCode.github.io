---
title: "Brush"
description: "Brush 的自动生成类参考。"
---
# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Brush`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/Brush.cs`

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

## 主要方法

### GetStyle
`public Style GetStyle(string name)`

**用途 / Purpose:** 读取并返回当前对象中 style 的结果。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.GetStyle("example");
```

### GetStyleOrDefault
`public Style GetStyleOrDefault(string name)`

**用途 / Purpose:** 读取并返回当前对象中 style or default 的结果。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.GetStyleOrDefault("example");
```

### AddStyle
`public void AddStyle(Style style)`

**用途 / Purpose:** 将 style 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.AddStyle(style);
```

### RemoveStyle
`public void RemoveStyle(string styleName)`

**用途 / Purpose:** 从当前容器或状态中移除 style。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.RemoveStyle("example");
```

### AddLayer
`public void AddLayer(BrushLayer layer)`

**用途 / Purpose:** 将 layer 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(string layerName)`

**用途 / Purpose:** 从当前容器或状态中移除 layer。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.RemoveLayer("example");
```

### GetLayer
`public BrushLayer GetLayer(string name)`

**用途 / Purpose:** 读取并返回当前对象中 layer 的结果。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.GetLayer("example");
```

### FillFrom
`public void FillFrom(Brush brush)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.FillFrom(brush);
```

### Clone
`public Brush Clone()`

**用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.Clone();
```

### AddAnimation
`public void AddAnimation(BrushAnimation animation)`

**用途 / Purpose:** 将 animation 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
brush.AddAnimation(animation);
```

### GetAnimation
`public BrushAnimation GetAnimation(string name)`

**用途 / Purpose:** 读取并返回当前对象中 animation 的结果。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.GetAnimation("example");
```

### GetAnimations
`public IEnumerable<BrushAnimation> GetAnimations()`

**用途 / Purpose:** 读取并返回当前对象中 animations 的结果。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.GetAnimations();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.ToString();
```

### IsCloneRelated
`public bool IsCloneRelated(Brush brush)`

**用途 / Purpose:** 判断当前对象是否处于 clone related 状态或条件。

```csharp
// 先通过子系统 API 拿到 Brush 实例
Brush brush = ...;
var result = brush.IsCloneRelated(brush);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Brush brush = ...;
brush.GetStyle("example");
```

## 参见

- [本区域目录](../)