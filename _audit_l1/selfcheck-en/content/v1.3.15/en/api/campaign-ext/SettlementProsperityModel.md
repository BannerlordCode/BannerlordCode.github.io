---
title: "SettlementProsperityModel"
description: "Transforms settlement inputs — food, loyalty, security, buildings, policies, and issues — into the daily prosperity and village hearth (Hearth) changes, as a swappable strategy model."
---
# SettlementProsperityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`  
**Base:** `MBGameModel<SettlementProsperityModel>`  
**Source:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\SettlementProsperityModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementProsperityModel.cs`

## One-line responsibility

It only answers "should this settlement gain or lose how much prosperity/hearth today", returning an `ExplainedNumber` with optional factor descriptions. It does not write back to `Town.Prosperity`, does not modify `Village.Hearth`, and does not trigger any save. The campaign daily-tick behavior is what actually applies the result to settlement state; the model is read only by the UI and by skill/prosperity-settlement consumers.

## Mental model

This is a "scoring rule" that runs before a settlement's daily settlement. `Town` and `Village` each expose a computed property (`ProsperityChange` / `HearthChange`, plus the explained `ProsperityChangeExplanation` / `HearthChangeExplanation`); these properties internally ask this model for the day's delta, then hand the result to the daily tick to write `Town.Prosperity` and `Village.Hearth`. The model itself is a pure function: the same input should yield the same delta, it holds no state, and it dispatches no events.

The town logic of the default implementation (`DefaultSettlementProsperityModel`) is roughly: first handle the starvation penalty and housing cost (giving a positive delta by current prosperity tier, giving a negative delta above the cap), then add remaining food, market sales, building effects, relevant Perks, the loyalty threshold (high-loyalty bonus, low-loyalty penalty), and the kingdom's various policies (road tax, royal town, crown tax, war tax, etc.), and finally stack issue effects. The village logic gives a tier-based base growth by current hearth, subtracts 1 when looted (`Looted`), then stacks the herding-rights policy, the bound town's Perks, the Empire culture trait, and issue effects.

Use this model to change how "today's delta is computed" for all consumers. If the goal is to directly change prosperity/hearth values, grant bounties, or trigger world changes, you should use settlement behaviors, the corresponding `*Action`, or settlement's public API — not write `town.Prosperity += ...` inside a calculation callback. `includeDescriptions` only controls whether `ExplainedNumber` records the textual source of each factor; it should not change the value itself.

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance. The default instance is `DefaultSettlementProsperityModel`, registered by the game launcher via `IGameStarter.AddModel` during campaign initialization; a custom model must also finish registering before the campaign system begins its daily tick. On the title screen, early in module loading, or when there is no active campaign, `Campaign.Current` may be `null`, so it must not be unconditionally read in a static field initializer or a menu constructor.

## Dependencies
### Upstream

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry; the default implementation also uses it internally to fetch sibling models. |
| [`Town`](../../campaign/Town) | Provides inputs such as prosperity, food change, loyalty, buildings, goods for sale, and the owning kingdom. |
| [`Village`](../../campaign/Village) | Provides inputs such as hearth, village state, and the bound town. |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | The default implementation reads the loyalty threshold and the prosperity effects of high/low loyalty. |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | A sibling rule model next to security, affecting the same batch of settlement states. |
| [`SettlementEconomyModel`](../SettlementEconomyModel) | Provides production/demand context, often changing together with prosperity. |
| [`SettlementFoodModel`](../SettlementFoodModel) | Provides the food-change basis; the starvation penalty depends on it. |
| [`IssueModel`](../IssueModel) | The default implementation stacks issue effects on prosperity/hearth via `GetIssueEffectsOfSettlement`. |
| [`ExplainedNumber`](../ExplainedNumber) | Carries the calculation result and the optional factor descriptions. |

### Downstream

| Type | Relation |
| --- | --- |
| [`Town`](../../campaign/Town) | Reads the town delta via `ProsperityChange` / `ProsperityChangeExplanation`. |
| [`Village`](../../campaign/Village) | Reads the village delta via `HearthChange` / `HearthChangeExplanation`. |
| [`SettlementMenuOverlayVM`](../SettlementMenuOverlayVM) | The UI shows the day's gains/losses in menus and tooltips. |
| Settlement daily-tick behavior | Writes the model result into `Town.Prosperity` / `Village.Hearth`; the model itself is not responsible for the writeback. |

### Events, Actions, and save boundary

The model result itself has no save field and dispatches no events. Legitimate prosperity/hearth changes are uniformly applied by the settlement daily-tick behavior; a custom model should stay deterministic (same input, same output) to avoid inconsistency with saved and replayed campaign ticks.

## Member contract

| Member | Purpose | When called & side effects |
| --- | --- | --- |
| `CalculateProsperityChange` | Computes a town/castle (`Town`) daily prosperity delta, combining starvation, housing cost, remaining food, market sales, buildings, Perks, loyalty threshold, and kingdom policies. | Called by `Town.ProsperityChange`/`ProsperityChangeExplanation` during the daily tick and UI explanation; should return an `ExplainedNumber` and must not write back to `Town.Prosperity`. |
| `CalculateHearthChange` | Computes a village (`Village`) daily hearth delta, giving tier-based base growth and stacking looting, policies, bound-town Perks, culture traits, and issue effects. | Called by `Village.HearthChange`/`HearthChangeExplanation` during the daily tick and UI explanation; must not write back to `Village.Hearth`. |

The observable factors of the default implementation include: the lower the prosperity, the higher the housing-cost bonus, and a pullback once above the cap; remaining food and market sales bring positive deltas; high loyalty gives a bonus, low loyalty a penalty; royal town adds 1, road/crown/war tax subtract 1; village hearth grows decreasingly by tier, loses 1 per day when looted, and the Empire culture trait gives a positive factor at low hearth. If a replacement wants to keep these behaviors, it should delegate to the vanilla model and then add its own bounded factors, rather than copying the old formula wholesale.

## Real access path

The following code only queries the already-registered model in the current campaign, matching the internal path of `Town.ProsperityChangeExplanation` / `Village.HearthChangeExplanation`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public ExplainedNumber ExplainTownProsperity(Town town)
{
    if (Campaign.Current == null || town == null)
    {
        return new ExplainedNumber(0f);
    }

    SettlementProsperityModel model = Campaign.Current.Models.SettlementProsperityModel;
    return model.CalculateProsperityChange(town, includeDescriptions: true);
}
```

