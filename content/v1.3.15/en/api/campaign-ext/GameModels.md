---
title: "GameModels"
description: "The central container of every campaign-layer calculation subsystem (*Model) in Bannerlord — read through Campaign.Current.Models, and registered or replaced by modders via CampaignGameStarter.AddModel during InitializeGameStarter."
---
# GameModels

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class GameModels : GameModelsManager`
**Base:** `GameModelsManager` (in `TaleWorlds.Core`)
**Source:** `TaleWorlds.CampaignSystem/GameModels.cs`

## Overview

`GameModels` is the campaign layer's **model container**: it does not hold any world state, but it exposes — as strongly-typed properties — the hundred-plus "pure calculation" subsystems that drive the game (party map speed, diplomacy scoring, clan finance, settlement loyalty, wage caps, siege resolution, and so on). Each property is backed by an instance derived from `GameModel` (or `MBGameModel<T>`), and together they answer the question "how is this number computed?" for virtually every campaign mechanic. When you want to know "what's the wage cap for this party", "how fast does this army move", or "what's the score for declaring war", the answer lives in a model under `Campaign.Current.Models` — not in an `*Action`.

## Mental Model

Think of `GameModels` as the campaign's **formula book**, not its ledger:

- It only answers "how is X computed"; it does not perform state changes. Calling any model method is usually just a read/compute — it never mutates the world. The things that actually change the world are `*Action`s (e.g. `DeclareWarAction`, `ChangeKingdomInfluenceAction`).
- Every model is reachable through `Campaign.Current.Models` as a strongly-typed property (e.g. `Campaign.Current.Models.DiplomacyModel`, `Campaign.Current.Models.PartyWageModel`).
- The container itself is **assembled once**, at campaign construction time, and then treated as read-only. You cannot `AddModel` mid-campaign (e.g. from inside a `CampaignBehaviorBase`) and expect it to take effect — by then `GameModels` is already wired up and a freshly added model will never be assigned to those typed properties.
- Registering or replacing a model is only valid during `SubModule.InitializeGameStarter(Game, IGameStarter)`, which runs *before* the `Campaign` object is created.
- Internally, each property is resolved by `GetGameModel<T>()`, which searches the registered list **from the end backward and returns the last matching type**. That is exactly why a later-registered model overrides an earlier one — this is the standard mechanism both the game and the community use to replace models.
- Note: the typed properties are only populated when `Campaign.Current.GameMode` is `Campaign` or `Tutorial` (see `GetSpecificGameBehaviors()`). In a non-campaign mode (e.g. a custom battle), those properties stay `null`.

## When to Use / When NOT to Use

Use `GameModels` / a specific `*Model` when you need to **read or influence a computed value** — party speed, recruitment cost, diplomacy score, settlement prosperity deltas, XP curves, etc. You retrieve a model through `Campaign.Current.Models.<ModelName>` and call its methods, passing in world objects (`MobileParty`, `Hero`, `Settlement`, `Clan`).

Do **NOT** use a model to change the world. Model methods are near-stateless calculators; if you "tweaked a field on a model" and the world did not move, you used the wrong layer. State changes belong to `*Action` (e.g. `DeclareWarAction.ApplyByPlayerHostility(...)`, `ChangeClanInfluenceAction.Apply(...)`). Confusing Model (logic) with Action (state mutation) is the single most common misuse.

Do **NOT** register a model at any point other than `InitializeGameStarter`. Adding models later, or trying to swap a property at runtime, will not propagate to `Campaign.Current.Models`.

## Dependencies

`GameModels` sits in the campaign layer and is wired together from several upstream/downstream pieces:

- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models` is the live handle to the whole container; also the `GameMode` check that gates property population.
- [CampaignGameStarter](../CampaignGameStarter/) — the `AddModel` / `GetModel` entry point where you register or replace models.
- [CampaignBehaviorBase](../CampaignBehaviorBase/) — where you *safely read* models at runtime (registering here is too late).
- [Game](../../core-extra/Game/) — `IGameStarter` is the abstraction handed to `InitializeGameStarter`, and `CurrentGame` is the holder of the assembled model list.
- [Hero](../../campaign/Hero/) — models are frequently passed `Hero` (and other world objects) as inputs to their calculations.
- [DeclareWarAction](../DeclareWarAction/) — the canonical example of the *Action* layer that consumes a model's score rather than being the model itself.

## Key Model Families

The container exposes well over a hundred typed properties (the set grows by version — v1.4.5 is the most complete). Rather than dumping every one, the families you will most often touch, and what each is for:

