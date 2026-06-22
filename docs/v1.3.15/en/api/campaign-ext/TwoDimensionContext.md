<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TwoDimensionContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TwoDimensionContext` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `Platform` | `public ITwoDimensionPlatform Platform { get; }` |
| `ResourceContext` | `public ITwoDimensionResourceContext ResourceContext { get; }` |
| `ResourceDepot` | `public ResourceDepot ResourceDepot { get; }` |
| `IsDebugModeEnabled` | `public bool IsDebugModeEnabled { get; }` |


## Key Methods

### PlaySound

```csharp
public void PlaySound(string soundName)
```

### CreateSoundEvent

```csharp
public void CreateSoundEvent(string soundName)
```

### StopAndRemoveSoundEvent

```csharp
public void StopAndRemoveSoundEvent(string soundName)
```

### PlaySoundEvent

```csharp
public void PlaySoundEvent(string soundName)
```

### DrawImage

```csharp
public void DrawImage(SimpleMaterial material, in ImageDrawObject drawObject2D, int layer = 0)
```

### DrawText

```csharp
public void DrawText(TextMaterial material, in TextDrawObject drawObject2D, int layer = 0)
```

### BeginDebugPanel

```csharp
public void BeginDebugPanel(string panelTitle)
```

### EndDebugPanel

```csharp
public void EndDebugPanel()
```

### DrawDebugText

```csharp
public void DrawDebugText(string text)
```

### DrawDebugTreeNode

```csharp
public bool DrawDebugTreeNode(string text)
```

### PopDebugTreeNode

```csharp
public void PopDebugTreeNode()
```

### DrawCheckbox

```csharp
public void DrawCheckbox(string label, ref bool isChecked)
```

### IsDebugItemHovered

```csharp
public bool IsDebugItemHovered()
```

### LoadTexture

```csharp
public Texture LoadTexture(string name)
```

### SetScissor

```csharp
public void SetScissor(ScissorTestInfo scissor)
```

### ResetScissor

```csharp
public void ResetScissor()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)