This result is suitable for debugging or UI preview; ordinary map/settlement logic should read the `town.ProsperityChange` property, and should not multiply the return value again or write back into `Town.Prosperity` itself.

## Safe practices when replacing the model

If you only want to add a bounded correction, keep the original model as a delegate and have both methods delegate in pairs:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModSettlementProsperityModel : SettlementProsperityModel
{
    private readonly SettlementProsperityModel _vanilla;

    public ModSettlementProsperityModel(SettlementProsperityModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateProsperityChange(fortification, includeDescriptions);
        if (fortification.IsTown && fortification.Prosperity < 2000f)
        {
            result.Add(2f, new TextObject("Mod: frontier boost"));
        }
        return result;
    }

    public override ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false)
    {
        return _vanilla.CalculateHearthChange(village, includeDescriptions);
    }
}
```

When actually registering, save the vanilla delegate during the model-registration phase of `CampaignGameStarter`; do not look yourself up again via `Campaign.Current.Models.SettlementProsperityModel` after the model has already been replaced, or it will recurse. If you want the replacement to also cover loyalty, policies, culture traits, and issue effects, prefer delegating to the current version's default model and then adding your own bounded factors.

## Risks and debugging order

1. **Campaign does not yet exist:** `Campaign.Current` is null on the title screen and during early module loading; obtain the model only after the campaign-start hook.
2. **Writing state inside a callback:** changing `Town.Prosperity` / `Village.Hearth` inside `Calculate*` turns this read-only query into a state-changing world mutation, duplicated with the daily tick's writeback.
3. **Unbounded/NaN result:** a new town with no attached villages, food at 0, or an extreme policy combination may return NaN if branches are incomplete, breaking prosperity/hearth and polluting later demand calculations.
4. **Coupled threshold drift:** prosperity affects later demand and loyalty/security; an uncontrolled positive factor snowballs the economy upward, so changes should stay bounded.
5. **Stale display:** the UI reads computed properties like `ProsperityChangeExplanation`; the model does not push changes. After a legitimate prosperity change, rely on the daily tick and UI recomputation; do not access private cache fields.

## Version and navigation

The interface signatures are identical across v1.3.0, v1.3.15, and v1.4.5 — both are the two abstract methods `CalculateProsperityChange(Town, bool)` and `CalculateHearthChange(Village, bool)`. Details of the default formula across versions (policies, Perks, culture traits) may differ, so a replacement model should delegate to that version's vanilla implementation rather than copying the old formula into the new version.

- [↑ Parent: Campaign Ext API](../)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [↔ SettlementEconomyModel](../SettlementEconomyModel)
- [↔ SettlementFoodModel](../SettlementFoodModel)
- [↔ SettlementMilitiaModel](../SettlementMilitiaModel)
- [↔ SettlementTaxModel](../SettlementTaxModel)
- [Related: Town](../../campaign/Town)
- [Related: Village](../../campaign/Village)
- [Related: Campaign](../../campaign/Campaign)
- [IssueModel](../IssueModel)
- [ExplainedNumber](../ExplainedNumber)