| Family | Representative models | Purpose (one line) |
|--------|----------------------|--------------------|
| Party movement & size | `PartySpeedCalculatingModel` (`PartySpeedModel`), `PartySizeLimitModel`, `PartyWageModel`, `InventoryCapacityModel` | Map movement speed, troop/size caps, wage ceiling (`MaxWagePaymentLimit`), and inventory limits. |
| Party morale & upkeep | `PartyMoraleModel`, `PartyDesertionModel`, `MobilePartyFoodConsumptionModel`, `PartyFoodBuyingModel`, `PartyImpairmentModel` | Morale swings, desertion chance, daily food use, auto-buy food, non-combat attrition. |
| Diplomacy & kingdom | `DiplomacyModel`, `AllianceModel`, `KingdomCreationModel`, `KingdomDecisionPermissionModel`, `ClanPoliticsModel`, `MinorFactionsModel` | War/peace scores, influence cost, kingdom-merge rating, council permissions, faction politics. |
| Economy & settlements | `ClanFinanceModel`, `ClanTierModel`, `SettlementTaxModel`, `SettlementLoyaltyModel`, `SettlementProsperityModel`, `SettlementSecurityModel`, `SettlementFoodModel`, `WorkshopModel`, `ValuationModel`, `TradeItemPriceFactorModel` | Clan income/expense, settlement taxes/loyalty/prosperity/security/food, workshop income, item valuation and trade spreads. |
| Combat & XP | `CombatXpModel`, `GenericXpModel`, `CombatSimulationModel`, `BattleRewardModel`, `PartyTrainingModel` | Post-battle XP, generic XP curves, auto-resolve simulation, victory rewards (influence/renown), training-while-moving. |
| Character development | `CharacterDevelopmentModel`, `CharacterStatsModel`, `PregnancyModel`, `AgeModel`, `MarriageModel`, `HeirSelectionCalculationModel`, `HeroDeathProbabilityCalculationModel` | Level-up XP threshold (`GetXpRequiredForLevel`), derived attributes/skills, pregnancy/age/marriage/heir/death logic. |
| Siege & military AI | `SiegeEventModel`, `SiegeAftermathModel`, `SiegeStrategyActionModel`, `MilitaryPowerModel`, `TargetScoreCalculatingModel` | Siege progression, post-capture handling, siege strategy, military-strength rating for war score, AI target weighting. |

The uniform access shape is always `Campaign.Current.Models.<ModelName>`.

## Members You Will Call

`GameModels` itself has no public methods of its own (its assembly logic, `GetSpecificGameBehaviors()`, is private). The usable entry points come from the base `GameModelsManager` and from the typed properties.

### Reading a model by type

#### `protected T GetGameModel<T>() where T : GameModel` (base `GameModelsManager`)
Searches the registered list **from the end backward** and returns the last `T` instance; returns `null` if no such type is registered. This is the low-level implementation of "last registration wins". Prefer it over a typed property when you must stay safe across versions or game modes.

```csharp
// Safe pattern: null-check before calling, so a missing model in a non-campaign
// mode or an older version cannot throw a NullReferenceException.
PartySpeedModel speed = Campaign.Current.Models.GetGameModel<PartySpeedModel>();
if (speed != null)
{
    ExplainedNumber result = speed.CalculateBaseSpeed(party);
}
```

#### `public MBReadOnlyList<GameModel> GetGameModels()` (base `GameModelsManager`)
Returns a read-only list of **every** registered model. Handy for debugging, bulk enumeration, or discovery when you do not want to depend on a typed property name.

```csharp
foreach (GameModel model in Campaign.Current.Models.GetGameModels())
{
    // e.g. print every assembled model type to confirm a registration succeeded
    Debug.Print(model.GetType().Name);
}
```

### Typed property access
Each subsystem is exposed as a `get` property (e.g. `Campaign.Current.Models.DiplomacyModel`). This is the **most common** access style in campaign code; the returned type is the model's own interface/abstract class, and you call its methods directly.

```csharp
// Real call styles (mirrors official SandBox usage):
float recruitCost = Campaign.Current.Models.PartyWageModel.GetTroopRecruitmentCost(
    troop, Hero.MainHero, false);
float dist = Campaign.Current.Models.MapDistanceModel.GetDistance(
    fromSettlement, toSettlement, false, false, MobileParty.NavigationType.Default);
```

## Risks

