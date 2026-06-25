---
title: "DiplomacyHelper"
description: "DiplomacyHelper 的自动生成类参考。"
---
# DiplomacyHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class DiplomacyHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## 概述

`DiplomacyHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `DiplomacyHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsWarCausedByPlayer
`public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

**用途 / Purpose:** 判断当前对象是否处于 war caused by player 状态或条件。

```csharp
// 静态调用，不需要实例
DiplomacyHelper.IsWarCausedByPlayer(faction1, faction2, declareWarDetail);
```

### IsSameFactionAndNotEliminated
`public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

**用途 / Purpose:** 判断当前对象是否处于 same faction and not eliminated 状态或条件。

```csharp
// 静态调用，不需要实例
DiplomacyHelper.IsSameFactionAndNotEliminated(faction1, faction2);
```

### GetLogsForWar
`public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

**用途 / Purpose:** 读取并返回当前对象中 logs for war 的结果。

```csharp
// 静态调用，不需要实例
DiplomacyHelper.GetLogsForWar(stance);
```

### GetPrisonersOfWarTakenByFaction
`public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

**用途 / Purpose:** 读取并返回当前对象中 prisoners of war taken by faction 的结果。

```csharp
// 静态调用，不需要实例
DiplomacyHelper.GetPrisonersOfWarTakenByFaction(capturerFaction, prisonerFaction);
```

### DidMainHeroSwornNotToAttackFaction
`public static bool DidMainHeroSwornNotToAttackFaction(IFaction faction, out TextObject explanation)`

**用途 / Purpose:** 调用 DidMainHeroSwornNotToAttackFaction 对应的操作。

```csharp
// 静态调用，不需要实例
DiplomacyHelper.DidMainHeroSwornNotToAttackFaction(faction, explanation);
```

## 使用示例

```csharp
DiplomacyHelper.Initialize();
```

## 参见

- [本区域目录](../)