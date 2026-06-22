<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SettlementHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetRandomStuff

```csharp
public static string GetRandomStuff(bool isFemale)
```

### FindNearestSettlementToSettlement

```csharp
public static Settlement FindNearestSettlementToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestSettlementToMobileParty

```csharp
public static Settlement FindNearestSettlementToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestSettlementToPoint

```csharp
public static Settlement FindNearestSettlementToPoint(in CampaignVec2 point, Func<Settlement, bool> condition = null)
```

### FindNearestHideoutToSettlement

```csharp
public static Hideout FindNearestHideoutToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestHideoutToMobileParty

```csharp
public static Hideout FindNearestHideoutToMobileParty(MobileParty fromMobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestTownToSettlement

```csharp
public static Town FindNearestTownToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestTownToMobileParty

```csharp
public static Town FindNearestTownToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNextSettlementAroundMobileParty

```csharp
public static int FindNextSettlementAroundMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, float maxDistance, int lastIndex, Func<Settlement, bool> condition = null)
```

### FindNearestCastleToSettlement

```csharp
public static Settlement FindNearestCastleToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestCastleToMobileParty

```csharp
public static Settlement FindNearestCastleToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestFortificationToSettlement

```csharp
public static Settlement FindNearestFortificationToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestFortificationToMobileParty

```csharp
public static Settlement FindNearestFortificationToMobileParty(MobileParty mobileParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindFurthestFortificationToSettlement

```csharp
public static Settlement FindFurthestFortificationToSettlement(MBReadOnlyList<Town> candidates, MobileParty.NavigationType navCapabilities, Settlement fromSettlement, out float furthestDistance)
```

### FindNearestVillageToSettlement

```csharp
public static Village FindNearestVillageToSettlement(Settlement fromSettlement, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindNearestVillageToMobileParty

```csharp
public static Village FindNearestVillageToMobileParty(MobileParty fromParty, MobileParty.NavigationType navCapabilities, Func<Settlement, bool> condition = null)
```

### FindRandomSettlement

```csharp
public static Settlement FindRandomSettlement(Func<Settlement, bool> condition = null)
```

### FindRandomHideout

```csharp
public static Settlement FindRandomHideout(Func<Settlement, bool> condition = null)
```

### TakeEnemyVillagersOutsideSettlements

```csharp
public static void TakeEnemyVillagersOutsideSettlements(Settlement settlementWhichChangedFaction)
```

### GetRandomTown

```csharp
public static Settlement GetRandomTown(Clan fromFaction = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)