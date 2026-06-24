<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TeamAISiegeComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TeamAISiegeComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class TeamAISiegeComponent : TeamAIComponent`
**Base:** `TeamAIComponent`
**File:** `TaleWorlds.MountAndBlade/TeamAISiegeComponent.cs`

## 概述

`TeamAISiegeComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `TeamAISiegeComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SiegeLanes` | `public static List<SiegeLane> SiegeLanes { get; }` |
| `QuerySystem` | `public static SiegeQuerySystem QuerySystem { get; set; }` |
| `OuterGate` | `public CastleGate OuterGate { get; }` |
| `PrimarySiegeWeapons` | `public List<IPrimarySiegeWeapon> PrimarySiegeWeapons { get; }` |
| `InnerGate` | `public CastleGate InnerGate { get; }` |
| `Ladders` | `public MBReadOnlyList<SiegeLadder> Ladders { get; }` |
| `AreLaddersReady` | `public bool AreLaddersReady { get; }` |
| `DifficultNavmeshIDs` | `public List<int> DifficultNavmeshIDs { get; }` |

## 主要方法

### OnMissionFinalize
`public static void OnMissionFinalize()`

**用途 / Purpose:** 当 `mission finalize` 事件触发时调用此方法。

### CalculateIsChargePastWallsApplicable
`public bool CalculateIsChargePastWallsApplicable(FormationAI.BehaviorSide side)`

**用途 / Purpose:** 处理 `calculate is charge past walls applicable` 相关逻辑。

### SetAreLaddersReady
`public void SetAreLaddersReady(bool areLaddersReady)`

**用途 / Purpose:** 设置 `are ladders ready` 的值或状态。

### CalculateIsAnyLaneOpenToGetInside
`public bool CalculateIsAnyLaneOpenToGetInside()`

**用途 / Purpose:** 处理 `calculate is any lane open to get inside` 相关逻辑。

### CalculateIsAnyLaneOpenToGoOutside
`public bool CalculateIsAnyLaneOpenToGoOutside()`

**用途 / Purpose:** 处理 `calculate is any lane open to go outside` 相关逻辑。

### IsPrimarySiegeWeaponNavmeshFaceId
`public bool IsPrimarySiegeWeaponNavmeshFaceId(int id)`

**用途 / Purpose:** 处理 `is primary siege weapon navmesh face id` 相关逻辑。

### IsFormationGroupInsideCastle
`public static bool IsFormationGroupInsideCastle(MBList<Formation> formationGroup, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**用途 / Purpose:** 处理 `is formation group inside castle` 相关逻辑。

### IsFormationInsideCastle
`public static bool IsFormationInsideCastle(Formation formation, bool includeOnlyPositionedUnits, float thresholdPercentage = 0.4f)`

**用途 / Purpose:** 处理 `is formation inside castle` 相关逻辑。

### IsCastleBreached
`public bool IsCastleBreached()`

**用途 / Purpose:** 处理 `is castle breached` 相关逻辑。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomTeamAISiegeComponent();
```

## 参见

- [完整类目录](../catalog)