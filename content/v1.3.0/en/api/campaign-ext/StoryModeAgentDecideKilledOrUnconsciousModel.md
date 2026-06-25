---
title: "StoryModeAgentDecideKilledOrUnconsciousModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeAgentDecideKilledOrUnconsciousModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `agent state probability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeAgentDecideKilledOrUnconsciousModel>(new MyStoryModeAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Complete Class Catalog](../catalog)