<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletSingleplayerOrderUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletSingleplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerOrderUIHandler : GauntletOrderUIHandler, ISiegeDeploymentView`
**Base:** `GauntletOrderUIHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletSingleplayerOrderUIHandler.cs`

## 概述

`MissionGauntletSingleplayerOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionGauntletSingleplayerOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |
| `IsDeployment` | `public override bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public override bool IsSiegeDeployment { get; }` |

## 主要方法

### OnConversationBegin
`public override void OnConversationBegin()`

**用途 / Purpose:** 当 `conversation begin` 事件触发时调用此方法。

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnAutoDeploy
`public void OnAutoDeploy()`

**用途 / Purpose:** 当 `auto deploy` 事件触发时调用此方法。

### OnBeginMission
`public void OnBeginMission()`

**用途 / Purpose:** 当 `begin mission` 事件触发时调用此方法。

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnAfterDeploymentFinished
`public override void OnAfterDeploymentFinished()`

**用途 / Purpose:** 当 `after deployment finished` 事件触发时调用此方法。

### ClearFormationSelection
`public void ClearFormationSelection()`

**用途 / Purpose:** 处理 `clear formation selection` 相关逻辑。

### OnFiltersSet
`public void OnFiltersSet(List<MissionOrderVM.FormationConfiguration> filterData)`

**用途 / Purpose:** 当 `filters set` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletSingleplayerOrderUIHandler());
```

## 参见

- [完整类目录](../catalog)