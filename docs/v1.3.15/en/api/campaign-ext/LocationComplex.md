<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationComplex`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationComplex

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LocationComplex` is a class in the `TaleWorlds.CampaignSystem.Settlements.Locations` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static LocationComplex Current { get; }` |


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)