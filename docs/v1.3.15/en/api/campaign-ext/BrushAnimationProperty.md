<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushAnimationProperty`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimationProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `BrushAnimationProperty` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |
| `KeyFrames` | `public IEnumerable<BrushAnimationKeyFrame> KeyFrames { get; }` |
| `Count` | `public int Count { get; }` |


## Key Methods

### GetFrameAfter

```csharp
public BrushAnimationKeyFrame GetFrameAfter(float time)
```

### GetFrameAt

```csharp
public BrushAnimationKeyFrame GetFrameAt(int i)
```

### Clone

```csharp
public BrushAnimationProperty Clone()
```

### AddKeyFrame

```csharp
public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)
```

### RemoveKeyFrame

```csharp
public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)