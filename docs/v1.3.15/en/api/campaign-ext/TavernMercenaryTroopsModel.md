<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TavernMercenaryTroopsModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TavernMercenaryTroopsModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TavernMercenaryTroopsModel : MBGameModel<TavernMercenaryTroopsModel>`
**Base:** `MBGameModel<TavernMercenaryTroopsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TavernMercenaryTroopsModel.cs`

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
var implementation = new CustomTavernMercenaryTroopsModel();
```

## See Also

- [Complete Class Catalog](../catalog)