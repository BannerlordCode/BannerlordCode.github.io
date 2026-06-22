<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownHelpers

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TownHelpers` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetTownFoodAndMarketStocks

```csharp
public static ValueTuple<int, int> GetTownFoodAndMarketStocks(Town town)
```

### IsThereAnyoneToMeetInTown

```csharp
public static bool IsThereAnyoneToMeetInTown(Settlement settlement)
```

### GetHeroesToMeetInTown

```csharp
public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)
```

### GetHeroesInSettlement

```csharp
public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)
```

### RequestAMeetingPartyCondition

```csharp
public static bool RequestAMeetingPartyCondition(MobileParty party)
```

### RequestAMeetingHeroWithoutPartyCondition

```csharp
public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)
```

### CalculatePriceDeviationRatio

```csharp
public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)