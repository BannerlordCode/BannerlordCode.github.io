---
title: "IGameStarter"
description: "The three-member model registration contract the engine hands to MBSubModuleBase.OnGameStart and InitializeGameStarter. IGameStarter declares AddModel(GameModel), AddModel<T>(MBGameModel<T>) and a read-only Models enumeration — behaviors and menus are NOT on this interface."
---
# IGameStarter

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface IGameStarter`
**Base:** none
**Source:** `TaleWorlds.Core/IGameStarter.cs`

## Overview

`IGameStarter` is the three-method window through which a module injects `GameModel` instances into a game that is being assembled. It is declared in `TaleWorlds.Core` with exactly three members: `void AddModel(GameModel)`, `void AddModel<T>(MBGameModel<T>) where T : GameModel`, and `IEnumerable<GameModel> Models { get; }`. Everything else a mod usually reaches for at this moment — `AddBehavior`, `AddGameMenu`, `AddDialogLine`, `AddPlayerLine`, `RemoveBehavior`, `GetModel<T>()` — is **not** on this interface; it exists only on the concrete `CampaignGameStarter` in `TaleWorlds.CampaignSystem`. Because the engine passes the starter as `IGameStarter` to `MBSubModuleBase.OnGameStart` and `InitializeGameStarter`, code in those hooks sees only models unless you downcast, and downcasting to `CampaignGameStarter` is a hard dependency on the campaign layer that will not hold in the editor or on a dedicated server.

## Mental Model

Read `IGameStarter` as **"the model-only half of the game-start registration ledger"**. The engine constructs a concrete starter before the game exists, hands it to every submodule's start hooks, and then converts the collected models into a `GameModels` manager (`GameModelsManager`, built through `Game.AddGameModelsManager<T>` / `Game.SetBasicModels`). After that the starter is discarded.

**The real call order:**

1. `MBGameManager.StartNewGame` / load path constructs the concrete starter. In the campaign flow that is a `CampaignGameStarter` (`TaleWorlds.CampaignSystem`), which itself implements this interface.
2. Every `MBSubModuleBase.InitializeGameStarter(game, starterObject)` is called — all loading modes.
3. Every `MBSubModuleBase.OnGameStart(game, gameStarterObject)` is called — all loading modes.
4. Campaign-specific: `OnCampaignStart` / `OnGameLoaded`, where `starterObject` is the same `CampaignGameStarter` viewed as `object`.
5. `Game.SetBasicModels(...)` / `AddGameModelsManager<T>(...)` consumes `starter.Models` and builds the live managers. The starter is now dead.

**Traps:**

- **`AddModel` is `void` — there is no success signal and no dedup.** A duplicate type is appended; lookup by type returns the *last* registered. Registering a model from both `OnGameStart` and `InitializeGameStarter` silently double-registers it.
- **`AddModel<T>(MBGameModel<T>)` stores the previous model in `MBGameModel<T>.BaseModel`, it does not call a virtual hook.** `Initialize(T)` is a plain setter on `MBGameModel<T>`. The `Default*Model` classes in the shipped game (for example `DefaultDifficultyModel : DifficultyModel`) work the same way — they implement the model members and read `BaseModel`. If you write `public override void Initialize(...)` on an `MBGameModel<T>` subclass it does not compile.
- **The vast majority of game models use the self-referential form `FooModel : MBGameModel<FooModel>`.** `DifficultyModel : MBGameModel<DifficultyModel>`, `PartySpeedModel : MBGameModel<PartySpeedModel>`, `ItemValueModel : MBGameModel<ItemValueModel>` and roughly 130 more. A wrapper registered against that type sits *in front of* the default implementation, and every unimplemented member you forgot to override now throws `NotImplementedException` instead of silently returning a default.
- **The interface has no `AddBehavior`.** A hook written as `starterObject.AddBehavior(...)` does not compile against `IGameStarter`; you must cast to `CampaignGameStarter` first, which means the module now assumes the campaign layer is present.

## When to Use / When NOT to Use

**Use `IGameStarter` when:**
- You are inside `MBSubModuleBase.OnGameStart` or `InitializeGameStarter` and need to register a `GameModel` that works in every mode (campaign, editor, multiplayer, dedicated server).
- You are writing a shared helper that must not drag a `TaleWorlds.CampaignSystem` reference into your assembly — `IGameStarter` lives in `TaleWorlds.Core`.

**Do NOT use `IGameStarter` when:**
- You want a `CampaignBehaviorBase`. That is `CampaignGameStarter.AddBehavior`, and it only exists when a campaign is being built.
- You want to *read* a model at runtime. `starter.Models` is the pre-build snapshot and is meaningless after bootstrap; use `Game.Current.BasicModels` or the campaign's `GameModels` manager instead.
- You want to change models mid-game. The ledger is closed once `Game.SetBasicModels` has run.

## Dependencies

- [GameModel](../GameModel/) — the abstract base every registered model derives from.
- [MBGameModel](../MBGameModel/) — the `MBGameModel<T>` wrapper that gives you the previous model inside `Initialize`.
- [GameModelsManager](../GameModelsManager/) — the runtime manager the collected models end up inside.
- [Game](../Game/) — `Game.SetBasicModels` / `AddGameModelsManager<T>` consume the starter's contents.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — declares `OnGameStart` / `InitializeGameStarter`, the only callers of this interface.
- [CampaignGameStarter](../../campaign/CampaignGameStarter/) — the concrete implementation, and the only way to reach `AddBehavior` / menus / conversation lines.

## Key Members

#### `void AddModel(GameModel gameModel)`
Appends a model instance to the starter's list. **Contract:** takes ownership of the reference; no validation, no replacement, no dedup. If a model of the same type is already registered, both stay in the list and type-based lookup resolves to the last one — which is why "register in exactly one hook" is the rule.

#### `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`
The composition overload. `CampaignGameStarter`'s implementation is three lines: `T model = this.GetModel<T>(); gameModel.Initialize(model); this._models.Add(gameModel);` — it resolves the already-registered `T`, hands it over, then appends the wrapper. **Contract:** `MBGameModel<T>.Initialize(T)` is **not** `virtual`. It only stores the argument into `private protected T BaseModel { protected get; private set; }`. You do not override it — you read `BaseModel` from your subclass, and it is `default(T)` when nothing of type `T` was registered first, so always null-check it.

#### `IEnumerable<GameModel> Models { get; }`
A read-only enumeration of everything registered so far. **Contract:** valid only *inside* the start hooks. After `Game.SetBasicModels` runs, this enumeration reflects a ledger nobody reads; a model you registered too late is simply absent from the running game.

## Examples

### Example 1 — register a model from every start mode

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            // Runs for new game, save load, editor and multiplayer alike.
            gameStarterObject.AddModel(new MyCampaignTimeModel());
        }
    }
}
```

