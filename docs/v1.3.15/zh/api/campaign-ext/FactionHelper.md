<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FactionHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FactionHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`FactionHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)