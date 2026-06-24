<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Screen`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Screen

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Screen`
**Area:** engine

## Overview

`Screen` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RealScreenResolutionWidth` | `public static float RealScreenResolutionWidth { get; }` |
| `RealScreenResolutionHeight` | `public static float RealScreenResolutionHeight { get; }` |
| `RealScreenResolution` | `public static Vec2 RealScreenResolution { get; }` |
| `AspectRatio` | `public static float AspectRatio { get; }` |
| `DesktopResolution` | `public static Vec2 DesktopResolution { get; }` |
| `ScreenScale` | `public static Vec2 ScreenScale { get; }` |

## Key Methods

### GetMouseVisible
`public static bool GetMouseVisible()`

**Purpose:** Gets the current value of `mouse visible`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Screen.GetMouseVisible();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
