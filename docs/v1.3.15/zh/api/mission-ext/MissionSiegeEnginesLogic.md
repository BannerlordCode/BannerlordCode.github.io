<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSiegeEnginesLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## 概述

`MissionSiegeEnginesLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionSiegeEnginesLogic())` 添加；继承它可定制。

## 主要方法

### GetSiegeWeaponsController
```csharp
public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)
```

### GetMissionSiegeWeapons
```csharp
public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)
```

## 使用示例

```csharp
// MissionSiegeEnginesLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionSiegeEnginesLogic());
```

## 参见

- [完整类目录](../catalog)