---
title: "ScriptComponentBehavior"
description: "Auto-generated class reference for ScriptComponentBehavior."
---
# ScriptComponentBehavior

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/ScriptComponentBehavior.cs`

## Overview

`ScriptComponentBehavior` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `ScriptComponent` | `public ManagedScriptComponent ScriptComponent { get; }` |
| `Scene` | `public Scene Scene { get; }` |

## Key Methods

### SetScriptComponentToTick
`public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq)`

**Purpose:** Assigns a new value to `script component to tick` and updates the object's internal state.

```csharp
// Obtain an instance of ScriptComponentBehavior from the subsystem API first
ScriptComponentBehavior scriptComponentBehavior = ...;
scriptComponentBehavior.SetScriptComponentToTick(tickReq);
```

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)`

**Purpose:** Assigns a new value to `script component to tick m t` and updates the object's internal state.

```csharp
// Obtain an instance of ScriptComponentBehavior from the subsystem API first
ScriptComponentBehavior scriptComponentBehavior = ...;
scriptComponentBehavior.SetScriptComponentToTickMT(value);
```

### GetTickRequirement
`public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of ScriptComponentBehavior from the subsystem API first
ScriptComponentBehavior scriptComponentBehavior = ...;
var result = scriptComponentBehavior.GetTickRequirement();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScriptComponentBehavior instance = ...;
```

## See Also

- [Area Index](../)