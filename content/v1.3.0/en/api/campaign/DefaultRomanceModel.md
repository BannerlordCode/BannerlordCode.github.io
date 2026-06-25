---
title: "DefaultRomanceModel"
description: "Auto-generated class reference for DefaultRomanceModel."
---
# DefaultRomanceModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultRomanceModel : RomanceModel`
**Base:** `RomanceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRomanceModel.cs`

## Overview

`DefaultRomanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultRomanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAttractionValuePercentage
`public override int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**Purpose:** Reads and returns the attraction value percentage value held by the this instance.

```csharp
// Obtain an instance of DefaultRomanceModel from the subsystem API first
DefaultRomanceModel defaultRomanceModel = ...;
var result = defaultRomanceModel.GetAttractionValuePercentage(potentiallyInterestedCharacter, heroOfInterest);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultRomanceModel>(new MyDefaultRomanceModel());
```

## See Also

- [Area Index](../)