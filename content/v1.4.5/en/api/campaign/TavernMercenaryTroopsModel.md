---
title: "TavernMercenaryTroopsModel"
description: "Auto-generated class reference for TavernMercenaryTroopsModel."
---
# TavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TavernMercenaryTroopsModel : MBGameModel<TavernMercenaryTroopsModel>`
**Base:** `MBGameModel<TavernMercenaryTroopsModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/TavernMercenaryTroopsModel.cs`

## Overview

`TavernMercenaryTroopsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `TavernMercenaryTroopsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public abstract float RegularMercenariesSpawnChance { get; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
TavernMercenaryTroopsModel instance = ...;
```

## See Also

- [Area Index](../)