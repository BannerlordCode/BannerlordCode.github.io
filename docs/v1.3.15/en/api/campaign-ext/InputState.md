<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputState

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InputState` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NativeResolution` | `public Vec2 NativeResolution { get; set; }` |
| `MousePositionRanged` | `public Vec2 MousePositionRanged { get; set; }` |
| `OldMousePositionRanged` | `public Vec2 OldMousePositionRanged { get; }` |
| `MousePositionChanged` | `public bool MousePositionChanged { get; }` |
| `MousePositionPixel` | `public Vec2 MousePositionPixel { get; set; }` |
| `OldMousePositionPixel` | `public Vec2 OldMousePositionPixel { get; }` |
| `MouseScrollValue` | `public float MouseScrollValue { get; }` |
| `MouseScrollChanged` | `public bool MouseScrollChanged { get; }` |


## Key Methods

### UpdateMousePosition

```csharp
public bool UpdateMousePosition(float mousePositionX, float mousePositionY)
```

### UpdateMouseScroll

```csharp
public bool UpdateMouseScroll(float mouseScrollValue)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)