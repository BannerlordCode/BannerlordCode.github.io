---
title: "GameMenuOption"
description: "A single selectable entry inside a campaign game menu. It pairs an OnCondition delegate (visibility/enable state) with an OnConsequence delegate (the action executed when chosen), and is created through CampaignGameStarter.AddGameMenuOption."
---
# GameMenuOption

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuOption`
**Base:** none
**Source:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuOption.cs`

`GameMenuOption` is one clickable line in a campaign game menu (the "town", "encounter", "party" screens, etc.). Each option knows its own text and tooltip, decides whether it is currently visible/enabled through an `OnCondition` delegate, and runs its effect through an `OnConsequence` delegate when the player picks it.

## Overview

`GameMenuOption` is the data + behavior unit that the campaign menu system renders as a selectable row. A [`GameMenu`](../GameMenu/) holds an ordered list of these options (exposed via `GameMenu.MenuOptions`), and the [`GameMenuManager`](../GameMenuManager/) keeps every `GameMenu` registered by string id. Developers almost never `new` a `GameMenuOption` themselves: a campaign behavior calls `CampaignGameStarter.AddGameMenuOption(menuId, optionId, ...)` during initialization, which internally constructs the `GameMenuOption` and stores it on the matching `GameMenu`. At runtime the menu system walks the option list, calls `GetConditionsHold` to refresh each option's enabled/tooltip/leave-type state, and calls `RunConsequence` when the player selects one.

## Mental Model

Think of a `GameMenuOption` as a small closure bound to one menu row: it owns a localized `Text`, a `Tooltip`, and two delegates — `OnCondition` (returns `bool`, also writes back `IsEnabled`, `Tooltip`, `OptionLeaveType`, `OptionQuestData` into the option) and `OnConsequence` (runs the effect). The option is created once at game-start registration time and then *re-evaluated every frame the menu is open*: `GetConditionsHold` is what turns a live `MenuContext` into a concrete visible/enabled state, while `SetEnable` is a manual override you rarely need because `GetConditionsHold` overwrites `IsEnabled` on each pass. The option does not decide *which* menu it belongs to — that is owned by the parent `GameMenu` and the `GameMenuManager` registry.

## When to use

- Register a new menu choice (e.g. "Repair Equipment", "Demand Tribute") by calling `CampaignGameStarter.AddGameMenuOption` from a `CampaignBehavior`/`SubModule` at game-start.
- Inspect or filter the live options of the currently open menu through `MenuContext.GameMenu.MenuOptions` when you need to read `IsEnabled`, `Tooltip`, or `OptionLeaveType`.

## When NOT to use

- Do **not** `new GameMenuOption(...)` directly and expect it to appear in a menu — it must be attached through `GameMenu.AddOption` (done for you by `CampaignGameStarter.AddGameMenuOption`). Construct it manually only for unit tests or offline inspection.
- Do **not** mutate `IsEnabled` to permanently hide an option. The menu re-runs `GetConditionsHold` each tick and overwrites `IsEnabled` from the `OnCondition` delegate — gate visibility inside `OnCondition` instead.
- Do **not** run game-side logic by calling `RunConsequence` from arbitrary code; let the menu system invoke it so `MenuContext.OnConsequence` and the related campaign events fire correctly.

## Dependencies

- [`GameMenu`](../GameMenu/) — the parent menu that owns the ordered `MenuOptions` list an option lives in.
- [`GameMenuManager`](../GameMenuManager/) — the registry that stores every `GameMenu` by id; options are reachable through `Campaign.Current.GameMenuManager`.
- [`MenuContext`](../MenuContext/) — the per-open-menu runtime context passed into `GetConditionsHold` and `RunConsequence`.
- [`MenuCallbackArgs`](../MenuCallbackArgs/) — the args object built inside `GetConditionsHold`/`RunConsequence` that carries `IsEnabled`, `Tooltip`, `OptionLeaveType`, and `OptionQuestData` back out.
- [`TextObject`](../../localization/TextObject/) — the localized text type used for `Text`, `Text2`, and `Tooltip`.

