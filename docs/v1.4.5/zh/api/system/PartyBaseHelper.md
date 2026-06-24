<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyBaseHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PartyBaseHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class PartyBaseHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/PartyBaseHelper.cs`

## 概述

`PartyBaseHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `PartyBaseHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SortRoster
`public static void SortRoster(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `sort roster` 相关逻辑。

### GetPartySizeText
`public static TextObject GetPartySizeText(PartyBase party)`

**用途 / Purpose:** 获取 `party size text` 的当前值。

### GetPartySizeText
`public static TextObject GetPartySizeText(int healtyNumber, int woundedNumber, bool isInspected)`

**用途 / Purpose:** 获取 `party size text` 的当前值。

### GetShipSizeText
`public static string GetShipSizeText(int shipCount, bool isInspected)`

**用途 / Purpose:** 获取 `ship size text` 的当前值。

### FindPartySizeNormalLimit
`public static float FindPartySizeNormalLimit(MobileParty mobileParty)`

**用途 / Purpose:** 处理 `find party size normal limit` 相关逻辑。

### GetCaptainOfTroop
`public static Hero GetCaptainOfTroop(PartyBase affectorParty, CharacterObject affectorCharacter)`

**用途 / Purpose:** 获取 `captain of troop` 的当前值。

### PrintRosterContents
`public static string PrintRosterContents(TroopRoster roster)`

**用途 / Purpose:** 处理 `print roster contents` 相关逻辑。

### PrintSummarisedItemRoster
`public static TextObject PrintSummarisedItemRoster(ItemRoster items)`

**用途 / Purpose:** 处理 `print summarised item roster` 相关逻辑。

### PrintRegularTroopCategories
`public static TextObject PrintRegularTroopCategories(TroopRoster roster)`

**用途 / Purpose:** 处理 `print regular troop categories` 相关逻辑。

### GetVisualPartyLeader
`public static CharacterObject GetVisualPartyLeader(PartyBase party)`

**用途 / Purpose:** 获取 `visual party leader` 的当前值。

### GetSpeedLimitation
`public static int GetSpeedLimitation(ItemRoster partyItemRoster, out ItemObject speedLimitationItem)`

**用途 / Purpose:** 获取 `speed limitation` 的当前值。

### HasFeat
`public static bool HasFeat(PartyBase party, FeatObject feat)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `feat`。

## 使用示例

```csharp
PartyBaseHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)