---
title: "AgentPathNavMeshChecker"
description: "AgentPathNavMeshChecker：TaleWorlds.MountAndBlade 的 public 类；公开成员 6 个（方法 3、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs。"
---
# AgentPathNavMeshChecker

**Namespace:** `TaleWorlds.MountAndBlade.Source.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentPathNavMeshChecker`
**File:** `TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs`

## 概述

AgentPathNavMeshChecker 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs。它是一个 public 类，继承链为 AgentPathNavMeshChecker。public/protected 成员共 6 个：3 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentPathNavMeshChecker 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Source.Objects.Siege），继承链 AgentPathNavMeshChecker。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Source/Objects/Siege/AgentPathNavMeshChecker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentPathNavMeshChecker` | `public AgentPathNavMeshChecker(Mission mission, MatrixFrame pathFrameToCheck, float radiusToCheck, int navMeshId, BattleSideEnum teamToCollect, AgentPathNavMeshChecker.Direction directionToCollect, float maxDistanceCheck, float agentMoveTime)` | 构造函数 |
| `Tick` | `public void Tick(float dt)` | 方法 |
| `TickOccasionally` | `public void TickOccasionally(float dt)` | 方法 |
| `HasAgentsUsingPath` | `public bool HasAgentsUsingPath()` | 方法 |
| `Direction` | `public enum Direction` | 属性 |
| `Direction` | `public enum Direction` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
