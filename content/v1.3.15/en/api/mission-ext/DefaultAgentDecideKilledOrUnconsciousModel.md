---
title: "DefaultAgentDecideKilledOrUnconsciousModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAgentDecideKilledOrUnconsciousModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `TaleWorlds.MountAndBlade/DefaultAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`DefaultAgentDecideKilledOrUnconsciousModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultAgentDecideKilledOrUnconsciousModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Gets the current value of `agent state probability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Complete Class Catalog](../catalog)