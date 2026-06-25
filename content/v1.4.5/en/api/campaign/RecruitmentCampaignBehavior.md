---
title: "RecruitmentCampaignBehavior"
description: "Auto-generated class reference for RecruitmentCampaignBehavior."
---
# RecruitmentCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RecruitmentCampaignBehavior.cs`

## Overview

`RecruitmentCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |

## Key Methods

### ChangeMercenaryType
`public void ChangeMercenaryType(CharacterObject troopType, int number)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.ChangeMercenaryType(troopType, 0);
```

### ChangeMercenaryCount
`public void ChangeMercenaryCount(int difference)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.ChangeMercenaryCount(0);
```

### HasAvailableMercenary
`public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)`

**Purpose:** Determines whether the current object already holds `available mercenary`.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
var result = recruitmentCampaignBehavior.HasAvailableMercenary(occupation.NotAssigned);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.SyncData(dataStore);
```

### GetMercenaryData
`public TownMercenaryData GetMercenaryData(Town town)`

**Purpose:** Reads and returns the `mercenary data` value held by the current object.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
var result = recruitmentCampaignBehavior.GetMercenaryData(town);
```

### HourlyTickParty
`public void HourlyTickParty(MobileParty mobileParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.HourlyTickParty(mobileParty);
```

### OnBeforeSettlementEntered
`public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)`

**Purpose:** Invoked when the `before settlement entered` event is raised.

```csharp
// Obtain an instance of RecruitmentCampaignBehavior from the subsystem API first
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.OnBeforeSettlementEntered(mobileParty, settlement, hero);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitmentCampaignBehavior recruitmentCampaignBehavior = ...;
recruitmentCampaignBehavior.ChangeMercenaryType(troopType, 0);
```

## See Also

- [Area Index](../)