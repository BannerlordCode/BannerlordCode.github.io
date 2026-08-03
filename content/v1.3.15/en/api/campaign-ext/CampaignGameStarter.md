---
title: "CampaignGameStarter"
description: "The short-lived registration ledger the engine hands your SubModule during campaign bootstrap: use it to add CampaignBehaviorBase behaviors, GameModel models, and game menus / conversation lines into a new or loaded campaign."
---
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** `IGameStarter`
**Source:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## Overview

`CampaignGameStarter` is the collector the engine uses at the exact moment a **new campaign is created** or a **save is loaded** to register behaviors, models, game menus, and conversation lines into the campaign world. Unlike `Campaign` itself, it is a short-lived "registration ledger": `Campaign` constructs it during its initialization flow (passing in the `GameMenuManager` and `ConversationManager`), lets `SandBoxManager` write all built-in behaviors and models first, then walks every `MBSubModuleBase` and calls its `InitializeGameStarter` / `OnCampaignStart` / `OnGameLoaded` hooks so mods can add their own content. Finally, the two internal lists (`_campaignBehaviors`, `_models`) are consumed to build `CampaignBehaviorManager` and `GameModels`. Once registration is done the starter is discarded — the reference you held no longer affects the running campaign.

The `IGameStarter` interface itself only declares `AddModel(GameModel)`, `AddModel<T>(MBGameModel<T>)`, and `Models`; everything else — `AddBehavior` and all the menu / conversation registration methods — is provided by `CampaignGameStarter` on top of the campaign layer.

## Mental Model

Treat it as **"the registration form the engine hands you when a new game starts"**, not a service or state object you keep around:

- It is created by `Campaign` inside the campaign-loading flow. **Do not `new` a `CampaignGameStarter(...)` yourself**, and do not store its reference after the campaign is up and running — it is only valid during that brief window.
- What actually makes a behavior "alive" is the `CampaignBehaviorManager` built from the collected list. The starter merely gathers `CampaignBehaviorBase` instances into an `ICollection`; the manager later calls each behavior's `RegisterEvents()` in one pass.
- You get exactly one registration opportunity: inside the `MBSubModuleBase` hooks `OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded`. Adding a behavior after that window has no effect because the behavior manager is already built.
- Do not register the same behavior twice (see Risks). The same applies to models — a duplicate `AddModel` is simply appended, and `GetModel<T>()` returns the last one registered.

## When to Use / When NOT to Use

**Use `CampaignGameStarter` when:**
- You need a `CampaignBehaviorBase` to exist in a new or loaded campaign, so it can subscribe to campaign events and persist save data.
- You need to inject or extend a `GameModel` (e.g. a custom economy, difficulty, or smithing model).
- You are adding a game menu, a menu option, or a conversation line that must be present when the campaign world is assembled.

**Do NOT use `CampaignGameStarter` when:**
- You want to add or remove a behavior **at runtime** (mid-campaign). The starter is already dead by then. Use `Campaign.Current.CampaignBehaviorManager` and its runtime add/remove methods instead — that is a separate API.
- You only need to **read** a model. Go through `Campaign.Current.Models` (the `GameModels` manager), not the starter.
- You want to mutate campaign state directly. Prefer the relevant `*Action.Apply` helpers (e.g. `ChangeOwnerOfSettlementAction`, `GiveGoldAction`) over poking fields yourself; the starter has no state-mutation role.

## Dependencies

- [CampaignBehaviorBase](../CampaignBehaviorBase/) — the base class you `AddBehavior` with; you must implement `RegisterEvents` and `SyncData`.
- [GameModels](../GameModels/) — the runtime manager all registered models end up in (`Campaign.Current.Models`).
- [Campaign](../../campaign/Campaign/) — the long-lived campaign world that creates the starter during its bootstrap and consumes its lists.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — declares the `OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded` hooks where the starter is handed to you.
- [CampaignEvents](../CampaignEvents/) — the campaign event dispatcher your behaviors subscribe to inside `RegisterEvents`.
- [IGameStarter](../../core-extra/IGameStarter/) — the interface contract (`AddModel`, `Models`) that `CampaignGameStarter` implements.

## How Registration Fits the Campaign Bootstrap

