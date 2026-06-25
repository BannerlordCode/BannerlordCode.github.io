---
title: "DisguiseDetectionModel"
description: "Auto-generated class reference for DisguiseDetectionModel."
---
# DisguiseDetectionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DisguiseDetectionModel : MBGameModel<DisguiseDetectionModel>`
**Base:** `MBGameModel<DisguiseDetectionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DisguiseDetectionModel.cs`

## Overview

`DisguiseDetectionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DisguiseDetectionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDisguiseDetectionProbability
`public abstract float CalculateDisguiseDetectionProbability(Settlement settlement)`

**Purpose:** **Purpose:** Calculates the current value or result of disguise detection probability.

```csharp
// Obtain an instance of DisguiseDetectionModel from the subsystem API first
DisguiseDetectionModel disguiseDetectionModel = ...;
var result = disguiseDetectionModel.CalculateDisguiseDetectionProbability(settlement);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
DisguiseDetectionModel instance = ...;
```

## See Also

- [Area Index](../)