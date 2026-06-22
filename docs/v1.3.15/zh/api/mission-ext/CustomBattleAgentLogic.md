<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleAgentLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleAgentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs`

## 概述

`CustomBattleAgentLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new CustomBattleAgentLogic())` 添加；继承它可定制。

## 主要方法

### OnAgentHit
```csharp
public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

## 使用示例

```csharp
// CustomBattleAgentLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new CustomBattleAgentLogic());
```

## 参见

- [完整类目录](../catalog)