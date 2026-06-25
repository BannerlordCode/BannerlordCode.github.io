---
title: "MbEvent"
description: "Auto-generated class reference for MbEvent."
---
# MbEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MbEvent<T> : IMbEvent<T>, IMbEventBase`
**Base:** `IMbEvent<T>`
**File:** `TaleWorlds.CampaignSystem/MbEvent.2.cs`

## Overview

`MbEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T> action)`

**Purpose:** Adds non serialized listener to the current collection or state.

```csharp
// Obtain an instance of MbEvent from the subsystem API first
MbEvent mbEvent = ...;
mbEvent.AddNonSerializedListener(owner, action);
```

### Invoke
`public void Invoke(T t)`

**Purpose:** Executes the Invoke logic.

```csharp
// Obtain an instance of MbEvent from the subsystem API first
MbEvent mbEvent = ...;
mbEvent.Invoke(t);
```

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Removes all listeners from the this instance.

```csharp
// Obtain an instance of MbEvent from the subsystem API first
MbEvent mbEvent = ...;
mbEvent.ClearListeners(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MbEvent mbEvent = ...;
mbEvent.AddNonSerializedListener(owner, action);
```

## See Also

- [Area Index](../)