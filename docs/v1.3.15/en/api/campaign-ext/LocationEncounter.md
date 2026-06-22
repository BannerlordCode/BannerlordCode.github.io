<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LocationEncounter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationEncounter

**Namespace:** TaleWorlds.CampaignSystem.Encounters
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `LocationEncounter` is a class in the `TaleWorlds.CampaignSystem.Encounters` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `CharactersAccompanyingPlayer` | `public List<AccompanyingCharacter> CharactersAccompanyingPlayer { get; }` |


## Key Methods

### AddAccompanyingCharacter

```csharp
public void AddAccompanyingCharacter(LocationCharacter locationCharacter, bool isFollowing = false)
```

### GetAccompanyingCharacter

```csharp
public AccompanyingCharacter GetAccompanyingCharacter(LocationCharacter locationCharacter)
```

### GetAccompanyingCharacter

```csharp
public AccompanyingCharacter GetAccompanyingCharacter(CharacterObject character)
```

### RemoveAccompanyingCharacter

```csharp
public void RemoveAccompanyingCharacter(LocationCharacter locationCharacter)
```

### RemoveAccompanyingCharacter

```csharp
public void RemoveAccompanyingCharacter(Hero hero)
```

### RemoveAllAccompanyingCharacters

```csharp
public void RemoveAllAccompanyingCharacters()
```

### OnCharacterLocationChanged

```csharp
public void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation)
```

### IsWorkshopLocation

```csharp
public virtual bool IsWorkshopLocation(Location location)
```

### IsTavern

```csharp
public virtual bool IsTavern(Location location)
```

### CreateAndOpenMissionController

```csharp
public virtual IMission CreateAndOpenMissionController(Location nextLocation, Location previousLocation = null, CharacterObject talkToChar = null, string playerSpecialSpawnTag = null)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)