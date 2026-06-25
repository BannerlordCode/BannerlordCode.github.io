---
title: "VassalAndMercenaryOfferCampaignBehavior"
description: "Auto-generated class reference for VassalAndMercenaryOfferCampaignBehavior."
---
# VassalAndMercenaryOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VassalAndMercenaryOfferCampaignBehavior : CampaignBehaviorBase, IVassalAndMercenaryOfferCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs`

## Overview

`VassalAndMercenaryOfferCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VassalAndMercenaryOfferCampaignBehavior from the subsystem API first
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of VassalAndMercenaryOfferCampaignBehavior from the subsystem API first
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.SyncData(dataStore);
```

### CancelVassalOrMercenaryServiceOffer
`public void CancelVassalOrMercenaryServiceOffer(Kingdom kingdom)`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for cel vassal or mercenary service offer.

```csharp
// Obtain an instance of VassalAndMercenaryOfferCampaignBehavior from the subsystem API first
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CancelVassalOrMercenaryServiceOffer(kingdom);
```

### CreateMercenaryOffer
`public void CreateMercenaryOffer(Kingdom kingdom)`

**Purpose:** **Purpose:** Constructs a new mercenary offer entity and returns it to the caller.

```csharp
// Obtain an instance of VassalAndMercenaryOfferCampaignBehavior from the subsystem API first
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CreateMercenaryOffer(kingdom);
```

### CreateVassalOffer
`public void CreateVassalOffer(Kingdom kingdom)`

**Purpose:** **Purpose:** Constructs a new vassal offer entity and returns it to the caller.

```csharp
// Obtain an instance of VassalAndMercenaryOfferCampaignBehavior from the subsystem API first
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CreateVassalOffer(kingdom);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)