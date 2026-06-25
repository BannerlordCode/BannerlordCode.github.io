---
title: "PartyLeaderChangeNotification"
description: "Auto-generated class reference for PartyLeaderChangeNotification."
---
# PartyLeaderChangeNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyLeaderChangeNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/PartyLeaderChangeNotification.cs`

## Overview

`PartyLeaderChangeNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `Party` | `public MobileParty Party { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of PartyLeaderChangeNotification from the subsystem API first
PartyLeaderChangeNotification partyLeaderChangeNotification = ...;
var result = partyLeaderChangeNotification.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyLeaderChangeNotification partyLeaderChangeNotification = ...;
partyLeaderChangeNotification.IsValid();
```

## See Also

- [Area Index](../)