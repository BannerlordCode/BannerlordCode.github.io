---
title: "CampaignGameStarter"
description: "The campaign-side implementation of IGameStarter: two list-backed containers plus a menu/dialog registration facade. The two AddModel overloads differ in meaning, AddBehavior does not call RegisterEvents, and RemoveBehaviors<T> only edits the list."
---

# CampaignGameStarter

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** implements [IGameStarter](../../core-extra/IGameStarter) (which declares only the two `AddModel` overloads and `Models`); derives from nothing
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` (178 lines total)

## Overview

`CampaignGameStarter` is the only registration entry point available on the **campaign** side. The parameter you receive in `MBSubModuleBase.InitializeGameStarter(Game game, IGameStarter gameStarterObject)` is this type at runtime — `CampaignGameStarter`, not `BasicGameStarter` (the latter belongs to the mission-side line). It does three things: **collect models, collect behaviors, and register menus and dialogs**.

Internally there are just four fields: two `readonly` manager references (`GameMenuManager` / `ConversationManager`, injected through the constructor) and two `List`s (`_campaignBehaviors`, `_models`). **It is a pure collector** — `AddBehavior` only enqueues, `AddModel` only appends, and all assembly happens later, after campaign initialization.

One interface mismatch is worth internalizing: **`IGameStarter` declares only three members** (`AddModel(GameModel)`, `AddModel<T>(MBGameModel<T>)`, `Models`). The other 15 members on `CampaignGameStarter` — `AddBehavior`, `AddGameMenu`, `AddDialogFlow` and the rest — are **not on the interface**. So inside `InitializeGameStarter`, if your variable's static type is `IGameStarter`, you must cast to `CampaignGameStarter` before calling `AddBehavior`. That is exactly why official code is peppered with `(CampaignGameStarter)gameStarterObject`.

**The two `AddModel` overloads mean completely different things, and this is the single easiest mistake on this page.** The non-generic `AddModel(GameModel gameModel)` has the one-line body `this._models.Add(gameModel);` — **a pure append that never wires up `BaseModel`**. The generic `AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` has three:

```csharp
T model = this.GetModel<T>();
gameModel.Initialize(model);
this._models.Add(gameModel);
```

It first reverse-scans for the current outermost `T`, hands that to the new object's `BaseModel`, then appends. **Only the generic overload can build an override chain.** Something registered through the non-generic overload is still found by `GetModel<T>`, but it has no `BaseModel` of its own and cannot forward downward — so your override silently swallows every earlier mod's change. All thirty-odd lines in the official `SandBoxSubModule.InitializeGameStarter` use the generic form.

## Mental Model

Treat it as **a one-shot collection box for campaign startup**, and locate yourself along four stages: *who constructs it → when you write into it → how the campaign drains it → when it stops mattering.*

**Stage 1 — who constructs it.** The constructor is `public CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)`, both dependencies injected from outside; the class news up neither. That is why the instance you get in `InitializeGameStarter` is fully built and immediately writable.

**Stage 2 — when you write into it.** There is exactly one window: `InitializeGameStarter`. `Campaign.cs:1900` (`base.GameManager.InitializeGameStarter(base.CurrentGame, campaignGameStarter);`) walks every `MBSubModuleBase` in turn. **Registration order equals module load order**, and since overriding is "last write wins", whoever loads last sits outermost on the chain.

**Stage 3 — how the campaign drains it.** Three lines immediately after that call returns (`Campaign.cs:1904-1906`):

```csharp
base.CurrentGame.SetBasicModels(campaignGameStarter.Models);
this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);
CampaignTime.Initialize();
```

**The same `_models` list is handed to two managers** (`SetBasicModels` and `AddGameModelsManager<GameModels>`), which is why mission models and campaign models read one and the same registry. The `_campaignBehaviors` side instead flows into `Campaign`'s internal `CampaignBehaviorManager`, whose `RegisterEvents()` calls `behavior.RegisterEvents()` once per behavior in a single batch. That is precisely why `CampaignGameStarter.AddBehavior` does not need to call `RegisterEvents` itself — the work is deferred and centralized. Contrast the runtime `CampaignBehaviorManager.AddBehavior`, which does `Add` and **immediately** calls `RegisterEvents()`. The two are opposites.

**Stage 4 — when it stops mattering.** `Models` returns `this._models`, an `IEnumerable<GameModel>` view of the internal list — **no defensive copy**. `GameModelsManager`'s constructor does `inputComponents.ToMBList<GameModel>()`, and that instant is the snapshot; adding models after it has no effect on the already-constructed [GameModels](../GameModels). `CampaignBehaviors` likewise hands out a live reference.

**Menu registration follows a "presumed" pattern.** `GetPresumedGameMenu(string stringId)` asks `this._gameMenuManager.GetGameMenu(stringId)` first, and on a null does `new GameMenu(stringId)` plus `AddGameMenu` before returning. So `AddGameMenu`, `AddWaitGameMenu` and `AddGameMenuOption` all mean "get-or-create that menu by id, then add something to it" — **calling the same menuId from several mods is normal and safe**: options accumulate on one `GameMenu` rather than overwriting each other.

**Dialog registration goes through a private relay.** All five public methods — `AddPlayerLine`, `AddRepeatablePlayerLine`, `AddDialogLineWithVariation`, `AddDialogLine`, `AddDialogLineMultiAgent` — build a `ConversationSentence` and hand it to `private ConversationSentence AddDialogLine(ConversationSentence dialogLine)`, which forwards to `this._conversationManager.AddDialogLine(dialogLine)` and **returns the same object** so you can keep chaining onto it. The five differ only in the 8th constructor argument (`1U` / `3U` / `0U`), the 13th (`true` marks a variation line), and the `agentIndex` / `nextAgentIndex` slots.

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `.ctor` | `public CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)` | Both dependencies are injected. It only assigns the two `readonly` fields and **does not initialize the two lists** — field initializers (`= new List<...>()`) do that. Mods normally never construct this class themselves. |
| `Models` | `public IEnumerable<GameModel> Models { get; }` | Body is `return this._models;`. Returns a **live view of the internal list**, not a snapshot. Declared on `IGameStarter`, so it is readable without a cast. It is the sole input fed to both model managers at `Campaign.cs:1904-1905`. |
| `CampaignBehaviors` | `public ICollection<CampaignBehaviorBase> CampaignBehaviors { get; }` | Body is `return this._campaignBehaviors;`, also live. **Not on `IGameStarter`**, so a cast is required. Note the declared type is `ICollection<>`, not `IReadOnlyList<>` — the interface you receive technically permits `Add`/`Remove`, and such writes reach straight into the engine's later initialization. |
| `AddModel(GameModel)` | `public void AddModel(GameModel gameModel)` | The non-generic `IGameStarter` overload. Body is only `this._models.Add(gameModel);` — **a pure append with no `BaseModel` wiring**. Whatever you register this way is found by `GetModel<T>` but cannot forward to the model it shadows. Reach for it only when registering a brand-new model slot rather than an override. |
| `AddModel<T>(MBGameModel<T>)` | `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | The generic `IGameStarter` overload, and **the only way to build an override chain**. Three lines: `GetModel<T>()` reverse-scans for the current outermost `T`, `gameModel.Initialize(model)` plugs it into the new object's `BaseModel`, then `this._models.Add(gameModel)`. Note that **`T` must be the abstract model class itself** (e.g. `AddModel<AgeModel>(new MyAgeModel())`), never your own class name — that is what lets several mods stack. |
| `GetModel<T>` | `public T GetModel<T>() where T : GameModel` | Reverse-scans `_models` and returns the first successful `as T`, or `default(T)` (null for reference types) when nothing matches. **This is a startup-time lookup only**, it is not on `IGameStarter`, and at runtime you should use `Campaign.Current.Models.XxxModel`. |
| `AddBehavior` | `public void AddBehavior(CampaignBehaviorBase campaignBehavior)` | `if (campaignBehavior != null) { this._campaignBehaviors.Add(campaignBehavior); }` — **null-checked, enqueued, and `RegisterEvents` is never called**. Registration is deferred to campaign initialization and run as one batch by `CampaignBehaviorManager.RegisterEvents()`. Passing null is a safe silent no-op. |
| `RemoveBehaviors<T>` | `public void RemoveBehaviors<T>() where T : CampaignBehaviorBase` | `for (int i = this._campaignBehaviors.Count - 1; i >= 0; i--)` backwards, `RemoveAt(i)` on an `is T` match. **Deletes the list entry only — no unsubscribe, no `CampaignEventDispatcher` contact.** It is a startup-phase tool: this is how you pull one of your behaviors back out of the registry after another mod got in. |
| `RemoveBehavior<T>` | `public bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase` | One line, `return this._campaignBehaviors.Remove(behavior);`, removing a single element by **reference equality** and reporting whether anything was removed. Equally unsubscribing-free. The difference from `RemoveBehaviors<T>()` is "all of a type" versus "one instance". |
| `UnregisterNonReadyObjects` | `public void UnregisterNonReadyObjects()` | Two lines: `Game.Current.ObjectManager.UnregisterNonReadyObjects();` then `this._gameMenuManager.UnregisterNonReadyObjects();`. This is the **official way to undo registrations during `InitializeGameStarter`** — call it to cancel your own (or someone else's) model registration. It covers only the object manager and the game menu manager, and **does not touch the behavior list**. |
| `AddGameMenu` | `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = ..., GameMenu.MenuFlags menuFlags = ..., object relatedObject = null)` | `this.GetPresumedGameMenu(menuId).Initialize(new TextObject(menuText, null), initDelegate, overlay, menuFlags, relatedObject);` — get-or-create the menu, then initialize it. `menuText` is a **plain string** wrapped in `new TextObject(menuText, null)`, so for localization you must write the `{=keyId}` prefix yourself. |
| `AddWaitGameMenu` | `public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, ..., float targetWaitHours = 0f, ...)` | Structurally the same as `AddGameMenu`, but its `Initialize` overload additionally takes `condition` / `consequence` / `tick` / `type` / `targetWaitHours` — this is the **waiting-style menu** that advances by hours under a condition. With `targetWaitHours` at 0 the menu will not advance time on its own. |
| `AddGameMenuOption` | `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)` | `GetPresumedGameMenu(menuId).AddOption(...)`. `index = -1` appends; `isLeave` flags a "leave the menu" option; `isRepeatable` lets it be clicked again. Note that the `GameMenu.AddOption` it calls is an **`internal` method** — only types inside the engine assembly can call it, so a mod must go through this facade to add options. |
| `GetPresumedGameMenu` | `public GameMenu GetPresumedGameMenu(string stringId)` | The "presumed (assumed present)" pattern: query `_gameMenuManager.GetGameMenu(stringId)`, and on a null do `new GameMenu(stringId)` plus register. **All three `AddGameMenu*` methods depend on it**, which is why repeated registration under one menuId accumulates rather than overwrites. It is also the standard entry point for appending options to an official menu. |
| `AddDialogFlow` | `public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | Directly `this._conversationManager.AddDialogFlow(dialogFlow, relatedObject);`. This registers a **whole dialog tree**, a level above the five "add a single line" methods. `relatedObject` binds the dialog to a world object (a character, a settlement). |
| `AddDialogLine` | `public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | Builds a `kind = 0U` (ordinary NPC line), `isVariation = false` `ConversationSentence`, registers it, and **returns that sentence** so you can keep decorating it (e.g. `.Variation(...)`). This is the base shape for "insert one plain line of dialogue". |
| `AddDialogLineWithVariation` | `public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", OnClickableConditionDelegate clickableConditionDelegate = null)` | Builds a `kind = 0U` but `isVariation = true` sentence whose body is fixed at `new TextObject("{=!}{VARIATION_TEXT_TAGGED_LINE}", null)` — **it takes no `text` argument**; the real wording goes on afterwards via `.Variation("key", ...)`. The four `idle*` / `reaction*` parameters are passed as null at the corresponding `ConversationSentence` positions in 1.3.0, so setting them buys you nothing. |
| `AddPlayerLine` | `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null, OnPersuasionOptionDelegate persuasionOptionDelegate = null)` | Builds a `kind = 1U` sentence — **this is "something the player can say"**. The extra `persuasionOptionDelegate` lands in the last slot of the `ConversationSentence` constructor and is the hook for persuasion-style options. This is the only method a mod should use to add player choices. |
| `AddRepeatablePlayerLine` | `public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | **Registers two sentences in one call**: the main line with `kind = 3U` (repeatable), plus a second line whose id is `id + "_continue"` with `kind = 1U`, a fixed condition of `ConversationManager.IsThereMultipleRepeatablePages` and a fixed consequence of `ConversationManager.DialogRepeatContinueListing` — i.e. the "there is another page" key. It returns the **main** sentence. Use it when the same conversation repeats over many objects, one page at a time. |
| `AddDialogLineMultiAgent` | `public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | Same `kind = 0U` as `AddDialogLine`, but it **takes a `TextObject` directly instead of a `string`** (no `new TextObject(text, null)` wrap) and adds `agentIndex` / `nextAgentIndex` to say which agent speaks this line and which one takes the next turn. Used for speaker rotation in multi-party conversations. |
| `AddDialogLine` (private) | `private ConversationSentence AddDialogLine(ConversationSentence dialogLine)` | The relay shared by the five public `AddDialogLine*` methods: `this._conversationManager.AddDialogLine(dialogLine); return dialogLine;`. It returns the same object so the caller can keep decorating it. **private — not reachable from outside.** |

## Real Example

Register a batch of behaviors plus one model override — the shape a sandbox module uses:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

        // Behavior: enqueued only; RegisterEvents happens later, batched by campaign init.
        starter.AddBehavior(new AgingCampaignBehavior());

        // Model: the generic overload is mandatory, otherwise BaseModel is never wired
        // and the override chain breaks.
        starter.AddModel<AgeModel>(new SlowAgingModel());
    }
}

