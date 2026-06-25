---
title: "AgentComponent"
description: "AgentComponent 的自动生成类参考。"
---
# AgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentComponent`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`

## 概述

`AgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `AgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.Initialize();
```

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnTick(0);
```

### OnTickParallel
`public virtual void OnTickParallel(float dt)`

**用途 / Purpose:** 在 「tick parallel」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnTickParallel(0);
```

### GetMoraleAddition
`public virtual float GetMoraleAddition()`

**用途 / Purpose:** 读取并返回当前对象中 「morale addition」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleAddition();
```

### GetMoraleDecreaseConstant
`public virtual float GetMoraleDecreaseConstant()`

**用途 / Purpose:** 读取并返回当前对象中 「morale decrease constant」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
var result = agentComponent.GetMoraleDecreaseConstant();
```

### OnItemPickup
`public virtual void OnItemPickup(SpawnedItemEntity item)`

**用途 / Purpose:** 在 「item pickup」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnItemPickup(item);
```

### OnWeaponDrop
`public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)`

**用途 / Purpose:** 在 「weapon drop」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnWeaponDrop(droppedWeapon);
```

### OnStopUsingGameObject
`public virtual void OnStopUsingGameObject()`

**用途 / Purpose:** 在 「stop using game object」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnStopUsingGameObject();
```

### OnWeaponHPChanged
`public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)`

**用途 / Purpose:** 在 「weapon h p changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnWeaponHPChanged(item, 0);
```

### OnRetreating
`public virtual void OnRetreating()`

**用途 / Purpose:** 在 「retreating」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnRetreating();
```

### OnMount
`public virtual void OnMount(Agent mount)`

**用途 / Purpose:** 在 「mount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnMount(mount);
```

### OnDismount
`public virtual void OnDismount(Agent mount)`

**用途 / Purpose:** 在 「dismount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnDismount(mount);
```

### OnHit
`public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**用途 / Purpose:** 在 「hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnHit(affectorAgent, 0, affectorWeapon, b, collisionData);
```

### OnDisciplineChanged
`public virtual void OnDisciplineChanged()`

**用途 / Purpose:** 在 「discipline changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnDisciplineChanged();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved()`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnAgentRemoved();
```

### OnAgentTeleported
`public virtual void OnAgentTeleported()`

**用途 / Purpose:** 在 「agent teleported」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnAgentTeleported();
```

### OnAIInputSet
`public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)`

**用途 / Purpose:** 在 「a i input set」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnAIInputSet(eventFlag, movementFlag, inputVector);
```

### OnComponentRemoved
`public virtual void OnComponentRemoved()`

**用途 / Purpose:** 在 「component removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnComponentRemoved();
```

### OnFormationSet
`public virtual void OnFormationSet()`

**用途 / Purpose:** 在 「formation set」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AgentComponent 实例
AgentComponent agentComponent = ...;
agentComponent.OnFormationSet();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentComponent instance = ...;
```

## 参见

- [本区域目录](../)