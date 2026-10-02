---
title: "CampaignGameStarter"
description: "The registration console for campaign-time extension points: from MBSubModuleBase.OnGameStart you get it and can inject Behaviors, game models, map menus and conversation flows into the Campaign being built."
---
# CampaignGameStarter

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** implements `TaleWorlds.Core.IGameStarter`
**Source:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs` (declared at line 11)

## Overview

`CampaignGameStarter` is the campaign layer's **dependency-injection container builder**. It is created when campaign initialisation begins and exposes a set of "Add…" methods: add a Behavior, add a game model, add a map menu, add a conversation flow. All game content — base game and mods alike — registers through this one object, so the order of your calls determines who can see whom.

Its place in the stack is unambiguous: [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnGameStart(Game game, IGameStarter gameStarterObject)` hands mods an `IGameStarter` that *is* this `CampaignGameStarter` in campaign mode (multiplayer has a different implementation). Whatever you register here is visible to modules loaded later in the same startup — **module load order is registration order, which is also visibility order**. If your Behavior must run before someone else's, do not rely on that; do the actual work in your own `OnCampaignStart` rather than at registration time.

It also holds two constructor parameters, `GameMenuManager` and `ConversationManager`. Menus and conversations both exist during campaign creation, so menus can be registered while the campaign is being assembled rather than waiting for `Campaign.Current` to become available.

## Mental Model

**The core model: this is a write-only builder whose only correct usage window is `OnGameStart`.**

1. **Test the type before registering.** `gameStarterObject is CampaignGameStarter starter` is the standard form. The parameter is typed `IGameStarter` because singleplayer, multiplayer and custom game modes each have their own implementation; calling `AddBehavior` without the check throws `InvalidCastException` in the other modes.
2. **Registration is not activation.** `AddBehavior(b)` only puts the instance in a list; the engine later calls its `RegisterEvents()`. Calling `Campaign.Current.GetCampaignBehavior<MyBehavior>()` right after `AddBehavior` will usually return null.
3. **Menus are added while the campaign is being built.** `AddGameMenu` / `AddWaitGameMenu` / `AddGameMenuOption` rely on the injected `GameMenuManager`, which is ready at that point. Waiting until `OnCampaignStart` to add a menu usually still works, but conversation flows (`AddDialogFlow`) need to be earlier.
4. **Model replacement follows registration order.** `AddModel(GameModel)` registers, `GetModel<T>()` retrieves. Registering several instances of one generic type means the later one overrides the earlier, so replacing `Campaign.Models.Xxx` means overriding whatever somebody else already fixed — probe with `GetModel<T>()` first.
5. **`UnregisterNonReadyObjects()` is the closing hook.** At the end of startup it removes objects that never became ready. An object of yours still "not ready" at that moment is removed silently, with no exception.

The three most common mistakes: registering outside `OnGameStart` (the Behavior list is frozen by then); executing logic inside `AddBehavior` instead of waiting for `RegisterEvents`; and assuming `Campaign.Current != null` during registration, which is usually false.

## When to Use / When Not To

- **Use**: in `MBSubModuleBase.OnGameStart` to register Behaviors, game models, map menus, wait menus, menu options and conversation flows.
- **Use**: to remove Behaviors at runtime (`RemoveBehaviors<T>()` / `RemoveBehavior<T>(T)`), so a whole feature can be switched off by config.
- **Use**: `GetPresumedGameMenu(string stringId)` to obtain the menu registered by `AddWaitGameMenu` so you can append options to it.
- **Don't**: call `AddBehavior` in `OnCampaignStart` or later. The campaign is already assembled and a newly added Behavior never receives `RegisterEvents`.
- **Don't**: call this class's methods in non-campaign modes (lobby, editor) without a type check.

## Member Guide

### Behaviors and models

