---
title: "AchievementsCampaignBehavior"
description: "Auto-generated class reference for AchievementsCampaignBehavior."
---
# AchievementsCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class AchievementsCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/AchievementsCampaignBehavior.cs`

## Overview

`AchievementsCampaignBehavior` lives in `StoryMode.GameComponents.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GameComponents.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.SyncData(dataStore);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.RegisterEvents();
```

### CheckAchievementSystemActivity
`public bool CheckAchievementSystemActivity(out TextObject reason)`

**Purpose:** Verifies whether achievement system activity holds true for the this instance.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
var result = achievementsCampaignBehavior.CheckAchievementSystemActivity(reason);
```

### OnRadagosDuelWon
`public void OnRadagosDuelWon()`

**Purpose:** Invoked when the radagos duel won event is raised.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnRadagosDuelWon();
```

### DeactivateAchievements
`public void DeactivateAchievements(TextObject reason = null, bool showMessage = true, bool temporarily = false)`

**Purpose:** Deactivates the resource, state, or feature associated with achievements.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.DeactivateAchievements(null, false, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**Purpose:** Invoked when the score hit event is raised.

```csharp
// Obtain an instance of AchievementsCampaignBehavior from the subsystem API first
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AchievementsCampaignBehavior achievementsCampaignBehavior = ...;
achievementsCampaignBehavior.SyncData(dataStore);
```

## See Also

- [Area Index](../)