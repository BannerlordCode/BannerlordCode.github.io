---
title: "DefaultInformationRestrictionModel"
description: "Auto-generated class reference for DefaultInformationRestrictionModel."
---
# DefaultInformationRestrictionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInformationRestrictionModel : InformationRestrictionModel`
**Base:** `InformationRestrictionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInformationRestrictionModel.cs`

## Overview

`DefaultInformationRestrictionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultInformationRestrictionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### DoesPlayerKnowDetailsOf
`public override bool DoesPlayerKnowDetailsOf(Settlement settlement)`

**Purpose:** Returns a boolean answer to whether `player know details of` is true for the current object.

```csharp
// Obtain an instance of DefaultInformationRestrictionModel from the subsystem API first
DefaultInformationRestrictionModel defaultInformationRestrictionModel = ...;
var result = defaultInformationRestrictionModel.DoesPlayerKnowDetailsOf(settlement);
```

### DoesPlayerKnowDetailsOf
`public override bool DoesPlayerKnowDetailsOf(Hero hero)`

**Purpose:** Returns a boolean answer to whether `player know details of` is true for the current object.

```csharp
// Obtain an instance of DefaultInformationRestrictionModel from the subsystem API first
DefaultInformationRestrictionModel defaultInformationRestrictionModel = ...;
var result = defaultInformationRestrictionModel.DoesPlayerKnowDetailsOf(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel());
```

## See Also

- [Area Index](../)