---
title: "AiArmyMemberBehavior"
description: "Auto-generated class reference for AiArmyMemberBehavior."
---
# AiArmyMemberBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiArmyMemberBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiArmyMemberBehavior.cs`

## Overview

`AiArmyMemberBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AiArmyMemberBehavior from the subsystem API first
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of AiArmyMemberBehavior from the subsystem API first
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.SyncData(dataStore);
```

### AiHourlyTick
`public void AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AiArmyMemberBehavior from the subsystem API first
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.AiHourlyTick(mobileParty, p);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AiArmyMemberBehavior aiArmyMemberBehavior = ...;
aiArmyMemberBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)