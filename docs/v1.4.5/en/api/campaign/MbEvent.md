<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MbEvent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MbEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MbEvent : IMbEvent`
**Base:** `IMbEvent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/MbEvent.cs`

## Overview

`MbEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke()`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T t)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2, T3> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2, T3 t3)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5, T6> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5, T6 t6)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, Action<T1, T2, T3, T4, T5, T6, T7> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(T1 t1, T2 t2, T3 t3, T4 t4, T5 t5, T6 t6, T7 t7)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

## Usage Example

```csharp
var value = new MbEvent();
value.AddNonSerializedListener(owner, action);
```

## See Also

- [Complete Class Catalog](../catalog)