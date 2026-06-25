---
title: "InformationRestrictionModel"
description: "Auto-generated class reference for InformationRestrictionModel."
---
# InformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**Base:** `MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## Overview

`InformationRestrictionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `InformationRestrictionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement)`

**Purpose:** Returns a boolean answer to whether `player know details of` is true for the current object.

```csharp
// Obtain an instance of InformationRestrictionModel from the subsystem API first
InformationRestrictionModel informationRestrictionModel = ...;
var result = informationRestrictionModel.DoesPlayerKnowDetailsOf(settlement);
```

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Hero hero)`

**Purpose:** Returns a boolean answer to whether `player know details of` is true for the current object.

```csharp
// Obtain an instance of InformationRestrictionModel from the subsystem API first
InformationRestrictionModel informationRestrictionModel = ...;
var result = informationRestrictionModel.DoesPlayerKnowDetailsOf(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
InformationRestrictionModel instance = ...;
```

## See Also

- [Area Index](../)