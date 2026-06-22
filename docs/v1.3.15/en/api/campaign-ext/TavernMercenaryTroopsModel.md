<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TavernMercenaryTroopsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TavernMercenaryTroopsModel : MBGameModel<TavernMercenaryTroopsModel>`
**Base:** `MBGameModel<TavernMercenaryTroopsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TavernMercenaryTroopsModel.cs`

## Overview

`TavernMercenaryTroopsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<TavernMercenaryTroopsModel>(new MyTavernMercenaryTroopsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public abstract float RegularMercenariesSpawnChance { get; }` |

## Usage Example

```csharp
// Typical usage of TavernMercenaryTroopsModel (Model)
Game.Current.ReplaceModel<TavernMercenaryTroopsModel>(new MyTavernMercenaryTroopsModel());
```

## See Also

- [Complete Class Catalog](../catalog)