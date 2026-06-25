---
title: "CommonVillagersCampaignBehavior"
description: "Auto-generated class reference for CommonVillagersCampaignBehavior."
---
# CommonVillagersCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class CommonVillagersCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/CommonVillagersCampaignBehavior.cs`

## Overview

`CommonVillagersCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session launched` event is raised.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementDetail detail)`

**Purpose:** Invoked when the `settlement owner changed` event is raised.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

### conversation_town_or_village_escort_complete_on_condition
`public bool conversation_town_or_village_escort_complete_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
var result = commonVillagersCampaignBehavior.conversation_town_or_village_escort_complete_on_condition();
```

### conversation_town_or_village_escort_complete_on_consequence
`public void conversation_town_or_village_escort_complete_on_consequence()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CommonVillagersCampaignBehavior from the subsystem API first
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.conversation_town_or_village_escort_complete_on_consequence();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CommonVillagersCampaignBehavior commonVillagersCampaignBehavior = ...;
commonVillagersCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)