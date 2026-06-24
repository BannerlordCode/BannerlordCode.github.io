<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCombatantsLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCombatantsLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCombatantsLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs`

## 概述

`MissionCombatantsLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionCombatantsLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerSide` | `public BattleSideEnum PlayerSide { get; }` |

## 主要方法

### GetBannerForSide
`public Banner GetBannerForSide(BattleSideEnum side)`

**用途 / Purpose:** 获取 `banner for side` 的当前值。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### GetAllCombatants
`public IEnumerable<IBattleCombatant> GetAllCombatants()`

**用途 / Purpose:** 获取 `all combatants` 的当前值。

### SupportsAllyTeamOnPlayerSide
`public static bool SupportsAllyTeamOnPlayerSide(IEnumerable<IBattleCombatant> playerSideBattleCombatants, IBattleCombatant playerBattleCombatant, bool isPlayerSergeant, bool isNavalLandHybridMission, out IBattleCombatant allyCombatant)`

**用途 / Purpose:** 处理 `supports ally team on player side` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionCombatantsLogic());
```

## 参见

- [完整类目录](../catalog)