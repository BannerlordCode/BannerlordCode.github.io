---
title: "SettlementLoyaltyModel"
description: "The replaceable policy that explains town loyalty drift, tax effects, and rebellion thresholds."
---
# SettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`  
**Base:** `MBGameModel<SettlementLoyaltyModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`

## One-line job

`SettlementLoyaltyModel` explains the daily loyalty delta and the thresholds used by settlement economy, tax, militia, and rebellion systems. It predicts settlement state; it does not assign `Town.Loyalty`.

## Mental Model

`Town` exposes `LoyaltyChange` and `LoyaltyChangeExplanation` as model-backed views. The daily settlement behavior consumes the numeric result during campaign progression and writes the resulting state through the settlement lifecycle. Other models read loyalty thresholds: prosperity uses high/low loyalty effects, militia uses the rebellious-state threshold, and tax uses loyalty-based gold modifiers. That makes this model a shared policy contract: changing a threshold changes several downstream systems at once.

```text
Town state + culture + governor + security + policies
                  |
                  v
Campaign.Current.Models.SettlementLoyaltyModel
                  |
                  +--> CalculateLoyaltyChange
                  +--> loyalty thresholds / tax effects
                  |
                  v
daily settlement behavior -> Town.Loyalty
                  |
        prosperity / militia / tax / rebellion consumers
```

Use the model for explanations, previews, and a replacement policy. Use settlement Actions and campaign behaviors for ownership, rebellion, and state mutation. Never set `Town.Loyalty` from a UI callback or from inside `CalculateLoyaltyChange`; doing so recursively changes the value being calculated and bypasses campaign events.

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the registered model and campaign clock. |
| [`Town`](../../campaign/Town) | Supplies loyalty, security, prosperity, governor, and settlement context. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | Supplies security change that participates in loyalty formulas. |
| [`CampaignEvents`](../CampaignEvents) | Delivers settlement/tick hooks where the result is consumed. |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | Exposes `LoyaltyChange` and its explanation. |
| `DefaultSettlementProsperityModel` | Reads prosperity thresholds and high/low loyalty effects. |
| `DefaultSettlementMilitiaModel` | Reads the rebellious-state threshold and militia boost. |
| `DefaultSettlementTaxModel` | Uses high/low loyalty effects when calculating tax. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateLoyaltyChange` | Return the explainable daily loyalty delta. | Settlement daily tick and UI preview |
| `RebellionStartLoyaltyThreshold` | Threshold at which rebellion checks become eligible. | Daily rebellion evaluation |
| `RebelliousStateStartLoyaltyThreshold` | Threshold used for rebellious-state effects. | Militia and settlement state |
| `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty` | Connect loyalty to prosperity calculation. | Daily economy model |
| `CalculateGoldGainDueToHighLoyalty` | Add high-loyalty tax effect to an explanation. | Tax preview and daily finance |
| `CalculateGoldCutDueToLowLoyalty` | Add low-loyalty tax effect to an explanation. | Tax preview and daily finance |

## Real access paths

```csharp
public ExplainedNumber ExplainTownLoyalty(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    return Campaign.Current.Models.SettlementLoyaltyModel
        .CalculateLoyaltyChange(town, includeDescriptions: true);
}
```

This mirrors `Town.LoyaltyChangeExplanation`. The caller can display `ResultNumber` and its explanation lines but must leave the next state transition to the campaign settlement behavior.

```csharp
public ExplainedNumber ExplainTax(Town town, ExplainedNumber tax)
{
    SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
    model.CalculateGoldGainDueToHighLoyalty(town, ref tax);
    model.CalculateGoldCutDueToLowLoyalty(town, ref tax);
    return tax;
}
```

The two tax methods mutate only the passed explanation; they do not mutate the town or treasury.

## Replacement rules

- Preserve bounded loyalty deltas and the default threshold relationships.
- Keep `includeDescriptions` side-effect free.
- Delegate to the vanilla model before adding a mod factor so culture, governor, policy, and security inputs remain intact.
- Coordinate any threshold change with prosperity, militia, tax, and rebellion pages; a single threshold is not local to this class.
- Apply ownership or rebellion changes through the corresponding Action/behavior, never from a model callback.

## Risks and debugging order

1. **Cross-model drift:** changing loyalty thresholds without changing prosperity or militia expectations creates contradictory UI.
2. **Tick recursion:** calling a state-mutating Action from `CalculateLoyaltyChange` can run during every preview and daily tick.
3. **Load order:** `Campaign.Current.Models` is unavailable while campaign objects are loading.
4. **Culture mismatch:** the default model reads governor and owner culture; custom formulas should preserve null-governor branches.
5. **Save boundaries:** loyalty is saved on the town/settlement state, not on the model. Do not add save fields to a stateless model.

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [SettlementSecurityModel](../SettlementSecurityModel)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [CampaignEvents](../CampaignEvents)