- **Null model.** If a model was never registered (or you access a typed property under a non-campaign `GameMode`, where properties are only populated in `Campaign`/`Tutorial`), that property is `null`. Calling `Campaign.Current.Models.X.Method()` directly throws `NullReferenceException`. Always use `GetGameModel<T>()` and null-check before calling.
- **Accessing before the campaign exists.** `Campaign.Current` is `null` until the campaign is actually created, so `Campaign.Current.Models` is unavailable. Every model read must happen *after* campaign start (e.g. inside a `CampaignBehaviorBase` `RegisterEvents` / `DailyTick`), never during `SubModule` load.
- **Model is not the mutation entry point.** Model methods are nearly all read-only calculations. If you changed a model field and saw no world effect, you used the wrong layer — use an `*Action` for state changes.
- **Mid-campaign `AddModel` is a no-op.** `GameModels` is assembled once during campaign construction. Calling `AddModel` from a behavior at runtime will not reach `Campaign.Current.Models` typed properties; registration must be complete in `InitializeGameStarter`.
- **Override-order conflicts.** The last registration of a given type wins. If two modules both replace the same model, the later one silently overrides the earlier — potentially interacting in unexpected ways. When cooperation is needed, prefer the decorator pattern (`MBGameModel<T>.BaseModel`) over a wholesale replacement.
- **`GetSpecificGameBehaviors` mode gate.** Typed properties are only filled in `Campaign`/`Tutorial` mode. A model registered for a custom-battle-style mode will not populate `GameModels` typed properties (though `GetGameModel<T>()` can still retrieve it).

## Example

### Example 1: Read the party-speed model and compute a party's speed
Models are stateless calculators — pass in a world object, get a result, change nothing.

```csharp
MobileParty party = MobileParty.MainParty;
PartySpeedModel speedModel = Campaign.Current.Models.PartySpeedCalculatingModel;
if (speedModel != null)
{
    ExplainedNumber speed = speedModel.CalculateBaseSpeed(party);
    InformationManager.DisplayMessage(new InformationMessage(
        $"Current base march speed: {speed.ResultNumber:F1}"));
}
```

### Example 2: Subclass and replace `DiplomacyModel` to change the "declare war" score
This is the canonical answer to "do I change the Model or the Action for war scoring?" — the score lives in `DiplomacyModel`, so you replace the Model, not an Action.

```csharp
// 1) Inherit the official default and override only the scoring you care about.
public class MyDiplomacyModel : DefaultDiplomacyModel
{
    public override float GetScoreOfDeclaringWar(
        IFaction factionDeclaresWar, IFaction factionDeclaredWar,
        Clan evaluatingClan, out TextObject reason, bool includeReason = false)
    {
        // Take the original score, then scale it by your own rule.
        float baseScore = base.GetScoreOfDeclaringWar(
            factionDeclaresWar, factionDeclaredWar, evaluatingClan, out reason, includeReason);
        return baseScore * 1.5f; // e.g. make the AI more eager to declare war
    }

    public override ExplainedNumber GetWarProgressScore(
        IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)
    {
        return base.GetWarProgressScore(factionDeclaresWar, factionDeclaredWar, includeDescriptions);
    }
}

// 2) Register it in InitializeGameStarter. Because it is added AFTER the official
//    default model, GetGameModel<DiplomacyModel>() returns your version, so
//    Campaign.Current.Models.DiplomacyModel now points at MyDiplomacyModel.
protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyDiplomacyModel());
}
```

> Actually *starting* the war still goes through `DeclareWarAction.ApplyByPlayerHostility(...)`; you only changed the score the AI uses when deciding whether to declare war.

### Example 3: Wrap an existing model with the decorator pattern (keep original logic + add your fix)
The generic `AddModel<T>(MBGameModel<T>)` first injects the current model into your `BaseModel`, so you can delegate to the original and append your own logic.

```csharp
public class MyWageWrapper : MBGameModel<PartyWageModel>
{
    public override ExplainedNumber GetTroopRecruitmentCost(CharacterObject troop, Hero buyer, bool withoutItemCost)
    {
        // Compute the original result, then apply your own adjustment (e.g. 10% off).
        ExplainedNumber original = BaseModel.GetTroopRecruitmentCost(troop, buyer, withoutItemCost);
        original.ResultNumber *= 0.9f;
        return original;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel<PartyWageModel>((MBGameModel<PartyWageModel>)new MyWageWrapper());
}
```

## See Also

- ↑ [Campaign ext bucket](../)
- ↔ [CampaignGameStarter](../CampaignGameStarter/) · [CampaignBehaviorBase](../CampaignBehaviorBase/) · [DeclareWarAction](../DeclareWarAction/)
- [Campaign](../../campaign/Campaign/) — `Campaign.Current.Models` is the live container handle
- [Game](../../core-extra/Game/) — `IGameStarter` and the `CurrentGame` model-list holder
- [Hero](../../campaign/Hero/) — common world-object input to model calculations
