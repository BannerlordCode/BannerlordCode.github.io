<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Text`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Text

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Text` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentLanguage` | `public ILanguage CurrentLanguage { get; }` |
| `ScaleToFitTextInLayout` | `public float ScaleToFitTextInLayout { get; }` |
| `LineCount` | `public int LineCount { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `Font` | `public Font Font { get; set; }` |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment { get; set; }` |
| `FontSize` | `public float FontSize { get; set; }` |
| `Value` | `public string Value { get; set; }` |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded { get; set; }` |
| `CanBreakWords` | `public bool CanBreakWords { get; set; }` |
| `ResizeTextOnOverflow` | `public bool ResizeTextOnOverflow { get; set; }` |


## Key Methods

### GetPreferredSize

```csharp
public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)
```

### UpdateSize

```csharp
public void UpdateSize(int width, int height)
```

### SetAllDirty

```csharp
public void SetAllDirty()
```

### GetParts

```csharp
public List<TextPart> GetParts()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)