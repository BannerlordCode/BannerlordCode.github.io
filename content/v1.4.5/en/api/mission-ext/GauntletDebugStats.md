---
title: "GauntletDebugStats"
description: "Auto-generated class reference for GauntletDebugStats."
---
# GauntletDebugStats

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDebugStats : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletDebugStats.cs`

## Overview

`GauntletDebugStats` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of GauntletDebugStats from the subsystem API first
GauntletDebugStats gauntletDebugStats = ...;
gauntletDebugStats.Initialize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GauntletDebugStats gauntletDebugStats = ...;
gauntletDebugStats.Initialize();
```

## See Also

- [Area Index](../)