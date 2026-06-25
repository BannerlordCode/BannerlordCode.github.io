---
title: "MarriageOfferCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/MarriageOfferCampaignBehavior.cs`

## Overview

`MarriageOfferCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### CreateMarriageOffer
`public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)`

**Purpose:** Creates a new `marriage offer` instance or object.

### GetMarriageAcceptedConsequences
`public MBBindingList<TextObject> GetMarriageAcceptedConsequences()`

**Purpose:** Gets the current value of `marriage accepted consequences`.

### OnMarriageOfferAcceptedOnPopUp
`public void OnMarriageOfferAcceptedOnPopUp()`

**Purpose:** Called when the `marriage offer accepted on pop up` event is raised.

### OnMarriageOfferedToPlayer
`public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offered to player` event is raised.

### OnMarriageOfferDeclinedOnPopUp
`public void OnMarriageOfferDeclinedOnPopUp()`

**Purpose:** Called when the `marriage offer declined on pop up` event is raised.

### OnMarriageOfferCanceled
`public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Called when the `marriage offer canceled` event is raised.

### IsHeroEngaged
`public bool IsHeroEngaged(Hero hero)`

**Purpose:** Handles logic related to `is hero engaged`.

## Usage Example

```csharp
var value = new MarriageOfferCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)