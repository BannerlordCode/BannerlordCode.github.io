<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownHorseRaceAgentController`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TownHorseRaceAgentController

**Namespace:** SandBox.Tournaments.AgentControllers
**Module:** SandBox.Tournaments
**Type:** `public class TownHorseRaceAgentController : AgentController`
**Base:** `AgentController`
**File:** `SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs`

## 概述

`TownHorseRaceAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `TownHorseRaceAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnInitialize
`public override void OnInitialize()`

**用途 / Purpose:** 当 `initialize` 事件触发时调用此方法。

### DisableMovement
`public void DisableMovement()`

**用途 / Purpose:** 处理 `disable movement` 相关逻辑。

### Start
`public void Start()`

**用途 / Purpose:** 处理 `start` 相关逻辑。

### OnEnterCheckPoint
`public void OnEnterCheckPoint(VolumeBox checkPoint)`

**用途 / Purpose:** 当 `enter check point` 事件触发时调用此方法。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<TownHorseRaceAgentController>();
```

## 参见

- [完整类目录](../catalog)