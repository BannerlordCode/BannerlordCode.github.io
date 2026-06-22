<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Brush`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Brush

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Brush` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)