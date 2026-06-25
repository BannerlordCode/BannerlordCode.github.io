---
title: "MarriageOfferCampaignBehavior"
description: "Auto-generated class reference for MarriageOfferCampaignBehavior."
---
# MarriageOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/MarriageOfferCampaignBehavior.cs`

## Overview

`MarriageOfferCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.SyncData(dataStore);
```

### CreateMarriageOffer
`public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)`

**Purpose:** Constructs a new marriage offer entity and returns it to the caller.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.CreateMarriageOffer(currentOfferedPlayerClanHero, currentOfferedOtherClanHero);
```

### GetMarriageAcceptedConsequences
`public MBBindingList<TextObject> GetMarriageAcceptedConsequences()`

**Purpose:** Reads and returns the marriage accepted consequences value held by the this instance.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
var result = marriageOfferCampaignBehavior.GetMarriageAcceptedConsequences();
```

### OnMarriageOfferAcceptedOnPopUp
`public void OnMarriageOfferAcceptedOnPopUp()`

**Purpose:** Invoked when the marriage offer accepted on pop up event is raised.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferAcceptedOnPopUp();
```

### OnMarriageOfferedToPlayer
`public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the marriage offered to player event is raised.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferDeclinedOnPopUp
`public void OnMarriageOfferDeclinedOnPopUp()`

**Purpose:** Invoked when the marriage offer declined on pop up event is raised.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferDeclinedOnPopUp();
```

### OnMarriageOfferCanceled
`public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**Purpose:** Invoked when the marriage offer canceled event is raised.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferCanceled(suitor, maiden);
```

### IsHeroEngaged
`public bool IsHeroEngaged(Hero hero)`

**Purpose:** Determines whether the this instance is in the hero engaged state or condition.

```csharp
// Obtain an instance of MarriageOfferCampaignBehavior from the subsystem API first
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
var result = marriageOfferCampaignBehavior.IsHeroEngaged(hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)