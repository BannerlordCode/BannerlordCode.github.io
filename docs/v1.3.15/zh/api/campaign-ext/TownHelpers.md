<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownHelpers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownHelpers

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`TownHelpers` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)