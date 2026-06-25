---
title: "BanditSpawnCampaignBehavior"
description: "Auto-generated class reference for BanditSpawnCampaignBehavior."
---
# BanditSpawnCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditSpawnCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/BanditSpawnCampaignBehavior.cs`

## Overview

`BanditSpawnCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of BanditSpawnCampaignBehavior from the subsystem API first
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
banditSpawnCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of BanditSpawnCampaignBehavior from the subsystem API first
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
banditSpawnCampaignBehavior.SyncData(dataStore);
```

### OnSettlementEntered
`public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `settlement entered` event is raised.

```csharp
// Obtain an instance of BanditSpawnCampaignBehavior from the subsystem API first
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
banditSpawnCampaignBehavior.OnSettlementEntered(mobileParty, settlement, hero);
```

### DailyTick
`public void DailyTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BanditSpawnCampaignBehavior from the subsystem API first
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
banditSpawnCampaignBehavior.DailyTick();
```

### AddBanditToHideout
`public MobileParty AddBanditToHideout(Hideout hideoutComponent, PartyTemplateObject overridenPartyTemplate = null, bool isBanditBossParty = false)`

**Purpose:** Adds `bandit to hideout` to the current collection or state.

```csharp
// Obtain an instance of BanditSpawnCampaignBehavior from the subsystem API first
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
var result = banditSpawnCampaignBehavior.AddBanditToHideout(hideoutComponent, null, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BanditSpawnCampaignBehavior banditSpawnCampaignBehavior = ...;
banditSpawnCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)