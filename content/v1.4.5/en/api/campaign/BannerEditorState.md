---
title: "BannerEditorState"
description: "The GameState for the banner editor screen: a handler slot, an end-of-session callback, and two convenience accessors for the player's clan and character. Nothing inside 1.4.5 CampaignSystem constructs it, and IBannerEditorStateHandler is an empty interface."
---

# BannerEditorState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BannerEditorState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs`

## Overview

`BannerEditorState` is the **GameState payload of the banner editor screen**. All of its effective content across 50 source lines is four things: an `IBannerEditorStateHandler` slot, an `Action` end-of-session callback, two convenience getters (the player's clan and the player's character), and the overridden `IsMenuState => true`.

```csharp
protected override void OnFinalize()
{
    base.OnFinalize();
    _onEndAction?.Invoke();
}
```

It derives from [GameState](../../core-extra/GameState) and its lifetime is managed by the static [GameStateManager](../../core-extra/GameStateManager). Compared with its siblings [BarberState](../BarberState), [CraftingState](../CraftingState), [InventoryState](../InventoryState), [PartyState](../PartyState), and [MapState](../MapState), it carries exactly one extra capability: **a callback on pop**. That makes the "open a screen, let the user work, close the screen, notify me" one-shot round trip, which is an extremely common shape in mod code.

In the architecture it carries the **"one-shot round-trip screen plus close notification"** slot.

Two facts have to be stated plainly. **Nothing in the 1.4.5 CampaignSystem source tree ever calls `new BannerEditorState(...)` or `CreateState<BannerEditorState>()`.** And `IBannerEditorStateHandler` **is an empty interface** — outside this class holding it, the whole tree contains no implementation at all. The type is therefore a pure extension point reserved for the UI layer.

## Mental Model

Think of it as **the envelope for a one-shot round-trip screen**.

- **The call order is: construct, set Handler, push, user works, pop, callback fires from `OnFinalize`.** `_onEndAction` is invoked via `?.Invoke()` inside `OnFinalize`, so it **fires exactly once, and after the state is already dead**. Reading this state's members inside that callback is unsafe, because `HandleFinalize()` (`TaleWorlds.Core/GameState.cs:89-98`) has already set `_listeners` and `GameStateManager` to null.
- **Which constructor you use decides whether the callback exists.** `public BannerEditorState()` never writes `_onEndAction`, so it stays null and the `?.` short-circuits. Only `public BannerEditorState(Action endAction)` stores it. **Taking the no-argument path means you never get an end callback.**
- **`Handler` is the only member that is both readable and writable.** Public get *and* set, so it can still be reassigned after the push. Contrast this with `Filter` on [BarberState](../BarberState), which is `private set`. Its type `IBannerEditorStateHandler` is an **empty interface**, so today it is purely a "hang an external object here" handle — to actually communicate you declare your own interface in the mod and point `Handler` at an implementation (or keep your own object field alongside).
- **`GetClan()` and `GetCharacter()` are hard-coded conveniences.** They return `Clan.PlayerClan` and `CharacterObject.PlayerCharacter` respectively, and **take no arguments**. That means this state can only edit the player's own clan banner and the player character — **it cannot be used to edit an NPC's banner.** That is not a defect; it is what this screen is for.
- **`Level` comes from the base class.** [GameState](../../core-extra/GameState) exposes `public int Level`, and `PushState(gameState, level)` uses it to place the state on the stack. A banner editor should use a high level (50 is a common choice) so a popping map screen cannot take it down with it.
- **`IsMenuState => true`** lets the menu music keep playing, exactly as on [BarberState](../BarberState).

### The real boundary of the two convenience accessors

| Method | Returns | Boundary |
| --- | --- | --- |
| `GetClan()` | `Clan.PlayerClan` | **The player must have a clan.** While in mercenary service or without a clan the returned object means something different; do not assume it is "the kingdom the player rules". |
| `GetCharacter()` | `CharacterObject.PlayerCharacter` | Always the current player character. Takes no argument. |

## How to use

