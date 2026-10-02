---
title: "BattleSpawnPathSelector"
description: "BattleSpawnPathSelector：TaleWorlds.MountAndBlade 的 public 类；公开成员 8 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs。"
---
# BattleSpawnPathSelector

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BattleSpawnPathSelector`
**File:** `TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`

## 概述

BattleSpawnPathSelector 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs。它是一个 public 类，继承链为 BattleSpawnPathSelector。public/protected 成员共 8 个：5 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleSpawnPathSelector 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 BattleSpawnPathSelector。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInitialized` | `public bool IsInitialized` | 属性 |
| `InitialPath` | `public Path InitialPath` | 属性 |
| `BattleSpawnPathSelector` | `public BattleSpawnPathSelector(Mission mission)` | 构造函数 |
| `Initialize` | `public void Initialize()` | 方法 |
| `HasPath` | `public bool HasPath(Path path)` | 方法 |
| `GetInitialPathDataOfSide` | `public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<SpawnPathData>GetReinforcementPathsDataOfSide(BattleSideEnum side)` | 方法 |
| `FindBestInitialPath` | `public static Path FindBestInitialPath(Mission mission, out float pathPivotOffset, out float pathLength, out bool isPathInverted)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