## Risk

- **Crash on null `MenuContext`/`Game`:** `GetConditionsHold` and `RunConsequence` build a `MenuCallbackArgs` from the supplied `menuContext`. Passing `null` throws inside `MenuCallbackArgs` construction. Always pass the live `MenuContext` from the open menu.
- **`OnCondition` overwrites your manual `IsEnabled`:** because `GetConditionsHold` sets `IsEnabled = menuCallbackArgs.IsEnabled` on every evaluation, calling `SetEnable(false)` is silently reverted next tick unless the condition also returns `false`. Gate hiding logic in `OnCondition`.
- **Duplicate `optionId`:** `AddGameMenuOption` keys options by id on the `GameMenu`. Re-registering the same `optionId` on the same menu can reorder or collide with vanilla/other-mod options; prefix ids with your mod name.
- **Save safety:** options themselves are not serialized, but an `OnConsequence` that mutates campaign state should go through the official `*Action.Apply` helpers (e.g. `ChangeRelationAction.Apply`) rather than mutating fields directly, to keep the save clean and event-driven.

## Construction

You normally do not call the constructor directly — `CampaignGameStarter.AddGameMenuOption` does. The public constructor is:

```csharp
public GameMenuOption(
    GameMenu.MenuAndOptionType type,
    string idString,
    TextObject text,
    TextObject text2,
    OnConditionDelegate condition,
    OnConsequenceDelegate consequence,
    bool isLeave = false,
    bool isRepeatable = false,
    object relatedObject = null)
```

The two delegates are also public types on the class:

```csharp
public delegate bool OnConditionDelegate(MenuCallbackArgs args);
public delegate void OnConsequenceDelegate(MenuCallbackArgs args);
```

