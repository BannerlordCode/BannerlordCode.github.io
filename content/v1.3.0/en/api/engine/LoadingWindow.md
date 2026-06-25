---
title: "LoadingWindow"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoadingWindow`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LoadingWindow

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class LoadingWindow`
**Base:** none
**File:** `TaleWorlds.Engine/LoadingWindow.cs`

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

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Destroy
`public static void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `disable global loading window`.

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** Handles logic related to `enable global loading window`.

## Usage Example

```csharp
LoadingWindow.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)