// SlowAgingModel has to be declared on the same page: the generic argument is AgeModel
// (the slot being overridden), not SlowAgingModel itself — which is exactly what lets
// several mods stack on each other.
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
        minimumAge = 16;
        maximumAge = 70;
    }
}
```

Appending an option to an official menu — `GetPresumedGameMenu` is the only correct entry point:

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

    starter.AddGameMenuOption(
        "army_manage",
        "my_muster_all",
        "{=myMusterAll}Muster every company",
        conditionDelegate: null,
        consequenceDelegate: this.MusterEverything);
}

private void MusterEverything()
{
    Settlement target = null;
    foreach (Settlement settlement in Campaign.Current.Settlements)
    {
        if (settlement.IsFortification)
        {
            target = settlement;
            break;
        }
    }

    Debug.Print("muster target = " + target.Name, 0);
}
```

`GetPresumedGameMenu("army_manage")` news up an empty `GameMenu` when the id is unknown, and an empty menu never appears in the UI — **only declaring its text and init delegate with `AddGameMenu` gives the option somewhere to live**. The snippet above is therefore only correct if you are sure the official `army_manage` id was already registered.

Adding one line the player can say to a dialog:

```csharp
CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
ConversationSentence line = starter.AddPlayerLine(
    "my_greet",
    "amb_town",
    "close",
    "{=myGreet}Word. Well met.",
    conditionDelegate: null,
    consequenceDelegate: this.OnGreeted);
line.Variation("greet_happy", "{=myGreetHappy}Word! You are well met, friend.");
line.Variation("greet_cold", "{=myGreetCold}Word.");
```

