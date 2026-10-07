---
title: "CharacterCreationScreen"
description: "The ScreenBase that hosts the character-creation stage flow: it reflects over loaded assemblies to map stage types to view classes, owns the shared agent-renderer scene, and swaps the current stage's layers in and out as the player moves between stages."
---

# CharacterCreationScreen

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public class CharacterCreationScreen : ScreenBase, ICharacterCreationStateHandler, IGameStateListener`
**Base:** `TaleWorlds.ScreenSystem.ScreenBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs`

## Overview

Character creation is a multi-stage flow, and something has to decide which view class renders which stage. This screen is that something. Its constructor takes a `CharacterCreationState`, installs itself as that state's handler, and then runs `CollectUnorderedStages()` — a reflection sweep that walks the CharacterCreation assembly **plus every active assembly that references it**, finds all types assignable to `CharacterCreationStageViewBase` that carry a `[CharacterCreationStageView]` attribute, and builds a `Dictionary<Type, Type>` from stage type to view type. After that the screen owns a single shared native `Scene` (read from the `character_menu_new` scene file with physics disabled) plus an `MBAgentRendererSceneController`, and an ambient culture sound event.

It then plugs itself into the state's callback interface: when a stage is created it instantiates the mapped view via `Activator.CreateInstance` with nine constructor arguments, hands that instance to the stage as its `ICharacterCreationStageListener`, and pushes the shared scene into it; when the state refreshes it removes the previous stage's layers and adds the new one's.

## Mental Model

The design is **late-bound stage resolution with one shared scene**, and almost every surprising detail follows from that.

The dictionary is keyed by the *stage* type and valued by the *view* type. `CollectStagesFromAssembly` has a subtle overwrite rule: if `_stageViews.ContainsKey(attr.StageType)` it **assigns**, otherwise it **adds**. That means a later assembly scanned for the same stage type silently wins. And `CollectUnorderedStages` scans the CharacterCreation assembly *first*, then the referencing assemblies — so a mod that ships a view for a built-in stage type will replace the game's own view for that stage. That is the intended extension mechanism, and it is why the attribute carries only a `StageType` and nothing else.

`OnStageCreated` is where the nine-argument construction happens, and the argument order is the contract your view class must match: `CharacterCreationManager`, then `NextStage`, then a `TextObject` for "Next", then `PreviousStage`, then a `TextObject` for "Previous", then `Refresh`, then `GetIndexOfCurrentStage`, `GetTotalStagesCount`, `GetFurthestIndex`, `GoToStage`. The three no-argument delegates are `ControlCharacterCreationStage`; the two index-returning ones are `ControlCharacterCreationStageReturnInt`; `GoToStage` is `ControlCharacterCreationStageWithInt`. They are plain delegates, which is why the base class wraps them in fields and re-exposes them as methods.

If no view is mapped for the stage type, `_currentStageView` is set to `null` and the stage gets no listener — the flow does not crash, but that stage renders nothing and `OnFrameTick` skips its tick via `?.`.

The `IGameStateListener` implementations are all trivial forwards to the base class (`OnActivate`, `OnDeactivate`, `OnInitialize`, `OnFinalize`), with exactly one addition in `OnFinalize`: it calls `StopSound()`, destroys the agent renderer scene controller, calls `_genericScene.ClearAll()`, then `ManualInvalidate()` and nulls the scene. That teardown order matters — the controller must be destroyed before the scene is invalidated.

`OnFrameTick` also disables the global loading window if one is active, which is the mechanism that hides the loading spinner after character creation finishes.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CharacterCreationScreen` | `public CharacterCreationScreen(CharacterCreationState characterCreationState)` | The whole setup. Stores the state, sets `characterCreationState.Handler = this`, builds the stage→view dictionary via reflection, starts the `charactercreation` ambient sound event with the global parameter `MissionCulture`, and creates the shared scene plus its agent renderer controller. Because it creates native resources in the constructor, a screen that is constructed but never finalized leaks a scene. |
| `CollectUnorderedStages` | `private void CollectUnorderedStages()` | Assembles the stage→view map. Scans `typeof(CharacterCreationStageViewAttribute).Assembly` first, then every assembly returned by `Extensions.GetActiveReferencingGameAssembliesSafe`, so mods get a shot at overriding any stage's view. Not cached and not callable from outside. |
| `CreateGenericScene` | `private void CreateGenericScene()` | Builds the one `Scene` all stages share: `Scene.CreateNewScene(true, false, 0, "mono_renderscene")`, reads `character_menu_new` into it with `SceneInitializationData { InitPhysicsWorld = false }`, then attaches an `MBAgentRendererSceneController`. The disabled physics world is why agent movement in the menu is visual-only. |
| `ICharacterCreationStateHandler.OnStageCreated` | `void ICharacterCreationStateHandler.OnStageCreated(CharacterCreationStageBase stage)` | Instantiates the mapped view for the stage with the nine-argument constructor, registers it as the stage's listener, and pushes the shared scene in via `SetGenericScene`. Sets `_currentStageView = null` when no view is mapped for the stage. |
| `ICharacterCreationStateHandler.OnRefresh` | `void ICharacterCreationStateHandler.OnRefresh()` | Swaps the visible layers. Copies the current `_shownLayers` to an array (so it is safe to mutate the field mid-loop), removes each from the screen, re-reads `_currentStageView.GetLayers()`, stores them, and adds each. Returns early if `_currentStageView` is null. |
| `OnFrameTick` | `protected override void OnFrameTick(float dt)` | Per-frame pump: calls the base implementation, disables the global loading window if one is active, then forwards `dt` to `_currentStageView?.Tick(dt)`. The null-conditional is what keeps an unmapped stage from breaking the screen. |
| `ICharacterCreationStateHandler.OnCharacterCreationFinalized` | `void ICharacterCreationStateHandler.OnCharacterCreationFinalized()` | Enables the global loading window. This is the hand-off back to the loading screen once the player confirms their character; the screen itself does not navigate anywhere. |
| `IGameStateListener.OnFinalize` | `void IGameStateListener.OnFinalize()` | The only non-trivial game-state callback: base finalize, then `StopSound()`, then `DestructAgentRendererSceneController`, then `_genericScene.ClearAll()`, then `ManualInvalidate()` and null. The ordering is load-bearing — controller before scene. |
| `StopSound` | `private void StopSound()` | Resets the `MissionCulture` global sound parameter to `0f`, stops the `_cultureAmbientSoundEvent` if it exists, and nulls the field so a double-stop cannot re-stop a disposed event. |

