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

`StoryModeAgentDecideKilledOrUnconsciousModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeAgentDecideKilledOrUnconsciousModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** **Purpose:** Reads and returns the agent state probability value held by the this instance.

```csharp
// Obtain an instance of StoryModeAgentDecideKilledOrUnconsciousModel from the subsystem API first
StoryModeAgentDecideKilledOrUnconsciousModel storyModeAgentDecideKilledOrUnconsciousModel = ...;
var result = storyModeAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeAgentDecideKilledOrUnconsciousModel>(new MyStoryModeAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Area Index](../)