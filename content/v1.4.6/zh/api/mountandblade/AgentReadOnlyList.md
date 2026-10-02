---
title: "AgentReadOnlyList"
description: "AgentReadOnlyList：TaleWorlds.MountAndBlade 的 public 类，继承 MBReadOnlyList<Agent>；公开成员 3 个（方法 0、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs。"
---
# AgentReadOnlyList

**Namespace:** `TaleWorlds.MountAndBlade.Missions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentReadOnlyList : MBReadOnlyList<Agent>`
**File:** `TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs`

## 概述

AgentReadOnlyList 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs。它是一个 public 类，实现/继承 MBReadOnlyList<Agent>，继承链为 AgentReadOnlyList → MBReadOnlyList。public/protected 成员共 3 个：3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentReadOnlyList 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Missions），继承链 AgentReadOnlyList → MBReadOnlyList。成员构成以方法为主（方法 0/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MBReadOnlyList 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/AgentReadOnlyList.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentReadOnlyList` | `public AgentReadOnlyList(int capacity) : base(capacity)` | 构造函数 |
| `AgentReadOnlyList` | `public AgentReadOnlyList(IEnumerable<Agent>collection) : base(collection)` | 构造函数 |
| `AgentReadOnlyList` | `public AgentReadOnlyList(List<Agent>collection) : base(collection)` | 构造函数 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentList](../AgentList)
- [同命名空间 IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController)
- [同命名空间 MissionSiegeWeaponsController](../MissionSiegeWeaponsController)
