---
title: "DefeatTheConspiracyQuest"
description: "Auto-generated class reference for DefeatTheConspiracyQuest."
---
# DefeatTheConspiracyQuest

**Namespace:** StoryMode.Quests.ThirdPhase
**Module:** StoryMode.Quests
**Type:** `public class DefeatTheConspiracyQuest`
**Base:** none
**File:** `Modules.StoryMode/StoryMode/StoryMode.Quests.ThirdPhase/DefeatTheConspiracyQuestBehavior.cs`

## Overview

`DefeatTheConspiracyQuest` lives in `StoryMode.Quests.ThirdPhase` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Quests.ThirdPhase` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public override TextObject Title { get; }` |

## Key Methods

### CalculateReinforcedWarScore
`public void CalculateReinforcedWarScore()`

**Purpose:** Calculates the current value or result of `reinforced war score`.

```csharp
// Obtain an instance of DefeatTheConspiracyQuest from the subsystem API first
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.CalculateReinforcedWarScore();
```

### IsMobilePartyCreatedForQuest
`public bool IsMobilePartyCreatedForQuest(MobileParty mobileParty)`

**Purpose:** Determines whether the current object is in the `mobile party created for quest` state or condition.

```csharp
// Obtain an instance of DefeatTheConspiracyQuest from the subsystem API first
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
var result = defeatTheConspiracyQuest.IsMobilePartyCreatedForQuest(mobileParty);
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Registers `events` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of DefeatTheConspiracyQuest from the subsystem API first
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Synchronizes `data` across the relevant contexts or systems.

```csharp
// Obtain an instance of DefeatTheConspiracyQuest from the subsystem API first
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.SyncData(dataStore);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefeatTheConspiracyQuest defeatTheConspiracyQuest = ...;
defeatTheConspiracyQuest.CalculateReinforcedWarScore();
```

## See Also

- [Area Index](../)