The starter is the **vehicle**, but the **triggers** are `MBSubModuleBase` hooks. Understanding the phase order explains why registering at the wrong time silently fails:

1. **`InitializeGameStarter` phase** — fired unconditionally for every loading type (new game, tutorial, editor, and save load), before the campaign world is fully assembled. `SandBoxManager` and then each SubModule register built-in and mod content here.
2. **`OnCampaignStart` phase** — fired for a *new* campaign (and tutorial/editor starts). Not fired on a plain save load.
3. **`OnGameLoaded` phase** — fired when a *saved* campaign is loaded.
4. **Behavior manager build** — after the hooks return, `CampaignBehaviorManager.InitializeCampaignBehaviors(starter.CampaignBehaviors)` is called. From this point on the starter's lists are frozen and the reference is meaningless.

The takeaway: `InitializeGameStarter` is the safest hook because it runs in all loading modes (it runs before `OnCampaignStart` / `OnGameLoaded`). If a behavior must be present both on a new game and on a loaded save, register it there rather than only in `OnCampaignStart`.

## Key Members

### Behavior registration

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`
Registers a `CampaignBehaviorBase` instance with the campaign. A `null` argument is silently ignored (no exception).
- **Side effect:** only appends the instance to the internal list. The real event subscription happens later, when `CampaignBehaviorManager` iterates the list and calls each behavior's `RegisterEvents()`.
- **When to call:** only inside a starter hook (`OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded`). Calls afterward do nothing useful.

#### `public bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase`
Removes the given instance from the registration list; returns `true` on success.

#### `public void RemoveBehaviors<T>() where T : CampaignBehaviorBase`
Removes every instance matching `T`, iterating back-to-front to avoid index-shift bugs.

### Model registration and lookup

#### `public void AddModel(GameModel gameModel)`
Appends a model instance. After the campaign starts it lives in `GameModels` and is retrievable via `Campaign.Current.Models.GetXxxModel()`.
- **Side effect:** appends to the internal list with no validation. The same type can be added more than once; `GetModel<T>()` then returns the last one.
- **When to call:** same window as `AddBehavior`.

#### `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`
Appends an `MBGameModel<T>` wrapper: it first finds the already-registered `T` default model and calls `gameModel.Initialize(model)`, handing you the old model so you can extend or replace it, then registers the wrapper. Ideal for "reuse the built-in model's defaults but override some behavior".
- **Side effect:** triggers `Initialize`, so your `MBGameModel<T>` must correctly implement `Initialize(T)`.

#### `public T GetModel<T>() where T : GameModel`
Searches the registered list **in reverse** and returns the first `T`. If none is found it returns `null` (explicitly `null` in v1.4.5; `default(T)` in v1.3.x).
- **Use:** inspect or pull a registered model from inside a starter hook, or as the base lookup used internally by `AddModel<T>(MBGameModel<T>)`. Prefer this over `Campaign.Current.Models` inside the hook, because `Campaign` may not be fully assembled yet.

### Menu content registration (at campaign start)

The starter also registers game menus and conversation content into `GameMenuManager` / `ConversationManager`, so menu and dialog mods register in the same hooks.

#### `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)`
Registers (or fetches) a menu by `menuId` and initializes its display text and entry callback.

#### `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`
Adds a clickable option to an existing menu: `condition` controls visibility / availability, `consequence` runs on click.

#### `public GameMenu GetPresumedGameMenu(string stringId)`
Returns the menu for `stringId`, creating and registering an empty one if it does not exist yet. Most `AddGameMenu*` methods call this internally first.

(`AddWaitGameMenu` registers a menu with a wait timer; its signature is longer but otherwise similar to `AddGameMenu`.)

### Conversation content registration (at campaign start)

#### `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ...)`
Registers a player-spoken line and returns the constructed `ConversationSentence`. The input/output tokens string the dialog nodes into a graph.

(The remaining `AddDialogLine` / `AddRepeatablePlayerLine` / `AddDialogLineWithVariation` / `AddDialogLineMultiAgent` / `AddDialogFlow` are the same dialog-graph registration entry points; consult source for their longer signatures.)

### Other

#### `public void UnregisterNonReadyObjects()`
Asks `Game.Current.ObjectManager` and `GameMenuManager` to unregister objects that are not yet ready. Called automatically by the engine at the end of initialization; mods rarely need to call it manually.

## Examples

### Example 1 — add a custom behavior to a new campaign (standard SubModule pattern)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // Fires on a new campaign / tutorial / editor start; saves use OnGameLoaded.
        public override void OnCampaignStart(Game game, object starterObject)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }

    public class DailyGoldBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            // Subscribe to CampaignEventDispatcher events here, e.g. daily tick.
        }

        public override void SyncData(IDataStore dataStore)
        {
            // Register fields that must survive a save/load here.
        }
    }
}
```

