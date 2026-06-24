<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownHorseRaceMissionController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TownHorseRaceMissionController

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceMissionController : MissionLogic, ITournamentGameBehavior`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TownHorseRaceMissionController.cs`

## 概述

`TownHorseRaceMissionController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TownHorseRaceMissionController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `CheckPoints` | `public List<CheckPoint> CheckPoints { get; }` |

## 主要方法

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**用途 / Purpose:** 获取 `best target position` 的当前值。

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `to check list`。

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `from check list`。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 处理 `start match` 相关逻辑。

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 处理 `skip match` 相关逻辑。

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 处理 `is match ended` 相关逻辑。

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 当 `match ended` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceMissionController>();
```

## 参见

- [完整类目录](../catalog)