---
title: "DefaultDefectionModel"
description: "Auto-generated class reference for DefaultDefectionModel."
---
# DefaultDefectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDefectionModel : DefectionModel`
**Base:** `DefectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDefectionModel.cs`

## Overview

`DefaultDefectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDefectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanHeroDefectToFaction
`public override bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**Purpose:** Checks whether the current object meets the preconditions for `hero defect to faction`.

```csharp
// Obtain an instance of DefaultDefectionModel from the subsystem API first
DefaultDefectionModel defaultDefectionModel = ...;
var result = defaultDefectionModel.CanHeroDefectToFaction(hero, kingdom);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDefectionModel>(new MyDefaultDefectionModel());
```

## See Also

- [Area Index](../)