### Example 2 — wrap and extend an existing model

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // DifficultyModel is declared as `MBGameModel<DifficultyModel>`, so BaseModel
    // is typed DifficultyModel and already holds DefaultDifficultyModel after registration.
    public class HalfDamageDifficultyModel : DifficultyModel
    {
        public override float GetDamageToPlayerMultiplier()
        {
            float vanilla = BaseModel != null ? BaseModel.GetDamageToPlayerMultiplier() : 1f;
            return vanilla * 0.5f;
        }

        // Every other DifficultyModel member must be overridden too: the abstract base
        // declares GetPlayerTroopsReceivedDamageMultiplier, GetPlayerRecruitSlotBonus,
        // GetPlayerMapMovementSpeedBonusMultiplier, GetCombatAIDifficultyMultiplier,
        // GetPersuasionBonusChance, GetClanMemberDeathChanceMultiplier,
        // GetStealthDifficultyMultiplier and GetDisguiseDifficultyMultiplier.
    }

    public class MySubModule : MBSubModuleBase
    {
        protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            starterObject.AddModel<DifficultyModel>(new HalfDamageDifficultyModel());
        }
    }

    // At runtime the live model is reached through the campaign's manager, not the starter.
    // Campaign.Current.Models.DifficultyModel is the instance you registered above.
    public static float ReadLiveMultiplier()
    {
        return Campaign.Current.Models.DifficultyModel.GetDamageToPlayerMultiplier();
    }
}
```

### Example 3 — inspecting what is already registered, from inside the hook

```csharp
using TaleWorlds.Engine;

protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    // Only valid during the hook; after bootstrap this list is a dead snapshot.
    foreach (GameModel model in starterObject.Models)
    {
        MBDebug.Print("registered model: " + model.GetType().Name);
    }
    starterObject.AddModel(new MyGameModel());
}
```

## Risks and crash boundaries

- **Save serialization.** The starter itself is not saved. A `GameModel` that caches state must read it back through `SyncData`/`IDataStore` in the layer that owns the save; nothing in `IGameStarter` participates in serialization.
- **Cross-domain dependency.** `IGameStarter` is safe to reference from any module. Casting the argument to `CampaignGameStarter` is not: the editor (`EditorGameManager`), the main menu state and a dedicated server all build a starter that is **not** a `CampaignGameStarter`, and that cast throws `InvalidCastException` there. Guard with `is`/`as`, or register only via the interface.
- **Load order.** `InitializeGameStarter` runs before `OnGameStart`, and both run before the models are consumed. Registering from `OnGameEnd`, from `OnApplicationTick`, or from a `CampaignBehaviorBase.RegisterEvents` is too late and has no effect — the list is already sealed.
- **ID stability.** No ids here, but a stable *type name* is effectively required: `AddModel<T>(MBGameModel<T>)` resolves the previous model by generic type argument. Renaming your `MBGameModel<T>` subclass across versions silently changes which model it wraps, so the extension quietly stops extending.
- **Null `BaseModel` in an `MBGameModel<T>` wrapper.** The single most common crash from `AddModel<T>`: a mod that registers its wrapper before the vanilla model exists (e.g. from `OnGameStart` instead of `InitializeGameStarter`) gets `default(T)` in `BaseModel` and then dereferences it. Always null-check `BaseModel`.
- **Partial override of an abstract model.** Because the real models are `MBGameModel<Self>`, wrapping `DifficultyModel` means *you* become the `DifficultyModel` implementation. Any abstract member you leave unimplemented throws at the call site, deep inside the campaign tick, far from your registration code.
- **Duplicate registration.** Registering the same model type from two hooks yields two entries; the manager keeps the last, and any earlier instance may already have been handed out by an `Initialize` callback. Guard with a flag if you have more than one entry point.

## Cross-Version Notes

- **v1.3.0:** exactly three members — `AddModel(GameModel)`, `AddModel<T>(MBGameModel<T>) where T : GameModel`, and `IEnumerable<GameModel> Models { get; }`. The file is `TaleWorlds.Core/IGameStarter.cs`. `MBGameModel<T>` in the same version has a single non-virtual `public void Initialize(T baseModel)` and a `private protected T BaseModel { protected get; private set; }` — the decorator shape, not a template-method shape.
- **v1.3.15 / v1.4.5:** the interface is unchanged. Later versions did not push `AddBehavior` or the menu/conversation registration methods down into `IGameStarter`; they remain on `CampaignGameStarter`. Do not write code that assumes the wider surface.

## See Also

- ↑ Parent bucket: [Core-extra API index](../)
- ↪ Model base: [GameModel](../GameModel/) · [MBGameModel](../MBGameModel/)
- ↪ Runtime lookup: [GameModelsManager](../GameModelsManager/)
- ↪ Consumer: [Game](../Game/)
- ↖ Hook declaration: [MBSubModuleBase](../../core/MBSubModuleBase/)
- ↪ Concrete implementation: [CampaignGameStarter](../../campaign/CampaignGameStarter/)