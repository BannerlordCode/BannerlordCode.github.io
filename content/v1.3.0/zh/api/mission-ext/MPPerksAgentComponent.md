---
title: "MPPerksAgentComponent"
description: "MPPerksAgentComponent 的自动生成类参考。"
---
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## 概述

`MPPerksAgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MPPerksAgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMount
`public override void OnMount(Agent mount)`

**用途 / Purpose:** 在 mount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerksAgentComponent 实例
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnMount(mount);
```

### OnDismount
`public override void OnDismount(Agent mount)`

**用途 / Purpose:** 在 dismount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerksAgentComponent 实例
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnDismount(mount);
```

### OnItemPickup
`public override void OnItemPickup(SpawnedItemEntity item)`

**用途 / Purpose:** 在 item pickup 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerksAgentComponent 实例
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnItemPickup(item);
```

### OnWeaponDrop
`public override void OnWeaponDrop(MissionWeapon droppedWeapon)`

**用途 / Purpose:** 在 weapon drop 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerksAgentComponent 实例
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnWeaponDrop(droppedWeapon);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPPerksAgentComponent 实例
MPPerksAgentComponent mPPerksAgentComponent = ...;
mPPerksAgentComponent.OnAgentRemoved();
```

## 使用示例

```csharp
var component = agent.GetComponent<MPPerksAgentComponent>();
```

## 参见

- [本区域目录](../)