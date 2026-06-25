---
title: "RansomOfferMapNotification"
description: "Auto-generated class reference for RansomOfferMapNotification."
---
# RansomOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RansomOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/RansomOfferMapNotification.cs`

## Overview

`RansomOfferMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptiveHero` | `public Hero CaptiveHero { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Obtain an instance of RansomOfferMapNotification from the subsystem API first
RansomOfferMapNotification ransomOfferMapNotification = ...;
var result = ransomOfferMapNotification.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RansomOfferMapNotification ransomOfferMapNotification = ...;
ransomOfferMapNotification.IsValid();
```

## See Also

- [Area Index](../)