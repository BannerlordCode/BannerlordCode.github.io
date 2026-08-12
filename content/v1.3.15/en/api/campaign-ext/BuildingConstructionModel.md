---
title: "BuildingConstructionModel"
description: "The replaceable campaign model contract for a settlement's daily construction points, reserve boost cost, and boost reward."
---
# BuildingConstructionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`  
**Base:** `MBGameModel<BuildingConstructionModel>`  
**Source:** `C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.ComponentInterfaces\BuildingConstructionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingConstructionModel.cs`

## One-line responsibility

It defines how many construction points a town or castle should produce each day, and the cost and reward to spend reserve boosting a building; it only computes and does not directly modify `Building.BuildingProgress` or `Town.BoostBuildingProcess`. The map AI, the economy panel, and the building-completion estimate all treat its result as a shared rule, so a custom implementation affects every reader rather than just one UI number.

## Mental Model

Treat this as the "formula provider for building progress," not the building queue. `Town.Construction` and `Town.ConstructionExplanation` read its result from `Campaign.Current.Models.BuildingConstructionModel`; the actual daily advance is done by `BuildingsCampaignBehavior.TickCurrentBuildingForTown`, which adds the construction points to the current `Building.BuildingProgress` and deducts `Town.BoostBuildingProcess` according to settlement type. `BuildingHelper.GetDaysToComplete` also reads the model to estimate the remaining days.

The calculation chain is: inputs such as prosperity, loyalty, governor, current building type, market output, and building effects first enter `CalculateDailyConstructionPower`, then flow to the integer result exposed by `Town.Construction`, and finally `BuildingsCampaignBehavior`'s daily tick writes back to `Building.BuildingProgress` and saves.

Use this model to change the "computed result" seen by all consumers. If the goal is to complete a building immediately, reorder the queue, or deduct gold, use `BuildingHelper`, `BuildingScoreCalculationModel`, or the corresponding Action instead — do not write `BuildingProgress`, `BoostBuildingProcess`, recruit units, or move funds inside the model's calculation callbacks, because that turns a read-only query into a side effect repeated every tick. `includeDescriptions` only controls whether `ExplainedNumber` records factor descriptions and must not change the value.

### Lifecycle and registration

`Campaign.Current.Models` holds the current instance; the default implementation is `DefaultBuildingConstructionModel`, registered by the campaign system through `GameModels` at initialization. A custom model must be registered during the model-registration phase of `CampaignGameStarter` (typically inside `MBSubModuleBase.OnCampaignStart` via `starter.AddModel(...)`), and before any settlement daily tick. On the title screen, during early module load, or when there is no active campaign, `Campaign.Current` may be `null`; do not read it unconditionally inside static field initializers or menu constructors.

## When to use / when not to use

- To adjust daily construction speed, town/castle boost price, boost reward, or explanation-panel factors, subclass it and register a custom implementation during campaign startup.
- To display current construction points or the estimated completion time, read the current model from `Campaign.Current.Models`; do not `new DefaultBuildingConstructionModel()` to bypass the already-registered model.
- Do not use it to decide building-queue order; queue selection is owned by `BuildingScoreCalculationModel` and `BuildingsCampaignBehavior`.
- Do not directly change `BuildingProgress`, `BoostBuildingProcess`, or the building queue inside its methods; this makes the daily behavior re-apply the result, or even writes state into the wrong tick stage.

## Dependencies

### Upstream

| Type | Relationship |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | Provides the active campaign and the `Models` registry. |
| [`Town`](../../campaign/Town) | Provides prosperity, loyalty, governor, current building, reserve, and building progress; `Town.Construction` exposes the computed result. |
| [`Building`](../Building) | Provides the current building type, level, and `BuildingProgress`. |
| [`GameModels`](../GameModels) | Holds and exposes the currently registered model instance after campaign startup. |

### Downstream

