<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyBaseHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBaseHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PartyBaseHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)