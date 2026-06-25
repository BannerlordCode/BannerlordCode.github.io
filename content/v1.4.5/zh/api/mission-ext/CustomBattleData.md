---
title: "CustomBattleData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomBattleData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleData

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CustomBattleData`
**Base:** 无
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleData.cs`

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

**用途 / Purpose:** 获取 `all attacker melee machines` 的当前值。

### GetAllDefenderRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllDefenderRangedMachines()`

**用途 / Purpose:** 获取 `all defender ranged machines` 的当前值。

### GetAllAttackerRangedMachines
`public static IEnumerable<SiegeEngineType> GetAllAttackerRangedMachines()`

**用途 / Purpose:** 获取 `all attacker ranged machines` 的当前值。

## 使用示例

```csharp
var value = new CustomBattleData();
```

## 参见

- [完整类目录](../catalog)