<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HighlightsController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HighlightsController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HighlightsController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/HighlightsController.cs`

## 概述

`HighlightsController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `HighlightsController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsHighlightsInitialized` | `public static bool IsHighlightsInitialized { get; }` |
| `IsAnyHighlightSaved` | `public bool IsAnyHighlightSaved { get; }` |
| `Id` | `public string Id { get; }` |
| `Description` | `public string Description { get; }` |
| `GroupId` | `public string GroupId { get; }` |
| `StartDelta` | `public int StartDelta { get; }` |
| `EndDelta` | `public int EndDelta { get; }` |
| `MinVisibilityScore` | `public float MinVisibilityScore { get; }` |
| `MaxHighlightDistance` | `public float MaxHighlightDistance { get; }` |
| `IsVisibilityRequired` | `public bool IsVisibilityRequired { get; }` |

## 主要方法

### RemoveHighlights
`public static void RemoveHighlights()`

**用途 / Purpose:** 从当前集合/状态中移除 `highlights`。

### GetHighlightTypeWithId
`public HighlightsController.HighlightType GetHighlightTypeWithId(string highlightId)`

**用途 / Purpose:** 获取 `highlight type with id` 的当前值。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### AddHighlightType
`public static void AddHighlightType(HighlightsController.HighlightType highlightType)`

**用途 / Purpose:** 向当前集合/状态中添加 `highlight type`。

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight)`

**用途 / Purpose:** 保存 `highlight` 数据。

### SaveHighlight
`public void SaveHighlight(HighlightsController.Highlight highlight, Vec3 position)`

**用途 / Purpose:** 保存 `highlight` 数据。

### CanSaveHighlight
`public bool CanSaveHighlight(HighlightsController.HighlightType highlightType, Vec3 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `save highlight`。

### GetPlayerIsLookingAtPositionScore
`public float GetPlayerIsLookingAtPositionScore(Vec3 position)`

**用途 / Purpose:** 获取 `player is looking at position score` 的当前值。

### CanSeePosition
`public bool CanSeePosition(Vec3 position)`

**用途 / Purpose:** 判断当前对象是否可以执行 `see position`。

### ShowSummary
`public void ShowSummary()`

**用途 / Purpose:** 处理 `show summary` 相关逻辑。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<HighlightsController>();
```

## 参见

- [完整类目录](../catalog)