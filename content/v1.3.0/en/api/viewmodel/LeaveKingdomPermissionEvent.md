---
title: "LeaveKingdomPermissionEvent"
description: "Auto-generated class reference for LeaveKingdomPermissionEvent."
---
# LeaveKingdomPermissionEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LeaveKingdomPermissionEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/LeaveKingdomPermissionEvent.cs`

## Overview

`LeaveKingdomPermissionEvent` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsLeaveKingdomPossbile` | `public Action<bool, TextObject> IsLeaveKingdomPossbile { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
LeaveKingdomPermissionEvent instance = ...;
```

## See Also

- [Area Index](../)