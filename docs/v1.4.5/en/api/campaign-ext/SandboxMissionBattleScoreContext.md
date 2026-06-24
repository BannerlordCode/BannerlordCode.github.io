<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxMissionBattleScoreContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxMissionBattleScoreContext

**Namespace:** SandBox.Missions.BattleScore
**Module:** SandBox.Missions
**Type:** `public class SandboxMissionBattleScoreContext : BattleScoreContext`
**Base:** `BattleScoreContext`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.BattleScore/SandboxMissionBattleScoreContext.cs`

## Overview

`SandboxMissionBattleScoreContext` lives in `SandBox.Missions.BattleScore` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.BattleScore` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetAttackerBanner
`public override Banner GetAttackerBanner()`

**Purpose:** Gets the current value of `attacker banner`.

### GetDefenderBanner
`public override Banner GetDefenderBanner()`

**Purpose:** Gets the current value of `defender banner`.

## Usage Example

```csharp
var value = new SandboxMissionBattleScoreContext();
value.GetAttackerBanner();
```

## See Also

- [Complete Class Catalog](../catalog)