The `type` argument is a `GameMenu.MenuAndOptionType` value: `RegularMenuOption`, `WaitMenuShowProgressAndHoursOption`, `WaitMenuShowOnlyProgressOption`, or `WaitMenuHideProgressAndHoursOption`. `OptionLeaveType` (a `GameMenuOption.LeaveType` enum, e.g. `Default`, `Leave`, `Continue`, `Trade`, `Manage`) and `OptionQuestData` (an `IssueQuestFlags` `[Flags]` enum) are written back from the `MenuCallbackArgs` during `GetConditionsHold`.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `OptionLeaveType` | `public GameMenuOption.LeaveType OptionLeaveType { get; }` |
| `OptionQuestData` | `public GameMenuOption.IssueQuestFlags OptionQuestData { get; }` |
| `IdString` | `public string IdString { get; }` |
| `Text` | `public TextObject Text { get; }` |
| `Text2` | `public TextObject Text2 { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `IsLeave` | `public bool IsLeave { get; }` |
| `IsRepeatable` | `public bool IsRepeatable { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |

`IdString` uniquely identifies the option on its parent menu. `IsLeave` is `true` for "back"/exit rows. `IsEnabled` and `Tooltip`/`OptionLeaveType`/`OptionQuestData` are produced by the last `GetConditionsHold` pass, not authored at construction.

## Key Methods

### GetConditionsHold
`public bool GetConditionsHold(Game game, MenuContext menuContext)`

**Side effect / when called:** Called by the menu system on every evaluation tick while the menu is open. It builds a `MenuCallbackArgs` from `menuContext` and `Text`, invokes `OnCondition(args)`, then writes the result back onto the option: `IsEnabled = args.IsEnabled`, `Tooltip = args.Tooltip`, `OptionQuestData = args.OptionQuestData`, `OptionLeaveType = args.optionLeaveType`. Returns the `OnCondition` bool (or `true` if `OnCondition` is null). This is the mechanism that refreshes an option's visible/enabled state.

```csharp
// Evaluate one option against the live menu context.
bool canShow = gameMenuOption.GetConditionsHold(Game.Current, menuContext);
```

### RunConsequence
`public void RunConsequence(MenuContext menuContext)`

**Side effect / when called:** Called by the menu system when the player selects the option. It builds a `MenuCallbackArgs` and invokes `OnConsequence(args)` (if set), then calls `menuContext.OnConsequence(this)` so the `GameMenuCallbackManager` and campaign events fire. Do not call this from your own code outside the menu flow.

```csharp
// Normal menu flow invokes this; only shown to illustrate the call.
gameMenuOption.RunConsequence(menuContext);
```

### SetEnable
`public void SetEnable(bool isEnable)`

**Side effect / when called:** Directly assigns `IsEnabled`. Useful for one-off UI overrides, but note that the next `GetConditionsHold` pass overwrites `IsEnabled` from `OnCondition`. Gate permanent hiding inside `OnCondition` instead.

```csharp
// Manual override — reverted on the next condition pass unless OnCondition also hides it.
gameMenuOption.SetEnable(false);
```

### OnConditionDelegate
`public delegate bool OnConditionDelegate(MenuCallbackArgs args)`

The predicate evaluated by `GetConditionsHold`. Return `true`/`false` for visibility, and use the `args` to set `IsEnabled`, `Tooltip`, `OptionLeaveType`, and `OptionQuestData`.

### OnConsequenceDelegate
`public delegate void OnConsequenceDelegate(MenuCallbackArgs args)`

The action executed by `RunConsequence` when the option is chosen. Perform campaign mutations here (prefer `*Action.Apply` helpers over direct field edits).

## Examples

### Registering an option (how a GameMenuOption is built)

`AddGameMenuOption` lives on `CampaignGameStarter`. Internally it resolves the target `GameMenu` (creating/looking it up in `Campaign.Current.GameMenuManager`) and calls `GameMenu.AddOption`, which constructs the `GameMenuOption` and appends it to `MenuOptions`.

```csharp
// Inside a CampaignBehavior (or SubModule) during game-start initialization.
protected override void InitializeGameStarter(CampaignGameStarter starter)
{
    starter.AddGameMenuOption(
        "town",                              // menuId:   StringId of the target GameMenu
        "my_mod_repair_equipment",           // optionId: unique id (prefix with your mod)
        "{=MyModRepair}Repair Equipment",    // optionText: localized string id
        MyOptionOnCondition,                 // GameMenuOption.OnConditionDelegate
        MyOptionOnConsequence,               // GameMenuOption.OnConsequenceDelegate
        isLeave: false,
        isRepeatable: true);
}

private bool MyOptionOnCondition(MenuCallbackArgs args)
{
    args.optionLeaveType = GameMenuOption.LeaveType.Default;
    args.IsEnabled = Hero.MainHero.IsHealthy;   // drives IsEnabled + visibility
    return Hero.MainHero.IsHealthy;
}

private void MyOptionOnConsequence(MenuCallbackArgs args)
{
    // Player chose the option: run the effect here.
}
```

### Reading and running options at runtime

Acquire live options from the open menu via `MenuContext.GameMenu.MenuOptions`, then use `GetConditionsHold` to refresh state and `RunConsequence` only through the normal menu flow.

```csharp
// While a game menu is open, inspect its options.
MenuContext menuContext = Campaign.Current.CurrentMenuContext;
GameMenu currentMenu = menuContext.GameMenu;

foreach (GameMenuOption option in currentMenu.MenuOptions)
{
    // GetConditionsHold refreshes IsEnabled / Tooltip / OptionLeaveType
    // from the option's OnCondition delegate.
    bool canShow = option.GetConditionsHold(Game.Current, menuContext);

    if (!canShow || !option.IsEnabled)
    {
        continue; // skip disabled rows
    }

    // In real code, let the menu system call RunConsequence when the player clicks.
    // option.RunConsequence(menuContext);
}
```

## See Also

- [↑ Parent](../)
- [↔ Siblings](../GameMenu/), [../GameMenuManager/](../GameMenuManager/), [../MenuContext/](../MenuContext/), [../MenuCallbackArgs/](../MenuCallbackArgs/)
