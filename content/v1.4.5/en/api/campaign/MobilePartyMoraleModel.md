---
title: "MobilePartyMoraleModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyMoraleModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyMoraleModel : MBGameModel<MobilePartyMoraleModel>`
**Base:** `MBGameModel<MobilePartyMoraleModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MobilePartyMoraleModel.cs`

## Overview

`MobilePartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MobilePartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateMoraleChange
`public abstract float CalculateMoraleChange(MobileParty party)`

**Purpose:** Handles logic related to `calculate morale change`.

### GetMoraleTooltipText
`public abstract TextObject GetMoraleTooltipText(MobileParty party)`

**Purpose:** Gets the current value of `morale tooltip text`.

## Usage Example

```csharp
var implementation = new CustomMobilePartyMoraleModel();
```

## See Also

- [Complete Class Catalog](../catalog)