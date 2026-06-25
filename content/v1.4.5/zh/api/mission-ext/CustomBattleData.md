---
title: "CustomBattleData"
description: "CustomBattleData 的自动生成类参考。"
---
# CustomBattleData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleData`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleData.cs`

## 概述

`CustomBattleData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CustomBattleData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameTypes` | `public static IEnumerable<Tuple<string, string>> GameTypes { get; }` |
| `PlayerTypes` | `public static IEnumerable<Tuple<string, CustomBattlePlayerType>> PlayerTypes { get; }` |
| `PlayerSides` | `public static IEnumerable<Tuple<string, CustomBattlePlayerSide>> PlayerSides { get; }` |
| `Characters` | `public static IEnumerable<BasicCharacterObject> Characters { get; }` |
| `Factions` | `public static IEnumerable<BasicCultureObject> Factions { get; }` |
| `TimesOfDay` | `public static IEnumerable<Tuple<string, CustomBattleTimeOfDay>> TimesOfDay { get; }` |
| `Seasons` | `public static IEnumerable<Tuple<string, string>> Seasons { get; }` |
| `WallHitpoints` | `public static IEnumerable<Tuple<string, int>> WallHitpoints { get; }` |
| `SceneLevels` | `public static IEnumerable<int> SceneLevels { get; }` |

## 主要方法

### GetAllAttackerMeleeMachines
`public static IEnumerable<SiegeEngineType> GetAllAttackerMeleeMachines()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all attacker melee machines 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleData.GetAllAttackerMeleeMachines();
```

### GetAllDefenderRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllDefenderRangedMachines()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all defender ranged machines 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleData.GetAllDefenderRangedMachines();
```

### GetAllAttackerRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllAttackerRangedMachines()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all attacker ranged machines 的结果。

```csharp
// 静态调用，不需要实例
CustomBattleData.GetAllAttackerRangedMachines();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
CustomBattleData entry = ...;
```

## 参见

- [本区域目录](../)