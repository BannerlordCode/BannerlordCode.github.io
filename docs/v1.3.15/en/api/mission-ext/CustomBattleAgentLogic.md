<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleAgentLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAgentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs`

## Overview

`CustomBattleAgentLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new CustomBattleAgentLogic())`; subclass it to customize.

## Key Methods

### OnAgentHit
```csharp
public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## Usage Example

```csharp
// Typical usage of CustomBattleAgentLogic (Logic)
Mission.Current.AddMissionBehavior(new CustomBattleAgentLogic());
```

## See Also

- [Complete Class Catalog](../catalog)