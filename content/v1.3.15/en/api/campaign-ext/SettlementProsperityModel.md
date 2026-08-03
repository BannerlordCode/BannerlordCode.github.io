---
title: "SettlementProsperityModel"
description: "Calculates town prosperity and village hearth drift from the settlement economy and its policy inputs."
---
# SettlementProsperityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`  
**Base:** `MBGameModel<SettlementProsperityModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementProsperityModel.cs`

## One-line job

`SettlementProsperityModel` explains daily prosperity drift for towns and hearth drift for villages. It supplies an `ExplainedNumber`; the settlement behavior owns the saved-state update.

## Mental Model

Prosperity and hearth are stock values, not instantaneous prices. `Town.ProsperityChange` and `Village.HearthChange` query this model during the campaign tick and during UI explanation. The default formula reads food, loyalty, security, production, raids, and attached villages. Other models consume the resulting state on later ticks, so a replacement should not write prosperity while it is calculating it.

```text
Town / Village state + food + loyalty + security + production
                    -> SettlementProsperityModel
                    -> prosperity or hearth delta + explanations
                    -> settlement behavior persists the new value
```

## Dependencies

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active model registry. |
| [`Town`](../../campaign/Town) / [`Village`](../../campaign/Village) | Expose prosperity/hearth values and explanation properties. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Supplies loyalty thresholds and effects. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | Supplies security inputs. |
| `SettlementEconomyModel` | Supplies production and demand context. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateProsperityChange` | Explain a town's daily prosperity delta. | Settlement daily tick and UI |
| `CalculateHearthChange` | Explain a village's daily hearth delta. | Village daily tick and UI |

## Real access path

```csharp
public ExplainedNumber ExplainTownProsperity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementProsperityModel
        .CalculateProsperityChange(town, includeDescriptions: true);
}

public ExplainedNumber ExplainVillageHearth(Village village)
{
    return Campaign.Current.Models.SettlementProsperityModel
        .CalculateHearthChange(village, includeDescriptions: true);
}
```

These are the paths exposed by `Town.ProsperityChangeExplanation` and `Village.HearthChangeExplanation`; the daily behavior later applies the result to saved state.

## Risks and debugging order

1. Do not write `town.Prosperity` or `village.Hearth` from a calculation callback.
2. Coordinate loyalty/security threshold changes with their own model pages.
3. Preserve food-starvation and attached-village null branches from the default implementation.
4. Prosperity changes affect demand and settlement value, so an unbounded factor can destabilize the economy.
5. The model is stateless; prosperity and hearth belong to settlement save data.

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [SettlementEconomyModel](../SettlementEconomyModel)
