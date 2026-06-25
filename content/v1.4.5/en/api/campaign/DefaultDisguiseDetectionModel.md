---
title: "DefaultDisguiseDetectionModel"
description: "Auto-generated class reference for DefaultDisguiseDetectionModel."
---
# DefaultDisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDisguiseDetectionModel : DisguiseDetectionModel`
**Base:** `DisguiseDetectionModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDisguiseDetectionModel.cs`

## Overview

`DefaultDisguiseDetectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDisguiseDetectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDisguiseDetectionProbability
`public override float CalculateDisguiseDetectionProbability(Settlement settlement)`

**Purpose:** **Purpose:** Calculates the current value or result of disguise detection probability.

```csharp
// Obtain an instance of DefaultDisguiseDetectionModel from the subsystem API first
DefaultDisguiseDetectionModel defaultDisguiseDetectionModel = ...;
var result = defaultDisguiseDetectionModel.CalculateDisguiseDetectionProbability(settlement);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDisguiseDetectionModel>(new MyDefaultDisguiseDetectionModel());
```

## See Also

- [Area Index](../)