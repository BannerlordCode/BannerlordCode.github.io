---
title: "DailyBehaviorGroup"
description: "DailyBehaviorGroup：SandBox 的 public 类，继承 AgentBehaviorGroup；公开成员 8 个（方法 7、属性 0、字段 0）。源文件 SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs。"
---
# DailyBehaviorGroup

**Namespace:** `SandBox.Missions.AgentBehaviors`
**Module:** `SandBox`
**Type:** `public class DailyBehaviorGroup : AgentBehaviorGroup`
**File:** `SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs`

## 概述

DailyBehaviorGroup 位于 SandBox 模块，源文件 SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs。它是一个 public 类，实现/继承 AgentBehaviorGroup，继承链为 DailyBehaviorGroup → AgentBehaviorGroup。public/protected 成员共 8 个：7 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DailyBehaviorGroup 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Missions.AgentBehaviors），继承链 DailyBehaviorGroup → AgentBehaviorGroup。成员构成以方法为主（方法 7/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Missions/AgentBehaviors/DailyBehaviorGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DailyBehaviorGroup` | `public DailyBehaviorGroup(AgentNavigator navigator, Mission mission) : base(navigator, mission)` | 构造函数 |
| `Tick` | `public override void Tick(float dt, bool isSimulation)` | 方法 |
| `ConversationTick` | `public override void ConversationTick()` | 方法 |
| `GetScore` | `public override float GetScore(bool isSimulation)` | 方法 |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent agent)` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 方法 |
| `ForceThink` | `public override void ForceThink(float inSeconds)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AgentBehaviorGroup](../AgentBehaviorGroup)
- [同命名空间 AgentBehavior](../AgentBehavior)
- [同命名空间 AgentBehaviorGroup](../AgentBehaviorGroup)
- [同命名空间 AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- [同命名空间 BehaviorSets](../BehaviorSets)