`AddPlayerLine` produces the `kind = 1U` player line, and after the return, `Variation(params object[] list)` attaches several localized variants to one GameText key — that is the official mechanism behind "one line, many wordings". `AddDialogLineWithVariation` is the pre-wired version of the same idea, with the body left blank for you to fill.

## Risks and Boundaries

- **Most members are not on `IGameStarter`.** The interface carries only `AddModel(GameModel)`, `AddModel<T>(MBGameModel<T>)` and `Models`. The other 15 — `AddBehavior`, `AddGameMenu`, `GetModel<T>`, `CampaignBehaviors`, … — **all require casting to `CampaignGameStarter`**. Inside `InitializeGameStarter` the static type is `IGameStarter`, so calling `AddBehavior` directly does not compile.
- **Mixing the two `AddModel` overloads breaks the chain.** The non-generic one only `Add`s; only the generic one calls `Initialize(model)`. Register an override through the non-generic form and it is still found by `GetModel<T>`, but it has no `BaseModel` and cannot see earlier mods' changes — **with no error at all**.
- **`AddModel<T>`'s `T` must be the abstract model class.** `AddModel<AgeModel>(new MyAgeModel())` is right; `AddModel<MyAgeModel>(new MyAgeModel())` fails to compile, because `MBGameModel<T>` constrains `T : GameModel` and the lookup semantics require `T` to be the slot being searched.
- **`AddBehavior` does not call `RegisterEvents`.** The runtime `CampaignBehaviorManager.AddBehavior` does register immediately. Startup code that assumes "the behavior is already registered" runs at the wrong moment.
- **Neither `RemoveBehaviors<T>` nor `RemoveBehavior<T>` unsubscribes.** They only mutate the `_campaignBehaviors` list and **never touch `CampaignEventDispatcher`**. If the behavior already attached handlers via `RegisterEvents()`, deleting the list entry leaves them attached. Real teardown is only available at runtime through `CampaignBehaviorManager.RemoveBehavior<T>()`, which calls `CampaignEventDispatcher.Instance.RemoveListeners(t)`.
- **`UnregisterNonReadyObjects` covers only two chains.** It calls `Game.Current.ObjectManager.UnregisterNonReadyObjects()` and `_gameMenuManager.UnregisterNonReadyObjects()`; it **does not touch the behavior list or `_models`**. To retract a model registration you must go through the `INonReadyObjectHandler` path yourself.
- **`Models` and `CampaignBehaviors` are live references.** `Models` is an `IEnumerable<GameModel>` view; `CampaignBehaviors` is declared as `ICollection<>`, which permits `Add`/`Remove` at the interface level. The engine snapshots `Models` at `Campaign.cs:1904-1905` via `ToMBList<GameModel>()` — **an `AddModel` after that point has no effect on the already-built [GameModels](../GameModels)**.
- **Return types are inconsistent across the dialog methods.** `AddDialogFlow` returns `void`; the other five return `ConversationSentence`. To chain `.Variation(...)` you must use one of those five.
- **`AddDialogLineWithVariation`'s four animation parameters are passed as null in 1.3.0.** `idleActionId`, `idleFaceAnimId`, `reactionId` and `reactionFaceAnimId` exist in the signature, but `CampaignGameStarter.cs` writes fixed nulls into the matching `ConversationSentence` positions. **Do not expect setting them to produce animation.**
- **`AddRepeatablePlayerLine` registers two sentences.** The main line uses the id you pass; the paging line uses `id + "_continue"`. An id collision hands `ConversationManager.AddDialogLine` a duplicate.
- **`AddGameMenuOption` presupposes the menu.** It only calls `AddOption`; it supplies no menu text and no init delegate. Handed an unregistered menuId it will create an empty `GameMenu` with `no menuText`, which the UI will never show.

