---
title: "CampaignGameStarter"
description: "The registrar created by the engine during campaign initialization and handed to each SubModule: register CampaignBehaviorBase behaviors and GameModel models, plus menus and conversations, into a new campaign. It is a one-shot 'registration sheet' whose lifecycle lasts only a brief moment during campaign startup."
---
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class CampaignGameStarter : IGameStarter`  
**Base:** `IGameStarter`  
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## Overview

`CampaignGameStarter` is the collector the engine uses at the moment a **new campaign is created / a save is loaded** to register "behaviors", "models", and menus/conversations into the game. Unlike `Campaign`, which lives for a long time, it is a "short-lived registration sheet": the engine `new`s it up inside `Campaign`'s initialization flow (`Campaign.cs` line 1904, the constructor needs `GameMenuManager` and `ConversationManager`), first lets `SandBoxManager` write all built-in behaviors and models, then calls each SubModule's `InitializeGameStarter` / `OnCampaignStart` hooks one by one to add the mod's content too, and finally uses its two internal lists (`_campaignBehaviors`, `_models`) to construct `CampaignBehaviorManager` and `GameModels`. Once behaviors are registered, this starter is discarded, and the reference in your hand no longer affects the running campaign.

The `IGameStarter` interface itself only declares `AddModel(GameModel)`, `AddModel<T>(MBGameModel<T>)`, and `Models`; `AddBehavior` and all menu/conversation registration methods are extra conveniences `CampaignGameStarter` provides on the campaign layer.

## Mental Model

Think of it as **"the registration sheet the engine hands you when opening a new save"**, not a service or stateful object:

- It is created by `Campaign` during the campaign-load flow; **do not `new CampaignGameStarter(...)` yourself**, and do not keep its reference long after the campaign is running — it is only valid during that small window.
- What really "brings behaviors to life" is the `CampaignBehaviorManager` constructed after registration finishes; the starter merely collects `CampaignBehaviorBase` instances into an `ICollection` first, and the manager then uniformly calls each behavior's `RegisterEvents()`.
- There is only one registration window: inside the `OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded` hooks of `MBSubModuleBase`. Adding a behavior after missing this window has no effect, because the behavior manager is already built.
- Do not register the same behavior **twice** (see "Risks and Crash Boundaries"); the same goes for models — a repeated `AddModel` is only counted multiple times, and lookup returns the last one in reverse order.

## How to Register Behavior / Model

You cannot get, and should not `new`, a `CampaignGameStarter`. The engine passes it as a parameter to several `MBSubModuleBase` hooks during campaign initialization; what you do is **override the matching hook, cast the parameter to `CampaignGameStarter`, and call `AddBehavior` / `AddModel`**.

The most common hook, and the one that most directly corresponds to "add a behavior in a new campaign", is `OnCampaignStart`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // Fires on new campaign / tutorial / editor start; loads go through OnGameLoaded
        protected internal override void OnCampaignStart(Game game, object starterObject)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }
}
```

If you want a behavior to **register both on a new save and on a load** (for example a behavior that must persist state long-term), `InitializeGameStarter` is safer — it is unconditionally called under every load type (see `Campaign.cs` line 1906), earlier than `OnCampaignStart`:

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new PersistentTrackingBehavior());
    starter.AddModel(new MyDifficultyModel());
}
```

Models are also registered in these two hooks:

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    // Append a custom model directly; access it later via Campaign.Current.Models
    starter.AddModel(new MyClanFinanceModel());
}
```

> Note: the `DailyGoldBehavior`, `PersistentTrackingBehavior`, `MyDifficultyModel` above are only placeholders to show "your own implemented subclass"; when writing a real mod, replace them with the real class names where you `inherit CampaignBehaviorBase` / `inherit GameModel`; do not copy these names verbatim. The real base classes and contracts are in "See Also" below.

## Key Properties

| Property | Type | Description |
|------|------|------|
| `CampaignBehaviors` | `ICollection<CampaignBehaviorBase>` | All behavior instances the starter has currently collected. The collection itself is readable/writable (grown via `AddBehavior`), but modifying it outside the hooks is meaningless — the behavior manager is already constructed. |
| `Models` | `IEnumerable<GameModel>` | All models the starter has currently collected. After campaign start these values are written into the `GameModels` manager, and at runtime are reachable via `Campaign.Current.Models`. |

## Key Methods