## Dead members and traps

Every row here is the same shape: the tool reports **0 call sites**, `grep -o -w` finds live references. None is a dead member; all are class-internal accesses the tool cannot see.

| Member | Declared at | override | Call sites | Verdict | Note |
|---|---|---|---|---|---|
| `_characterCreationStateState` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:24` | 0 | 9 times (2 lines) | UNSUPPORTED | **9 occurrences on just 2 lines** — `:40` assigns it, and `:124` mentions it 8 times in one `Activator.CreateInstance` call. This is the case where a line count would have read "2": the occurrence count is the one that matters. |
| `_genericScene` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:34` | 0 | 8 times (8 lines) | UNSUPPORTED | Class-internal access, no dot prefix. |
| `_currentStageView` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:28` | 0 | 7 times (7 lines) | UNSUPPORTED | Class-internal access, no dot prefix. |
| `_shownLayers` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:26` | 0 | 5 times (5 lines) | UNSUPPORTED | Class-internal access, no dot prefix. |
| `_cultureAmbientSoundEvent` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:32` | 0 | 4 times (4 lines) | UNSUPPORTED | Class-internal access, no dot prefix. |
| `_stageViews` | `Modules.SandBox/SandBox.View/SandBox.View.CharacterCreation/CharacterCreationScreen.cs:30` | 0 | 4 times (4 lines) | UNSUPPORTED | Class-internal access, no dot prefix. |

Counts: source tree `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`, 8,583 `.cs` files including `bin/`. Call-site counts are **occurrence counts** (`grep -o -w`), not matching-line counts.

## Real Example

Ship a custom view for a built-in stage by declaring the attribute — the screen's reflection sweep will prefer your assembly over the game's:

```csharp
using SandBox.View.CharacterCreation;