| Type | Relationship |
| --- | --- |
| [`BuildingsCampaignBehavior`](../BuildingsCampaignBehavior) | Daily adds `Town.Construction` to the current building and deducts reserve by `TownBoostCost`/`CastleBoostCost`; skips the advance during a siege or when there is no project. |
| [`BuildingHelper`](../BuildingHelper) | Estimates completion days using no-boost construction points and cost; `BoostBuildingProcessWithGold` changes the reserve balance. |
| [`Town`](../../campaign/Town) | Exposes `Construction` and `ConstructionExplanation` for the UI and behaviors to consume. |
| [`BuildingScoreCalculationModel`](../BuildingScoreCalculationModel) | Decides the next building and the daily project; this model does not own the queue. |

### Related and save boundary

- [`DefaultBuildingConstructionModel`](../DefaultBuildingConstructionModel) provides the vanilla formula: prosperity × 0.01, reserve boost, loyalty modifier, market output, building effects, and culture traits.
- [`BuildingEffectModel`](../BuildingEffectModel) is the adjacent building-effect rule; this model reads its effects via `Town.AddEffectOfBuildings(ConstructionPerDay, ...)`.
- The model result itself has no save field and dispatches no events; building progress is written back and saved by `Building.BuildingProgress` and `Town.BoostBuildingProcess` through `BuildingsCampaignBehavior`'s daily tick.

## Member contract

Grouped by theme: configuration constants (rule parameters read at registration or display) and calculation methods (called at daily tick or UI read).

| Member | Use, timing, and side effects |
| --- | --- |
| `TownBoostCost` | Cost unit per reserve boost step in non-castle settlements; vanilla is `500`. Consumers use it to deduct `Town.BoostBuildingProcess`. It is a rule constant, not the current settlement balance. |
| `TownBoostBonus` | Base construction reward per reserve boost step in non-castle settlements; vanilla is `50`. |
| `CastleBoostCost` | Cost unit for castle reserve boost; vanilla is `250`. Must not be mixed with `TownBoostCost`. |
| `CastleBoostBonus` | Base construction reward per reserve boost step in castles; vanilla is `20`. |
| `CalculateDailyConstructionPower(Town, bool includeDescriptions = false)` | Returns an `ExplainedNumber` with or without explanation text; `ResultNumber` is the daily construction points. `includeDescriptions` only affects explanation factors, not the value. Called by `Town.Construction`/`ConstructionExplanation` when read. |
| `CalculateDailyConstructionPowerWithoutBoost(Town)` | Returns daily construction points excluding `BoostBuildingProcess`; used by `BuildingHelper.GetDaysToComplete` as a divisor to estimate base capacity. |
| `GetBoostCost(Town)` | Returns the town or castle boost cost of the current implementation by settlement type (`TownBoostCost` or `CastleBoostCost`). |
| `GetBoostAmount(Town)` | Returns the boosted construction amount from one reserve step; vanilla adds to it according to the settlement governor's `Steward.Relocation`/`Trade.SpringOfGold` perks. |

Observable factors of the default implementation: prosperity × 0.01 is the base capacity; reserve is injected as boost in proportion to `BoostBuildingProcess / cost`; governor skills (`TownProjectBuildingBonus`, `Steward.ForcedLabor`, prison labor, `Engineering` series perks) and building-type perks (such as the ramparts/barracks `Stonecutters`) continue to modify it; market `BonusToProduction` output adds a 0.25× bonus; `Town.AddEffectOfBuildings(ConstructionPerDay, ...)` adds building effects; loyalty ≥ 75 adds a 0~0.2 factor, 25~50 subtracts a factor, ≤ 25 clamps the result to 0; settlements with the `BattanianConstructionFeat` culture get an extra bonus; the final result is `LimitMin(0)`.

## Real access path

The following code only queries the already-registered model in the current campaign, matching the read paths of `Town.Construction` and `Town.ConstructionExplanation`:

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Town town = Settlement.All
    .FirstOrDefault(s => s.IsTown && s.Town != null)
    ?.Town;

