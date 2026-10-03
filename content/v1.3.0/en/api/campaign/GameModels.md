---
title: "GameModels"
description: "The campaign model aggregator: 123 read-only model properties, all filled in one reverse-scan pass in the constructor, zero public methods. When GameMode is not Campaign/Tutorial every one of the 123 is null."
---

# GameModels

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class GameModels : GameModelsManager`
**Base:** [GameModelsManager](../../core-extra/GameModelsManager) (`TaleWorlds.Core`), plus implicit `System.Object`
**File:** `TaleWorlds.CampaignSystem/GameModels.cs` (765 lines total: 123 property declarations, 134 lines of constructor and private fill method)

## Overview

`GameModels` is a **giant read-only directory of every model on the campaign side**. It has 123 `public XxxModel XxxModel { get; private set; }` properties, **zero public methods** and **zero fields**. It does exactly one thing: fill those 123 slots once in its constructor, after which everyone only reads.

It is `sealed` and therefore not inheritable, and it is a pure runtime object — no `MBObjectBase`, no `StringId`, never registered with `MBObjectManager`, and the models themselves do not enter the save file. What the save file stores is a *reference* to an `XxxModel`, resolved again from the module registry chain on load.

Filling happens in `public GameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents) { this.GetSpecificGameBehaviors(); }` (`GameModels.cs:759-762`). `GetSpecificGameBehaviors()` (`:627`) contains **124 lines of `this.XxxModel = base.GetGameModel<XxxModel>();`**, all wrapped in **one and the same `if`**:

```csharp
if (Campaign.Current.GameMode == CampaignGameMode.Campaign || Campaign.Current.GameMode == CampaignGameMode.Tutorial)
```

From which follows a fact you have to know: **if `GameMode` is neither `Campaign` nor `Tutorial`, all 123 properties stay null** — because a `GetGameModel<T>` that scans and misses returns exactly `default(T)`, with no assert in between. Editor scenes, menu scenes and certain special modes can therefore hand you a `Campaign.Current.Models` whose every single property is null.

The source also carries one genuine blemish: **`PartyNavigationModel` is assigned twice** (`:673` and `:743`, both `base.GetGameModel<PartyNavigationModel>()`). Since `GetGameModel<T>` is a pure reverse scan, both calls yield the same instance, so it is harmless — but it proves those 124 lines are hand-maintained rather than generated. A second inconsistency: `PartySpeedCalculatingModel` (`:24`) is typed `PartySpeedModel`, so the property name carries `Calculating` while the type does not.

## Mental Model

Think of it as **a panel of model slots**, and memorize three things: *who inserts, who reads, and when insertion happens.*

**Who inserts.** A single line, `Campaign.cs:1905`: `this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);`. What goes in is [CampaignGameStarter](../CampaignGameStarter)'s `Models` (`IEnumerable<GameModel>`) — i.e. the chain accumulated by every `AddModel` / `AddModel<T>` inside every `MBSubModuleBase.InitializeGameStarter`. The line right before it, `base.CurrentGame.SetBasicModels(campaignGameStarter.Models);`, hands **the same chain** to a different manager. That is why "mission models" and "campaign models" read one registry. `Campaign.Models`'s getter (`Campaign.cs:529`) is just `return this._gameModels;`.

**Who reads.** Anywhere in campaign code you write `Campaign.Current.Models.XxxModel`. Because `GameModels` is `sealed` with no setters, **those 123 properties never change once filled** — unlike [CampaignBehaviorBase](../CampaignBehaviorBase), which can gain and lose members at runtime. The only replacement mechanism is registering another model of the same type from `InitializeGameStarter`.

**When insertion happens.** The body of `GetGameModel<T>()` is `for (int i = this._gameModels.Count - 1; i >= 0; i--) { T result; if ((result = (this._gameModels[i] as T)) != null) return result; } return default(T);` — a **reverse scan, last registration wins**. That is the counterpart of `CampaignGameStarter.AddModel<T>(MBGameModel<T>)`, which first does `T model = this.GetModel<T>()` to capture the current outermost `T`, then `gameModel.Initialize(model)` to plug the old one into the new object's `BaseModel`, then `this._models.Add(gameModel)`. So the override chain is "the later registration wraps the earlier one", and forwarding inside an override means calling `this.BaseModel.XXX(...)`.

**Merging the three rules**: once you override `AgeModel`, `Campaign.Current.Models.AgeModel` hands you **your** instance (because `GameModels` is constructed after every `InitializeGameStarter`), while `DefaultAgeModel` is still sitting intact on an inner layer of the chain, reachable only through `BaseModel`. The chain's shape and the per-model rules are on the [GameModel](../../core-extra/GameModel) and [MBGameModel](../../core-extra/MBGameModel) pages.

**One counter-intuitive contrast.** `GameModels` scans in **reverse** (last registration wins), while `CampaignBehaviorManager.GetBehavior<T>()` scans with `OfType<T>().FirstOrDefault<T>()`, i.e. **forward** (first registration wins). The same campaign therefore contains two opposite lookup orders; do not carry your intuition from one to the other.

## Key Members

Below is the batch of the 123 properties most worth remembering individually. **The other 105 all have identical shape**: `public XxxModel XxxModel { get; private set; }`, assigned by a single `this.XxxModel = base.GetGameModel<XxxModel>();`, with the contract declared by that `XxxModel` abstract class itself. Read `GameModels.cs:14-624` for the full list.

| Member | Signature | What this member is for |
| --- | --- | --- |
| `.ctor` | `public GameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)` | The only constructor. It passes the registry chain to the base class to be stored as an `MBList<GameModel>`, then calls `GetSpecificGameBehaviors()` to fill all 123 slots. **The properties are immutable after the constructor returns.** The base constructor performs `inputComponents.ToMBList<GameModel>()` — a snapshot, so any `AddModel` you issue afterwards has no effect on this instance. |
| `GetSpecificGameBehaviors` | `private void GetSpecificGameBehaviors()` | The only method of its own, and private. It is the container for those 124 assignments, guarded by `GameMode == Campaign \|\| GameMode == Tutorial`. **That guard is the single largest risk in this class**: when it does not hold, every property stays null and `GetGameModel<T>`'s `default(T)` passes silently. |
| `MapVisibilityModel` | `public MapVisibilityModel MapVisibilityModel { get; private set; }` | Map fog visibility. Declared at `:14`, the very first property in the class. Knowing what it is: not a fog toggle, but "given a `MapFogType` and a party position, is this point visible". |
| `PartySpeedCalculatingModel` | `public PartySpeedModel PartySpeedCalculatingModel { get; private set; }` | Party movement speed. **The property name and the type name disagree**: the type is `PartySpeedModel` (no `Calculating`), and the assignment at `:639` reads `base.GetGameModel<PartySpeedModel>()`. Use the type name in the generic argument — do not copy the property name. |
| `PartyNavigationModel` | `public PartyNavigationModel PartyNavigationModel { get; private set; }` | Party pathfinding. Declared at `:264`, assigned at **both `:673` and `:743`**. Both yield the same value, so there is no side effect — but if two models of that type were registered, this only ever sees the outermost one and the second assignment is redundant. |
| `AgeModel` | `public AgeModel AgeModel { get; private set; }` | Age bracket thresholds. Declared at `:384`, assigned at `:705`. `AgingCampaignBehavior` reads it throughout (`Campaign.Current.Models.AgeModel.HeroComesOfAge` and friends), so overriding it simultaneously rewires official aging and coming-of-age behavior. The smallest override example lives on [AgeModel](../AgeModel). |
| `AllianceModel` | `public AllianceModel AllianceModel { get; private set; }` | Alliance and call-to-war rules and costs. `:134`. `AcceptCallToWarAgreementDecision`'s constructor reads it to compute `CallToWarCost`, and `DetermineSupport` reads it to score votes. |
| `SettlementAccessModel` | `public SettlementAccessModel SettlementAccessModel { get; private set; }` | Town access rules. `:479`. Its three abstract methods all return "can the main hero enter, and if not why" through `out AccessDetails`; details are on [AccessDetails](../AccessDetails) and [AccessLevel](../AccessLevel). |
| `KingdomDecisionPermissionModel` | `public KingdomDecisionPermissionModel KingdomDecisionPermissionModel { get; private set; }` | Who is eligible to propose a kingdom decision. `:154`. That is a separate question from the decision's own `IsAllowed()`, and the two must not be conflated. |
| `MarriageModel` | `public MarriageModel MarriageModel { get; private set; }` | Marriage rules. `:379`. |
| `PlayerProgressionModel` | `public PlayerProgressionModel PlayerProgressionModel { get; private set; }` | Player level progression. `:389`. |
| `DailyTroopXpBonusModel` | `public DailyTroopXpBonusModel DailyTroopXpBonusModel { get; private set; }` | Daily troop XP bonus. `:394`. |
| `CharacterStatsModel` | `public CharacterStatsModel CharacterStatsModel { get; private set; }` | Character stat conversion. `:169`. |
| `IssueModel` | `public IssueModel IssueModel { get; private set; }` | Village issue generation and pacing. `:484`. |
| `LocationModel` | `public LocationModel LocationModel { get; private set; }` | Location use permissions. `:514`. |
| `HeroCreationModel` | `public HeroCreationModel HeroCreationModel { get; private set; }` | Where a new hero's skills and equipment come from. `:579`. `AgingCampaignBehavior.OnHeroComesOfAge` reads its `GetInheritedSkillsForHero(hero)`. |
| `EquipmentSelectionModel` | `public EquipmentSelectionModel EquipmentSelectionModel { get; private set; }` | Equipment template selection when a hero comes of age or reaches teenage years. `:554`. Returns `MBList<MBEquipmentRoster>` and is the source of the `GetEquipmentRostersForHeroComeOfAge` / `...ReachesTeenAge` calls in `AgingCampaignBehavior`. |
| `CampaignTimeModel` | `public CampaignTimeModel CampaignTimeModel { get; private set; }` | Campaign start time. `:569`. `Campaign.cs` reads `this.Models.CampaignTimeModel.CampaignStartTime` in its `NewCampaign` branch to initialize `MapTimeTracker`. |
| `IncidentModel` | `public IncidentModel IncidentModel { get; private set; }` | Random incident generation. `:619`. |
| `ShipStatModel` | `public ShipStatModel ShipStatModel { get; private set; }` | Ship statistics. `:604`. The `Ship*` and `FleetManagementModel` slots already exist in 1.3.0 even though naval has not yet split into its own bucket. |
| `FleetManagementModel` | `public FleetManagementModel FleetManagementModel { get; private set; }` | Fleet management. `:624`, the last property in the class. |
| `SiegeEventModel` | `public SiegeEventModel SiegeEventModel { get; private set; }` | Siege event rules. `:454`. |
| `TroopSupplierProbabilityModel` | `public TroopSupplierProbabilityModel TroopSupplierProbabilityModel { get; private set; }` | Troop resupply probability. `:544`. |
| `GetGameModels` | `public MBReadOnlyList<GameModel> GetGameModels()` | **Not on this class** — on the base [GameModelsManager](../../core-extra/GameModelsManager). Returns a read-only view of the whole registry chain, which is the quickest way to see how many model layers are actually stacked while debugging override order. |
| `GetGameModel<T>` | `protected T GetGameModel<T>() where T : GameModel` | **Also not on this class**, on the base, and `protected` — unreachable from outside. Consumers should read `Campaign.Current.Models.XxxModel` rather than try to call it. |

## Real Example

Three typical shapes: reading a model, overriding a model, and debugging how many layers are on the chain.

Reading — by far the most common, and all 123 slots have this shape:

```csharp
int oldAge = Campaign.Current.Models.AgeModel.BecomeOldAge;
int comeOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
Debug.Print("old age = " + oldAge + ", come of age = " + comeOfAge, 0);
```

Overriding a slot. This is the `MBGameModel<T>` decorator form, and **`T` must be the model's abstract class, not your own class**:

```csharp
public class SlowAgingModel : MBGameModel<AgeModel>
{
    public override int BecomeInfantAge { get { return 4; } }
    public override int BecomeChildAge { get { return 8; } }
    public override int BecomeTeenagerAge { get { return 16; } }
    public override int HeroComesOfAge { get { return 21; } }
    public override int BecomeOldAge { get { return 60; } }
    public override int MiddleAdultHoodAge { get { return 38; } }
    public override int MaxAge { get { return 100; } }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        // Not forwarding = wholesale replacement.
        // this.BaseModel.GetAgeLimitForLocation(...) is how you pass down the chain instead.
        minimumAge = 16;
        maximumAge = 70;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    gameStarterObject.AddModel<AgeModel>(new SlowAgingModel());
}
```

Debugging override order is only possible **inside `InitializeGameStarter`**, because there is no public way to get the whole chain back at runtime: `Game` exposes only `AddGameModelsManager<T>(IEnumerable<GameModel>)` (a write) and `SetBasicModels(IEnumerable<GameModel>)` (also a write), and `_gameModelManagers` is a `private Dictionary<Type, GameModelsManager>` with **no public getter**. The one place the chain is enumerable is `IGameStarter.Models`, which returns a live view of `CampaignGameStarter._models`:

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);

    int layers = 0;
    foreach (GameModel model in gameStarterObject.Models)
    {
        if (model is AgeModel)
        {
            layers++;
        }
    }
    Debug.Print("AgeModel layers = " + layers, 0);

    gameStarterObject.AddModel<AgeModel>(new SlowAgingModel());
}
```

