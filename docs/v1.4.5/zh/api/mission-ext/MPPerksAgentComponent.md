<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPPerksAgentComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerksAgentComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerksAgentComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerksAgentComponent.cs`

## 概述

`MPPerksAgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MPPerksAgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMount
`public override void OnMount(Agent mount)`

**用途 / Purpose:** 当 `mount` 事件触发时调用此方法。

### OnDismount
`public override void OnDismount(Agent mount)`

**用途 / Purpose:** 当 `dismount` 事件触发时调用此方法。

### OnItemPickup
`public override void OnItemPickup(SpawnedItemEntity item)`

**用途 / Purpose:** 当 `item pickup` 事件触发时调用此方法。

### OnWeaponDrop
`public override void OnWeaponDrop(MissionWeapon droppedWeapon)`

**用途 / Purpose:** 当 `weapon drop` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<MPPerksAgentComponent>();
```

## 参见

- [完整类目录](../catalog)