---
title: "InformationRestrictionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InformationRestrictionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `does player know details of`.

### DoesPlayerKnowDetailsOf
`public abstract bool DoesPlayerKnowDetailsOf(Hero hero)`

**Purpose:** Handles logic related to `does player know details of`.

## Usage Example

```csharp
var implementation = new CustomInformationRestrictionModel();
```

## See Also

- [Complete Class Catalog](../catalog)