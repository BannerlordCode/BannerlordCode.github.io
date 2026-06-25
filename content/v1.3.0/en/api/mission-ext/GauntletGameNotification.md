---
title: "GauntletGameNotification"
description: "Auto-generated class reference for GauntletGameNotification."
---
# GauntletGameNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs`

## Overview

`GauntletGameNotification` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletGameNotification Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletGameNotification.Initialize();
```

### OnFinalize
`public static void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Static call; no instance required
GauntletGameNotification.OnFinalize();
```

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**Purpose:** Reads movie from persistent storage or a stream.

```csharp
// Obtain an instance of GauntletGameNotification from the subsystem API first
GauntletGameNotification gauntletGameNotification = ...;
gauntletGameNotification.LoadMovie(false);
```

## Usage Example

```csharp
GauntletGameNotification.Initialize();
```

## See Also

- [Area Index](../)