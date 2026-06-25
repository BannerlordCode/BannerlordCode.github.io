---
title: "DefeatTheConspiracyQuestBehavior"
description: "Auto-generated class reference for DefeatTheConspiracyQuestBehavior."
---
# DefeatTheConspiracyQuestBehavior

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuestBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## Overview

`DefeatTheConspiracyQuestBehavior` lives in `StoryMode.Quests.ThirdPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.ThirdPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### CalculateReinforcedWarScore
`public void CalculateReinforcedWarScore()`

**Purpose:** **Purpose:** Calculates the current value or result of reinforced war score.

```csharp
// Obtain an instance of DefeatTheConspiracyQuestBehavior from the subsystem API first
DefeatTheConspiracyQuestBehavior defeatTheConspiracyQuestBehavior = ...;
defeatTheConspiracyQuestBehavior.CalculateReinforcedWarScore();
```

### IsMobilePartyCreatedForQuest
`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`

**Purpose:** **Purpose:** Determines whether the this instance is in the mobile party created for quest state or condition.

```csharp
// Obtain an instance of DefeatTheConspiracyQuestBehavior from the subsystem API first
DefeatTheConspiracyQuestBehavior defeatTheConspiracyQuestBehavior = ...;
var result = defeatTheConspiracyQuestBehavior.IsMobilePartyCreatedForQuest(mobileParty);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DefeatTheConspiracyQuestBehavior from the subsystem API first
DefeatTheConspiracyQuestBehavior defeatTheConspiracyQuestBehavior = ...;
defeatTheConspiracyQuestBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of DefeatTheConspiracyQuestBehavior from the subsystem API first
DefeatTheConspiracyQuestBehavior defeatTheConspiracyQuestBehavior = ...;
defeatTheConspiracyQuestBehavior.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefeatTheConspiracyQuestBehavior defeatTheConspiracyQuestBehavior = ...;
defeatTheConspiracyQuestBehavior.CalculateReinforcedWarScore();
```

## See Also

- [Area Index](../)