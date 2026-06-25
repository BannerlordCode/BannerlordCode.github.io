---
title: "DefaultExecutionRelationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultExecutionRelationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultExecutionRelationModel : ExecutionRelationModel`
**Base:** `ExecutionRelationModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultExecutionRelationModel.cs`

## Overview

`DefaultExecutionRelationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultExecutionRelationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetRelationChangeForExecutingHero
`public override int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**Purpose:** Gets the current value of `relation change for executing hero`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultExecutionRelationModel>(new MyDefaultExecutionRelationModel());
```

## See Also

- [Complete Class Catalog](../catalog)