---
title: "DefaultPlayerProgressionModel"
description: "Auto-generated class reference for DefaultPlayerProgressionModel."
---
# DefaultPlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPlayerProgressionModel : PlayerProgressionModel`
**Base:** `PlayerProgressionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPlayerProgressionModel.cs`

## Overview

`DefaultPlayerProgressionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPlayerProgressionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerProgress
`public override float GetPlayerProgress()`

**Purpose:** Reads and returns the `player progress` value held by the current object.

```csharp
// Obtain an instance of DefaultPlayerProgressionModel from the subsystem API first
DefaultPlayerProgressionModel defaultPlayerProgressionModel = ...;
var result = defaultPlayerProgressionModel.GetPlayerProgress();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPlayerProgressionModel>(new MyDefaultPlayerProgressionModel());
```

## See Also

- [Area Index](../)