---
title: "BoardGameAgentBehavior"
description: "BoardGameAgentBehavior：SandBox.Source.Missions.AgentBehaviors 的 public 类，继承 AgentBehavior；公开成员 9 个（方法 8、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameAgentBehavior

**Namespace:** `SandBox.Source.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class BoardGameAgentBehavior : AgentBehavior`
**File:** `SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

BoardGameAgentBehavior 位于 SandBox 模块，源文件 SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 BoardGameAgentBehavior → AgentBehavior。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BoardGameAgentBehavior 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.Source.Missions.AgentBehaviors`，继承链 BoardGameAgentBehavior → AgentBehavior。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameAgentBehavior` | `public BoardGameAgentBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `ConversationTick` | `public override void ConversationTick()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `AddTargetChair` | `public static void AddTargetChair(Agent ownerAgent, Chair chair)` | 方法 |
| `RemoveBoardGameBehaviorOfAgent` | `public static void RemoveBoardGameBehaviorOfAgent(Agent ownerAgent)` | 方法 |
| `IsAgentMovingToChair` | `public static bool IsAgentMovingToChair(Agent ownerAgent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentBehavior](../AgentBehavior/)
