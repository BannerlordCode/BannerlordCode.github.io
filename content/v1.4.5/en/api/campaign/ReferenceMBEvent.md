---
title: "ReferenceMBEvent"
description: "Auto-generated class reference for ReferenceMBEvent."
---
# ReferenceMBEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ReferenceMBEvent<T1> : ReferenceIMBEvent<T1>, IMbEventBase`
**Base:** `ReferenceIMBEvent<T1>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## Overview

`ReferenceMBEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1> action)`

**Purpose:** Adds non serialized listener to the current collection or state.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.AddNonSerializedListener(owner, action);
```

### Invoke
`public void Invoke(ref T1 t1)`

**Purpose:** Executes the Invoke logic.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.Invoke(t1);
```

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Removes all listeners from the this instance.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.ClearListeners(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.AddNonSerializedListener(owner, action);
```

## See Also

- [Area Index](../)