---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for StoryModeAgentDecideKilledOrUnconsciousModel."
---
# StoryModeAgentDecideKilledOrUnconsciousModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`StoryModeAgentDecideKilledOrUnconsciousModel` is a story-progress guard wrapped around the ordinary death logic. Its single override, `GetAgentStateProbability` (`StoryMode/GameComponents/StoryModeAgentDecideKilledOrUnconsciousModel.cs:13`), sets `useSurgeryProbability` to `1f` and then applies two hard vetoes: while the main storyline is unfinished, death is forbidden outright for the Elder Brother, Radagos and Radagos's henchman (`:16`), and during the tutorial phase it is forbidden for anyone in a mission with more than four members on their side (`:20`). Only when neither veto fires does it fall through to `base.BaseModel.GetAgentStateProbability` (`:24`) — the sandbox implementation with its `PartyHealingModel` survival roll.

## Mental Model

This is a wrapper, not a replacement, and the difference matters for anyone extending it. Every method reaches the real implementation through `base.BaseModel`, the decorator the base model installs, so the story model adds policy on top of whatever sandbox model is in the chain rather than reimplementing it. `Mission.cs:4707` is the single consumer and it cannot tell which model answered. The vetoes are keyed to named story heroes by identity comparison against `StoryModeHeroes` (`:16`), not by hero tier or flags — so a mod that adds its own protected character must extend that condition explicitly, and a mod that removes one of those heroes should expect the death roll to resume immediately because the guard only ever tests the three names. Note also the tutorial veto is scoped to missions with five or more on the side, so a small tutorial skirmish remains lethal by design.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Reads and returns the agent state probability value held by this instance.

```csharp
StoryModeAgentDecideKilledOrUnconsciousModel storyModeAgentDecideKilledOrUnconsciousModel = ...;
var result = storyModeAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AgentDecideKilledOrUnconsciousModel>(new StoryModeAgentDecideKilledOrUnconsciousModel());
}
```

`AgentDecideKilledOrUnconsciousModel` is declared as `MBGameModel<AgentDecideKilledOrUnconsciousModel>` (`AgentDecideKilledOrUnconsciousModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `StoryModeSubModule.cs:100`.

## See Also

- [Area Index](../)