---
title: "PrisonerRecruitCampaignBehavior"
description: "Auto-generated class reference for PrisonerRecruitCampaignBehavior."
---
# PrisonerRecruitCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PrisonerRecruitCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/PrisonerRecruitCampaignBehavior.cs`

## Overview

`PrisonerRecruitCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PrisonerRecruitCampaignBehavior from the subsystem API first
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
prisonerRecruitCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of PrisonerRecruitCampaignBehavior from the subsystem API first
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
prisonerRecruitCampaignBehavior.SyncData(dataStore);
```

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Invoked when the `session launched` event is raised.

```csharp
// Obtain an instance of PrisonerRecruitCampaignBehavior from the subsystem API first
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
prisonerRecruitCampaignBehavior.OnSessionLaunched(campaignGameStarter);
```

### conversation_prisoner_recruit_on_condition
`public bool conversation_prisoner_recruit_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PrisonerRecruitCampaignBehavior from the subsystem API first
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
var result = prisonerRecruitCampaignBehavior.conversation_prisoner_recruit_on_condition();
```

### conversation_prisoner_recruit_no_on_condition
`public bool conversation_prisoner_recruit_no_on_condition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of PrisonerRecruitCampaignBehavior from the subsystem API first
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
var result = prisonerRecruitCampaignBehavior.conversation_prisoner_recruit_no_on_condition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PrisonerRecruitCampaignBehavior prisonerRecruitCampaignBehavior = ...;
prisonerRecruitCampaignBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)