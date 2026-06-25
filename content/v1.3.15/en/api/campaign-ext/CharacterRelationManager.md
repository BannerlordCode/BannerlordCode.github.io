---
title: "CharacterRelationManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterRelationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## Overview

`CharacterRelationManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CharacterRelationManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static CharacterRelationManager Instance { get; }` |

## Key Methods

### GetHeroRelation
`public static int GetHeroRelation(Hero hero1, Hero hero2)`

**Purpose:** Gets the current value of `hero relation`.

### SetHeroRelation
`public static void SetHeroRelation(Hero hero1, Hero hero2, int value)`

**Purpose:** Sets the value or state of `hero relation`.

### AfterLoad
`public void AfterLoad()`

**Purpose:** Handles logic related to `after load`.

### RemoveHero
`public void RemoveHero(Hero deadHero)`

**Purpose:** Removes `hero` from the current collection or state.

### GetRelation
`public int GetRelation(Hero hero1, Hero hero2)`

**Purpose:** Gets the current value of `relation`.

### SetRelation
`public void SetRelation(Hero hero1, Hero hero2, int value)`

**Purpose:** Sets the value or state of `relation`.

### Remove
`public void Remove(Hero hero)`

**Purpose:** Removes `remove` from the current collection or state.

### ClearOldData
`public void ClearOldData()`

**Purpose:** Handles logic related to `clear old data`.

## Usage Example

```csharp
var manager = CharacterRelationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)