| Member | What it is for, side effects, timing |
| --- | --- |
| `void AddBehavior(CampaignBehaviorBase campaignBehavior)` | Registers a Behavior instance. **The entry point for the vast majority of mod logic.** The engine then calls its `RegisterEvents()`. Registering the same type twice yields two instances, both visible to `GetCampaignBehaviors<T>()`. |
| `void RemoveBehaviors<T>() where T : CampaignBehaviorBase` | Removes every Behavior of a type. Used to disable a whole mod feature. |
| `bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase` | Removes one instance; returns whether it was actually removed. |
| `T GetModel<T>() where T : GameModel` | Retrieves a registered model; null when absent. Use it to check whether someone already replaced a model. |
| `void AddModel(GameModel gameModel)` | Registers a game model (the source of `Campaign.Models.Xxx`). |
| `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | Registers a model wrapper carrying defaults. |

### Menus

| Member | What it is for, side effects, timing |
| --- | --- |
| `void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)` | Registers a persistent map menu. `initDelegate` runs when the menu opens; its parameter is `MenuCallbackArgs`. |
| `void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = None, object relatedObject = null)` | Registers a wait-style menu (party waiting, siege waiting). `condition` decides visibility, `consequence` runs on selection, `tick` runs on every advance. |
| `void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)` | Adds an option to an existing menu; a false `condition` greys it out. **`GameMenu.AddOption` is `internal` in 1.4.7 and unreachable from mod code — this is the public path.** |
| `GameMenu GetPresumedGameMenu(string stringId)` | Retrieves (or presumes/creates) a menu instance. Internally it calls `GetGameMenu` first and creates one if missing, so it doubles as "ensure this menu exists". |

### Conversation

| Member | What it is for, side effects, timing |
| --- | --- |
| `void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | Registers a conversation flow. The `DialogFlow` is built from the conversation manager side. |
| `ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null, OnPersuasionOptionDelegate persuasionOptionDelegate = null)` | Adds a player line and returns the sentence so you can append branches to it. |
| `ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, OnClickableConditionDelegate = null)` | A player line that may reappear every conversation. |
| `ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, OnClickableConditionDelegate = null)` | Adds an NPC line. |
| `ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", OnClickableConditionDelegate = null)` | An NPC line carrying idle actions, facial animation and reactions. |
| `ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, OnConditionDelegate, OnConsequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, OnClickableConditionDelegate = null)` | Multi-speaker line, naming the current and next speaker indices. |

### Lifecycle and construction

| Member | What it is for, side effects, timing |
| --- | --- |
| `CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)` | Constructor. Injected by the engine; mods do not construct it. |
| `void UnregisterNonReadyObjects()` | Called at the end of startup to remove objects that never became ready. Overrides **must call `base`** or the engine's own cleanup breaks. |

## Examples

### Example 1: The standard SubModule registration hook

Type check plus register-only — those are the two rules for this callback.

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

// VisitCounterBehavior below is the reader's own type, not game API
public class VisitCounterBehavior : CampaignBehaviorBase
{
    public VisitCounterBehavior() : base("MyMod.VisitCounter") { }
    public override void RegisterEvents() { }
    public override void SyncData(IDataStore dataStore) { }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        if (gameStarterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new VisitCounterBehavior());   // register only, do not execute
        }
    }
}
```

### Example 2: Registering a custom map menu and its option

`OnInitDelegate` takes `MenuCallbackArgs`, and the menu id comes from `args.MenuContext.GameMenu.StringId`. Menu options must be added in the startup callback — `AddGameMenuOption` needs the `CampaignGameStarter` instance, which does not exist at menu-init time.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;

public class MenuBehavior : CampaignBehaviorBase
{
    public MenuBehavior() : base("MyMod.Menu") { }

    public override void RegisterEvents()
    {
        CampaignEvents.OnAfterSessionLaunchedEvent.AddNonSerializedListener(this, OnStarterReady);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("MyMod.Menu.Noop", ref _noop);
    }

    private int _noop;

    private void OnStarterReady(CampaignGameStarter starter)
    {
        // Both the menu and its option are registered in the startup callback
        starter.AddGameMenu("my_mod_menu", "My Menu", OnMenuInitialize);
        starter.AddGameMenuOption("my_mod_menu", "my_option", "My Option",
                                   OnCondition, OnConsequence);
    }

    private void OnMenuInitialize(MenuCallbackArgs args)
    {
        // initDelegate receives a MenuCallbackArgs; the menu id goes through MenuContext
        if (args.MenuContext.GameMenu.StringId != "my_mod_menu") return;
    }

    private bool OnCondition(MenuCallbackArgs args) => true;

    private void OnConsequence(MenuCallbackArgs args)
    {
        // Option was chosen
    }
}
```