### Behavior registration

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`
Register a `CampaignBehaviorBase` subclass instance into the campaign. When `campaignBehavior` is `null` it is silently ignored, no exception.
- **Side effect:** only adds the instance to the internal list; the real event subscription happens later when `CampaignBehaviorManager.RegisterEvents()` iterates each behavior and calls its `RegisterEvents()`.
- **Call timing:** only inside the hooks where the engine hands out the starter (`OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded`); calling it afterwards has no effect.

```csharp
protected internal override void OnCampaignStart(Game game, object starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new DailyGoldBehavior());
}
```

#### `public bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase`
Remove the given instance from the registration list; returns `true` on success.

```csharp
starter.RemoveBehavior(someBehaviorInstance);
```

#### `public void RemoveBehaviors<T>() where T : CampaignBehaviorBase`
Remove all matching instances by type (traverses from back to front to avoid index shifting).

```csharp
starter.RemoveBehaviors<ObsoleteBehavior>();
```

### Model registration and lookup

#### `public void AddModel(GameModel gameModel)`
Append a model instance. After campaign start it enters `GameModels`, reachable at runtime via `Campaign.Current.Models.GetXxxModel()`-style methods by type.
- **Side effect:** only adds to the internal list, no validation; same-name / same-type can be added repeatedly, and lookup returns the last one.
- **Call timing:** same as `AddBehavior`, only valid inside a starter hook.

```csharp
starter.AddModel(new MyClanFinanceModel());
```

#### `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`
Append an `MBGameModel<T>` wrapper model: at construction it first finds the already-registered default model of type `T`, calls `gameModel.Initialize(model)` to hand you the old model so you can extend/replace on top of it, then registers it. Good for "override a built-in model but reuse its default values".
- **Side effect:** triggers `Initialize`, so your `MBGameModel<T>` must correctly implement `Initialize(T)`.

```csharp
// Extend your own smithing model on top of the existing DefaultSmithingModel
starter.AddModel<DefaultSmithingModel>(new MySmithingModel());
```

#### `public T GetModel<T>() where T : GameModel`
Search the registered list in **reverse order** and return the first model of type `T`; when not found, v1.3.x returns `default(T)` (null for reference types), and v1.4.5 explicitly returns `null`.
- **Use:** inside a starter hook to inspect/retrieve an already-registered model, or for `AddModel<T>(MBGameModel<T>)` to obtain the base model internally.

```csharp
DefaultSmithingModel baseModel = starter.GetModel<DefaultSmithingModel>();
```

### Menu content registration (at campaign start)

The starter is also responsible for registering game menus and conversation "content" into `GameMenuManager` / `ConversationManager`, so menu/conversation mods also complete their registration in these hooks.

#### `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)`
Register (or fetch) a menu by `menuId` and initialize its display text and entry callback.

```csharp
starter.AddGameMenu(
    "my_mod_menu",
    "My custom menu",
    new OnInitDelegate((args) => { /* init when entering the menu */ }));
```

#### `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`
Append a clickable option to an existing menu: `condition` controls whether to show/enable it, `consequence` is what happens on click.

```csharp
starter.AddGameMenuOption(
    "my_mod_menu",
    "my_mod_option",
    "Open my panel",
    new GameMenuOption.OnConditionDelegate(() => true),
    new GameMenuOption.OnConsequenceDelegate(() => { /* logic after click */ }),
    false);
```

#### `public GameMenu GetPresumedGameMenu(string stringId)`
Fetch a menu by `stringId`: returns the existing instance if present, otherwise creates and registers an empty menu and returns it. Most `AddGameMenu*` internally call it first.

```csharp
GameMenu menu = starter.GetPresumedGameMenu("my_mod_menu");
```

(`AddWaitGameMenu` is for menus with a wait timer; its signature is longer and usage is similar to `AddGameMenu`, not expanded here.)

### Conversation content registration (at campaign start)

#### `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ...)`
Register a "player speakable line" and return the constructed `ConversationSentence`. input/output tokens are used to string conversation nodes into a graph.

```csharp
starter.AddPlayerLine(
    "my_mod_player_line",
    "lord_talk",
    "my_mod_response",
    "I want to talk to you about trade",
    new ConversationSentence.OnConditionDelegate(() => Hero.OneToOneConversationHero != null),
    new ConversationSentence.OnConsequenceDelegate(() => { /* trigger consequence */ }));
```

(The rest — `AddDialogLine` / `AddRepeatablePlayerLine` / `AddDialogLineWithVariation` / `AddDialogLineMultiAgent` / `AddDialogFlow` — are all the same conversation-graph registration entry; signatures are longer, consult source as needed.)

### Misc

#### `public void UnregisterNonReadyObjects()`
Ask `Game.Current.ObjectManager` and `GameMenuManager` to unregister objects not yet ready. Auto-called by the engine at the end of initialization (`Campaign.cs` line 1959); mods generally do not need to call it manually.

## Typical Usage Examples

### Example 1: add a custom Behavior to a new campaign inside a SubModule (the standard practice of scenario test #1)

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnCampaignStart(Game game, object starterObject)
        {
            // The engine passes the current campaign's CampaignGameStarter as starterObject
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }

    public class DailyGoldBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            // Subscribe to CampaignEventDispatcher events here, e.g. daily settlement
        }

        public override void SyncData(IDataStore dataStore)
        {
            // Register the fields that must be saved with the save here
        }
    }
}
```