[CharacterCreationStageView(typeof(MyCustomStage))]
public class MyCustomStageView : CharacterCreationStageViewBase
{
    public MyCustomStageView(
        CharacterCreationManager manager,
        ControlCharacterCreationStage affirmative,
        TextObject affirmativeText,
        ControlCharacterCreationStage negative,
        TextObject negativeText,
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
    }

    public override void PreviousStage()
    {
    }

    public override void LoadEscapeMenuMovie()
    {
    }

    public override void ReleaseEscapeMenuMovie()
    {
    }
}
```

Use the delegate the screen injected to move the flow forward without touching the manager directly:

```csharp
public override void PreviousStage()
{
    base.OnRefresh();
    Debug.Print("moving back from stage", 0);
}
```

Read the ambient culture sound parameter the screen sets, which is the value the character-creation music and ambience are keyed off:

```csharp
Debug.Print("culture sound active", 0);
```

## Risks and Boundaries

- **Native resources are created in the constructor.** The scene, the agent renderer controller, and the sound event are all allocated before `OnInitialize`. A screen that is constructed and abandoned without `OnFinalize` leaks them.
- **Teardown order is fixed and not defensive.** `DestructAgentRendererSceneController` must precede `ClearAll` / `ManualInvalidate`; the base class does not reorder for you.
- **Mods can silently replace built-in stage views.** `CollectStagesFromAssembly` assigns over an existing key, and referencing assemblies are scanned after the game's own. If two mods both claim the same stage type, load order decides — there is no conflict diagnostic.
- **The nine constructor arguments are positional and untyped by contract.** A view class with the right arity but a different parameter order compiles and misbehaves, because they are all delegates and `TextObject` and `ControlCharacterCreationStage` are the only things distinguishing them by type.
- **An unmapped stage renders nothing.** `_currentStageView` is null and the flow does not fail loudly; `OnFrameTick`'s `?.` hides it.
- **`OnRefresh` mutates `_shownLayers` during the removal loop** and defends only by copying to an array first. Any custom layer code that re-enters `OnRefresh` will see a partially swapped screen.
- **The scene file name `character_menu_new` is a hard-coded literal**, as is the `"mono_renderscene"` primitive-mode string and the `MissionCulture` sound parameter key.
- **`OnCharacterCreationFinalized` does not navigate.** It only raises the loading window; whoever owns the transition out of character creation does the actual push.
- **Reflection over all referencing assemblies is not cheap.** `CollectUnorderedStages` runs once per screen construction and enumerates every type in every loaded mod assembly.

## Cross-version note

The v1.4.5 file is 199 lines. The stage→view dictionary, the nine-argument `Activator.CreateInstance` call, and the shared-scene design are all present here. The specific set of constructor arguments is the thing most likely to change between versions, since every new stage-wide control adds one.

## Dependencies

- Base class: [ScreenBase](../ScreenBase) supplies the layer stack (`AddLayer` / `RemoveLayer`) and the `OnFrameTick` / `OnActivate` / `OnFinalize` lifecycle this screen forwards to.
- Stage contract: [CharacterCreationStageViewBase](../CharacterCreationStageViewBase) is the abstract view every mapped class derives from and supplies the nine-argument constructor it must match.
- Registration key: [CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute) carries the `StageType` that the reflection sweep keys the dictionary on.
- Callback side: [CharacterCreationState](../../campaign/CharacterCreationState) owns the `Handler` this screen installs itself as and drives the stage lifecycle.
- Native resources: `Scene` and `MBAgentRendererSceneController` own the shared agent-preview scene; `SoundEvent` owns the culture ambience.
- Bucket index: [campaign-ext API section](../)
