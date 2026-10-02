---
title: "IdleAgentBehavior"
description: "IdleAgentBehavior：SandBox.Missions.AgentBehaviors 的 public 类，继承 AgentBehavior；公开成员 5 个（方法 4、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IdleAgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class IdleAgentBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

IdleAgentBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 IdleAgentBehavior → AgentBehavior。public/protected 成员共 5 个：4 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IdleAgentBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Missions.AgentBehaviors`，继承链 IdleAgentBehavior → AgentBehavior。成员构成以方法为主（方法 4/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/IdleAgentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IdleAgentBehavior` | `public IdleAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentBehavior](../AgentBehavior/)
- [同命名空间 AgentBehavior](../AgentBehavior/)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup/)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup/)
- [同命名空间 BehaviorSets](../BehaviorSets/)