## Cross-Version Notes

The public surface of `CampaignGameStarter` is highly stable across `bannerlord-1.3.0/`, `bannerlord-1.3.15/`, `bannerlord-1.4.6/`, `bannerlord-1.4.7/` and `bannerlord-1.5.3/`: the two properties `CampaignBehaviors` / `Models`, both `AddModel` overloads, `GetModel<T>`, `AddBehavior`, both `RemoveBehavior*` overloads, `UnregisterNonReadyObjects`, `GetPresumedGameMenu`, the three `AddGameMenu*` methods and the six dialog methods, all with unchanged signatures and visibility.

**What changes is added overloads and added registration categories.** Later versions have introduced further convenience overloads on the menu and dialog methods (more parameters, more scenarios) and new registration facades on `CampaignGameStarter`. The practical rule: **compile once after upgrading**, and if you get a "no overload for method" error, read the new signature rather than assuming it is unchanged.

A more consequential one: **`IGameStarter` itself may gain members.** If a version adds an `AddXxx` to the interface and you implemented your own `IGameStarter` (a few mods do this so they can substitute a starter in tests), you will fail to compile for not implementing the new member. **Prefer casting to `(CampaignGameStarter)gameStarterObject` over implementing the interface** — it costs far less.

Finally, `CampaignGameStarter` and `BasicGameStarter` are different types: the latter lives in `TaleWorlds.MountAndBlade`, serves the mission side, and is another `IGameStarter` implementation. Which one `InitializeGameStarter` actually receives depends on whether a campaign or a mission is booting — **so never hard-code a type assumption; cast, and a failed cast surfaces immediately instead of silently taking the wrong branch.**

