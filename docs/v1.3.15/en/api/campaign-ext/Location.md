<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Location`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Location

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Location` is a class in the `TaleWorlds.CampaignSystem.Settlements.Locations` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)