---
title: "FireBallista"
description: "FireBallista：TaleWorlds.MountAndBlade 的 public 类，继承 Ballista；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/FireBallista.cs。"
---
# FireBallista

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FireBallista : Ballista`
**File:** `TaleWorlds.MountAndBlade/FireBallista.cs`

## 概述

FireBallista 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FireBallista.cs。它是一个 public 类，实现/继承 Ballista，继承链为 FireBallista → Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FireBallista 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 FireBallista → Ballista → RangedSiegeWeapon → SiegeWeapon → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FireBallista.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSiegeEngineType` | `public override SiegeEngineType GetSiegeEngineType()` | 方法 |
| `ProcessTargetValue` | `public override float ProcessTargetValue(float baseValue, TargetFlags flags)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 Ballista](../Ballista)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
