<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlattenedTroopRoster`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FlattenedTroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `FlattenedTroopRoster` is a class in the `TaleWorlds.CampaignSystem.Roster` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |


## Key Methods

### Add

```csharp
public void Add(MBList<TroopRosterElement> roster)
```

### Add

```csharp
public void Add(TroopRosterElement troop)
```

### Add

```csharp
public void Add(CharacterObject troop, int number, int woundedNumber = 0)
```

### Add

```csharp
public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)
```

### GenerateUniqueNoFromParty

```csharp
public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)
```

### Remove

```csharp
public void Remove(UniqueTroopDescriptor descriptor)
```

### Clear

```csharp
public void Clear()
```

### RemoveIf

```csharp
public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)
```

### FindIndexOfCharacter

```csharp
public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)
```

### GetEnumerator

```csharp
public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()
```

### OnTroopKilled

```csharp
public void OnTroopKilled(UniqueTroopDescriptor troopSeed)
```

### OnTroopWounded

```csharp
public void OnTroopWounded(UniqueTroopDescriptor troopSeed)
```

### OnTroopRouted

```csharp
public void OnTroopRouted(UniqueTroopDescriptor troopSeed)
```

### OnTroopGainXp

```csharp
public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)
```

### ResetTroopXP

```csharp
public void ResetTroopXP()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)