### Example 3: Gating a feature by config and probing models

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

// DiplomacyBehavior and MyCustomModel are both the reader's own types, not game API
public class DiplomacyBehavior : CampaignBehaviorBase
{
    public DiplomacyBehavior() : base("MyMod.Diplomacy") { }
    public override void RegisterEvents() { }
    public override void SyncData(IDataStore dataStore) { }
}

protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);

    if (gameStarterObject is not CampaignGameStarter starter)
    {
        return;   // non-campaign mode (lobby / editor)
    }

    if (MyConfig.Enabled)
    {
        starter.AddBehavior(new DiplomacyBehavior());

        // Probe first so you do not clobber somebody else's model
        if (starter.GetModel<MyCustomModel>() == null)
        {
            starter.AddModel(new MyCustomModel());
        }
    }
    else
    {
        // Simply not registering works; this removes already-registered ones by type
        starter.RemoveBehaviors<DiplomacyBehavior>();
    }
}
```

## Risks and Boundaries

- **`Campaign.Current` is usually null during registration.** `OnGameStart` runs while the campaign object is being assembled, so reading or writing `Campaign.Current` there yields null or a half-built object. Move world access to `OnCampaignStart` or later.
- **The registration window closes.** `AddBehavior` only works during startup. Calling it on a running campaign means the Behavior never receives `RegisterEvents()`, so it fails **silently** — no exception, logic simply never runs. This is the number-one cause of "I registered it and nothing happened".
- **Module order is registration order is visibility order.** Later models override earlier ones. Overriding a base-game model requires registering later, which also means overriding whatever another mod already fixed. Probe with `GetModel<T>()`.
- **Overriding `UnregisterNonReadyObjects()` requires calling `base`.** It is the last hook of the startup phase; skipping it leaves unready objects behind.
- **Non-campaign modes.** `IGameStarter` is not a `CampaignGameStarter` in multiplayer. Without the `is` check you get `InvalidCastException`.
- **Conversation registration depends on `ConversationManager`.** The constructor injects it, but `AddDialogFlow` uses it internally, so calling too late means acting on an uninitialised state.
- **Menu IDs are global strings.** Two mods using the same `menuId` overwrite each other; the symptom is options that appear and disappear.
- **Single-thread.** All registration calls belong on the main thread inside startup; never invoke them from an async load callback.

## Dependencies

- Upstream / providers:
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnGameStart(Game, IGameStarter)` hands this class to mods.
  - `Game` drives the whole startup assembly through `IGameStarter`. It has no English page — the Chinese [zh `Game`](../../../../zh/api/core-extra/Game) is the only one on disk.
- Peers / downstream:
  - [CampaignBehaviorBase](../CampaignBehaviorBase) is the type `AddBehavior` accepts.
  - [Campaign](../Campaign) receives the registrations and exposes `GetCampaignBehavior<T>()`.
  - [CampaignEvents](../CampaignEvents)'s `OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent` offer a second, campaign-side registration window.
  - The battle layer has a parallel mission-level GameStarter in the `mission-ext` bucket; in-mission extension points use that, not this class.

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Related: [Campaign](../Campaign) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignEvents](../CampaignEvents) · [MBSubModuleBase](../../core/MBSubModuleBase) · zh [Game](../../../../zh/api/core-extra/Game) (no English page; see [the gap list](../../../../GAPS))