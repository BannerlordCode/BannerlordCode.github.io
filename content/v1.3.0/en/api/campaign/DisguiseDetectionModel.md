---
title: "DisguiseDetectionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DisguiseDetectionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DisguiseDetectionModel : MBGameModel<DisguiseDetectionModel>`
**Base:** `MBGameModel<DisguiseDetectionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DisguiseDetectionModel.cs`

## Overview

`DisguiseDetectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DisguiseDetectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDisguiseDetectionProbability
`public abstract float CalculateDisguiseDetectionProbability(Settlement settlement)`

**Purpose:** Handles logic related to `calculate disguise detection probability`.

## Usage Example

```csharp
var implementation = new CustomDisguiseDetectionModel();
```

## See Also

- [Complete Class Catalog](../catalog)