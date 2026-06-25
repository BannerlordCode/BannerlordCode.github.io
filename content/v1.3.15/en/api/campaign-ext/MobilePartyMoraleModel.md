---
title: "MobilePartyMoraleModel"
description: "Auto-generated class reference for MobilePartyMoraleModel."
---
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyMoraleModel.cs`

## Overview

`MobilePartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MobilePartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMoraleChange
`public abstract float CalculateMoraleChange(MobileParty party)`

**Purpose:** Calculates the current value or result of morale change.

```csharp
// Obtain an instance of MobilePartyMoraleModel from the subsystem API first
MobilePartyMoraleModel mobilePartyMoraleModel = ...;
var result = mobilePartyMoraleModel.CalculateMoraleChange(party);
```

### GetMoraleTooltipText
`public abstract TextObject GetMoraleTooltipText(MobileParty party)`

**Purpose:** Reads and returns the morale tooltip text value held by the this instance.

```csharp
// Obtain an instance of MobilePartyMoraleModel from the subsystem API first
MobilePartyMoraleModel mobilePartyMoraleModel = ...;
var result = mobilePartyMoraleModel.GetMoraleTooltipText(party);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MobilePartyMoraleModel instance = ...;
```

## See Also

- [Area Index](../)