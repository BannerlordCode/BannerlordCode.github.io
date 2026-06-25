---
title: "TroopSupplierProbabilityModel"
description: "Auto-generated class reference for TroopSupplierProbabilityModel."
---
# TroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TroopSupplierProbabilityModel : MBGameModel<TroopSupplierProbabilityModel>`
**Base:** `MBGameModel<TroopSupplierProbabilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TroopSupplierProbabilityModel.cs`

## Overview

`TroopSupplierProbabilityModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TroopSupplierProbabilityModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public abstract void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`

**Purpose:** Executes the EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization logic.

```csharp
// Obtain an instance of TroopSupplierProbabilityModel from the subsystem API first
TroopSupplierProbabilityModel troopSupplierProbabilityModel = ...;
troopSupplierProbabilityModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(battleParty, priorityTroops, false, 0, false, list<ValueTuple<FlattenedTroopRosterElement, mapEventParty, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TroopSupplierProbabilityModel instance = ...;
```

## See Also

- [Area Index](../)