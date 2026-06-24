<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentController`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentController : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentController.cs`

## 概述

`MissionMainAgentController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `MissionMainAgentController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `CustomLookDir` | `public Vec3 CustomLookDir { get; set; }` |
| `IsPlayerAiming` | `public bool IsPlayerAiming { get; }` |
| `LockedAgent` | `public Agent LockedAgent { get; }` |
| `PotentialLockTargetAgent` | `public Agent PotentialLockTargetAgent { get; }` |

## 主要方法

### OnLockedAgentChangedDelegate
`public delegate void OnLockedAgentChangedDelegate(Agent newAgent)`

**用途 / Purpose:** 当 `locked agent changed delegate` 事件触发时调用此方法。

### OnPotentialLockedAgentChangedDelegate
`public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)`

**用途 / Purpose:** 当 `potential locked agent changed delegate` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** 处理 `is ready` 相关逻辑。

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** 当 `agent deleted` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### BreakAgentVisualsInvulnerability
`public void BreakAgentVisualsInvulnerability()`

**用途 / Purpose:** 处理 `break agent visuals invulnerability` 相关逻辑。

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** 处理 `is there agent action` 相关逻辑。

### Disable
`public void Disable()`

**用途 / Purpose:** 处理 `disable` 相关逻辑。

### Enable
`public void Enable()`

**用途 / Purpose:** 处理 `enable` 相关逻辑。

### OnWeaponUsageToggleRequested
`public void OnWeaponUsageToggleRequested()`

**用途 / Purpose:** 当 `weapon usage toggle requested` 事件触发时调用此方法。

### AddOverrideControlsForFrame
`public void AddOverrideControlsForFrame(OverrideMainAgentControlFlag overrideFlag)`

**用途 / Purpose:** 向当前集合/状态中添加 `override controls for frame`。

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionMainAgentController>();
```

## 参见

- [完整类目录](../catalog)