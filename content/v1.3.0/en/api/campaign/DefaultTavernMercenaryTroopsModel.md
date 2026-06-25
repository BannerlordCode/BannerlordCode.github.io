---
title: "DefaultTavernMercenaryTroopsModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTavernMercenaryTroopsModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTavernMercenaryTroopsModel : TavernMercenaryTroopsModel`
**Base:** `TavernMercenaryTroopsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTavernMercenaryTroopsModel.cs`

## Overview

`DefaultTavernMercenaryTroopsModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultTavernMercenaryTroopsModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public override float RegularMercenariesSpawnChance { get; }` |

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultTavernMercenaryTroopsModel>(new MyDefaultTavernMercenaryTroopsModel());
```

## See Also

- [Complete Class Catalog](../catalog)