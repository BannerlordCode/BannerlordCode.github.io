<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignUIHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignUIHelper

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignUIHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignUIHelper.cs`

## Overview

`CampaignUIHelper` is a static utility class providing helper methods.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CampaignUIHelper (Helper)
CampaignUIHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)