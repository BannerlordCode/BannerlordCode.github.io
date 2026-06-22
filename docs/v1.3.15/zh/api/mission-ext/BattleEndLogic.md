<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleEndLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleEndLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleEndLogic : MissionLogic, IBattleEndLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattleEndLogic.cs`

## 概述

`BattleEndLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new BattleEndLogic())` 添加；继承它可定制。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerVictory` | `public bool PlayerVictory { get { return (this._isEnemySideRetreating || this._isEnemySideDepleted) && !this._isEnemyDefenderPulledBack; }` |
| `EnemyVictory` | `public bool EnemyVictory { get { return this._isPlayerSideRetreating || this._isPlayerSideDepleted; }` |
| `IsEnemySideRetreating` | `public bool IsEnemySideRetreating { get { return this._isEnemySideRetreating; }` |

## 主要方法

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

## 使用示例

```csharp
// BattleEndLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new BattleEndLogic());
```

## 参见

- [完整类目录](../catalog)