---
title: "RomanceModel"
description: "Auto-generated class reference for RomanceModel."
---
# RomanceModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RomanceModel : MBGameModel<RomanceModel>`
**Base:** `MBGameModel<RomanceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RomanceModel.cs`

## Overview

`RomanceModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `RomanceModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAttractionValuePercentage
`public abstract int GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)`

**Purpose:** **Purpose:** Reads and returns the attraction value percentage value held by the this instance.

```csharp
// Obtain an instance of RomanceModel from the subsystem API first
RomanceModel romanceModel = ...;
var result = romanceModel.GetAttractionValuePercentage(potentiallyInterestedCharacter, heroOfInterest);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RomanceModel instance = ...;
```

## See Also

- [Area Index](../)