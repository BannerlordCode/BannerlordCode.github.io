---
title: "PartyDiplomaticHandlerCampaignBehavior"
description: "Auto-generated class reference for PartyDiplomaticHandlerCampaignBehavior."
---
# PartyDiplomaticHandlerCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyDiplomaticHandlerCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PartyDiplomaticHandlerCampaignBehavior.cs`

## Overview

`PartyDiplomaticHandlerCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PartyDiplomaticHandlerCampaignBehavior from the subsystem API first
PartyDiplomaticHandlerCampaignBehavior partyDiplomaticHandlerCampaignBehavior = ...;
partyDiplomaticHandlerCampaignBehavior.RegisterEvents();
```

### hostile_action_end_by_peace_on_init
`public static void hostile_action_end_by_peace_on_init(MenuCallbackArgs args)`

**Purpose:** Executes the hostile_action_end_by_peace_on_init logic.

```csharp
// Static call; no instance required
PartyDiplomaticHandlerCampaignBehavior.hostile_action_end_by_peace_on_init(args);
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of PartyDiplomaticHandlerCampaignBehavior from the subsystem API first
PartyDiplomaticHandlerCampaignBehavior partyDiplomaticHandlerCampaignBehavior = ...;
partyDiplomaticHandlerCampaignBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyDiplomaticHandlerCampaignBehavior partyDiplomaticHandlerCampaignBehavior = ...;
partyDiplomaticHandlerCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)