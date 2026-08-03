---
title: "SettlementSecurityModel"
description: "Calculates town security drift and the security effects consumed by tax, prosperity, and settlement events."
---
# SettlementSecurityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementSecurityModel : MBGameModel<SettlementSecurityModel>`  
**Base:** `MBGameModel<SettlementSecurityModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementSecurityModel.cs`  
**Default:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementSecurityModel.cs`

## One-line job

`SettlementSecurityModel` explains a town's daily security delta and the temporary security effects caused by nearby raids and defeated bandit parties. It supplies policy inputs; it does not edit `Town.Security` or create a raid.

## Mental Model

Security is a settlement signal shared by several systems. `Town.SecurityChange` asks this model for the daily delta. Tax and loyalty models read security thresholds, while campaign behaviors record raid and bandit outcomes that become inputs on later ticks. Because the model is evaluated for previews as well as daily progression, all methods must be read-only and deterministic for the same town state.

```text
Town + garrison + gangs + nearby party outcomes
                 |
                 v
Campaign.Current.Models.SettlementSecurityModel
                 |
                 +--> CalculateSecurityChange
                 +--> raid / bandit security effects
                 |
                 v
settlement daily behavior -> Town.Security -> loyalty / tax / economy
```

## Dependencies

### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Owns the active model registry. |
| [`Town`](../../campaign/Town) | Supplies security, garrison, gang, owner, and settlement context. |
| [`MapEvent`](../../campaign/MapEvent) | Supplies nearby party strength when a raid or bandit battle ends. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | Consumes security thresholds while calculating loyalty. |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | Exposes `SecurityChange` and its explanation. |
| `DefaultSettlementTaxModel` | Applies high/low security tax effects. |
| `DefaultSettlementLoyaltyModel` | Uses high/low security loyalty factors. |
| `DefaultSettlementProsperityModel` | Reads security as an economy input. |

## Key contract

| Member | Purpose | Timing |
| --- | --- | --- |
| `CalculateSecurityChange` | Explain the normal daily delta. | Settlement daily tick and UI |
| `GetLootedNearbyPartySecurityEffect` | Convert attacked party strength into a negative effect. | Raid resolution |
| `GetNearbyBanditPartyDefeatedSecurityEffect` | Convert a defeated nearby bandit party into a positive effect. | Map-event resolution |
| `CalculateGoldGainDueToHighSecurity` | Add a high-security tax factor. | Tax preview and daily finance |
| `CalculateGoldCutDueToLowSecurity` | Add a low-security tax factor. | Tax preview and daily finance |

## Real access path

```csharp
public ExplainedNumber ExplainSecurity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }
    return Campaign.Current.Models.SettlementSecurityModel
        .CalculateSecurityChange(town, includeDescriptions: true);
}
```

This is the same path used by `Town.SecurityChangeExplanation`. The raid helpers are also pure calculations:

```csharp
float loss = Campaign.Current.Models.SettlementSecurityModel
    .GetLootedNearbyPartySecurityEffect(town, attackedPartyStrength);
```

The campaign behavior records the resulting event; the model must not call an Action or modify the town while calculating `loss`.

## Risks and debugging order

1. Do not confuse a raid outcome with the daily security delta; the helper is an event input, not a replacement for `CalculateSecurityChange`.
2. Preserve null-garrison, no-gang, and owner-culture branches from the default model.
3. Security is saved on the town, while the model is stateless; adding save fields to a replacement is a load-order bug.
4. Changing high/low security factors also changes tax and loyalty results; update the dependent model contract together.
5. Avoid random values in a preview path; randomness belongs to the event resolver, not the model query.

## Navigation

- [Campaign-ext models family](../models/)
- [Town](../../campaign/Town)
- [SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [SettlementProsperityModel](../SettlementProsperityModel)
- [MapEvent](../../campaign/MapEvent)
