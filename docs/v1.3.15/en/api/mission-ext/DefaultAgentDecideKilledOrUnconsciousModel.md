<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultAgentDecideKilledOrUnconsciousModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultAgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `TaleWorlds.MountAndBlade/DefaultAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`DefaultAgentDecideKilledOrUnconsciousModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel())` to change how it computes.

## Key Methods

### GetAgentStateProbability
```csharp
public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)
```

## Usage Example

```csharp
// Typical usage of DefaultAgentDecideKilledOrUnconsciousModel (Model)
Game.Current.ReplaceModel<DefaultAgentDecideKilledOrUnconsciousModel>(new MyDefaultAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Complete Class Catalog](../catalog)