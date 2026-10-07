---
title: "CharacterCreationStageViewBase"
description: "The abstract stage view every character-creation screen inherits from — it wraps the screen's injected delegates as named methods, supplies a shared camera position, and owns the escape-menu open/close toggle that every stage must implement."
---

# CharacterCreationStageViewBase

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**Base:** `TaleWorlds.CampaignSystem.CharacterCreationContent.ICharacterCreationStageListener`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs`

## Overview

Every character-creation stage is rendered by a subclass of this, and the subclass is instantiated reflectively by [CharacterCreationScreen](../CharacterCreationScreen) with seven delegates the screen builds from the `CharacterCreationManager`. This base class does exactly one thing with them: it stores them in `protected readonly` fields and re-exposes them as ordinary named methods, so a derived view can say `GoToIndex(3)` instead of `_goToIndexAction.Invoke(3)`.

Around that it adds a shared camera position constant, the escape-menu toggle, and the finalize plumbing. Five members are abstract — `GetLayers`, `NextStage`, `PreviousStage`, `GetVirtualStageCount`, `LoadEscapeMenuMovie`, `ReleaseEscapeMenuMovie` — so a derived view must supply the layer set, the two navigation steps, a stage count, and the two halves of the escape-menu movie lifecycle.

## Mental Model

**The constructor argument order is the contract.** The protected constructor takes, in sequence: `affirmativeAction`, `negativeAction`, `refreshAction`, `getCurrentStageIndexAction`, `getTotalStageCountAction`, `getFurthestIndexAction`, `goToIndexAction`. It assigns each to a field. Note that two of the injected delegates are *swapped* relative to what you might expect: `_getTotalStageCountAction` receives what the screen passed as `getCurrentStageIndexAction`'s neighbour, and the screen itself passes `GetIndexOfCurrentStage` into the fifth position. Read the screen's `OnStageCreated` call rather than guessing — the field names in this class are the authority on which field holds which.

**The methods are thin wrappers with a real purpose: they keep the delegate invocation out of derived classes.** `OnRefresh` (protected) calls `_refreshAction.Invoke()`. `GoToIndex(int index)` (public virtual) calls `_goToIndexAction.Invoke(index)`. Because `GoToIndex` is `virtual` while `OnRefresh` is not, a derived view can intercept navigation but must not break refresh.

**The escape menu is fully implemented here** and is the most reusable thing in the class. `HandleEscapeMenu(view, screenLayer)` tests `screenLayer.Input.IsHotKeyReleased("ToggleEscapeMenu")` and, if the hotkey fired, calls either `OpenEscapeMenu` or `RemoveEscapeMenu` depending on the private `_isEscapeOpen` flag. Open calls `view.LoadEscapeMenuMovie()` and sets the flag; remove calls `view.ReleaseEscapeMenuMovie()` and clears it. Both take the `view` as a parameter rather than using `this`, which is unusual and worth noting — it means the base can drive a *different* view instance's movie lifecycle, and a derived view must tolerate that.

`GetEscapeMenuItems(view)` is concrete, not abstract, and builds a seven-item `List<EscapeMenuItemVM>`: Resume (enabled), Campaign Options / Options / Save / Save As / Load / Save And Exit (all disabled with a shared `GameTexts.FindText("str_pause_menu_disabled_hint", "CharacterCreation")` explanation), and Exit to Main Menu. Only Resume and Exit to Main Menu are enabled — the rest are hard-disabled because character creation has no campaign yet. Exit to Main Menu does the most interesting thing: it calls `RemoveEscapeMenu(view)`, then `view.OnFinalize()`, then `MBGameManager.EndGame()`. Calling `view.OnFinalize()` is a **protected** member being invoked from within the base class on another instance, which is legal only because the access is through the base type.

**`_cameraPosition` is a `protected readonly Vec3(6.45f, 4.35f, 1.6f, -1f)`** — a single shared camera setup for the whole flow. In the 1.4.5 tree it is read by exactly three derived views (`CharacterCreationNarrativeStageView`, `CharacterCreationOptionsStageView`, `CharacterCreationReviewStageView`), each passing it to `BodyGeneratorView.InitCamera`.

**`GetVirtualStageCount` has zero call sites.** It is declared `public abstract`, overridden by all seven shipped views, and called from nowhere in the 1.4.5 tree. That is a real finding, not an inference: whatever consumed it was either removed or lives outside the shipped assemblies. Do not build on it expecting it to be consulted, and do not invent behaviour for it.

The interface implementation is the usual explicit pattern: `void ICharacterCreationStageListener.OnStageFinalize()` forwards to the `protected virtual OnFinalize()`, which defaults to empty.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetLayers` | `public abstract IEnumerable<ScreenLayer> GetLayers()` | **Mandatory.** Returns the screen layers this stage view owns. [CharacterCreationScreen](../CharacterCreationScreen) calls it on every refresh and adds each layer to the screen, so returning the wrong set is how a stage ends up invisible or double-added. |
| `NextStage` | `public abstract void NextStage()` | **Mandatory.** Advances the flow. Derived views normally delegate to the `_affirmativeAction` control, but the base deliberately does not force that — the escape menu's Exit path, for instance, tears the stage down rather than advancing. |
| `PreviousStage` | `public abstract void PreviousStage()` | **Mandatory.** Goes back a stage. As with `NextStage`, the base supplies no default and no backing delegate call, so a view that forgets to wire it leaves the Previous button dead. |
| `GetVirtualStageCount` | `public abstract int GetVirtualStageCount()` | **Mandatory, and has zero call sites in the 1.4.5 tree.** All seven shipped views override it, but nothing in the shipped assemblies invokes it. Implement it to satisfy the contract; do not assume anything reads the value. |
| `LoadEscapeMenuMovie` | `public abstract void LoadEscapeMenuMovie()` | **Mandatory.** Called by the base's `OpenEscapeMenu` when the toggle hotkey opens the menu. The name says "movie" — this is the pause-menu background playback, not a UI construction. |
| `ReleaseEscapeMenuMovie` | `public abstract void ReleaseEscapeMenuMovie()` | **Mandatory.** The counterpart, called by `RemoveEscapeMenu`. Must be safe to call when the movie was never loaded, because `GetEscapeMenuItems`' Exit path and the toggle can both reach it. |
| `HandleEscapeMenu` | `public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)` | The concrete open/close toggle. Tests `screenLayer.Input.IsHotKeyReleased("ToggleEscapeMenu")` and dispatches to `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie` based on the private `_isEscapeOpen` flag. Note it drives the **`view` argument**, not `this`, so it can be used to toggle another instance's menu. |
| `GetEscapeMenuItems` | `public List<EscapeMenuItemVM> GetEscapeMenuItems(CharacterCreationStageViewBase view)` | Builds the full pause-menu list. Seven items, of which only **Resume** and **Exit to Main Menu** are enabled; the other five are hard-disabled with a shared `str_pause_menu_disabled_hint` explanation, because character creation has no campaign to save. Exit to Main Menu removes the menu, calls `view.OnFinalize()`, then `MBGameManager.EndGame()`. |
| `GoToIndex` | `public virtual void GoToIndex(int index)` | Wraps `_goToIndexAction.Invoke(index)`, turning a delegate the screen injected into an ordinary method call. Being `virtual`, a derived view can override it — but it must remember to invoke the base or the jump silently does nothing. |
| `SetGenericScene` | `public virtual void SetGenericScene(Scene scene)` | Receives the one `Scene` the screen shares across all stages. Defaults to empty, so a view that does not override it simply has no scene — which is correct for stages with no 3D content. |
| `Tick` | `public virtual void Tick(float dt)` | Per-frame pump called from the screen's `OnFrameTick`. Defaults to empty; views that animate a body generator override it. |
| `OnRefresh` | `protected virtual void OnRefresh()` | Wraps `_refreshAction.Invoke()`. `protected` and `virtual` — a derived view may add work around a refresh but must keep the base call or the screen's refresh will not propagate. |
| `OnFinalize` | `protected virtual void OnFinalize()` | The stage's teardown hook, reached from the interface's `OnStageFinalize()` and, unusually, also called directly on a `view` from `GetEscapeMenuItems`' Exit-to-main-menu path. Defaults to empty. |

