<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### OnTick
`public virtual void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### OnTickParallel
`public virtual void OnTickParallel(float dt)`

**用途 / Purpose:** 当 `tick parallel` 事件触发时调用此方法。

### GetMoraleAddition
`public virtual float GetMoraleAddition()`

**用途 / Purpose:** 获取 `morale addition` 的当前值。

### GetMoraleDecreaseConstant
`public virtual float GetMoraleDecreaseConstant()`

**用途 / Purpose:** 获取 `morale decrease constant` 的当前值。

### OnItemPickup
`public virtual void OnItemPickup(SpawnedItemEntity item)`

**用途 / Purpose:** 当 `item pickup` 事件触发时调用此方法。

### OnWeaponDrop
`public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)`

**用途 / Purpose:** 当 `weapon drop` 事件触发时调用此方法。

### OnStopUsingGameObject
`public virtual void OnStopUsingGameObject()`

**用途 / Purpose:** 当 `stop using game object` 事件触发时调用此方法。

### OnWeaponHPChanged
`public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)`

**用途 / Purpose:** 当 `weapon h p changed` 事件触发时调用此方法。

### OnRetreating
`public virtual void OnRetreating()`

**用途 / Purpose:** 当 `retreating` 事件触发时调用此方法。

### OnMount
`public virtual void OnMount(Agent mount)`

**用途 / Purpose:** 当 `mount` 事件触发时调用此方法。

### OnDismount
`public virtual void OnDismount(Agent mount)`

**用途 / Purpose:** 当 `dismount` 事件触发时调用此方法。

### OnHit
`public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon)`

**用途 / Purpose:** 当 `hit` 事件触发时调用此方法。

### OnDisciplineChanged
`public virtual void OnDisciplineChanged()`

**用途 / Purpose:** 当 `discipline changed` 事件触发时调用此方法。

### OnAgentRemoved
`public virtual void OnAgentRemoved()`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentTeleported
`public virtual void OnAgentTeleported()`

**用途 / Purpose:** 当 `agent teleported` 事件触发时调用此方法。

### OnAIInputSet
`public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)`

**用途 / Purpose:** 当 `a i input set` 事件触发时调用此方法。

### OnComponentRemoved
`public virtual void OnComponentRemoved()`

**用途 / Purpose:** 当 `component removed` 事件触发时调用此方法。

### OnFormationSet
`public virtual void OnFormationSet()`

**用途 / Purpose:** 当 `formation set` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomAgentComponent();
```

## 参见

- [完整类目录](../catalog)