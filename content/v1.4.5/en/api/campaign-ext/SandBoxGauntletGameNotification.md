---
title: "SandBoxGauntletGameNotification"
description: "Auto-generated class reference for SandBoxGauntletGameNotification."
---
# SandBoxGauntletGameNotification

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**Base:** `GauntletGameNotification`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI/SandBoxGauntletGameNotification.cs`

## Overview

`SandBoxGauntletGameNotification` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
SandBoxGauntletGameNotification.Initialize();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of SandBoxGauntletGameNotification from the subsystem API first
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.OnFinalize();
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of SandBoxGauntletGameNotification from the subsystem API first
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.RegisterEvents();
```

### UnregisterEvents
`public override void UnregisterEvents()`

**Purpose:** Unregisters events from the current system.

```csharp
// Obtain an instance of SandBoxGauntletGameNotification from the subsystem API first
SandBoxGauntletGameNotification sandBoxGauntletGameNotification = ...;
sandBoxGauntletGameNotification.UnregisterEvents();
```

## Usage Example

```csharp
SandBoxGauntletGameNotification.Initialize();
```

## See Also

- [Area Index](../)