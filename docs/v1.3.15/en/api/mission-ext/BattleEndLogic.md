<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleEndLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## Overview

`BattleEndLogic` is a MissionLogic (a MissionBehavior subclass) running per-tick/event logic in a mission. Add via `mission.AddMissionBehavior(new BattleEndLogic())`; subclass it to customize.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get { return (this._isEnemySideRetreating || this._isEnemySideDepleted) && !this._isEnemyDefenderPulledBack; }` |
| `EnemyVictory` | `public bool EnemyVictory { get { return this._isPlayerSideRetreating || this._isPlayerSideDepleted; }` |
| `IsEnemySideRetreating` | `public bool IsEnemySideRetreating { get { return this._isEnemySideRetreating; }` |

## Key Methods

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### MissionEnded
```csharp
public override bool MissionEnded(ref MissionResult missionResult)
```

### ChangeCanCheckForEndCondition
```csharp
public void ChangeCanCheckForEndCondition(bool canCheckForEndCondition)
```

### TryExit
```csharp
public BattleEndLogic.ExitResult TryExit()
```

### EnableEnemyDefenderPullBack
```csharp
public void EnableEnemyDefenderPullBack(int neededTroopNumber)
```

### SetNotificationDisabled
```csharp
public void SetNotificationDisabled(bool value)
```

## Usage Example

```csharp
// Typical usage of BattleEndLogic (Logic)
Mission.Current.AddMissionBehavior(new BattleEndLogic());
```

## See Also

- [Complete Class Catalog](../catalog)