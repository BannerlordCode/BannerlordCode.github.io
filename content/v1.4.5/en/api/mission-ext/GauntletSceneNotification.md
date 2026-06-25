---
title: "GauntletSceneNotification"
description: "Auto-generated class reference for GauntletSceneNotification."
---
# GauntletSceneNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletSceneNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.SceneNotification/GauntletSceneNotification.cs`

## Overview

`GauntletSceneNotification` lives in `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletSceneNotification Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletSceneNotification.Initialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GauntletSceneNotification from the subsystem API first
GauntletSceneNotification gauntletSceneNotification = ...;
gauntletSceneNotification.OnFinalize();
```

### RegisterContextProvider
`public void RegisterContextProvider(ISceneNotificationContextProvider provider)`

**Purpose:** **Purpose:** Registers context provider with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GauntletSceneNotification from the subsystem API first
GauntletSceneNotification gauntletSceneNotification = ...;
gauntletSceneNotification.RegisterContextProvider(provider);
```

### RemoveContextProvider
`public bool RemoveContextProvider(ISceneNotificationContextProvider provider)`

**Purpose:** **Purpose:** Removes context provider from the current collection or state.

```csharp
// Obtain an instance of GauntletSceneNotification from the subsystem API first
GauntletSceneNotification gauntletSceneNotification = ...;
var result = gauntletSceneNotification.RemoveContextProvider(provider);
```

## Usage Example

```csharp
GauntletSceneNotification.Initialize();
```

## See Also

- [Area Index](../)