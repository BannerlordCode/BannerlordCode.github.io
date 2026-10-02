---
title: "CommonAIComponent"
description: "CommonAIComponent：TaleWorlds.MountAndBlade 的 public 类，继承 AgentComponent；公开成员 18 个（方法 10、属性 6、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CommonAIComponent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CommonAIComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CommonAIComponent : AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CommonAIComponent 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CommonAIComponent.cs。它是一个 public 类，实现/继承 AgentComponent，继承链为 CommonAIComponent → AgentComponent。public/protected 成员共 18 个：10 方法、6 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CommonAIComponent 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CommonAIComponent → AgentComponent。成员构成以方法为主（方法 10/18，属性 6/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CommonAIComponent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPanicked` | `public bool IsPanicked` | 属性 |
| `IsRetreating` | `public bool IsRetreating` | 属性 |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex` | 属性 |
| `InitialMorale` | `public float InitialMorale` | 属性 |
| `RecoveryMorale` | `public float RecoveryMorale` | 属性 |
| `Morale` | `public float Morale` | 属性 |
| `CommonAIComponent` | `public CommonAIComponent(Agent agent) : base(agent)` | 构造函数 |
| `Initialize` | `public override void Initialize()` | 方法 |
| `OnTickParallel` | `public override void OnTickParallel(float dt)` | 方法 |
| `OnTick` | `public override void OnTick(float dt)` | 方法 |
| `Panic` | `public void Panic()` | 方法 |
| `Retreat` | `public void Retreat(bool useCachingSystem = false)` | 方法 |
| `StopRetreating` | `public void StopRetreating()` | 方法 |
| `CanPanic` | `public bool CanPanic()` | 方法 |
| `OnHit` | `public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved()` | 方法 |
| `OnComponentRemoved` | `public override void OnComponentRemoved()` | 方法 |
| `MoraleThresholdForPanicking` | `public const float MoraleThresholdForPanicking` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentComponent](../AgentComponent/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
