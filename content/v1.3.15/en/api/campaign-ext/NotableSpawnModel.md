---
title: "NotableSpawnModel"
description: "Auto-generated class reference for NotableSpawnModel."
---
# NotableSpawnModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>`
**Base:** `MBGameModel<NotableSpawnModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotableSpawnModel.cs`

## Overview

`NotableSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `NotableSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTargetNotableCountForSettlement
`public abstract int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**Purpose:** Reads and returns the `target notable count for settlement` value held by the current object.

```csharp
// Obtain an instance of NotableSpawnModel from the subsystem API first
NotableSpawnModel notableSpawnModel = ...;
var result = notableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
NotableSpawnModel instance = ...;
```

## See Also

- [Area Index](../)