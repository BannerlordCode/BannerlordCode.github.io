<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapEventHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapEventHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MapEventHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## 概述

`MapEventHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MapEventHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetRaidContext
`public static bool GetRaidContext(MapEvent mapEvent, out BattleSideEnum raiderSide, out bool raiderHasSeaPresence, out bool raiderHasLandPresence, out bool villageFactionSideHasSeaPresence, out bool villageFactionSideHasLandPresence, out bool wasEverInLootingPhase)`

**用途 / Purpose:** 获取 `raid context` 的当前值。

### IsNavalRaid
`public static bool IsNavalRaid(MapEvent mapEvent)`

**用途 / Purpose:** 处理 `is naval raid` 相关逻辑。

### GetSallyOutDefenderLeader
`public static PartyBase GetSallyOutDefenderLeader()`

**用途 / Purpose:** 获取 `sally out defender leader` 的当前值。

### CanMainPartyLeaveBattleCommonCondition
`public static bool CanMainPartyLeaveBattleCommonCondition()`

**用途 / Purpose:** 判断当前对象是否可以执行 `main party leave battle common condition`。

### GetEncounteredPartyBase
`public static PartyBase GetEncounteredPartyBase(PartyBase attackerParty, PartyBase defenderParty)`

**用途 / Purpose:** 获取 `encountered party base` 的当前值。

### OnConversationEnd
`public static void OnConversationEnd()`

**用途 / Purpose:** 当 `conversation end` 事件触发时调用此方法。

### GetPriorityListForHideoutMission
`public static FlattenedTroopRoster GetPriorityListForHideoutMission(List<MobileParty> partyList, out int firstPhaseTroopCount)`

**用途 / Purpose:** 获取 `priority list for hideout mission` 的当前值。

## 使用示例

```csharp
MapEventHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)