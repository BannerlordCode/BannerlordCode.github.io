---
title: "MissionMainAgentInteractionComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionMainAgentInteractionComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentInteractionComponent

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentInteractionComponent`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionMainAgentInteractionComponent.cs`

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

### MissionFocusGainedEventDelegate
`public delegate void MissionFocusGainedEventDelegate(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 处理 `mission focus gained event delegate` 相关逻辑。

### MissionFocusLostEventDelegate
`public delegate void MissionFocusLostEventDelegate(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 处理 `mission focus lost event delegate` 相关逻辑。

### MissionFocusHealthChangeDelegate
`public delegate void MissionFocusHealthChangeDelegate(IFocusable focusable, float healthPercentage, bool hideHealthbarWhenFull)`

**用途 / Purpose:** 处理 `mission focus health change delegate` 相关逻辑。

### SetCurrentFocusedObject
`public void SetCurrentFocusedObject(IFocusable focusedObject, IFocusable focusedMachine, sbyte focusedObjectBoneIndex, bool isInteractable)`

**用途 / Purpose:** 设置 `current focused object` 的值或状态。

### ClearFocus
`public void ClearFocus()`

**用途 / Purpose:** 处理 `clear focus` 相关逻辑。

### OnClearScene
`public void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### FocusTick
`public void FocusTick()`

**用途 / Purpose:** 处理 `focus tick` 相关逻辑。

### FocusStateCheckTick
`public void FocusStateCheckTick()`

**用途 / Purpose:** 处理 `focus state check tick` 相关逻辑。

### FocusedItemHealthTick
`public void FocusedItemHealthTick()`

**用途 / Purpose:** 处理 `focused item health tick` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MissionMainAgentInteractionComponent>();
```

## 参见

- [完整类目录](../catalog)