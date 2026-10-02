---
title: "FightAreaMarker"
description: "FightAreaMarker：TaleWorlds.MountAndBlade 的 public 类，继承 AreaMarker；公开成员 3 个（方法 2、属性 0、字段 1）。源文件 TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs。"
---
# FightAreaMarker

**Namespace:** `TaleWorlds.MountAndBlade.Objects`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FightAreaMarker : AreaMarker`
**File:** `TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs`

## 概述

FightAreaMarker 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs。它是一个 public 类，实现/继承 AreaMarker，继承链为 FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior。public/protected 成员共 3 个：2 方法、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FightAreaMarker 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Objects），继承链 FightAreaMarker → AreaMarker → MissionObject → ScriptComponentBehavior。成员构成以方法为主（方法 2/3，属性 0/3），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Objects/FightAreaMarker.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(Team team, bool humanOnly = true)` | 方法 |
| `IEnumerable` | `public IEnumerable<Agent>GetAgentsInRange(BattleSideEnum side, bool humanOnly = true)` | 方法 |
| `SubAreaIndex` | `public int SubAreaIndex` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AreaMarker](../AreaMarker)
- [同命名空间 AnimalSpawnSettings](../AnimalSpawnSettings)
- [同命名空间 AreaMarker](../AreaMarker)
- [同命名空间 FlagCapturePoint](../FlagCapturePoint)
- [同命名空间 GenericMissionEvent](../GenericMissionEvent)
