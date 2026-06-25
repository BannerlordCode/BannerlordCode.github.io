---
title: "HeroCreator"
description: "Auto-generated class reference for HeroCreator."
---
# HeroCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class HeroCreator`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/HeroCreator.cs`

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

### CreateNotable
`public static Hero CreateNotable(Occupation occupation, Settlement settlement = null)`

**Purpose:** Constructs a new `notable` entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroCreator.CreateNotable(occupation, null);
```

### CreateSpecialHero
`public static Hero CreateSpecialHero(CharacterObject template, Settlement bornSettlement = null, Clan faction = null, Clan supporterOfClan = null, int age = -1)`

**Purpose:** Constructs a new `special hero` entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroCreator.CreateSpecialHero(template, null, null, null, 0);
```

### CreateChild
`public static Hero CreateChild(CharacterObject template, Settlement bornSettlement, Clan clan, int age)`

**Purpose:** Constructs a new `child` entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroCreator.CreateChild(template, bornSettlement, clan, 0);
```

### CreateRelativeNotableHero
`public static Hero CreateRelativeNotableHero(Hero relative)`

**Purpose:** Constructs a new `relative notable hero` entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroCreator.CreateRelativeNotableHero(relative);
```

### CreateBasicHero
`public static bool CreateBasicHero(string stringId, CharacterObject character, out Hero hero, bool isAlive = true)`

**Purpose:** Constructs a new `basic hero` entity and returns it to the caller.

```csharp
// Static call; no instance required
HeroCreator.CreateBasicHero("example", character, hero, false);
```

### DeliverOffSpring
`public static Hero DeliverOffSpring(Hero mother, Hero father, bool isOffspringFemale)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
HeroCreator.DeliverOffSpring(mother, father, false);
```

### SetGenerateFirstAndFullName
`public HeroCreator.HeroInitializationArgs SetGenerateFirstAndFullName(bool value)`

**Purpose:** Assigns a new value to `generate first and full name` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetGenerateFirstAndFullName(false);
```

### SetName
`public HeroCreator.HeroInitializationArgs SetName(TextObject name)`

**Purpose:** Assigns a new value to `name` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetName(name);
```

### SetFirstName
`public HeroCreator.HeroInitializationArgs SetFirstName(TextObject firstName)`

**Purpose:** Assigns a new value to `first name` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetFirstName(firstName);
```

### SetMother
`public HeroCreator.HeroInitializationArgs SetMother(Hero mother)`

**Purpose:** Assigns a new value to `mother` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetMother(mother);
```

### SetFather
`public HeroCreator.HeroInitializationArgs SetFather(Hero father)`

**Purpose:** Assigns a new value to `father` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetFather(father);
```

### SetIsFemale
`public HeroCreator.HeroInitializationArgs SetIsFemale(bool isFemale)`

**Purpose:** Assigns a new value to `is female` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetIsFemale(false);
```

### SetBornSettlement
`public HeroCreator.HeroInitializationArgs SetBornSettlement(Settlement bornSettlement)`

**Purpose:** Assigns a new value to `born settlement` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetBornSettlement(bornSettlement);
```

### SetLevel
`public HeroCreator.HeroInitializationArgs SetLevel(int level)`

**Purpose:** Assigns a new value to `level` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetLevel(0);
```

### SetAppearance
`public HeroCreator.HeroInitializationArgs SetAppearance(StaticBodyProperties? staticBodyProperties, float weight = -1f, float build = -1f, int hair = -1, int beard = -1, int tattoo = -1)`

**Purpose:** Assigns a new value to `appearance` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetAppearance(staticBodyProperties, 0, 0, 0, 0, 0);
```

### SetPreferredUpgradeFormation
`public HeroCreator.HeroInitializationArgs SetPreferredUpgradeFormation(FormationClass preferredUpgradeFormation)`

**Purpose:** Assigns a new value to `preferred upgrade formation` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetPreferredUpgradeFormation(preferredUpgradeFormation);
```

### SetClan
`public HeroCreator.HeroInitializationArgs SetClan(Clan clan)`

**Purpose:** Assigns a new value to `clan` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetClan(clan);
```

### SetCulture
`public HeroCreator.HeroInitializationArgs SetCulture(CultureObject culture)`

**Purpose:** Assigns a new value to `culture` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetCulture(culture);
```

### SetSupporterOf
`public HeroCreator.HeroInitializationArgs SetSupporterOf(Clan supporterOf)`

**Purpose:** Assigns a new value to `supporter of` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetSupporterOf(supporterOf);
```

### SetOccupation
`public HeroCreator.HeroInitializationArgs SetOccupation(Occupation occupation)`

**Purpose:** Assigns a new value to `occupation` and updates the object's internal state.

```csharp
// Obtain an instance of HeroCreator from the subsystem API first
HeroCreator heroCreator = ...;
var result = heroCreator.SetOccupation(occupation);
```

## Usage Example

```csharp
HeroCreator.CreateNotable(occupation, null);
```

## See Also

- [Area Index](../)