<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyBaseHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBaseHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyBaseHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### SortRoster

```csharp
public static void SortRoster(MobileParty mobileParty)
```

### GetPartySizeText

```csharp
public static TextObject GetPartySizeText(PartyBase party)
```

### GetPartySizeText

```csharp
public static TextObject GetPartySizeText(int healtyNumber, int woundedNumber, bool isInspected)
```

### GetShipSizeText

```csharp
public static string GetShipSizeText(int shipCount, bool isInspected)
```

### FindPartySizeNormalLimit

```csharp
public static float FindPartySizeNormalLimit(MobileParty mobileParty)
```

### GetCaptainOfTroop

```csharp
public static Hero GetCaptainOfTroop(PartyBase affectorParty, CharacterObject affectorCharacter)
```

### PrintRosterContents

```csharp
public static string PrintRosterContents(TroopRoster roster)
```

### PrintSummarisedItemRoster

```csharp
public static TextObject PrintSummarisedItemRoster(ItemRoster items)
```

### PrintRegularTroopCategories

```csharp
public static TextObject PrintRegularTroopCategories(TroopRoster roster)
```

### GetVisualPartyLeader

```csharp
public static CharacterObject GetVisualPartyLeader(PartyBase party)
```

### GetSpeedLimitation

```csharp
public static int GetSpeedLimitation(ItemRoster partyItemRoster, out ItemObject speedLimitationItem)
```

### HasFeat

```csharp
public static bool HasFeat(PartyBase party, FeatObject feat)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)