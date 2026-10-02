---
title: "GroupSpawnPoint"
description: "GroupSpawnPoint：SandBox 的 public 类，继承 UsablePlace；公开成员 3 个（方法 0、属性 1、字段 2）。源文件 SandBox/Objects/GroupSpawnPoint.cs。"
---
# GroupSpawnPoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class GroupSpawnPoint : UsablePlace`
**File:** `SandBox/Objects/GroupSpawnPoint.cs`

## 概述

GroupSpawnPoint 位于 SandBox 模块，源文件 SandBox/Objects/GroupSpawnPoint.cs。它是一个 public 类，实现/继承 UsablePlace，继承链为 GroupSpawnPoint → UsablePlace → UsableMachine。public/protected 成员共 3 个：1 属性、2 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GroupSpawnPoint 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects），继承链 GroupSpawnPoint → UsablePlace → UsableMachine。成员构成以属性为主（属性 1/3，方法 0/3），对外主要以状态读取接口暴露。继承链上的 UsableMachine 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/GroupSpawnPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInstant` | `public bool IsInstant` | 属性 |
| `Delay` | `public float Delay` | 字段 |
| `SpawnCount` | `public int SpawnCount` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 UsablePlace](../UsablePlace)
- [同命名空间 CheckpointArea](../CheckpointArea)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox)
