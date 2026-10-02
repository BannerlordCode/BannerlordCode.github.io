---
title: "AlarmedBehaviorGroup"
description: "AlarmedBehaviorGroup：SandBox.Missions.AgentBehaviors 的 public 类，继承 AgentBehaviorGroup；公开成员 17 个（方法 13、属性 1、字段 2）。canonical 桶 sandbox。源文件 SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AlarmedBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class AlarmedBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

AlarmedBehaviorGroup 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs。它是一个 public 类，实现/继承 AgentBehaviorGroup，继承链为 AlarmedBehaviorGroup → AgentBehaviorGroup。public/protected 成员共 17 个：13 方法、1 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AlarmedBehaviorGroup 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.AgentBehaviors`，继承链 AlarmedBehaviorGroup → AgentBehaviorGroup。成员构成以方法为主（方法 13/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AlarmFactor` | `public float AlarmFactor` | 属性 |
| `AlarmedBehaviorGroup` | `public AlarmedBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | 构造函数 |
| `SetCanMoveWhenCautious` | `public void SetCanMoveWhenCautious(bool value)` | 方法 |
| `GetVisualFactor` | `public float GetVisualFactor(Vec3 usedGlobalLookDirection, Agent currentAgent, MBReadOnlyList<GameEntity>stealthIndoorLightingAreas, ref bool hasVisualOnCorpse, ref bool hasVisualOnEnemy)` | 方法 |
| `ResetAlarmFactor` | `public void ResetAlarmFactor()` | 方法 |
| `AddAlarmFactor` | `public void AddAlarmFactor(float addedAlarmFactor, in WorldPosition suspiciousPosition)` | 方法 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `GetScore` | `public override float GetScore(bool isSimulation)` | 方法 |
| `GetClosestAlarmSource` | `public Agent GetClosestAlarmSource(out float distanceSquared)` | 方法 |
| `AlarmAgent` | `public static void AlarmAgent(Agent agent)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | 方法 |
| `ConversationTick` | `public override void ConversationTick()` | 方法 |
| `SafetyDistance` | `public const float SafetyDistance` | 字段 |
| `SafetyDistanceSquared` | `public const float SafetyDistanceSquared` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentBehaviorGroup](../AgentBehaviorGroup/)
- [同命名空间 AgentBehavior](../AgentBehavior/)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup/)
- [同命名空间 BehaviorSets](../BehaviorSets/)
- [同命名空间 CautiousBehavior](../CautiousBehavior/)
