---
title: "CustomBattleData"
description: "CustomBattleData：TaleWorlds.MountAndBlade.CustomBattle 的 public 结构体；公开成员 16 个（方法 3、属性 9、字段 4）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs。"
---
# CustomBattleData

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public struct CustomBattleData`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs`

## 概述

CustomBattleData 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs。它是一个 public 结构体，继承链为 CustomBattleData。public/protected 成员共 16 个：3 方法、9 属性、4 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleData 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle），继承链 CustomBattleData。成员构成以属性为主（属性 9/16，方法 3/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllAttackerMeleeMachines()` | 方法 |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllDefenderRangedMachines()` | 方法 |
| `IEnumerable` | `public static IEnumerable<SiegeEngineType>GetAllAttackerRangedMachines()` | 方法 |
| `string>>GameTypes` | `public static IEnumerable<Tuple<string, string>>GameTypes` | 属性 |
| `CustomBattlePlayerType>>PlayerTypes` | `public static IEnumerable<Tuple<string, CustomBattlePlayerType>>PlayerTypes` | 属性 |
| `CustomBattlePlayerSide>>PlayerSides` | `public static IEnumerable<Tuple<string, CustomBattlePlayerSide>>PlayerSides` | 属性 |
| `IEnumerable` | `public static IEnumerable<BasicCharacterObject>Characters` | 属性 |
| `IEnumerable` | `public static IEnumerable<BasicCultureObject>Factions` | 属性 |
| `CustomBattleTimeOfDay>>TimesOfDay` | `public static IEnumerable<Tuple<string, CustomBattleTimeOfDay>>TimesOfDay` | 属性 |
| `string>>Seasons` | `public static IEnumerable<Tuple<string, string>>Seasons` | 属性 |
| `int>>WallHitpoints` | `public static IEnumerable<Tuple<string, int>>WallHitpoints` | 属性 |
| `IEnumerable` | `public static IEnumerable<int>SceneLevels` | 属性 |
| `NumberOfAttackerMeleeMachines` | `public const int NumberOfAttackerMeleeMachines` | 字段 |
| `NumberOfAttackerRangedMachines` | `public const int NumberOfAttackerRangedMachines` | 字段 |
| `NumberOfDefenderRangedMachines` | `public const int NumberOfDefenderRangedMachines` | 字段 |
| `CoreContentDefaultSceneName` | `public const string CoreContentDefaultSceneName` | 字段 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide)
- [同命名空间 CustomBattlePlayerType](../CustomBattlePlayerType)
