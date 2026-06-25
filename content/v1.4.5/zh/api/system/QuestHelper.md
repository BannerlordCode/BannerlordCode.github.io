---
title: "QuestHelper"
description: "QuestHelper 的自动生成类参考。"
---
# QuestHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class QuestHelper`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## 概述

`QuestHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `QuestHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddMapArrowFromPointToTarget
`public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)`

**用途 / Purpose:** **用途 / Purpose:** 将 map arrow from point to target 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
QuestHelper.AddMapArrowFromPointToTarget(name, sourcePosition, targetPosition, 0, 0);
```

### CheckGoldForAlternativeSolution
`public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查gold for alternative solution在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
QuestHelper.CheckGoldForAlternativeSolution(0, explanation);
```

### GetAlternativeSolutionMeleeSkills
`public static List<SkillObject> GetAlternativeSolutionMeleeSkills()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alternative solution melee skills 的结果。

```csharp
// 静态调用，不需要实例
QuestHelper.GetAlternativeSolutionMeleeSkills();
```

### CheckRosterForAlternativeSolution
`public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)`

**用途 / Purpose:** **用途 / Purpose:** 检查roster for alternative solution在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
QuestHelper.CheckRosterForAlternativeSolution(troopRoster, 0, explanation, 0, false);
```

### GetAlternativeSolutionRangedSkills
`public static List<SkillObject> GetAlternativeSolutionRangedSkills()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 alternative solution ranged skills 的结果。

```csharp
// 静态调用，不需要实例
QuestHelper.GetAlternativeSolutionRangedSkills();
```

### CheckMinorMajorCoercion
`public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)`

**用途 / Purpose:** **用途 / Purpose:** 检查minor major coercion在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
QuestHelper.CheckMinorMajorCoercion(questToCheck, mapEvent, attackerParty);
```

### ApplyGenericMinorMajorCoercionConsequences
`public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 将 generic minor major coercion consequences 的效果应用到当前对象。

```csharp
// 静态调用，不需要实例
QuestHelper.ApplyGenericMinorMajorCoercionConsequences(quest, mapEvent);
```

### GetAveragePriceOfItemInTheWorld
`public static int GetAveragePriceOfItemInTheWorld(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 average price of item in the world 的结果。

```csharp
// 静态调用，不需要实例
QuestHelper.GetAveragePriceOfItemInTheWorld(item);
```

### CheckWarDeclarationAndFailOrCancelTheQuest
`public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)`

**用途 / Purpose:** **用途 / Purpose:** 检查war declaration and fail or cancel the quest在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
QuestHelper.CheckWarDeclarationAndFailOrCancelTheQuest(questToCheck, faction1, faction2, detail, failLog, cancelLog, false);
```

## 使用示例

```csharp
QuestHelper.Initialize();
```

## 参见

- [本区域目录](../)