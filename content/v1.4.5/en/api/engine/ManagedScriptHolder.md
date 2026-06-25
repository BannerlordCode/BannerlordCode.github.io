---
title: "ManagedScriptHolder"
description: "Auto-generated class reference for ManagedScriptHolder."
---
# ManagedScriptHolder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptHolder.cs`

## Overview

`ManagedScriptHolder` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetScriptComponentHolder
`public void SetScriptComponentHolder(ScriptComponentBehavior sc)`

**Purpose:** Assigns a new value to `script component holder` and updates the object's internal state.

```csharp
// Obtain an instance of ManagedScriptHolder from the subsystem API first
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.SetScriptComponentHolder(sc);
```

### UpdateTickRequirement
`public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)`

**Purpose:** Recalculates and stores the latest representation of `tick requirement`.

```csharp
// Obtain an instance of ManagedScriptHolder from the subsystem API first
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.UpdateTickRequirement(sc, oldTickRequirement, newTickRequirement);
```

### RemoveScriptComponentFromAllTickLists
`public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)`

**Purpose:** Removes `script component from all tick lists` from the current collection or state.

```csharp
// Obtain an instance of ManagedScriptHolder from the subsystem API first
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.RemoveScriptComponentFromAllTickLists(sc);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.SetScriptComponentHolder(sc);
```

## See Also

- [Area Index](../)