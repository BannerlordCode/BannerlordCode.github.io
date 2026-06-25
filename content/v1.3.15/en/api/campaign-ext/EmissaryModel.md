---
title: "EmissaryModel"
description: "Auto-generated class reference for EmissaryModel."
---
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EmissaryModel.cs`

## Overview

`EmissaryModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EmissaryModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
`public abstract bool IsEmissary(Hero hero)`

**Purpose:** **Purpose:** Determines whether the this instance is in the emissary state or condition.

```csharp
// Obtain an instance of EmissaryModel from the subsystem API first
EmissaryModel emissaryModel = ...;
var result = emissaryModel.IsEmissary(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EmissaryModel instance = ...;
```

## See Also

- [Area Index](../)