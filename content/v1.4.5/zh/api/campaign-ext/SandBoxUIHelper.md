---
title: "SandBoxUIHelper"
description: "SandBoxUIHelper 的自动生成类参考。"
---
# SandBoxUIHelper

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public static class SandBoxUIHelper`
**Base:** 无
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SandBoxUIHelper.cs`

## 概述

`SandBoxUIHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SandBoxUIHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetExplainedNumberTooltip
`public static List<TooltipProperty> GetExplainedNumberTooltip(ref ExplainedNumber explanation)`

**用途 / Purpose:** 读取并返回当前对象中 「explained number tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetExplainedNumberTooltip(explanation);
```

### GetBattleLootAwardTooltip
`public static List<TooltipProperty> GetBattleLootAwardTooltip(float lootPercentage)`

**用途 / Purpose:** 读取并返回当前对象中 「battle loot award tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetBattleLootAwardTooltip(0);
```

### GetFigureheadTooltip
`public static List<TooltipProperty> GetFigureheadTooltip(Figurehead figurehead)`

**用途 / Purpose:** 读取并返回当前对象中 「figurehead tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetFigureheadTooltip(figurehead);
```

### GetSkillEffectText
`public static string GetSkillEffectText(SkillEffect effect, int skillLevel)`

**用途 / Purpose:** 读取并返回当前对象中 「skill effect text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetSkillEffectText(effect, 0);
```

### GetRecruitNotificationText
`public static string GetRecruitNotificationText(int recruitmentAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「recruit notification text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetRecruitNotificationText(0);
```

### GetItemSoldNotificationText
`public static string GetItemSoldNotificationText(ItemRosterElement item, int itemAmount, bool fromHeroToSettlement)`

**用途 / Purpose:** 读取并返回当前对象中 「item sold notification text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetItemSoldNotificationText(item, 0, false);
```

### GetShipSoldNotificationText
`public static string GetShipSoldNotificationText(Ship ship, int itemAmount, bool fromHeroToSettlement)`

**用途 / Purpose:** 读取并返回当前对象中 「ship sold notification text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetShipSoldNotificationText(ship, 0, false);
```

### GetTroopGivenToSettlementNotificationText
`public static string GetTroopGivenToSettlementNotificationText(int givenAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「troop given to settlement notification text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetTroopGivenToSettlementNotificationText(0);
```

### GetSiegeEngineInProgressTooltip
`public static List<TooltipProperty> GetSiegeEngineInProgressTooltip(SiegeEngineConstructionProgress engineInProgress)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine in progress tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetSiegeEngineInProgressTooltip(engineInProgress);
```

### GetSiegeEngineTooltip
`public static List<TooltipProperty> GetSiegeEngineTooltip(SiegeEngineType engine)`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetSiegeEngineTooltip(engine);
```

### GetWallSectionTooltip
`public static List<TooltipProperty> GetWallSectionTooltip(Settlement settlement, int wallIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「wall section tooltip」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetWallSectionTooltip(settlement, 0);
```

### GetPrisonersSoldNotificationText
`public static string GetPrisonersSoldNotificationText(int soldPrisonerAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「prisoners sold notification text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetPrisonersSoldNotificationText(0);
```

### GetPartyHealthyCount
`public static int GetPartyHealthyCount(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「party healthy count」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetPartyHealthyCount(party);
```

### GetPartyWoundedText
`public static string GetPartyWoundedText(int woundedAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「party wounded text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetPartyWoundedText(0);
```

### GetPartyPrisonerText
`public static string GetPartyPrisonerText(int prisonerAmount)`

**用途 / Purpose:** 读取并返回当前对象中 「party prisoner text」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetPartyPrisonerText(0);
```

### GetAllWoundedMembersAmount
`public static int GetAllWoundedMembersAmount(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「all wounded members amount」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetAllWoundedMembersAmount(party);
```

### GetAllPrisonerMembersAmount
`public static int GetAllPrisonerMembersAmount(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「all prisoner members amount」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetAllPrisonerMembersAmount(party);
```

### GetCharacterCode
`public static CharacterCode GetCharacterCode(CharacterObject character, bool useCivilian = false)`

**用途 / Purpose:** 读取并返回当前对象中 「character code」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetCharacterCode(character, false);
```

### IsHeroInformationHidden
`public static bool IsHeroInformationHidden(Hero hero, out TextObject disableReason)`

**用途 / Purpose:** 判断当前对象是否处于 「hero information hidden」 状态或条件。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.IsHeroInformationHidden(hero, disableReason);
```

### GetMapEventVisualTypeFromMapEvent
`public static MapEventVisualTypes GetMapEventVisualTypeFromMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「map event visual type from map event」 的结果。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.GetMapEventVisualTypeFromMapEvent(mapEvent);
```

### IsAgentInVisibilityRangeApproximate
`public static bool IsAgentInVisibilityRangeApproximate(Agent seerAgent, Agent seenAgent)`

**用途 / Purpose:** 判断当前对象是否处于 「agent in visibility range approximate」 状态或条件。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.IsAgentInVisibilityRangeApproximate(seerAgent, seenAgent);
```

### CanAgentBeAlarmed
`public static bool CanAgentBeAlarmed(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 「agent be alarmed」 的前置条件。

```csharp
// 静态调用，不需要实例
SandBoxUIHelper.CanAgentBeAlarmed(agent);
```

## 使用示例

```csharp
SandBoxUIHelper.Initialize();
```

## 参见

- [本区域目录](../)