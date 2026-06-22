<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTavernMercenaryTroopsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultTavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTavernMercenaryTroopsModel : TavernMercenaryTroopsModel`
**Base:** `TavernMercenaryTroopsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTavernMercenaryTroopsModel.cs`

## Overview

`DefaultTavernMercenaryTroopsModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultTavernMercenaryTroopsModel>(new MyDefaultTavernMercenaryTroopsModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularMercenariesSpawnChance` | `public override float RegularMercenariesSpawnChance { get; }` |

## Usage Example

```csharp
// Typical usage of DefaultTavernMercenaryTroopsModel (Model)
Game.Current.ReplaceModel<DefaultTavernMercenaryTroopsModel>(new MyDefaultTavernMercenaryTroopsModel());
```

## See Also

- [Complete Class Catalog](../catalog)