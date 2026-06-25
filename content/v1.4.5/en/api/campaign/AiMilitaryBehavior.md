---
title: "AiMilitaryBehavior"
description: "Auto-generated class reference for AiMilitaryBehavior."
---
# AiMilitaryBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AiMilitaryBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiMilitaryBehavior.cs`

## Overview

`AiMilitaryBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AiMilitaryBehavior from the subsystem API first
AiMilitaryBehavior aiMilitaryBehavior = ...;
aiMilitaryBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of AiMilitaryBehavior from the subsystem API first
AiMilitaryBehavior aiMilitaryBehavior = ...;
aiMilitaryBehavior.SyncData(dataStore);
```

### FindBestTargetAndItsValueForFaction
`public void FindBestTargetAndItsValueForFaction(Army.ArmyTypes missionType, PartyThinkParams p, float ourStrength)`

**Purpose:** Looks up the matching best target and its value for faction in the current collection or scope.

```csharp
// Obtain an instance of AiMilitaryBehavior from the subsystem API first
AiMilitaryBehavior aiMilitaryBehavior = ...;
aiMilitaryBehavior.FindBestTargetAndItsValueForFaction(missionType, p, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AiMilitaryBehavior aiMilitaryBehavior = ...;
aiMilitaryBehavior.RegisterEvents();
```

## See Also

- [Area Index](../)