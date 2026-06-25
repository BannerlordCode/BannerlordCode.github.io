---
title: "CharacterRelationManager"
description: "Auto-generated class reference for CharacterRelationManager."
---
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## Overview

`CharacterRelationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CharacterRelationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**Purpose:** Reads and returns the `relation` value held by the current object.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
var result = characterRelationManager.GetRelation(hero1, hero2);
```

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**Purpose:** Assigns a new value to `relation` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.SetRelation(hero1, hero2, 0);
```

### Remove
`public void Remove(Hero hero)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.Remove(hero);
```

### ClearOldData
`public void ClearOldData()`

**Purpose:** Removes all `old data` from the current object.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.ClearOldData();
```

### GetHeroRelation
`public static int GetHeroRelation(Hero hero1, Hero hero2)`

**Purpose:** Reads and returns the `hero relation` value held by the current object.

```csharp
// Static call; no instance required
CharacterRelationManager.GetHeroRelation(hero1, hero2);
```

### SetHeroRelation
`public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

**Purpose:** Assigns a new value to `hero relation` and updates the object's internal state.

```csharp
// Static call; no instance required
CharacterRelationManager.SetHeroRelation(hero1, hero2, 0);
```

### AfterLoad
`public void AfterLoad()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.AfterLoad();
```

### RemoveHero
`public void RemoveHero(Hero deadHero)`

**Purpose:** Removes `hero` from the current collection or state.

```csharp
// Obtain an instance of CharacterRelationManager from the subsystem API first
CharacterRelationManager characterRelationManager = ...;
characterRelationManager.RemoveHero(deadHero);
```

## Usage Example

```csharp
var manager = CharacterRelationManager.Current;
```

## See Also

- [Area Index](../)