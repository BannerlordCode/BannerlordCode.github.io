<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownHelpers`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class TownHelpers`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## Overview

`TownHelpers` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
TownHelpers.GetTownFoodAndMarketStocks(town);
```

## See Also

- [Complete Class Catalog](../catalog)