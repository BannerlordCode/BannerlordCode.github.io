---
title: "FactionDiscontinuationCampaignBehavior"
description: "Auto-generated class reference for FactionDiscontinuationCampaignBehavior."
---
# FactionDiscontinuationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FactionDiscontinuationCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/FactionDiscontinuationCampaignBehavior.cs`

## Overview

`FactionDiscontinuationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of FactionDiscontinuationCampaignBehavior from the subsystem API first
FactionDiscontinuationCampaignBehavior factionDiscontinuationCampaignBehavior = ...;
factionDiscontinuationCampaignBehavior.RegisterEvents();
```

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Invoked when the `settlement owner changed` event is raised.

```csharp
// Obtain an instance of FactionDiscontinuationCampaignBehavior from the subsystem API first
FactionDiscontinuationCampaignBehavior factionDiscontinuationCampaignBehavior = ...;
factionDiscontinuationCampaignBehavior.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### OnClanChangedKingdom
`public void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail detail, bool showNotification = true)`

**Purpose:** Invoked when the `clan changed kingdom` event is raised.

```csharp
// Obtain an instance of FactionDiscontinuationCampaignBehavior from the subsystem API first
FactionDiscontinuationCampaignBehavior factionDiscontinuationCampaignBehavior = ...;
factionDiscontinuationCampaignBehavior.OnClanChangedKingdom(clan, oldKingdom, newKingdom, detail, false);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of FactionDiscontinuationCampaignBehavior from the subsystem API first
FactionDiscontinuationCampaignBehavior factionDiscontinuationCampaignBehavior = ...;
factionDiscontinuationCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FactionDiscontinuationCampaignBehavior factionDiscontinuationCampaignBehavior = ...;
factionDiscontinuationCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)