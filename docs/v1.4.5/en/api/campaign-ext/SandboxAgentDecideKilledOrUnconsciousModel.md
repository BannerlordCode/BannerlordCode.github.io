<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxAgentDecideKilledOrUnconsciousModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxAgentDecideKilledOrUnconsciousModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentDecideKilledOrUnconsciousModel : AgentDecideKilledOrUnconsciousModel`
**Base:** `AgentDecideKilledOrUnconsciousModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentDecideKilledOrUnconsciousModel.cs`

## Overview

`SandboxAgentDecideKilledOrUnconsciousModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxAgentDecideKilledOrUnconsciousModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAgentStateProbability
`public override float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)`

**Purpose:** Gets the current value of `agent state probability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxAgentDecideKilledOrUnconsciousModel>(new MySandboxAgentDecideKilledOrUnconsciousModel());
```

## See Also

- [Complete Class Catalog](../catalog)