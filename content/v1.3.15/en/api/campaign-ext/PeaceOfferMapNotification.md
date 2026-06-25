---
title: "PeaceOfferMapNotification"
description: "Auto-generated class reference for PeaceOfferMapNotification."
---
# PeaceOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PeaceOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/PeaceOfferMapNotification.cs`

## Overview

`PeaceOfferMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OpponentFaction` | `public IFaction OpponentFaction { get; }` |
| `TributeAmount` | `public int TributeAmount { get; }` |
| `TributeDurationInDays` | `public int TributeDurationInDays { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PeaceOfferMapNotification instance = ...;
```

## See Also

- [Area Index](../)