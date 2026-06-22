<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AmmoSupplyLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## 概述

`AmmoSupplyLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new AmmoSupplyLogic())` 添加；继承它可定制。

## 主要方法

### IsAgentEligibleForAmmoSupply
```csharp
public bool IsAgentEligibleForAmmoSupply(Agent agent)
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## 使用示例

```csharp
// AmmoSupplyLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new AmmoSupplyLogic());
```

## 参见

- [完整类目录](../catalog)