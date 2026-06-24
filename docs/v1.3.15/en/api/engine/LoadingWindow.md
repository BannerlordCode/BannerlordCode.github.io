<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindow`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoadingWindow

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class LoadingWindow`
**Area:** engine

## Overview

`LoadingWindow` lives in `TaleWorlds.Engine`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLoadingWindowActive` | `public static bool IsLoadingWindowActive { get; }` |
| `LoadingWindowManager` | `public static ILoadingWindowManager LoadingWindowManager { get; }` |

## Key Methods

### Destroy
`public static void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `disable global loading window`.

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `enable global loading window`.

### SetCurrentModeIsMultiplayer
`public static void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** Sets the value or state of `current mode is multiplayer`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
LoadingWindow.Destroy();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
