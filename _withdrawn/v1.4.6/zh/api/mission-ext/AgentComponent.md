---
title: "AgentComponent"
description: "AgentComponent：TaleWorlds.MountAndBlade 的 public 类；公开成员 20 个（方法 19、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AgentComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentComponent`
**File:** `TaleWorlds.MountAndBlade/AgentComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentComponent.cs。它是一个 public 类（abstract），继承链为 AgentComponent。public/protected 成员共 20 个：19 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AgentComponent。成员构成以方法为主（方法 19/20，属性 0/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentComponent` | `protected AgentComponent(Agent agent)` | 构造函数 |
| `Initialize` | `public virtual void Initialize()` | 方法 |
| `OnTick` | `public virtual void OnTick(float dt)` | 方法 |
| `OnTickParallel` | `public virtual void OnTickParallel(float dt)` | 方法 |
| `GetMoraleAddition` | `public virtual float GetMoraleAddition()` | 方法 |
| `GetMoraleDecreaseConstant` | `public virtual float GetMoraleDecreaseConstant()` | 方法 |
| `OnItemPickup` | `public virtual void OnItemPickup(SpawnedItemEntity item)` | 方法 |
| `OnWeaponDrop` | `public virtual void OnWeaponDrop(MissionWeapon droppedWeapon)` | 方法 |
| `OnStopUsingGameObject` | `public virtual void OnStopUsingGameObject()` | 方法 |
| `OnWeaponHPChanged` | `public virtual void OnWeaponHPChanged(ItemObject item, int hitPoints)` | 方法 |
| `OnRetreating` | `public virtual void OnRetreating()` | 方法 |
| `OnMount` | `public virtual void OnMount(Agent mount)` | 方法 |
| `OnDismount` | `public virtual void OnDismount(Agent mount)` | 方法 |
| `OnHit` | `public virtual void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | 方法 |
| `OnDisciplineChanged` | `public virtual void OnDisciplineChanged()` | 方法 |
| `OnAgentRemoved` | `public virtual void OnAgentRemoved()` | 方法 |
| `OnAgentTeleported` | `public virtual void OnAgentTeleported()` | 方法 |
| `OnAIInputSet` | `public virtual void OnAIInputSet(ref Agent.EventControlFlag eventFlag, ref Agent.MovementControlFlag movementFlag, ref Vec2 inputVector)` | 方法 |
| `OnComponentRemoved` | `public virtual void OnComponentRemoved()` | 方法 |
| `OnFormationSet` | `public virtual void OnFormationSet()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