**How to obtain it.** **It is a `GameState`, so you push it, not call it.** Create it with the hero/banner data and hand it to `GameStateManager.CreateState<BannerEditorState>()`; the manager owns its `OnFinalize` lifetime.

```csharp
var state = new BannerEditorState(hero, equipment);
// hand it to the state manager; it drives OnTick / OnFinalize
GameStateManager.Current.CreateState<BannerEditorState>();
```

**The most common pitfall.** **`_onEndAction` fires while the state is already half-dead.** `GameState.HandleFinalize()` nulls `_listeners`, and `GameStateManager` does so **before** calling it.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Handler` | `public IBannerEditorStateHandler Handler { get; set; }` | The external-object slot. **Public get and set, still writable after the push** — that is the key difference from `Filter` on [BarberState](../BarberState). Its type `IBannerEditorStateHandler` is an **empty interface** in 1.4.5 (`IBannerEditorStateHandler.cs` is three lines: a namespace, an interface declaration, braces), so it currently carries no callable members and no implementation exists anywhere in the tree. |
| `IsMenuState` | `public override bool IsMenuState => true` | Overrides [GameState](../../core-extra/GameState). True means this is a menu-type state and menu music may keep playing. **It has no side-effect code**, but changing the value directly alters the screen's audio behaviour. |
| `BannerEditorState()` | `public BannerEditorState()` | The empty constructor. `_onEndAction` and `Handler` both stay null, so the `?.` inside `OnFinalize` short-circuits. This is the path taken by the no-argument `CreateState<BannerEditorState>()` overload. |
| `BannerEditorState(Action endAction)` | `public BannerEditorState(Action endAction)` | The real constructor; stores `endAction` into `_onEndAction`. **`GameStateManager.CreateState<T>(params object[])` routes to this one** when you pass a single `Action`, because internally it calls `Activator.CreateInstance(typeof(T), parameters)`. |
| `GetClan()` | `public Clan GetClan()` | Convenience method hard-coded to return `Clan.PlayerClan`. **It does not null-check**, so it returns null whenever `Clan.PlayerClan` is null. |
| `GetCharacter()` | `public CharacterObject GetCharacter()` | Convenience method hard-coded to return `CharacterObject.PlayerCharacter`. Equally without a null check. |
| `OnFinalize()` | `protected override void OnFinalize()` | **The only lifecycle override.** Calls `base.OnFinalize()` then `_onEndAction?.Invoke()`. It is invoked by the base `HandleFinalize()` **after `_listeners` and `GameStateManager` have been set to null**, so reading base-class members inside your callback is dangerous. |

## Examples

Open a round-trip editor and get notified on close, shaped after the state creation in `InventoryScreenHelper.cs:190`:

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void OpenBannerEditor(Action onClosed)
{
    if (Game.Current == null || Campaign.Current == null)
    {
        return;
    }

    BannerEditorState state = Game.Current.GameStateManager.CreateState<BannerEditorState>(onClosed);
    state.Handler = new MyBannerEditorHandler();
    Game.Current.GameStateManager.PushState(state, 50);
}
```

Implement a handler and read the current editing target while the screen is alive; `GetClan` and `GetCharacter` are pure read points:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public class MyBannerEditorHandler : IBannerEditorStateHandler
{
    public string LastSeenClanName { get; private set; }

    public void OnEditorOpened(BannerEditorState state)
    {
        Clan playerClan = state.GetClan();
        if (playerClan != null)
        {
            LastSeenClanName = playerClan.Name.ToString();
        }

        CharacterObject playerCharacter = state.GetCharacter();
        Debug.Print("editing clan=" + LastSeenClanName + " char=" + playerCharacter.Name, 0);
    }
}
```

Check whether the session is still alive with `GameStateManager.LastOrDefault<T>()`, which finds the most recent state of that type on the stack:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static bool IsBannerEditorOpen()
{
    if (Game.Current == null)
    {
        return false;
    }

    BannerEditorState active = Game.Current.GameStateManager.LastOrDefault<BannerEditorState>();
    if (active == null)
    {
        return false;
    }

    Debug.Print("handler attached = " + (active.Handler != null), 0);
    return active.Handler != null;
}
```

