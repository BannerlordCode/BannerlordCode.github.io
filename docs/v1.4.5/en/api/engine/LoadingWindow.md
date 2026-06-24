<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindow`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadingWindow

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class LoadingWindow`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/LoadingWindow.cs`

## Overview

`LoadingWindow` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
LoadingWindow.Destroy();
```

## See Also

- [Complete Class Catalog](../catalog)