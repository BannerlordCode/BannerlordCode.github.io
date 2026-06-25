---
title: "LoadingWindow"
description: "Auto-generated class reference for LoadingWindow."
---
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

### Destroy
`public static void Destroy()`

**Purpose:** **Purpose:** Executes the Destroy logic.

```csharp
// Static call; no instance required
LoadingWindow.Destroy();
```

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** **Purpose:** Executes the DisableGlobalLoadingWindow logic.

```csharp
// Static call; no instance required
LoadingWindow.DisableGlobalLoadingWindow();
```

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** **Purpose:** Executes the EnableGlobalLoadingWindow logic.

```csharp
// Static call; no instance required
LoadingWindow.EnableGlobalLoadingWindow();
```

### SetCurrentModeIsMultiplayer
`public static void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** **Purpose:** Assigns a new value to current mode is multiplayer and updates the object's internal state.

```csharp
// Static call; no instance required
LoadingWindow.SetCurrentModeIsMultiplayer(false);
```

## Usage Example

```csharp
LoadingWindow.Destroy();
```

## See Also

- [Area Index](../)