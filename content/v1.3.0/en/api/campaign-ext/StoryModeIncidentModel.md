---
title: "StoryModeIncidentModel"
description: "Auto-generated class reference for StoryModeIncidentModel."
---
# StoryModeIncidentModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `StoryMode/GameComponents/StoryModeIncidentModel.cs`

## Overview

`StoryModeIncidentModel` controls how often random world events fire, and during the tutorial it silences all three of them. The global trigger probability (`StoryMode/GameComponents/StoryModeIncidentModel.cs:24`), the siege trigger probability (`:34`) and the wait-menu trigger probability (`:44`) each return `0f` when `TutorialPhase.Instance.IsCompleted` is false. The two cooldown properties, by contrast, are pure passthroughs (`:14`, `:19`) — the story module changes *whether* an incident can roll, not how long the system waits afterwards.

## Mental Model

The three zeroed members are compared against a per-tick random draw, so a probability of `0f` means the condition can never be true — it is a hard block expressed through the probability rather than a small number. That is why the tutorial needs no separate flag downstream: `IncidentsCampaignBehaviour.cs:85` and `:102` both roll against `GetIncidentTriggerGlobalProbability` using the main party's seeded random, and the siege and wait-menu checks at `:183` and `:188` use the other two, so every call site is already written as a probability comparison. An override that wants to allow some incidents during the tutorial therefore has to return a genuine probability rather than `true`, and it must return it for all three members or the player will meet a siege-only or wait-menu-only variant of the tutorial's silence. Note the null-safety difference from the neighbouring story models: `TutorialPhase.Instance` is dereferenced directly (`:26`), so this model assumes a tutorial phase object exists whenever it is consulted.

## Key Methods

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** Reads and returns the min global cooldown time value held by this instance.

```csharp
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** Reads and returns the max global cooldown time value held by this instance.

```csharp
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**Purpose:** Reads and returns the incident trigger global probability value held by this instance.

```csharp
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** Reads and returns the incident trigger probability during siege value held by this instance.

```csharp
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** Reads and returns the incident trigger probability during wait value held by this instance.

```csharp
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<IncidentModel>(new StoryModeIncidentModel());
}
```

`IncidentModel` is declared as `MBGameModel<IncidentModel>` (`IncidentModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:107`.

## See Also

- [Area Index](../)