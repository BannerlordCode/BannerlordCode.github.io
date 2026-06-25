---
title: "DefaultNotableSpawnModel"
description: "Auto-generated class reference for DefaultNotableSpawnModel."
---
# DefaultNotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotableSpawnModel.cs`

## Overview

`DefaultNotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultNotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Reads and returns the target notable count for settlement value held by the this instance.

```csharp
// Obtain an instance of DefaultNotableSpawnModel from the subsystem API first
DefaultNotableSpawnModel defaultNotableSpawnModel = ...;
var result = defaultNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultNotableSpawnModel>(new MyDefaultNotableSpawnModel());
```

## See Also

- [Area Index](../)