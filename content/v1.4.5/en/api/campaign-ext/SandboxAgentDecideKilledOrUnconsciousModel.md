---
title: "SandboxAgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for SandboxAgentDecideKilledOrUnconsciousModel."
---
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`SandboxAgentDecideKilledOrUnconsciousModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAgentDecideKilledOrUnconsciousModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** **Purpose:** Reads and returns the agent state probability value held by the this instance.

```csharp
// Obtain an instance of SandboxAgentDecideKilledOrUnconsciousModel from the subsystem API first
SandboxAgentDecideKilledOrUnconsciousModel sandboxAgentDecideKilledOrUnconsciousModel = ...;
var result = sandboxAgentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAgentDecideKilledOrUnconsciousModel>(new MySandboxAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Area Index](../)