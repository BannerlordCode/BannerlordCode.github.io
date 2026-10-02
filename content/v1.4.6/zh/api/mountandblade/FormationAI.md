---
title: "FormationAI"
description: "FormationAI：TaleWorlds.MountAndBlade 的 public 类；公开成员 21 个（方法 11、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade/FormationAI.cs。"
---
# FormationAI

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationAI`
**File:** `TaleWorlds.MountAndBlade/FormationAI.cs`

## 概述

FormationAI 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FormationAI.cs。它是一个 public 类，继承链为 FormationAI。public/protected 成员共 21 个：11 方法、6 属性、1 事件、1 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationAI 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 FormationAI。成员构成以方法为主（方法 11/21，属性 6/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FormationAI.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<Formation>OnActiveBehaviorChanged;` | 事件 |
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior` | 属性 |
| `Side` | `public FormationAI.BehaviorSide Side` | 属性 |
| `IsMainFormation` | `public bool IsMainFormation` | 属性 |
| `BehaviorCount` | `public int BehaviorCount` | 属性 |
| `FormationAI` | `public FormationAI(Formation formation)` | 构造函数 |
| `SetBehaviorWeight` | `public T SetBehaviorWeight<T>(float w) where T : BehaviorComponent` | 方法 |
| `AddAiBehavior` | `public void AddAiBehavior(BehaviorComponent behaviorComponent)` | 方法 |
| `GetBehavior` | `public T GetBehavior<T>() where T : BehaviorComponent` | 方法 |
| `AddSpecialBehavior` | `public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `OnDeploymentFinished` | `public void OnDeploymentFinished()` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(Agent agent)` | 方法 |
| `GetBehaviorAtIndex` | `public BehaviorComponent GetBehaviorAtIndex(int index)` | 方法 |
| `DebugMore` | `public void DebugMore()` | 方法 |
| `DebugScores` | `public void DebugScores()` | 方法 |
| `ResetBehaviorWeights` | `public void ResetBehaviorWeights()` | 方法 |
| `BehaviorData` | `public class BehaviorData` | 属性 |
| `BehaviorSide` | `public enum BehaviorSide` | 属性 |
| `BehaviorData` | `public class BehaviorData` | 嵌套类型 |
| `BehaviorSide` | `public enum BehaviorSide` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