`layers == 1` means nobody overrode it; `> 1` means mods have already inserted themselves and the value is the chain depth. **Put this before your own `AddModel`**, or the count will include you.

## Risks and Boundaries

- **`sealed`, not inheritable.** `public sealed class GameModels : GameModelsManager`. To add a new model slot you cannot derive from it; you must `AddModel` a brand-new `GameModel` subclass from `InitializeGameStarter` — but then `Campaign.Current.Models` has no property for it and you have to stash the reference in your own static field.
- **Zero public methods.** All behavior lives on the types of the properties (the `XxxModel` abstract classes). This class is a directory, not a service.
- **When `GameMode` is not Campaign/Tutorial, everything is null.** `GetSpecificGameBehaviors`'s guard is the only fill path. A `GetGameModel<T>` that misses returns `default(T)` — **no exception, no assert**. Reading `Campaign.Current.Models.AgeModel` in an editor or menu scene yields null, and the resulting NRE surfaces far away from its cause.
- **Properties are `private set` and immutable after construction.** The only way to swap a model is to register another one from `InitializeGameStarter`, which must happen **before** `GameModels` is constructed — `Campaign.cs:1905` is that deadline. Changing models at runtime is simply not expressible in this API.
- **The constructor snapshots the input chain.** `GameModelsManager`'s constructor is `inputComponents.ToMBList<GameModel>()`. Calling `CampaignGameStarter.AddModel` afterwards does nothing to the already-constructed `GameModels`.
- **`PartyNavigationModel` is assigned twice.** At `:673` and `:743`. Harmless because the lookup is pure, but it is evidence that these 124 lines are hand-maintained — infer property ordering or insertion points from line numbers and this duplicate will mislead you.
- **`PartySpeedCalculatingModel`'s type lacks `Calculating`.** Property `PartySpeedCalculatingModel`, type `PartySpeedModel`, assignment `base.GetGameModel<PartySpeedModel>()`. Writing `GetModel<PartySpeedCalculatingModel>()` does not compile.
- **`GetGameModel<T>` is `protected`.** Unreachable from outside. To query outside the container use `Campaign.Current.Models.XxxModel`, or enumerate `IGameStarter.Models` inside `InitializeGameStarter`.
- **The registry chain cannot be enumerated at runtime.** `Game` exposes only `AddGameModelsManager<T>()` and `SetBasicModels()` (both writes); `_gameModelManagers` is a `private Dictionary<Type, GameModelsManager>` with **no public getter**. "How many model layers are stacked" is answerable only during `InitializeGameStarter`, never at runtime.
- **Not saved.** No `MBObjectBase`, no `StringId`, not in `MBObjectManager`. On load, `Campaign` is rebuilt and the models are re-assembled from the module registry chain.
- **The 123 slots are filled synchronously in one pass.** The constructor performs 124 linear reverse scans, each `O(n)`, for `O(123 × n)` in total. With many mods on the chain that number grows, but against overall campaign initialization it is negligible — it is not something you need to optimize.

