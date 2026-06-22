<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Location`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Location

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Locations
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Location` 是 `TaleWorlds.CampaignSystem.Settlements.Locations` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `SpecialItems` | `public List<ItemObject> SpecialItems { get; }` |
| `IsReserved` | `public bool IsReserved { get; }` |
| `LocationsOfPassages` | `public List<Location> LocationsOfPassages { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `DoorName` | `public TextObject DoorName { get; }` |
| `IsIndoor` | `public bool IsIndoor { get; }` |
| `CanBeReserved` | `public bool CanBeReserved { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `CharacterCount` | `public int CharacterCount { get; }` |


## 主要方法

### Initialize

```csharp
public void Initialize(Location locationTemplate, LocationComplex ownerComplex)
```

### CanAIExit

```csharp
public bool CanAIExit(LocationCharacter character)
```

### CanAIEnter

```csharp
public bool CanAIEnter(LocationCharacter character)
```

### CanPlayerEnter

```csharp
public bool CanPlayerEnter()
```

### CanPlayerSee

```csharp
public bool CanPlayerSee()
```

### ReserveLocation

```csharp
public void ReserveLocation(TextObject locationName, TextObject doorName)
```

### RemoveReservation

```csharp
public void RemoveReservation()
```

### SetOwnerComplex

```csharp
public void SetOwnerComplex(LocationComplex locationComplex)
```

### AddCharacter

```csharp
public void AddCharacter(LocationCharacter locationCharacter)
```

### AddLocationCharacters

```csharp
public void AddLocationCharacters(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation, int count)
```

### AddLocationCharacter

```csharp
public LocationCharacter AddLocationCharacter(CreateLocationCharacterDelegate createDelegate, CultureObject culture, LocationCharacter.CharacterRelations relation)
```

### AddSpecialItem

```csharp
public void AddSpecialItem(ItemObject itemObject)
```

### GetSceneName

```csharp
public string GetSceneName(int upgradeLevel)
```

### SetSceneName

```csharp
public void SetSceneName(int upgradeLevel, string sceneName)
```

### GetSceneCount

```csharp
public int GetSceneCount()
```

### RemoveAllHeroCharactersFromPrison

```csharp
public void RemoveAllHeroCharactersFromPrison()
```

### RemoveAllCharacters

```csharp
public void RemoveAllCharacters()
```

### RemoveAllCharacters

```csharp
public void RemoveAllCharacters(Predicate<LocationCharacter> predicate)
```

### RemoveLocationCharacter

```csharp
public void RemoveLocationCharacter(LocationCharacter locationCharacter)
```

### RemoveCharacter

```csharp
public void RemoveCharacter(Hero hero)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)