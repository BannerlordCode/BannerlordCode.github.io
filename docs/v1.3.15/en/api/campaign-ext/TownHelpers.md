<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TownHelpers`
**Area:** campaign-ext

## Overview

`TownHelpers` lives in `Helpers`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetTownFoodAndMarketStocks
`public static ValueTuple<int, int> GetTownFoodAndMarketStocks(Town town)`

**Purpose:** Gets the current value of `town food and market stocks`.

### IsThereAnyoneToMeetInTown
`public static bool IsThereAnyoneToMeetInTown(Settlement settlement)`

**Purpose:** Handles logic related to `is there anyone to meet in town`.

### GetHeroesToMeetInTown
`public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)`

**Purpose:** Gets the current value of `heroes to meet in town`.

### GetHeroesInSettlement
`public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)`

**Purpose:** Gets the current value of `heroes in settlement`.

### RequestAMeetingPartyCondition
`public static bool RequestAMeetingPartyCondition(MobileParty party)`

**Purpose:** Handles logic related to `request a meeting party condition`.

### RequestAMeetingHeroWithoutPartyCondition
`public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)`

**Purpose:** Handles logic related to `request a meeting hero without party condition`.

### CalculatePriceDeviationRatio
`public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)`

**Purpose:** Handles logic related to `calculate price deviation ratio`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TownHelpers.GetTownFoodAndMarketStocks(town);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
