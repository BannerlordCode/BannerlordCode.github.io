---
title: "ReferenceMBEvent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReferenceMBEvent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReferenceMBEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ReferenceMBEvent<T1> : ReferenceIMBEvent<T1>, IMbEventBase`
**Base:** `ReferenceIMBEvent<T1>`
**File:** `TaleWorlds.CampaignSystem/ReferenceMBEvent.cs`

## Overview

`ReferenceMBEvent` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddNonSerializedListener
`public void AddNonSerializedListener(object owner, ReferenceAction<T1> action)`

**Purpose:** Adds `non serialized listener` to the current collection or state.

### Invoke
`public void Invoke(ref T1 t1)`

**Purpose:** Handles logic related to `invoke`.

### ClearListeners
`public void ClearListeners(object o)`

**Purpose:** Handles logic related to `clear listeners`.

## Usage Example

```csharp
var value = new ReferenceMBEvent();
value.AddNonSerializedListener(owner, action);
```

## See Also

- [Complete Class Catalog](../catalog)