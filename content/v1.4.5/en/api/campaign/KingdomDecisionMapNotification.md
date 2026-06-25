---
title: "KingdomDecisionMapNotification"
description: "Auto-generated class reference for KingdomDecisionMapNotification."
---
# KingdomDecisionMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionMapNotification : InformationData`
**Base:** `InformationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/KingdomDecisionMapNotification.cs`

## Overview

`KingdomDecisionMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KingdomOfDecision` | `public Kingdom KingdomOfDecision { get; }` |
| `Decision` | `public KingdomDecision Decision { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of KingdomDecisionMapNotification from the subsystem API first
KingdomDecisionMapNotification kingdomDecisionMapNotification = ...;
var result = kingdomDecisionMapNotification.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomDecisionMapNotification kingdomDecisionMapNotification = ...;
kingdomDecisionMapNotification.IsValid();
```

## See Also

- [Area Index](../)