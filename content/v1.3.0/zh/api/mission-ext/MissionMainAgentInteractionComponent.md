---
title: "MissionMainAgentInteractionComponent"
description: "MissionMainAgentInteractionComponent 的自动生成类参考。"
---
# MissionMainAgentInteractionComponent

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentInteractionComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionMainAgentInteractionComponent.cs`

## 概述

`MissionMainAgentInteractionComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionMainAgentInteractionComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentFocusedObject` | `public IFocusable CurrentFocusedObject { get; }` |
| `CurrentFocusedMachine` | `public IFocusable CurrentFocusedMachine { get; }` |

## 主要方法

### SetCurrentFocusedObject
`public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)`

**用途 / Purpose:** 为 「current focused object」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.SetCurrentFocusedObject(focusedObject, focusedMachine, 0, false);
```

### ClearFocus
`public void ClearFocus()`

**用途 / Purpose:** 清空当前对象中的「focus」。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.ClearFocus();
```

### OnClearScene
`public void OnClearScene()`

**用途 / Purpose:** 在 「clear scene」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.OnClearScene();
```

### FocusTick
`public void FocusTick()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusTick();
```

### FocusStateCheckTick
`public void FocusStateCheckTick()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusStateCheckTick();
```

### FocusedItemHealthTick
`public void FocusedItemHealthTick()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.FocusedItemHealthTick();
```

### MissionFocusGainedEventDelegate
`public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusGainedEventDelegate(agent, focusableObject, false);
```

### MissionFocusLostEventDelegate
`public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusLostEventDelegate(agent, focusableObject);
```

### MissionFocusHealthChangeDelegate
`public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionMainAgentInteractionComponent 实例
MissionMainAgentInteractionComponent missionMainAgentInteractionComponent = ...;
missionMainAgentInteractionComponent.MissionFocusHealthChangeDelegate(focusable, 0, false);
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionMainAgentInteractionComponent>();
```

## 参见

- [本区域目录](../)