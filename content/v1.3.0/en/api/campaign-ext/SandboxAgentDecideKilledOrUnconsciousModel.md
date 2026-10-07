---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for SandboxAgentDecideKilledOrUnconsciousModel."
---
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`SandboxAgentDecideKilledOrUnconsciousModel` answers one question at the moment an agent's health hits zero: kill, knock unconscious, or leave them alive. Its single override, `GetAgentStateProbability` (`SandBox/GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs:15`), returns `1f` minus whatever `Campaign.Current.Models.PartyHealingModel.GetSurvivalChance` says (`:33`), so the model does not own the survival maths at all — it owns the campaign-side vetoes around it. Two of those are hard blocks: a hero who cannot die from a non-head hit returns `0f` outright (`:23`), and a human victim with no campaign agent component falls through to the surgery branch. It also reports `useSurgeryProbability` alongside the probability, and the stock model always sets that to `1f` (`:17`).

## Mental Model

This is a decision hook called once per lethal blow, not a stat block — `Mission.cs:4707` calls it while resolving the agent state, so whatever it returns is consumed immediately and nothing is cached. Two different scopes share the method: on the map it is wrapped in `if (Campaign.Current != null)` (`:21`), while inside a mission every agent is present. A modder replacing it must therefore decide whether the install is map-only, battle-only, or both, and the return value is a probability rather than a verdict — anything the model does not cover is delegated to `PartyHealingModel`, so returning `1f` unconditionally makes agents unkillable in combat without touching the healing model at all.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Reads and returns the agent state probability value held by this instance.

```csharp
SandboxAgentDecideKilledOrUnconsciousModel sandboxAgentDecideKilledOrUnconsciousModel = ...;
var result = sandboxAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<AgentDecideKilledOrUnconsciousModel>(new SandboxAgentDecideKilledOrUnconsciousModel());
}
```

`AgentDecideKilledOrUnconsciousModel` is declared as `MBGameModel<AgentDecideKilledOrUnconsciousModel>` (`AgentDecideKilledOrUnconsciousModel.cs:7`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxSubModule.cs:38`.

## See Also

- [Area Index](../)