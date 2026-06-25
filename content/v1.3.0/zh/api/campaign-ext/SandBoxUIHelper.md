---
title: "SandBoxUIHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxUIHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxUIHelper

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public static class SandBoxUIHelper`
**Base:** 无
**File:** `SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## 概述

`SandBoxUIHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SandBoxUIHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetExplainedNumberTooltip
`public static List<TooltipProperty> GetExplainedNumberTooltip(ref ExplainedNumber explanation)`

**用途 / Purpose:** 获取 `explained number tooltip` 的当前值。

### GetBattleLootAwardTooltip
`public static List<TooltipProperty> GetBattleLootAwardTooltip(float lootPercentage)`

**用途 / Purpose:** 获取 `battle loot award tooltip` 的当前值。

### GetFigureheadTooltip
`public static List<TooltipProperty> GetFigureheadTooltip(Figurehead figurehead)`

**用途 / Purpose:** 获取 `figurehead tooltip` 的当前值。

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**用途 / Purpose:** 获取 `skill effect text` 的当前值。

### GetRecruitNotificationText
`public static string GetRecruitNotificationText(int recruitmentAmount)`

**用途 / Purpose:** 获取 `recruit notification text` 的当前值。

### GetItemSoldNotificationText
`public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)`

**用途 / Purpose:** 获取 `item sold notification text` 的当前值。

### GetShipSoldNotificationText
`public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)`

**用途 / Purpose:** 获取 `ship sold notification text` 的当前值。

### GetTroopGivenToSettlementNotificationText
`public static string GetTroopGivenToSettlementNotificationText(int givenAmount)`

**用途 / Purpose:** 获取 `troop given to settlement notification text` 的当前值。

### GetSiegeEngineInProgressTooltip
`public static List<TooltipProperty> GetSiegeEngineInProgressTooltip(SiegeEvent.SiegeEngineConstructionProgress engineInProgress)`

**用途 / Purpose:** 获取 `siege engine in progress tooltip` 的当前值。

### GetSiegeEngineTooltip
`public static List<TooltipProperty> GetSiegeEngineTooltip(SiegeEngineType engine)`

**用途 / Purpose:** 获取 `siege engine tooltip` 的当前值。

### GetWallSectionTooltip
`public static List<TooltipProperty> GetWallSectionTooltip(Settlement settlement, int wallIndex)`

**用途 / Purpose:** 获取 `wall section tooltip` 的当前值。

### GetPrisonersSoldNotificationText
`public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)`

**用途 / Purpose:** 获取 `prisoners sold notification text` 的当前值。

### GetPartyHealthyCount
`public static int GetPartyHealthyCount(MobileParty party)`

**用途 / Purpose:** 获取 `party healthy count` 的当前值。

### GetPartyWoundedText
`public static string GetPartyWoundedText(int woundedAmount)`

**用途 / Purpose:** 获取 `party wounded text` 的当前值。

### GetPartyPrisonerText
`public static string GetPartyPrisonerText(int prisonerAmount)`

**用途 / Purpose:** 获取 `party prisoner text` 的当前值。

### GetAllWoundedMembersAmount
`public static int GetAllWoundedMembersAmount(MobileParty party)`

**用途 / Purpose:** 获取 `all wounded members amount` 的当前值。

### GetAllPrisonerMembersAmount
`public static int GetAllPrisonerMembersAmount(MobileParty party)`

**用途 / Purpose:** 获取 `all prisoner members amount` 的当前值。

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**用途 / Purpose:** 获取 `character code` 的当前值。

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**用途 / Purpose:** 处理 `is hero information hidden` 相关逻辑。

### GetMapEventVisualTypeFromMapEvent
`public static SandBoxUIHelper.MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `map event visual type from map event` 的当前值。

### IsAgentInVisibilityRangeApproximate
`public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)`

**用途 / Purpose:** 处理 `is agent in visibility range approximate` 相关逻辑。

### CanAgentBeAlarmed
`public static bool CanAgentBeAlarmed(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `agent be alarmed`。

## 使用示例

```csharp
SandBoxUIHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)