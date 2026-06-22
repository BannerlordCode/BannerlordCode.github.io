<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCombatantsLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## 概述

`MissionCombatantsLogic` 是一个 MissionLogic（MissionBehavior 的子类），在任务中运行每-tick/事件逻辑。通过 `mission.AddMissionBehavior(new MissionCombatantsLogic())` 添加；继承它可定制。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerSide` | `public BattleSideEnum PlayerSide { get { if (this.PlayerBattleCombatant == null) { return BattleSideEnum.None; }` |

## 主要方法

### GetBannerForSide
```csharp
public Banner GetBannerForSide(BattleSideEnum side)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### AfterStart
```csharp
public override void AfterStart()
```

### GetAllCombatants
```csharp
public IEnumerable<IBattleCombatant> GetAllCombatants()
```

### SupportsAllyTeamOnPlayerSide
```csharp
public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, out IBattleCombatant allyCombatant)
```

## 使用示例

```csharp
// MissionCombatantsLogic (Logic) 的典型用法
Mission.Current.AddMissionBehavior(new MissionCombatantsLogic());
```

## 参见

- [完整类目录](../catalog)