## Dead members and traps

| Member | Declared at | override | Call sites | Verdict | What it means |
|---|---|---|---|---|---|
| `GetVirtualStageCount` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:76` | 7 | 0 | MEASURED | The base declares it `public abstract`, seven classes override it, and **not one call site exists in the 8,583-file 1.4.5 tree**. Whatever you return, nothing in the shipped game reads it. |
| `_cameraPosition` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:31` | 0 | 3 times (3 lines) | UNSUPPORTED | A static tool reports "0 call sites", but `grep -o -w` finds **3 live references across 3 lines** — class-internal accesses with no dot prefix. Extraction blind spot, not a dead member. |
| `_refreshAction` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationStageViewBase.cs:21` | 0 | 2 times (2 lines) | UNSUPPORTED | Same shape: the tool says 0, `grep -o -w` finds **2 live references across 2 lines**. Extraction blind spot, not a dead member. |

Verdicts and counts: source tree `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`, 8,583 `.cs` files including `bin/`. Call-site counts are **occurrence counts** (`grep -o -w`), not matching-line counts. Only `MEASURED` rows may be read as conclusions.

> Note on the override count: the base declaration at `:76` is `public abstract`, not `public override`. The seven overrides live in `CharacterCreationBannerEditorView.cs`, `CharacterCreationClanNamingStageView.cs`, `CharacterCreationCultureStageView.cs`, `CharacterCreationFaceGeneratorView.cs`, `CharacterCreationNarrativeStageView.cs`, `CharacterCreationOptionsStageView.cs` and `CharacterCreationReviewStageView.cs`. Older notes that say "8 override" are counting the abstract declaration as one — see `tools/_DEAD-MEMBER-LIST.md` §3.

## Real Example

The minimum viable derived view — six abstract members, all of them real:

```csharp
using TaleWorlds.Core.ViewModelCollection;
using TaleWorlds.Localization;
using TaleWorlds.ScreenSystem;
using System.Collections.Generic;

