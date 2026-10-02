---
title: "TalkBehavior"
description: "TalkBehavior：SandBox 的 public 类，继承 AgentBehavior；公开成员 7 个（方法 6、属性 0、字段 0）。源文件 SandBox/Missions/AgentBehaviors/TalkBehavior.cs。"
---
# TalkBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class TalkBehavior : AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/TalkBehavior.cs`

## 概述

TalkBehavior 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/TalkBehavior.cs。它是一个 public 类，实现/继承 AgentBehavior，继承链为 TalkBehavior → AgentBehavior。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TalkBehavior 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.AgentBehaviors），继承链 TalkBehavior → AgentBehavior。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/TalkBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TalkBehavior` | `public TalkBehavior(AgentBehaviorGroup behaviorGroup) : base(behaviorGroup)` | 构造函数 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `GetAvailability` | `public override float GetAvailability(bool isSimulation)` | 方法 |
| `GetDebugInfo` | `public override string GetDebugInfo()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `Disable` | `public void Disable()` | 方法 |
| `Enable` | `public void Enable(bool doNotMove)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [同命名空间 BehaviorSets](../BehaviorSets)