## Dependencies

- Constructor injection: [GameMenuManager](../GameMenuManager) and [ConversationManager](../ConversationManager) are this class's only two dependencies; all menu and dialog registration lands through them
- Interface declaration: [IGameStarter](../../core-extra/IGameStarter) promises only three members; the remaining 15 are this class's own campaign-side extensions
- The consumer: [Campaign](../Campaign) takes `Models` (twice) and `CampaignBehaviors` (handing the latter to `CampaignBehaviorManager`) after `InitializeGameStarter` returns
- One of its products: [GameModels](../GameModels) is what `AddGameModelsManager<GameModels>(campaignGameStarter.Models)` produces; its 123 slots are filled from this chain
- The behavior side: [CampaignBehaviorBase](../CampaignBehaviorBase) is the type `AddBehavior` accepts, and [CampaignBehaviorManager](../CampaignBehaviorManager) owns the later `RegisterEvents` and save passes
- The override mechanism: [GameModel](../../core-extra/GameModel) and [MBGameModel](../../core-extra/MBGameModel) are the two ends of the decorator chain that the generic `AddModel<T>` establishes
- Dialog products: [ConversationSentence](../ConversationSentence) and [DialogFlow](../DialogFlow) are the return value and input type of the five `AddDialogLine*` methods
- Module entry point: [MBGameManager](../../mission-ext/MBGameManager)'s `InitializeGameStarter` walks every submodule; see the [module-system architecture page](../../../architecture/module-system)
- Bucket index: [campaign API section](../)