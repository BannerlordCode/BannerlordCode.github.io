---
title: "ArcherPosition"
description: "ArcherPosition：TaleWorlds.MountAndBlade 的 public 类；公开成员 9 个（方法 5、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade/ArcherPosition.cs。"
---
# ArcherPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ArcherPosition`
**File:** `TaleWorlds.MountAndBlade/ArcherPosition.cs`

## 概述

ArcherPosition 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ArcherPosition.cs。它是一个 public 类，继承链为 ArcherPosition。public/protected 成员共 9 个：5 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ArcherPosition 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ArcherPosition。成员构成以方法为主（方法 5/9，属性 3/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ArcherPosition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Entity` | `public GameEntity Entity` | 属性 |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition` | 属性 |
| `ConnectedSides` | `public int ConnectedSides` | 属性 |
| `GetLastAssignedFormation` | `public Formation GetLastAssignedFormation(int teamIndex)` | 方法 |
| `ArcherPosition` | `public ArcherPosition(GameEntity _entity, SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)` | 构造函数 |
| `IsArcherPositionRelatedToSide` | `public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)` | 方法 |
| `GetArcherPositionClosestSide` | `public FormationAI.BehaviorSide GetArcherPositionClosestSide()` | 方法 |
| `OnDeploymentFinished` | `public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)` | 方法 |
| `SetLastAssignedFormation` | `public void SetLastAssignedFormation(int teamIndex, Formation formation)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
