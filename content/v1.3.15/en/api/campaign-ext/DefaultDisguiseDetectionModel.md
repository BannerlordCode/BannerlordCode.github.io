---
title: "DefaultDisguiseDetectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDisguiseDetectionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDisguiseDetectionModel.cs`

## Overview

`DefaultDisguiseDetectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDisguiseDetectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDisguiseDetectionProbability
`public override float CalculateDisguiseDetectionProbability(Settlement settlement)`

**Purpose:** Handles logic related to `calculate disguise detection probability`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel());
```

## See Also

- [Complete Class Catalog](../catalog)