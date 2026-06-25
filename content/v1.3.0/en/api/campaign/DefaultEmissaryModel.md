---
title: "DefaultEmissaryModel"
description: "Auto-generated class reference for DefaultEmissaryModel."
---
# DefaultEmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**Base:** `EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## Overview

`DefaultEmissaryModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultEmissaryModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
`public override bool IsEmissary(Hero hero)`

**Purpose:** Determines whether the this instance is in the emissary state or condition.

```csharp
// Obtain an instance of DefaultEmissaryModel from the subsystem API first
DefaultEmissaryModel defaultEmissaryModel = ...;
var result = defaultEmissaryModel.IsEmissary(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultEmissaryModel>(new MyDefaultEmissaryModel());
```

## See Also

- [Area Index](../)