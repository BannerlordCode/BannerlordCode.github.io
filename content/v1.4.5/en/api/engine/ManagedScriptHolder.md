---
title: "ManagedScriptHolder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedScriptHolder`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedScriptHolder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**Base:** `DotNetObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptHolder.cs`

## Overview

`ManagedScriptHolder` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetScriptComponentHolder
`public void SetScriptComponentHolder(ScriptComponentBehavior sc)`

**Purpose:** Sets the value or state of `script component holder`.

### UpdateTickRequirement
`public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)`

**Purpose:** Updates the state or data of `tick requirement`.

### RemoveScriptComponentFromAllTickLists
`public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)`

**Purpose:** Removes `script component from all tick lists` from the current collection or state.

## Usage Example

```csharp
var value = new ManagedScriptHolder();
value.SetScriptComponentHolder(sc);
```

## See Also

- [Complete Class Catalog](../catalog)