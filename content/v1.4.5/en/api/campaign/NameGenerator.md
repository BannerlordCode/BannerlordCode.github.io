---
title: "NameGenerator"
description: "Auto-generated class reference for NameGenerator."
---
# NameGenerator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NameGenerator`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/NameGenerator.cs`

## Overview

`NameGenerator` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GenerateHeroNameAndHeroFullName
`public void GenerateHeroNameAndHeroFullName(Hero hero, out TextObject firstName, out TextObject fullName, bool useDeterministicValues = true)`

**Purpose:** Generates an instance, data, or representation of hero name and hero full name.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
nameGenerator.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

### GenerateHeroFirstName
`public TextObject GenerateHeroFirstName(Hero hero)`

**Purpose:** Generates an instance, data, or representation of hero first name.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateHeroFirstName(hero);
```

### GenerateFirstNameForPlayer
`public TextObject GenerateFirstNameForPlayer(CultureObject culture, bool isFemale)`

**Purpose:** Generates an instance, data, or representation of first name for player.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateFirstNameForPlayer(culture, false);
```

### GenerateClanName
`public TextObject GenerateClanName(CultureObject culture, Settlement clanOriginSettlement)`

**Purpose:** Generates an instance, data, or representation of clan name.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
var result = nameGenerator.GenerateClanName(culture, clanOriginSettlement);
```

### GetNameListForCulture
`public MBReadOnlyList<TextObject> GetNameListForCulture(CultureObject npcCulture, bool isFemale)`

**Purpose:** Reads and returns the name list for culture value held by the this instance.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
var result = nameGenerator.GetNameListForCulture(npcCulture, false);
```

### AddName
`public void AddName(TextObject name)`

**Purpose:** Adds name to the current collection or state.

```csharp
// Obtain an instance of NameGenerator from the subsystem API first
NameGenerator nameGenerator = ...;
nameGenerator.AddName(name);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NameGenerator nameGenerator = ...;
nameGenerator.GenerateHeroNameAndHeroFullName(hero, firstName, fullName, false);
```

## See Also

- [Area Index](../)