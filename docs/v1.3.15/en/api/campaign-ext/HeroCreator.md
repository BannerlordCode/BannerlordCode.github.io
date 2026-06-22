<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroCreator`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `HeroCreator` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `FirstName` | `public TextObject FirstName { get; }` |
| `Mother` | `public Hero Mother { get; }` |
| `Father` | `public Hero Father { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `BornSettlement` | `public Settlement BornSettlement { get; }` |
| `Level` | `public int Level { get; }` |
| `Weight` | `public float Weight { get; }` |
| `Build` | `public float Build { get; }` |
| `StaticBodyProperties` | `public StaticBodyProperties? StaticBodyProperties { get; }` |
| `PreferredUpgradeFormation` | `public FormationClass? PreferredUpgradeFormation { get; }` |
| `Clan` | `public Clan Clan { get; }` |
| `Culture` | `public CultureObject Culture { get; }` |
| `SupporterOf` | `public Clan SupporterOf { get; }` |
| `Occupation` | `public Occupation Occupation { get; }` |
| `IsOffspring` | `public bool IsOffspring { get; }` |
| `GenerateFirstAndFullName` | `public bool GenerateFirstAndFullName { get; }` |
| `HasBornSettlementBeenSet` | `public bool HasBornSettlementBeenSet { get; }` |
| `HasClanBeenSet` | `public bool HasClanBeenSet { get; }` |


## Key Methods

### CreateNotable

```csharp
public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)
```

### CreateSpecialHero

```csharp
public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)
```

### CreateChild

```csharp
public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)
```

### CreateRelativeNotableHero

```csharp
public static Hero CreateRelativeNotableHero(Hero relative)
```

### CreateBasicHero

```csharp
public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)
```

### DeliverOffSpring

```csharp
public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)
```

### SetGenerateFirstAndFullName

```csharp
public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)
```

### SetName

```csharp
public HeroCreator.HeroInitializationArgs SetName(TextObject name)
```

### SetFirstName

```csharp
public HeroCreator.HeroInitializationArgs SetFirstName(TextObject firstName)
```

### SetMother

```csharp
public HeroCreator.HeroInitializationArgs SetMother(Hero mother)
```

### SetFather

```csharp
public HeroCreator.HeroInitializationArgs SetFather(Hero father)
```

### SetIsFemale

```csharp
public HeroCreator.HeroInitializationArgs SetIsFemale(bool isFemale)
```

### SetBornSettlement

```csharp
public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)
```

### SetLevel

```csharp
public HeroCreator.HeroInitializationArgs SetLevel(int level)
```

### SetAppearance

```csharp
public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)
```

### SetPreferredUpgradeFormation

```csharp
public HeroCreator.HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)
```

### SetClan

```csharp
public HeroCreator.HeroInitializationArgs SetClan(Clan clan)
```

### SetCulture

```csharp
public HeroCreator.HeroInitializationArgs SetCulture(CultureObject culture)
```

### SetSupporterOf

```csharp
public HeroCreator.HeroInitializationArgs SetSupporterOf(Clan supporterOf)
```

### SetOccupation

```csharp
public HeroCreator.HeroInitializationArgs SetOccupation(Occupation occupation)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)