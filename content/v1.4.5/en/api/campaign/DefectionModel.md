---
title: "DefectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DefectionModel : MBGameModel<DefaultDefectionModel>`
**Base:** `MBGameModel<DefaultDefectionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DefectionModel.cs`

## Overview

`DefectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CanHeroDefectToFaction
`public abstract bool CanHeroDefectToFaction(Hero hero, Kingdom kingdom)`

**Purpose:** Checks whether the current object can `hero defect to faction`.

## Usage Example

```csharp
var implementation = new CustomDefectionModel();
```

## See Also

- [Complete Class Catalog](../catalog)