public class MyStageView : CharacterCreationStageViewBase
{
    public MyStageView(
        ControlCharacterCreationStage affirmative,
        ControlCharacterCreationStage negative,
        ControlCharacterCreationStage refresh,
        ControlCharacterCreationStageReturnInt currentIndex,
        ControlCharacterCreationStageReturnInt totalCount,
        ControlCharacterCreationStageReturnInt furthestIndex,
        ControlCharacterCreationStageWithInt goToIndex)
        : base(affirmative, negative, refresh, currentIndex, totalCount, furthestIndex, goToIndex)
    {
    }

    public override IEnumerable<ScreenLayer> GetLayers()
    {
        yield return null;
    }

    public override int GetVirtualStageCount()
    {
        return 1;
    }

    public override void NextStage()
    {
        OnRefresh();
    }

    public override void PreviousStage()
    {
        OnRefresh();
    }

    public override void LoadEscapeMenuMovie()
    {
    }

    public override void ReleaseEscapeMenuMovie()
    {
    }
}
```

Build the same menu the base class builds, from a view that wants to inspect it:

```csharp
List<EscapeMenuItemVM> items = GetEscapeMenuItems(this);
foreach (EscapeMenuItemVM item in items)
{
    Debug.Print("escape item", 0);
}
```

Drive the toggle the same way a stage view does each frame, passing `this` as the target:

```csharp
public override void Tick(float dt)
{
    ScreenLayer layer = null;
    if (layer != null)
    {
        HandleEscapeMenu(this, layer);
    }
}
```

Override `GoToIndex` but keep the base call, or the injected delegate never fires:

```csharp
public override void GoToIndex(int index)
{
    Debug.Print("jumping to stage " + index, 0);
    base.GoToIndex(index);
}
```

## Risks and Boundaries

- **Six abstract members.** A derived view that misses any one of them will not compile; the common failure is forgetting `LoadEscapeMenuMovie` / `ReleaseEscapeMenuMovie`, which are easy to overlook because the escape menu looks like base-class functionality.
- **`GetVirtualStageCount` has zero call sites in the 1.4.5 tree.** It is mandatory and universally overridden but never invoked. Implement it; do not rely on it.
- **`GoToIndex` and `OnRefresh` are the only overridable wrappers**, and both hide a delegate invocation. Overriding either without a `base.` call silently disables the navigation or refresh.
- **`HandleEscapeMenu` and `GetEscapeMenuItems` act on the `view` argument, not `this`.** Passing the wrong instance drives the wrong view's movie lifecycle.
- **`_cameraPosition` is shared by the whole flow** and read by exactly three of the seven shipped views. It is `protected readonly`, so a derived view can consume it but not replace it for its siblings.
- **Five of the seven escape-menu items are hard-disabled.** They are not "disabled because a condition failed" — they are constructed with a `false` enabled flag unconditionally, so a mod cannot enable Save or Options by changing state.
- **The Exit-to-main-menu item calls `view.OnFinalize()` then `MBGameManager.EndGame()`.** That ordering means your finalize code runs during a menu callback, not during a screen teardown, so it must not depend on the screen still being alive.
- **`SetGenericScene` defaults to a no-op**, so a view that expects a scene must override it and null-check: the screen only passes a real scene for stages whose type it could resolve.
- **Constructor argument order is positional and unlabelled.** Seven delegate-typed parameters where three share a delegate type means a same-arity mistake compiles and misbehaves.
- **No save or campaign state.** Everything here is UI-lifetime; the stage's actual data lives on the `CharacterCreationManager`.

## Cross-version note

The v1.4.5 file is 181 lines. The zero-call-site status of `GetVirtualStageCount`, the three-view usage of `_cameraPosition`, and the five permanently-disabled escape-menu items are all measured from this tree, not inferred.

## Dependencies

- Instantiator: [CharacterCreationScreen](../CharacterCreationScreen) builds the seven delegates and constructs this type's subclasses reflectively; its `OnStageCreated` is the authority for argument order.
- Registration key: [CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute) is what makes a derived view discoverable by that reflection sweep.
- Constructor arguments: `ControlCharacterCreationStage`, `ControlCharacterCreationStageReturnInt`, and `ControlCharacterCreationStageWithInt` are plain delegates in `TaleWorlds.Core.ViewModelCollection`; this class exists largely to give them names.
- Menu model: `EscapeMenuItemVM` builds the pause-menu items, and `GameTexts.FindText` supplies the shared disabled-reason string.
- Bucket index: [campaign-ext API section](../)
