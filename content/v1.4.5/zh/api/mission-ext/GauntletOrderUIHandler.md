---
title: "GauntletOrderUIHandler"
description: "GauntletOrderUIHandler 的自动生成类参考。"
---
# GauntletOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class GauntletOrderUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletOrderUIHandler.cs`

## 概述

`GauntletOrderUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GauntletOrderUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDeployment` | `public abstract bool IsDeployment { get; }` |
| `IsSiegeDeployment` | `public abstract bool IsSiegeDeployment { get; }` |
| `IsValidForTick` | `public abstract bool IsValidForTick { get; }` |
| `CursorState` | `public CursorStates CursorState { get; }` |
| `IsOrderMenuActive` | `public bool IsOrderMenuActive { get; }` |
| `IsAnyOrderSetActive` | `public bool IsAnyOrderSetActive { get; }` |
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## 主要方法

### SelectFormationAtIndex
`public virtual void SelectFormationAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SelectFormationAtIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.SelectFormationAtIndex(0);
```

### DeselectFormationAtIndex
`public virtual void DeselectFormationAtIndex(int index)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeselectFormationAtIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.DeselectFormationAtIndex(0);
```

### OnMissionScreenActivate
`public override void OnMissionScreenActivate()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen activate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenActivate();
```

### OnMissionScreenDeactivate
`public override void OnMissionScreenDeactivate()`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen deactivate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenDeactivate();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission screen tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnMissionScreenTick(0);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnEscape
`public override bool OnEscape()`

**用途 / Purpose:** **用途 / Purpose:** 在 escape 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.OnEscape();
```

### IsReady
`public override bool IsReady()`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 ready 状态或条件。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
var result = gauntletOrderUIHandler.IsReady();
```

### OnActivateToggleOrder
`public void OnActivateToggleOrder()`

**用途 / Purpose:** **用途 / Purpose:** 在 activate toggle order 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnActivateToggleOrder();
```

### OnDeactivateToggleOrder
`public void OnDeactivateToggleOrder()`

**用途 / Purpose:** **用途 / Purpose:** 在 deactivate toggle order 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletOrderUIHandler 实例
GauntletOrderUIHandler gauntletOrderUIHandler = ...;
gauntletOrderUIHandler.OnDeactivateToggleOrder();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GauntletOrderUIHandler instance = ...;
```

## 参见

- [本区域目录](../)