### Example 2 — register a behavior and a model for both new and loaded campaigns

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    // Runs in ALL loading modes, before OnCampaignStart / OnGameLoaded.
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new PersistentTrackingBehavior());
    starter.AddModel(new MyDifficultyModel());
}
```

### Example 3 — extend a built-in model while reusing its defaults

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    // Initialize() receives the already-registered DefaultSmithingModel as the base.
    starter.AddModel<DefaultSmithingModel>(new MySmithingModel());
}

// At runtime, retrieve it through the live manager, not the starter:
var model = Campaign.Current.Models.GetSmithingModel();
```

## Risks

- **Registering in the wrong phase does nothing.** `AddBehavior` / `AddModel` are only effective inside the starter hooks. If you keep an old `CampaignGameStarter` reference and call `AddBehavior` after the campaign is running, the list changes but `CampaignBehaviorManager` is already built and never re-subscribes the behavior's events — so it is effectively absent. For runtime add/remove, use `Campaign.Current.CampaignBehaviorManager` instead.
- **Double registration.** Adding the same behavior instance or the same type twice causes `RegisterEvents()` to run twice, so events get subscribed twice (e.g. a daily tick fires twice). Do not call `AddBehavior` unguarded across multiple hooks.
- **Missing registration on load.** `OnCampaignStart` only fires on a non-loaded start. If your behavior must also apply to old saves, put it in `InitializeGameStarter` (or also handle `OnGameLoaded`), or it will be entirely absent from loaded games.
- **`Campaign.Current` not ready yet.** These hooks run inside `Campaign`'s own initialization. Reading `Campaign.Current.Models` there may touch a world that is not yet assembled. Use the starter's `GetModel<T>()` to inspect already-registered models instead of `Campaign.Current`.
- **Behavior subclasses must implement `RegisterEvents` and `SyncData`.** Both are `abstract` on `CampaignBehaviorBase`. If your behavior holds fields that must survive saves, register them in `SyncData(IDataStore)`, or their state is lost / reset to defaults after load, which can corrupt your logic.
- **`MBGameModel<T>.Initialize` with a null base.** With `AddModel<T>(MBGameModel<T>)`, if `T` has not yet been registered by any built-in or mod, `GetModel<T>()` returns `null` and your `Initialize(T)` must tolerate a null base model.

## Cross-Version Notes

- **v1.3.0:** this class and the `AddBehavior` / `AddModel` / `OnCampaignStart` / `InitializeGameStarter` registration shape are already stable and match this page. The `IGameStarter` contract is unchanged.
- **v1.4.5:** `GetModel<T>()` returns `null` explicitly instead of `default(T)` when nothing matches — behavior for callers is identical. `AddBehavior` / `AddModel` / `AddModel<T>` / `RemoveBehavior` / the menu and conversation registration methods are unchanged. Important: this class has **no** member named `InitializeCampaign` or `OnNewGameDataEnded` — the only registration entry point is the set of `MBSubModuleBase` hooks described above.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](./)
- ↔ Sibling: [CampaignBehaviorBase](../CampaignBehaviorBase/) — the behavior base you register here
- ↔ Sibling: [GameModels](../GameModels/) — where registered models live at runtime
- ↔ Sibling: [CampaignEvents](../CampaignEvents/) — events behaviors subscribe to
- ↑ Campaign world: [Campaign](../../campaign/Campaign/)
- ↑ Hook declaration: [MBSubModuleBase](../../core/MBSubModuleBase/)
- ↑ Starter contract: [IGameStarter](../../core-extra/IGameStarter/)
