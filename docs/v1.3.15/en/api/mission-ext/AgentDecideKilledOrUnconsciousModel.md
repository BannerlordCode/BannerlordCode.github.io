<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentDecideKilledOrUnconsciousModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`

## Overview

`AgentDecideKilledOrUnconsciousModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<AgentDecideKilledOrUnconsciousModel>(new MyAgentDecideKilledOrUnconsciousModel())` to change how it computes.

## Key Methods

### GetAgentStateProbability
```csharp
public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)
```

## Usage Example

```csharp
// Typical usage of AgentDecideKilledOrUnconsciousModel (Model)
Game.Current.ReplaceModel<AgentDecideKilledOrUnconsciousModel>(new MyAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Complete Class Catalog](../catalog)