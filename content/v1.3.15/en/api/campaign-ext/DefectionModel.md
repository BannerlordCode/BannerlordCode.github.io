---
title: "DefectionModel"
description: "Auto-generated class reference for DefectionModel."
---
# DefectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DefectionModel : MBGameModel<DefaultDefectionModel>`
**Base:** `MBGameModel<DefaultDefectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DefectionModel.cs`

## Overview

`DefectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanHeroDefectToFaction
`public abstract bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**Purpose:** Checks whether the this instance meets the preconditions for hero defect to faction.

```csharp
// Obtain an instance of DefectionModel from the subsystem API first
DefectionModel defectionModel = ...;
var result = defectionModel.CanHeroDefectToFaction(hero, kingdom);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DefectionModel instance = ...;
```

## See Also

- [Area Index](../)