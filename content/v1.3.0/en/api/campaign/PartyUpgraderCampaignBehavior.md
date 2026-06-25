---
title: "PartyUpgraderCampaignBehavior"
description: "Auto-generated class reference for PartyUpgraderCampaignBehavior."
---
# PartyUpgraderCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyUpgraderCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PartyUpgraderCampaignBehavior.cs`

## Overview

`PartyUpgraderCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PartyUpgraderCampaignBehavior from the subsystem API first
PartyUpgraderCampaignBehavior partyUpgraderCampaignBehavior = ...;
partyUpgraderCampaignBehavior.RegisterEvents();
```

### DailyTickParty
`public void DailyTickParty(MobileParty party)`

**Purpose:** **Purpose:** Executes the DailyTickParty logic.

```csharp
// Obtain an instance of PartyUpgraderCampaignBehavior from the subsystem API first
PartyUpgraderCampaignBehavior partyUpgraderCampaignBehavior = ...;
partyUpgraderCampaignBehavior.DailyTickParty(party);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of PartyUpgraderCampaignBehavior from the subsystem API first
PartyUpgraderCampaignBehavior partyUpgraderCampaignBehavior = ...;
partyUpgraderCampaignBehavior.SyncData(dataStore);
```

### UpgradeReadyTroops
`public void UpgradeReadyTroops(PartyBase party)`

**Purpose:** **Purpose:** Executes the UpgradeReadyTroops logic.

```csharp
// Obtain an instance of PartyUpgraderCampaignBehavior from the subsystem API first
PartyUpgraderCampaignBehavior partyUpgraderCampaignBehavior = ...;
partyUpgraderCampaignBehavior.UpgradeReadyTroops(party);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyUpgraderCampaignBehavior partyUpgraderCampaignBehavior = ...;
partyUpgraderCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)