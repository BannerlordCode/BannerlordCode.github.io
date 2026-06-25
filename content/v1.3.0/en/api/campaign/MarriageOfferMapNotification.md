---
title: "MarriageOfferMapNotification"
description: "Auto-generated class reference for MarriageOfferMapNotification."
---
# MarriageOfferMapNotification

**Namespace:** TaleWorlds.CampaignSystem.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferMapNotification : InformationData`
**Base:** `InformationData`
**File:** `TaleWorlds.CampaignSystem/MapNotificationTypes/MarriageOfferMapNotification.cs`

## Overview

`MarriageOfferMapNotification` lives in `TaleWorlds.CampaignSystem.MapNotificationTypes` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.MapNotificationTypes` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public override TextObject TitleText { get; }` |
| `SoundEventPath` | `public override string SoundEventPath { get; }` |
| `Suitor` | `public Hero Suitor { get; }` |
| `Maiden` | `public Hero Maiden { get; }` |

## Key Methods

### IsValid
`public override bool IsValid()`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of MarriageOfferMapNotification from the subsystem API first
MarriageOfferMapNotification marriageOfferMapNotification = ...;
var result = marriageOfferMapNotification.IsValid();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarriageOfferMapNotification marriageOfferMapNotification = ...;
marriageOfferMapNotification.IsValid();
```

## See Also

- [Area Index](../)