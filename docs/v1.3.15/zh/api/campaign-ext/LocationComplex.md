<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationComplex`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationComplex

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Locations
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`LocationComplex` 是 `TaleWorlds.CampaignSystem.Settlements.Locations` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public static LocationComplex Current { get; }` |


## 主要方法

### CanAlways

```csharp
public static bool CanAlways(LocationCharacter locationCharacter, Location location)
```

### CanNever

```csharp
public static bool CanNever(LocationCharacter locationCharacter, Location location)
```

### CanIfHero

```csharp
public static bool CanIfHero(LocationCharacter locationCharacter, Location location)
```

### CanIfDay

```csharp
public static bool CanIfDay(LocationCharacter locationCharacter, Location location)
```

### CanIfPriceIsPaid

```csharp
public static bool CanIfPriceIsPaid(LocationCharacter locationCharacter, Location location)
```

### CanIfGrownUpMaleOrHero

```csharp
public static bool CanIfGrownUpMaleOrHero(LocationCharacter locationCharacter, Location location)
```

### CanIfMaleOrHero

```csharp
public static bool CanIfMaleOrHero(LocationCharacter locationCharacter, Location location)
```

### CanIfSettlementAccessModelLetsPlayer

```csharp
public static bool CanIfSettlementAccessModelLetsPlayer(LocationCharacter locationCharacter, Location location)
```

### Initialize

```csharp
public void Initialize(LocationComplexTemplate complexTemplate)
```

### AddPassage

```csharp
public void AddPassage(Location firstLocation, Location secondLocation)
```

### ChangeLocation

```csharp
public void ChangeLocation(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)
```

### GetListOfCharactersInLocation

```csharp
public IEnumerable<LocationCharacter> GetListOfCharactersInLocation(string locationName)
```

### GetListOfCharacters

```csharp
public IList<LocationCharacter> GetListOfCharacters()
```

### GetListOfLocations

```csharp
public IEnumerable<Location> GetListOfLocations()
```

### AgentPassageUsageTick

```csharp
public void AgentPassageUsageTick()
```

### GetLocationOfCharacter

```csharp
public Location GetLocationOfCharacter(LocationCharacter character)
```

### GetLocationOfCharacter

```csharp
public Location GetLocationOfCharacter(Hero hero)
```

### GetLocationCharacterOfHero

```csharp
public LocationCharacter GetLocationCharacterOfHero(Hero hero)
```

### GetFirstLocationCharacterOfCharacter

```csharp
public LocationCharacter GetFirstLocationCharacterOfCharacter(CharacterObject character)
```

### RemoveCharacterIfExists

```csharp
public void RemoveCharacterIfExists(Hero hero)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)