Close the editor deliberately; `PopState` fires `OnFinalize`, which invokes your `_onEndAction`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void CloseBannerEditor()
{
    if (Game.Current == null)
    {
        return;
    }

    if (Game.Current.GameStateManager.LastOrDefault<BannerEditorState>() != null)
    {
        Game.Current.GameStateManager.PopState(50);
    }
}
```

## Risks and crash boundaries

- **`_onEndAction` fires while the state is already half-dead.** `GameState.HandleFinalize()` (`GameState.cs:89-98`) nulls `_listeners` and `GameStateManager` **before** calling `OnFinalize()`. Touching `Predecessor`, `IsActive`, or `Listeners` inside the callback throws.
- **The no-argument constructor means no end callback.** `_onEndAction` stays null and `?.Invoke()` short-circuits. Use `BannerEditorState(Action)` if you want to be notified.
- **`Handler`'s type is an empty interface.** In 1.4.5 `IBannerEditorStateHandler` has no members and no implementer. To use it for communication you must declare a member-carrying implementation yourself; pushing a state whose handler nobody consumes raises no error and simply produces no interaction.
- **`GetClan` and `GetCharacter` neither null-check nor take arguments.** They return null when `Clan.PlayerClan` or `CharacterObject.PlayerCharacter` is null, and **this state serves the player only** — editing an NPC banner needs a different state.
- **Pick the right `level` for `PushState`.** A banner editor pushed at a low level can be popped along with map-screen cleanup. The `InventoryScreenHelper` family uses high levels; do the same here.
- **`CreateState<T>(params object[])` matches on constructor signature.** Passing a different argument count (for example the state plus an extra value) finds no matching constructor and throws rather than ignoring the extras.
- **There is no internal constructor call anywhere.** No `new BannerEditorState(...)` and no `CreateState<BannerEditorState>()` exist in the 1.4.5 CampaignSystem. **A mod must supply its own trigger.**
- **`Handler` remains writable after the push.** That is what separates it from `Filter` on [BarberState](../BarberState), and it also means an external caller may swap the handler out mid-session.
- **Do not cache this state.** After the pop, `GameStateManager` is null and the object is garbage.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BannerEditorState.cs` is a 50-line original-source file. Four things to check across versions: whether both constructors survive (the parameterless one is a hard requirement of the no-argument `CreateState<T>()` overload), whether `Handler` is still public get + set, whether `_onEndAction` is still invoked from `OnFinalize` through `?.Invoke()`, and whether `GetClan` / `GetCharacter` still hard-code the player objects. Also note that `IBannerEditorStateHandler` is an empty interface — if some version gives it members, those members become the real version-sensitive contract of this type.

## Dependencies

- Base class: [GameState](../../core-extra/GameState) supplies `Level`, `IsActive`, `Predecessor`, `RegisterListener`, and the `HandleInitialize` / `HandleFinalize` / `HandleActivate` lifecycle that this class's `OnFinalize()` hooks into
- Stack manager: `CreateState<T>(params object[])`, `PushState(gameState, level)`, `PopState(level)`, and `LastOrDefault<T>` on [GameStateManager](../../core-extra/GameStateManager) are the only landing paths for this type
- Handler contract: `IBannerEditorStateHandler` in the same folder, an empty interface with no implementation anywhere in 1.4.5
- Editing target source: `GetClan()` returns `PlayerClan` from [Clan](../Clan) and `GetCharacter()` returns `PlayerCharacter` from [CharacterObject](../CharacterObject)
- Callback delegate: `System.Action`, triggered by `OnFinalize()`
- Sibling GameStates: [BarberState](../BarberState), [CraftingState](../CraftingState), [InventoryState](../InventoryState), [PartyState](../PartyState), and [MapState](../MapState) are other instances of the same pattern
- Bucket index: [campaign API section](../)
