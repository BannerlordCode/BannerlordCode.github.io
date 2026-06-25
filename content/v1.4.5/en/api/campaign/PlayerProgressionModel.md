---
title: "PlayerProgressionModel"
description: "Auto-generated class reference for PlayerProgressionModel."
---
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PlayerProgressionModel.cs`

## Overview

`PlayerProgressionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PlayerProgressionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerProgress
`public abstract float GetPlayerProgress()`

**Purpose:** Reads and returns the player progress value held by the this instance.

```csharp
// Obtain an instance of PlayerProgressionModel from the subsystem API first
PlayerProgressionModel playerProgressionModel = ...;
var result = playerProgressionModel.GetPlayerProgress();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PlayerProgressionModel instance = ...;
```

## See Also

- [Area Index](../)