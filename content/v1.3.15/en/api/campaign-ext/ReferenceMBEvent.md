---
title: "ReferenceMBEvent"
description: "Auto-generated class reference for ReferenceMBEvent."
---
# ReferenceMBEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ReferenceMBEvent<T1, T2> : ReferenceIMBEvent<T1, T2>, IMbEventBase`
**Base:** `ReferenceIMBEvent<T1`
**File:** `TaleWorlds.CampaignSystem/ReferenceMBEvent.2.cs`

## Overview

`ReferenceMBEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1, T2> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.AddNonSerializedListener(owner, referenceAction<T1, action);
```

### Invoke
`public void Invoke(T1 t1, ref T2 t2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.Invoke(t1, t2);
```

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Removes all `listeners` from the current object.

```csharp
// Obtain an instance of ReferenceMBEvent from the subsystem API first
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.ClearListeners(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ReferenceMBEvent referenceMBEvent = ...;
referenceMBEvent.AddNonSerializedListener(owner, referenceAction<T1, action);
```

## See Also

- [Area Index](../)