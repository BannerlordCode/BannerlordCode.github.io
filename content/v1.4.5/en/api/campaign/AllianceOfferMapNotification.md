---
title: "AllianceOfferMapNotification"
description: "Auto-generated class reference for AllianceOfferMapNotification."
---
# AllianceOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AllianceOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapNotificationTypes/AllianceOfferMapNotification.cs`

## Overview

`AllianceOfferMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OfferingKingdom` | `public Kingdom OfferingKingdom { get; }` |
| `TriggerTime` | `public CampaignTime TriggerTime { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of AllianceOfferMapNotification from the subsystem API first
AllianceOfferMapNotification allianceOfferMapNotification = ...;
var result = allianceOfferMapNotification.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AllianceOfferMapNotification allianceOfferMapNotification = ...;
allianceOfferMapNotification.IsValid();
```

## See Also

- [Area Index](../)