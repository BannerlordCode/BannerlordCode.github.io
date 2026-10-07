---
title: "EditorGameManager"
description: "Auto-generated class reference for EditorGameManager."
---
# EditorGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## Overview

`EditorGameManager` is the `MBGameManager` subclass the engine uses when it starts the in-game mission editor rather than a campaign or multiplayer session (`EditorGameManager.cs:7`). Its entire responsibility is one overridden method, `DoLoadingForGameManager`, which is a state machine over the `GameManagerLoadingSteps` enum: it is re-entered repeatedly, and each call decides the *next* step and returns it via `out`.

The sequence it drives is: load module data and global references, create an `EditorGame` and run its own loading (`EditorGameManager.cs:18`), ask every `SubModule` to `DoLoading` until all agree, call `MBGameManager.StartNewGame()`, then keep polling `Game.Current.DoLoading()` until it returns true, and finally step through two near-empty tail states before reaching `None`.

There is no campaign here. `OnAfterCampaignStart` is deliberately overridden to do nothing (`EditorGameManager.cs:50`), because the editor runs without the campaign lifecycle that the base class would otherwise drive.

## Mental Model

The submodule loop at `FirstInitializeFirstStep` is the part that matters, and it has a short-circuit that is easy to miss:

```csharp
flag = (flag && mbsubModuleBase.DoLoading(Game.Current));
nextStep = flag ? GameManagerLoadingSteps.WaitSecondStep
                : GameManagerLoadingSteps.FirstInitializeFirstStep;
```

Because `&&` short-circuits, once `flag` is false the right-hand side is never evaluated. `mbsubModuleBase.DoLoading(Game.Current)` therefore stops being *called* for every submodule later in `Module.CurrentModule.CollectSubModules()` order, while the loop itself keeps re-entering the same step (`EditorGameManager.cs:26`, `EditorGameManager.cs:28`). The step only advances when every submodule that was reached returned true.

Read it as "a submodule that says false freezes editor startup *and silences the modules behind it*", not as "a submodule that says false will be asked again alongside the others". If your mod sits late in submodule order and an earlier mod returns false permanently, your `SubModule.DoLoading` is never invoked at all — and because returning false is also how a submodule asks to be called again on the next tick, the two cases are indistinguishable from outside. Returning `true` is what marks your loading work complete.

The other loop, at `SecondInitializeThirdState`, has the opposite and safer shape: `Game.Current.DoLoading()` is polled and the step re-entered until it returns true (`EditorGameManager.cs:36`). That one calls its condition every time.

Finally, note that the steps *before* `FirstInitializeFirstStep` are one-shot: `PreInitializeZerothStep` creates the game and never repeats, because it sets `nextStep` to a different value unconditionally.

## How to use

**Getting it.** The engine constructs it; you do not. `GameManagerBase` selection happens through `GameStarter` and the startup flow, so from a mod you observe it rather than build it:

```csharp
// EditorGameManager is active when the editor's game manager owns the session.
EditorGameManager editor = GameManagerBase.Current as EditorGameManager;
if (editor != null)
{
    MBDebug.Print("editor session active");
}
```

**Typical use** — doing work in the right phase from a `SubModule`, returning `true` when finished:

```csharp
public override bool DoLoading(Game game)
{
    if (game is EditorGame && !_editorAssetsQueued)
    {
        QueueEditorOnlyAssets(game);
        _editorAssetsQueued = true;
    }
    // Returning false asks to be called again next tick — but see the
    // short-circuit caveat: modules after yours will not be called meanwhile.
    return true;
}
```

**Typical use** — resources the engine does not know about must be marked used explicitly, which is what the companion manager is for:

```csharp
MBUnusedResourceManager.SetMeshUsed("mod_banner_mesh");
MBUnusedResourceManager.SetBodyUsed("mod_body_name");
```

**Most common mistake, and what it costs.** Returning `false` from `SubModule.DoLoading` in the belief that it merely defers your own work. It does defer your work — and it also stops `DoLoading` from being called on every submodule after yours in `CollectSubModules()` order, because of the `&&` short-circuit at `EditorGameManager.cs:26`. The result is an editor that hangs on `FirstInitializeFirstStep` forever if your module never returns true, and in the meantime later modules are silently never initialised. If you need to wait for something, poll it internally and keep returning `false` only as long as genuinely necessary — and be aware that while you are returning `false`, the modules behind you are not running either.

## Key Methods

### OnAfterCampaignStart
`public override void OnAfterCampaignStart(Game game)`

**Purpose:** Invoked when the after campaign start event is raised.

```csharp
// Obtain an instance of EditorGameManager from the subsystem API first
EditorGameManager editorGameManager = ...;
editorGameManager.OnAfterCampaignStart(game);
```

### OnLoadFinished
`public override void OnLoadFinished()`

**Purpose:** Invoked when the load finished event is raised.

```csharp
// Obtain an instance of EditorGameManager from the subsystem API first
EditorGameManager editorGameManager = ...;
editorGameManager.OnLoadFinished();
```

## Usage Example

```csharp
var manager = EditorGameManager.Current;
```

## See Also

- [Area Index](../)
- [MBGameManager](../MBGameManager)
- [EditorGame](../EditorGame)
- [MBUnusedResourceManager](../MBUnusedResourceManager)
- [EditorGameManager (中文页面)](../../../../zh/api/mission-ext/EditorGameManager)