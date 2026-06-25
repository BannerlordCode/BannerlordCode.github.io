---
title: "PlayerCaptivityCampaignBehavior"
description: "Auto-generated class reference for PlayerCaptivityCampaignBehavior."
---
# PlayerCaptivityCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerCaptivityCampaignBehavior : CampaignBehaviorBase, ICaptivityCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/PlayerCaptivityCampaignBehavior.cs`

## Overview

`PlayerCaptivityCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of PlayerCaptivityCampaignBehavior from the subsystem API first
PlayerCaptivityCampaignBehavior playerCaptivityCampaignBehavior = ...;
playerCaptivityCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of PlayerCaptivityCampaignBehavior from the subsystem API first
PlayerCaptivityCampaignBehavior playerCaptivityCampaignBehavior = ...;
playerCaptivityCampaignBehavior.RegisterEvents();
```

### CheckCaptivityChange
`public void CheckCaptivityChange(float dt)`

**Purpose:** Verifies whether captivity change holds true for the this instance.

```csharp
// Obtain an instance of PlayerCaptivityCampaignBehavior from the subsystem API first
PlayerCaptivityCampaignBehavior playerCaptivityCampaignBehavior = ...;
playerCaptivityCampaignBehavior.CheckCaptivityChange(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PlayerCaptivityCampaignBehavior playerCaptivityCampaignBehavior = ...;
playerCaptivityCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)