## Cross-Version Notes

`GameModels` is the model aggregator whose shape evolves most visibly: **the slot count keeps growing**. 1.3.0 has 123 properties, and later versions keep appending for new systems (sandbox, naval, formations, the industry system introduced in 1.5).

**The class shape, however, does not change**: `sealed`, deriving from `GameModelsManager`, `{ get; private set; }`, one constructor plus one private `GetSpecificGameBehaviors()`, zero public methods. That shape is stable across the three major versions from 1.3 to 1.5.

Two practical consequences for mod authors. First, **do not use reflection over `GameModels`' properties** to discover what is available — newer versions add types you have never heard of, and downstream code may depend on them being present. Second, **upstream slot additions are not a compile break**: the 123 property names you reference will not disappear; the risk is that a specific `XxxModel` abstract class you depend on has a member re-signatured. That is coverage growing, not this class growing.

Also worth watching is the `GameMode` guard. In 1.3.0 the condition is `Campaign || Tutorial`; if a later version introduces a new campaign mode (some standalone modules define their own `GameMode`) and it is not added to this condition, you get a `GameModels` whose 123 properties are all null. **Null-checking before reading a model is cheap cross-version insurance.**

## Dependencies

- Base class: [GameModelsManager](../../core-extra/GameModelsManager) supplies `protected GetGameModel<T>()` (the reverse lookup) and `public MBReadOnlyList<GameModel> GetGameModels()`, over a `private readonly MBList<GameModel> _gameModels`
- The marker base: [GameModel](../../core-extra/GameModel) is the common ancestor of all 123 property types — zero members, a pure label; decorator-style overriding goes through [MBGameModel](../../core-extra/MBGameModel)
- The host: `public GameModels Models { get; }` on [Campaign](../Campaign) is this instance's global access point, and `Campaign.cs:1905` is where it is constructed
- The registration source: the `Models` property (`IEnumerable<GameModel>`) and both `AddModel` overloads of [CampaignGameStarter](../CampaignGameStarter)
- The module entry point: [MBGameManager](../../mission-ext/MBGameManager)'s `InitializeGameStarter` walks every `MBSubModuleBase`, and `SandBox/SandBoxSubModule.cs` writes thirty-odd official `AddModel` calls right there
- Concrete model examples: [AgeModel](../AgeModel) (smallest: 7 properties and 1 method), [SettlementAccessModel](../SettlementAccessModel) (three `out AccessDetails` entry points)
- Bucket index: [campaign API section](../)