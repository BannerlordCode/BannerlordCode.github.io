<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignUIHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignUIHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## 概述

`CampaignUIHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### GetTooltipForAccumulatingProperty
```csharp
public static List<TooltipProperty> GetTooltipForAccumulatingProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)
```

### GetTooltipForAccumulatingPropertyWithResult
```csharp
public static List<TooltipProperty> GetTooltipForAccumulatingPropertyWithResult(string propertyName, float currentValue, ref ExplainedNumber explainedNumber)
```

### GetTooltipForgProperty
```csharp
public static List<TooltipProperty> GetTooltipForgProperty(string propertyName, float currentValue, ExplainedNumber explainedNumber)
```

### GetTownWallsTooltip
```csharp
public static string GetTownWallsTooltip(Town town)
```

### GetVillageMilitiaTooltip
```csharp
public static List<TooltipProperty> GetVillageMilitiaTooltip(Village village)
```

### GetTownMilitiaTooltip
```csharp
public static List<TooltipProperty> GetTownMilitiaTooltip(Town town)
```

### GetTownFoodTooltip
```csharp
public static List<TooltipProperty> GetTownFoodTooltip(Town town)
```

### GetTownLoyaltyTooltip
```csharp
public static List<TooltipProperty> GetTownLoyaltyTooltip(Town town)
```

### GetTownProsperityTooltip
```csharp
public static List<TooltipProperty> GetTownProsperityTooltip(Town town)
```

### GetTownDailyProductionTooltip
```csharp
public static List<TooltipProperty> GetTownDailyProductionTooltip(Town town)
```

### GetTownSecurityTooltip
```csharp
public static List<TooltipProperty> GetTownSecurityTooltip(Town town)
```

### GetTownPatrolTooltip
```csharp
public static string GetTownPatrolTooltip(Town town)
```

### GetVillageProsperityTooltip
```csharp
public static List<TooltipProperty> GetVillageProsperityTooltip(Village village)
```

### GetTownGarrisonTooltip
```csharp
public static List<TooltipProperty> GetTownGarrisonTooltip(Town town)
```

### GetPartyTroopSizeLimitTooltip
```csharp
public static List<TooltipProperty> GetPartyTroopSizeLimitTooltip(PartyBase party)
```

### GetPartyPrisonerSizeLimitTooltip
```csharp
public static List<TooltipProperty> GetPartyPrisonerSizeLimitTooltip(PartyBase party)
```

### GetUsedHorsesTooltip
```csharp
public static List<TooltipProperty> GetUsedHorsesTooltip(List<Tuple<EquipmentElement, int>> usedUpgradeHorsesHistory)
```

### GetArmyCohesionTooltip
```csharp
public static List<TooltipProperty> GetArmyCohesionTooltip(Army army)
```

### GetArmyManCountTooltip
```csharp
public static List<TooltipProperty> GetArmyManCountTooltip(Army army)
```

### GetDaysUntilNoFood
```csharp
public static string GetDaysUntilNoFood(float totalFood, float foodChange)
```

### GetSettlementPropertyTooltip
```csharp
public static List<TooltipProperty> GetSettlementPropertyTooltip(Settlement settlement, string valueName, float value, ExplainedNumber explainedNumber)
```

### GetSettlementPropertyTooltipWithResult
```csharp
public static List<TooltipProperty> GetSettlementPropertyTooltipWithResult(Settlement settlement, string valueName, float value, ref ExplainedNumber explainedNumber)
```

### GetArmyFoodTooltip
```csharp
public static List<TooltipProperty> GetArmyFoodTooltip(Army army)
```

### GetClanWealthStatusText
```csharp
public static string GetClanWealthStatusText(Clan clan)
```

### GetClanProsperityTooltip
```csharp
public static List<TooltipProperty> GetClanProsperityTooltip(Clan clan)
```

### GetTruceOwnedSettlementsTooltip
```csharp
public static List<TooltipProperty> GetTruceOwnedSettlementsTooltip(List<Settlement> settlements, TextObject factionName, bool isTown)
```

### GetWarPrisonersTooltip
```csharp
public static List<TooltipProperty> GetWarPrisonersTooltip(List<Hero> capturedPrisoners, TextObject factionName)
```

### GetNormalizedWarProgressTooltip
```csharp
public static List<TooltipProperty> GetNormalizedWarProgressTooltip(ExplainedNumber warProgress, ExplainedNumber otherFactionWarProgress, float maxValue, TextObject faction1Name, TextObject faction2Name)
```

### GetClanStrengthTooltip
```csharp
public static List<TooltipProperty> GetClanStrengthTooltip(Clan clan)
```

### GetCrimeTooltip
```csharp
public static List<TooltipProperty> GetCrimeTooltip(Settlement settlement)
```

## 使用示例

```csharp
// CampaignUIHelper (Helper) 的典型用法
CampaignUIHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)