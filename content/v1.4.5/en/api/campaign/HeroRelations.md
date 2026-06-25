---
title: "HeroRelations"
description: "Auto-generated class reference for HeroRelations."
---
# HeroRelations

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class HeroRelations`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## Overview

`HeroRelations` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**Purpose:** Reads and returns the `relation` value held by the current object.

```csharp
// Obtain an instance of HeroRelations from the subsystem API first
HeroRelations heroRelations = ...;
var result = heroRelations.GetRelation(hero1, hero2);
```

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**Purpose:** Assigns a new value to `relation` and updates the object's internal state.

```csharp
// Obtain an instance of HeroRelations from the subsystem API first
HeroRelations heroRelations = ...;
heroRelations.SetRelation(hero1, hero2, 0);
```

### Remove
`public void Remove(Hero hero)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of HeroRelations from the subsystem API first
HeroRelations heroRelations = ...;
heroRelations.Remove(hero);
```

### ClearOldData
`public void ClearOldData()`

**Purpose:** Removes all `old data` from the current object.

```csharp
// Obtain an instance of HeroRelations from the subsystem API first
HeroRelations heroRelations = ...;
heroRelations.ClearOldData();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeroRelations heroRelations = ...;
heroRelations.GetRelation(hero1, hero2);
```

## See Also

- [Area Index](../)