if (Campaign.Current != null && town != null)
{
    BuildingConstructionModel model = Campaign.Current.Models.BuildingConstructionModel;
    ExplainedNumber withDescriptions = model.CalculateDailyConstructionPower(town, includeDescriptions: true);
    int basePower = model.CalculateDailyConstructionPowerWithoutBoost(town);
    int boostCost = model.GetBoostCost(town);
    int boostAmount = model.GetBoostAmount(town);
}
```

This result is suitable for debugging or UI preview; ordinary logic should read `town.Construction` and `town.ConstructionExplanation` directly, and not multiply the model result by itself again.

## Safe replacement practices

If you only want to add a bounded modification, keep the original model as a delegate and pair-delegate the four members:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class ModBuildingConstructionModel : BuildingConstructionModel
{
    private readonly BuildingConstructionModel _vanilla;

    public ModBuildingConstructionModel(BuildingConstructionModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int TownBoostCost => _vanilla.TownBoostCost;
    public override int TownBoostBonus => _vanilla.TownBoostBonus;
    public override int CastleBoostCost => _vanilla.CastleBoostCost;
    public override int CastleBoostBonus => _vanilla.CastleBoostBonus;

    public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateDailyConstructionPower(town, includeDescriptions);
        result.AddFactor(0.05f, new TextObject("{=mod}Mod: better tools"));
        return result;
    }

    public override int CalculateDailyConstructionPowerWithoutBoost(Town town)
    {
        return _vanilla.CalculateDailyConstructionPowerWithoutBoost(town);
    }

    public override int GetBoostCost(Town town) => _vanilla.GetBoostCost(town);
    public override int GetBoostAmount(Town town) => _vanilla.GetBoostAmount(town);
}
```

Register (in the SubModule's campaign-start hook, not by replacing inside every daily tick):

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public override void OnCampaignStart(Game game, object starterObject)
{
    base.OnCampaignStart(game, starterObject);
    if (starterObject is CampaignGameStarter starter)
    {
        BuildingConstructionModel vanilla = Campaign.Current.Models.BuildingConstructionModel;
        starter.AddModel(new ModBuildingConstructionModel(vanilla));
    }
}
```

In real registration, save the vanilla delegate first and then `AddModel`; do not look up yourself again through `Campaign.Current.Models.BuildingConstructionModel` after the model has already been replaced, or it will recurse. To make the replacement cover loyalty, culture, and newer-version perk rules, prefer delegating to the current-version vanilla model, then add your own bounded factors, and keep the `LimitMin(0)` lower bound.

## Risks and version boundary

- `CalculateDailyConstructionPower` returns "today's construction points," not a new `BuildingProgress`; adding its return value again to `BuildingProgress` will double the building speed.
- `CalculateDailyConstructionPowerWithoutBoost` is used as a divisor by `BuildingHelper.GetDaysToComplete`; a custom implementation should not return zero for a productive settlement unless it also handles the division-by-zero paths of all callers.
- `BuildingsCampaignBehavior` does not advance a settlement during a siege or when the project queue is empty; the model itself should not secretly write back to the queue to "fix" those states.
- `TownBoostCost`/`CastleBoostCost` participate in both daily reserve deduction and remaining-day estimation; changing only one of the two logics will make the UI estimate time and the actual `town.Construction` advance disagree.
- Model access depends on `Campaign.Current.Models` being assembled; do not query the settlement model at a stage like `OnSubModuleLoad` before Campaign exists.
- This page uses the 1.4.5 source as the semantic authority for the rules; the 1.3.15 public contract is consistent, but the default constants and perk boundaries should be rechecked against the actual runtime version's implementation and call sites — do not treat the default constants as a cross-version guarantee.

## Navigation

- [↑ Parent: Campaign-Ext API](../)
- [↔ Siblings: Building model family](../)
- [↔ BuildingEffectModel](../BuildingEffectModel)
- [↔ BuildingScoreCalculationModel](../BuildingScoreCalculationModel)
- [↔ BuildingHelper](../BuildingHelper)
- [↔ BuildingsCampaignBehavior](../BuildingsCampaignBehavior)
- [Default implementation: DefaultBuildingConstructionModel](../DefaultBuildingConstructionModel)
- [Related: Town](../../campaign/Town) · [Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [Building](../Building)
- [Campaign system guide](../../../guide/campaign-system)
