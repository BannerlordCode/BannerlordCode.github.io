---
title: "Screen"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Screen`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Screen

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class Screen`
**Base:** none
**File:** `TaleWorlds.Engine/Screen.cs`

## Overview

`Screen` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
Screen.GetMouseVisible();
```

## See Also

- [Complete Class Catalog](../catalog)