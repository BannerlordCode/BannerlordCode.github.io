---
title: "ScriptComponentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScriptComponentBehavior`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `script component to tick`.

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)`

**Purpose:** Sets the value or state of `script component to tick m t`.

### GetTickRequirement
`public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
var implementation = new CustomScriptComponentBehavior();
```

## See Also

- [Complete Class Catalog](../catalog)