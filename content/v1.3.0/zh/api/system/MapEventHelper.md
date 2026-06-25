---
title: "MapEventHelper"
description: "MapEventHelper 的自动生成类参考。"
---
# MapEventHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MapEventHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## 概述

`MapEventHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MapEventHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSallyOutDefenderLeader
`public static PartyBase GetSallyOutDefenderLeader()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sally out defender leader 的结果。

```csharp
// 静态调用，不需要实例
MapEventHelper.GetSallyOutDefenderLeader();
```

### CanMainPartyLeaveBattleCommonCondition
`public static bool CanMainPartyLeaveBattleCommonCondition()`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 main party leave battle common condition 的前置条件。

```csharp
// 静态调用，不需要实例
MapEventHelper.CanMainPartyLeaveBattleCommonCondition();
```

### GetEncounteredPartyBase
`public static PartyBase GetEncounteredPartyBase(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encountered party base 的结果。

```csharp
// 静态调用，不需要实例
MapEventHelper.GetEncounteredPartyBase(attackerParty, defenderParty);
```

### OnConversationEnd
`public static void OnConversationEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 conversation end 事件触发时调用此回调。

```csharp
// 静态调用，不需要实例
MapEventHelper.OnConversationEnd();
```

### GetPriorityListForHideoutMission
`public static FlattenedTroopRoster GetPriorityListForHideoutMission(List<MobileParty> partyList, out int firstPhaseTroopCount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 priority list for hideout mission 的结果。

```csharp
// 静态调用，不需要实例
MapEventHelper.GetPriorityListForHideoutMission(partyList, firstPhaseTroopCount);
```

## 使用示例

```csharp
MapEventHelper.Initialize();
```

## 参见

- [本区域目录](../)