---
title: "SiegeAftermathModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeAftermathModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeAftermathModel.cs`

## Overview

`SiegeAftermathModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeAftermathModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
`public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**Purpose:** Gets the current value of `siege aftermath trait xp change for player`.

## Usage Example

```csharp
var implementation = new CustomSiegeAftermathModel();
```

## See Also

- [Complete Class Catalog](../catalog)