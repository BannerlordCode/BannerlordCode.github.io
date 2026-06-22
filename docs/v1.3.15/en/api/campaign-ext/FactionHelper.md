<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FactionHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactionHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `FactionHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### FindPotentialStrength

```csharp
public static float FindPotentialStrength(IFaction faction)
```

### GetEnemyKingdoms

```csharp
public static IEnumerable<Kingdom> GetEnemyKingdoms(IFaction faction)
```

### GetStances

```csharp
public static IEnumerable<StanceLink> GetStances(IFaction faction)
```

### GetPowerRatioToEnemies

```csharp
public static float GetPowerRatioToEnemies(Kingdom kingdom)
```

### IsClanNameApplicable

```csharp
public static Tuple<bool, string> IsClanNameApplicable(string name)
```

### IsKingdomNameApplicable

```csharp
public static Tuple<bool, string> IsKingdomNameApplicable(string name)
```

### GetPowerRatioToTributePayedKingdoms

```csharp
public static float GetPowerRatioToTributePayedKingdoms(Kingdom kingdom)
```

### CanClanBeGrantedFief

```csharp
public static bool CanClanBeGrantedFief(Clan clan)
```

### CanPlayerEnterFaction

```csharp
public static bool CanPlayerEnterFaction(bool asVassal = false)
```

### GetTotalEnemyKingdomPower

```csharp
public static float GetTotalEnemyKingdomPower(Kingdom kingdom)
```

### GetTotalTributePayedKingdomsPower

```csharp
public static float GetTotalTributePayedKingdomsPower(Kingdom kingdom)
```

### GetKingdomArmies

```csharp
public static IEnumerable<Army> GetKingdomArmies(IFaction mapFaction)
```

### SettlementProsperityEffectOnGarrisonSizeConstant

```csharp
public static float SettlementProsperityEffectOnGarrisonSizeConstant(Town town)
```

### SettlementFoodPotentialEffectOnGarrisonSizeConstant

```csharp
public static float SettlementFoodPotentialEffectOnGarrisonSizeConstant(Settlement settlement)
```

### OwnerClanEconomyEffectOnGarrisonSizeConstant

```csharp
public static float OwnerClanEconomyEffectOnGarrisonSizeConstant(Clan clan)
```

### FindIdealGarrisonStrengthPerWalledCenter

```csharp
public static float FindIdealGarrisonStrengthPerWalledCenter(Kingdom kingdom, Clan clan = null)
```

### FinishAllRelatedHostileActionsOfNobleToFaction

```csharp
public static void FinishAllRelatedHostileActionsOfNobleToFaction(Hero noble, IFaction faction)
```

### FinishAllRelatedHostileActionsOfFactionToFaction

```csharp
public static void FinishAllRelatedHostileActionsOfFactionToFaction(IFaction faction1, IFaction faction2)
```

### FinishAllRelatedHostileActions

```csharp
public static void FinishAllRelatedHostileActions(Clan clan1, Clan clan2)
```

### FinishAllRelatedHostileActions

```csharp
public static void FinishAllRelatedHostileActions(Kingdom kingdom1, Kingdom kingdom2)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)