### Example 2: add a custom GameModel

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddModel(new MyClanFinanceModel());
}

// Runtime lookup (GameModels provides a per-model-type accessor, exact name depends on the model kind)
var model = Campaign.Current.Models; // then pull out MyClanFinanceModel with the matching model accessor
```

### Example 3: a Behavior that must exist on both new and loaded saves

```csharp
// Use InitializeGameStarter instead of OnCampaignStart, to ensure registration on load too
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new PersistentTrackingBehavior());
}
```

## Risks and Crash Boundaries

- **Registration in the wrong phase is无效:** `AddBehavior` / `AddModel` only work inside the hooks where the engine hands out the starter. If, after the campaign is already running, you take an earlier-saved `CampaignGameStarter` reference and call `AddBehavior` on it, the list changes but `CampaignBehaviorManager` is long built, so the new behavior is never subscribed to any event — effectively nothing was added. To add/remove behaviors at runtime, use the relevant methods of `Campaign.Current.CampaignBehaviorManager` (a separate API).
- **Duplicate registration:** the same behavior instance or same type added via `AddBehavior` twice causes its `RegisterEvents()` to be called twice, and events to be subscribed twice (e.g. a daily tick runs twice). Do not blindly `AddBehavior` repeatedly across hooks.
- **Missed registration on load:** `OnCampaignStart` only fires on a "non-load" start; if your behavior must also take effect on an old save, you must put it in `InitializeGameStarter` (or also handle `OnGameLoaded`). Otherwise that behavior is absent for the whole old save.
- **`Campaign.Current` not ready yet:** these hooks fire inside `Campaign`'s own initialization flow, where accessing `Campaign.Current.Models` etc. may get a world not yet assembled. When you need to read an already-registered model, prefer the starter's `GetModel<T>()`, not `Campaign.Current`.
- **The behavior subclass must implement `RegisterEvents` and `SyncData`:** both are `abstract` in `CampaignBehaviorBase`. If your behavior holds fields that must survive a save, you must register them in `SyncData(IDataStore)`, otherwise the state is lost or fields are default after a load, which may cause logic corruption.
- **`MBGameModel<T>`'s `Initialize`:** when using `AddModel<T>(MBGameModel<T>)`, if base `T` has not yet been registered by any mod/built-in, `GetModel<T>()` returns `null`, and your `Initialize(T)` must handle a `null` base.

## Cross-Version Notes

- **v1.3.0:** this class and the `AddBehavior` / `AddModel` / `OnCampaignStart` / `InitializeGameStarter` registration shape are already stable and match this page. The `IGameStarter` contract is unchanged.
- **v1.4.5:** `GetModel<T>()` changed from returning `default(T)` to explicitly returning `null` when not found, with the same behavior for mod callers; the rest — `AddBehavior` / `AddModel` / `AddModel<T>` / `RemoveBehavior` / menu-conversation registration — are unchanged. Note: this class has **no** member named `InitializeCampaign` or `OnNewGameDataEnded` — the only entry point for campaign registration is the `MBSubModuleBase` hooks above.

## Dependencies

- Upstream: [MBSubModuleBase](../../core/MBSubModuleBase) receives `IGameStarter` in `OnGameStart` and casts it to `CampaignGameStarter`.
- Downstream: [CampaignBehaviorBase](../CampaignBehaviorBase) enters the behavior manager; [GameModels](../../campaign/GameModels) enters the model collection.
- Lifecycle: only add behaviors/models inside the registration window the starter opens; replacing them at runtime causes duplicate instances or empty models.

## See Also

- [CampaignBehaviorBase](../CampaignBehaviorBase) — the base class you `AddBehavior`; must implement `RegisterEvents` / `SyncData`
- [GameModels](../../campaign/GameModels) — the runtime manager the registered models ultimately aggregate into (`Campaign.Current.Models`)
- [Campaign](../../campaign/Campaign) — the truly long-lived campaign world; the starter is created by it during init
- [API index](../../) — types not separately documented, such as `MBSubModuleBase` (where the `OnCampaignStart` / `InitializeGameStarter` hooks are declared, the entry of this page's registration pattern), are indexed here
