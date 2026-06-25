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

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
LoadingWindow.Initialize();
```

### Destroy
`public static void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
LoadingWindow.Destroy();
```

### DisableGlobalLoadingWindow
`public static void DisableGlobalLoadingWindow()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
LoadingWindow.DisableGlobalLoadingWindow();
```

### EnableGlobalLoadingWindow
`public static void EnableGlobalLoadingWindow()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
LoadingWindow.EnableGlobalLoadingWindow();
```

## Usage Example

```csharp
LoadingWindow.Initialize();
```

## See Also

- [Area Index](../)