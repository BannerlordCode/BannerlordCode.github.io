---
title: "AgentDecideKilledOrUnconsciousModel"
description: "Auto-generated class reference for AgentDecideKilledOrUnconsciousModel."
---
# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`

## Overview

`AgentDecideKilledOrUnconsciousModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `AgentDecideKilledOrUnconsciousModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentStateProbability
`public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Reads and returns the agent state probability value held by the this instance.

```csharp
// Obtain an instance of AgentDecideKilledOrUnconsciousModel from the subsystem API first
AgentDecideKilledOrUnconsciousModel agentDecideKilledOrUnconsciousModel = ...;
var result = agentDecideKilledOrUnconsciousModel.GetAgentStateProbability(affectorAgent, effectedAgent, damageType, weaponFlags, useSurgeryProbability);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentDecideKilledOrUnconsciousModel instance = ...;
```

## See Also

- [Area Index](../)