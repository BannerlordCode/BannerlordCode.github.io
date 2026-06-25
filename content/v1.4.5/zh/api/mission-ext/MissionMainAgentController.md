---
title: "MissionMainAgentController"
description: "MissionMainAgentController 的自动生成类参考。"
---
# MissionMainAgentController

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentController : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentController.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 在 locked agent changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnLockedAgentChangedDelegate(newAgent);
```

### OnPotentialLockedAgentChangedDelegate
`public delegate void OnPotentialLockedAgentChangedDelegate(Agent newPotentialAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 potential locked agent changed delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnPotentialLockedAgentChangedDelegate(newPotentialAgent);
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnMissionScreenFinalize();
```

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ready 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
var result = missionMainAgentController.IsReady();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 pre mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnPreMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent deleted 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnAgentDeleted(affectedAgent);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** **用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnClearScene();
```

### BreakAgentVisualsInvulnerability
`public void BreakAgentVisualsInvulnerability()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BreakAgentVisualsInvulnerability 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.BreakAgentVisualsInvulnerability();
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 there agent action 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
var result = missionMainAgentController.IsThereAgentAction(userAgent, otherAgent);
```

### Disable
`public void Disable()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Disable 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.Disable();
```

### Enable
`public void Enable()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Enable 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.Enable();
```

### OnWeaponUsageToggleRequested
`public void OnWeaponUsageToggleRequested()`

**用途 / Purpose:** **用途 / Purpose:** 在 weapon usage toggle requested 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.OnWeaponUsageToggleRequested();
```

### AddOverrideControlsForFrame
`public void AddOverrideControlsForFrame(OverrideMainAgentControlFlag overrideFlag)`

**用途 / Purpose:** **用途 / Purpose:** 将 override controls for frame 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentController 实例
MissionMainAgentController missionMainAgentController = ...;
missionMainAgentController.AddOverrideControlsForFrame(overrideFlag);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<MissionMainAgentController>();
```

## 参见

- [本区域目录](../)