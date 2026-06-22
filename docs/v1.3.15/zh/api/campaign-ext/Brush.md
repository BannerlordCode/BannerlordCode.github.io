<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Brush`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Brush

**命名空间:** TaleWorlds.GauntletUI
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Brush` 是 `TaleWorlds.GauntletUI` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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


## 主要方法

### GetStyle

```csharp
public Style GetStyle(string name)
```

### GetStyleOrDefault

```csharp
public Style GetStyleOrDefault(string name)
```

### AddStyle

```csharp
public void AddStyle(Style style)
```

### RemoveStyle

```csharp
public void RemoveStyle(string styleName)
```

### AddLayer

```csharp
public void AddLayer(BrushLayer layer)
```

### RemoveLayer

```csharp
public void RemoveLayer(string layerName)
```

### GetLayer

```csharp
public BrushLayer GetLayer(string name)
```

### FillFrom

```csharp
public void FillFrom(Brush brush)
```

### Clone

```csharp
public Brush Clone()
```

### AddAnimation

```csharp
public void AddAnimation(BrushAnimation animation)
```

### GetAnimation

```csharp
public BrushAnimation GetAnimation(string name)
```

### GetAnimations

```csharp
public IEnumerable<BrushAnimation> GetAnimations()
```

### ToString

```csharp
public override string ToString()
```

### IsCloneRelated

```csharp
public bool IsCloneRelated(Brush brush)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)