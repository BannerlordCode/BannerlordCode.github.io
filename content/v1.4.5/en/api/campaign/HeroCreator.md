---
title: "HeroCreator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HeroCreator`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class HeroCreator`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/HeroCreator.cs`

## Overview

`HeroCreator` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### SetGenerateFirstAndFullName
`public HeroInitializationArgs SetGenerateFirstAndFullName(bool value)`

**Purpose:** Sets the value or state of `generate first and full name`.

### SetName
`public HeroInitializationArgs SetName(TextObject name)`

**Purpose:** Sets the value or state of `name`.

### SetFirstName
`public HeroInitializationArgs SetFirstName(TextObject firstName)`

**Purpose:** Sets the value or state of `first name`.

### SetMother
`public HeroInitializationArgs SetMother(Hero mother)`

**Purpose:** Sets the value or state of `mother`.

### SetFather
`public HeroInitializationArgs SetFather(Hero father)`

**Purpose:** Sets the value or state of `father`.

### SetIsFemale
`public HeroInitializationArgs SetIsFemale(bool isFemale)`

**Purpose:** Sets the value or state of `is female`.

### SetBornSettlement
`public HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)`

**Purpose:** Sets the value or state of `born settlement`.

### SetLevel
`public HeroInitializationArgs SetLevel(int level)`

**Purpose:** Sets the value or state of `level`.

### SetAppearance
`public HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)`

**Purpose:** Sets the value or state of `appearance`.

### SetPreferredUpgradeFormation
`public HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)`

**Purpose:** Sets the value or state of `preferred upgrade formation`.

### SetClan
`public HeroInitializationArgs SetClan(Clan clan)`

**Purpose:** Sets the value or state of `clan`.

### SetCulture
`public HeroInitializationArgs SetCulture(CultureObject culture)`

**Purpose:** Sets the value or state of `culture`.

### SetSupporterOf
`public HeroInitializationArgs SetSupporterOf(Clan supporterOf)`

**Purpose:** Sets the value or state of `supporter of`.

### SetOccupation
`public HeroInitializationArgs SetOccupation(Occupation occupation)`

**Purpose:** Sets the value or state of `occupation`.

### CreateNotable
`public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)`

**Purpose:** Creates a new `notable` instance or object.

### CreateSpecialHero
`public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)`

**Purpose:** Creates a new `special hero` instance or object.

### CreateChild
`public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)`

**Purpose:** Creates a new `child` instance or object.

### CreateRelativeNotableHero
`public static Hero CreateRelativeNotableHero(Hero relative)`

**Purpose:** Creates a new `relative notable hero` instance or object.

### CreateBasicHero
`public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)`

**Purpose:** Creates a new `basic hero` instance or object.

### DeliverOffSpring
`public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Handles logic related to `deliver off spring`.

## Usage Example

```csharp
var value = new HeroCreator();
value.SetGenerateFirstAndFullName(false);
```

## See Also

- [Complete Class Catalog](../catalog)