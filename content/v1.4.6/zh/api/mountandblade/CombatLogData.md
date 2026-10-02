---
title: "CombatLogData"
description: "CombatLogData：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 6 个（方法 2、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade/CombatLogData.cs。"
---
# CombatLogData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct CombatLogData`
**File:** `TaleWorlds.MountAndBlade/CombatLogData.cs`

## 概述

CombatLogData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CombatLogData.cs。它是一个 public 结构体，继承链为 CombatLogData。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CombatLogData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CombatLogData。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CombatLogData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalDamage` | `public int TotalDamage` | 属性 |
| `TotalFireDamage` | `public int TotalFireDamage` | 属性 |
| `AttackProgress` | `public float AttackProgress` | 属性 |
| `uint>>GetLogString` | `public List<ValueTuple<string, uint>>GetLogString()` | 方法 |
| `CombatLogData` | `public CombatLogData(bool isVictimAgentSameAsAttackerAgent, bool isAttackerAgentHuman, bool isAttackerAgentMine, bool doesAttackerAgentHaveRiderAgent, bool isAttackerAgentRiderAgentMine, bool isAttackerAgentMount, bool isVictimAgentHuman, bool isVictimAgentMine, bool isVictimAgentDead, bool doesVictimAgentHaveRiderAgent, bool isVictimAgentRiderAgentIsMine, bool isVictimAgentMount, MissionObject missionObjectHit, bool isVictimRiderAgentSameAsAttackerAgent, bool crushedThrough, bool chamber, float distance)` | 构造函数 |
| `SetVictimAgent` | `public void SetVictimAgent(Agent victimAgent)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
