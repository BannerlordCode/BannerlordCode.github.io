---
title: "DefaultInformationRestrictionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultInformationRestrictionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `does player know details of`.

### DoesPlayerKnowDetailsOf
`public override bool DoesPlayerKnowDetailsOf(Hero hero)`

**Purpose:** Handles logic related to `does player know details of`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultInformationRestrictionModel>(new MyDefaultInformationRestrictionModel());
```

## See Also

- [Complete Class Catalog](../catalog)