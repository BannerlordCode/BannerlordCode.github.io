---
title: "GauntletGameNotification"
description: "Auto-generated class reference for GauntletGameNotification."
---
# GauntletGameNotification

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameNotification : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletGameNotification.cs`

## Overview

`GauntletGameNotification` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletGameNotification.Initialize();
```

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of GauntletGameNotification from the subsystem API first
GauntletGameNotification gauntletGameNotification = ...;
gauntletGameNotification.OnFinalize();
```

### RegisterEvents
`public virtual void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GauntletGameNotification from the subsystem API first
GauntletGameNotification gauntletGameNotification = ...;
gauntletGameNotification.RegisterEvents();
```

### UnregisterEvents
`public virtual void UnregisterEvents()`

**Purpose:** **Purpose:** Unregisters events from the current system.

```csharp
// Obtain an instance of GauntletGameNotification from the subsystem API first
GauntletGameNotification gauntletGameNotification = ...;
gauntletGameNotification.UnregisterEvents();
```

## Usage Example

```csharp
GauntletGameNotification.Initialize();
```

## See Also

- [Area Index](../)