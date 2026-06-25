---
title: "QuestHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QuestHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QuestHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class QuestHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/QuestHelper.cs`

## 概述

`QuestHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `QuestHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddMapArrowFromPointToTarget
`public static void AddMapArrowFromPointToTarget(TextObject name, CampaignVec2 sourcePosition, CampaignVec2 targetPosition, float life, float error)`

**用途 / Purpose:** 向当前集合/状态中添加 `map arrow from point to target`。

### CheckGoldForAlternativeSolution
`public static bool CheckGoldForAlternativeSolution(int requiredGold, out TextObject explanation)`

**用途 / Purpose:** 处理 `check gold for alternative solution` 相关逻辑。

### GetAlternativeSolutionMeleeSkills
`public static List<SkillObject> GetAlternativeSolutionMeleeSkills()`

**用途 / Purpose:** 获取 `alternative solution melee skills` 的当前值。

### CheckRosterForAlternativeSolution
`public static bool CheckRosterForAlternativeSolution(TroopRoster troopRoster, int requiredTroopCount, out TextObject explanation, int minimumTier = 0, bool mountedRequired = false)`

**用途 / Purpose:** 处理 `check roster for alternative solution` 相关逻辑。

### GetAlternativeSolutionRangedSkills
`public static List<SkillObject> GetAlternativeSolutionRangedSkills()`

**用途 / Purpose:** 获取 `alternative solution ranged skills` 的当前值。

### CheckMinorMajorCoercion
`public static bool CheckMinorMajorCoercion(QuestBase questToCheck, MapEvent mapEvent, PartyBase attackerParty)`

**用途 / Purpose:** 处理 `check minor major coercion` 相关逻辑。

### ApplyGenericMinorMajorCoercionConsequences
`public static void ApplyGenericMinorMajorCoercionConsequences(QuestBase quest, MapEvent mapEvent)`

**用途 / Purpose:** 将 `generic minor major coercion consequences` 应用到当前对象。

### GetAveragePriceOfItemInTheWorld
`public static int GetAveragePriceOfItemInTheWorld(ItemObject item)`

**用途 / Purpose:** 获取 `average price of item in the world` 的当前值。

### CheckWarDeclarationAndFailOrCancelTheQuest
`public static void CheckWarDeclarationAndFailOrCancelTheQuest(QuestBase questToCheck, IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail, TextObject failLog, TextObject cancelLog, bool forceCancel = false)`

**用途 / Purpose:** 处理 `check war declaration and fail or cancel the quest` 相关逻辑。

## 使用示例

```csharp
QuestHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)