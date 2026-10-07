---
title: "BannerlordTableauManager"
description: "Auto-generated class reference for BannerlordTableauManager."
---
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## Overview

`BannerlordTableauManager` is the static managed face of the native tableau renderer: a thin set of `MBAPI.IMBBannerlordTableauManager` forwards plus the managed state the native side writes back into. It owns one fixed piece of state, a five-element `Scene[]` (`BannerlordTableauManager.cs:64`) that the engine fills in through the internal `RegisterCharacterTableauScene` (`BannerlordTableauManager.cs:58`) and hands back out as `TableauCharacterScenes` (`BannerlordTableauManager.cs:11`). Those five scenes are the off-screen tableau scenes; the thumbnail caches read them by index, e.g. `CharacterThumbnailCache` picking `TableauCharacterScenes[num]` (`CharacterThumbnailCache.cs:57`).

The type is the seam for mods that render custom characters, items or crafting pieces into those scenes. Two members are the whole seam, and both are internal, native-invoked, and marked `[MBCallback(null, false)]`: `RequestCharacterTableauSetup` (`BannerlordTableauManager.cs:51`) forwards into the public static `RequestCallback` delegate field (`BannerlordTableauManager.cs:70`), and `RegisterCharacterTableauScene` writes the scene slot. Everything else — init, clear, pending-count — is engine plumbing with a one-line body.

Its lifetime is the view module's lifetime, not a scene's. `ViewSubModule.OnBeforeInitialModuleScreenSetAsRoot` calls `InitializeCharacterTableauRenderSystem` once (`ViewSubModule.cs:202`), and `ViewSubModule.OnSubModuleUnloaded` calls `ClearManager` (`ViewSubModule.cs:185`), which nulls the scene array, the callback and the init flag.

## Mental Model

Understand the init flag as idempotence, not as a readiness check. `InitializeCharacterTableauRenderSystem` does nothing if `_isTableauRenderSystemInitialized` is already true (`BannerlordTableauManager.cs:36`) — it will not fail loudly if you call it twice, and it tells you nothing about whether the scenes exist. Until the engine has called `RegisterCharacterTableauScene` for each slot, the array elements are still `null`.

`TableauCharacterScenes` is indexed, not a dictionary, and `RegisterCharacterTableauScene` writes `TableauCharacterScenes[type]` with no bounds check (`BannerlordTableauManager.cs:60`). The `type` argument is the same `tableauType` you passed to `RequestCharacterTableauRender` (`BannerlordTableauManager.cs:20`), so the index has to be in `0..4`; anything else is an `IndexOutOfRangeException` thrown from an engine callback.

The `RequestCallback` field is a naked delegate invoke with no null guard: `RequestCharacterTableauSetup` calls `RequestCallback(characterCodeId, scene, poseEntity)` directly (`BannerlordTableauManager.cs:53`). Nothing in the shipped assemblies assigns it, so on a vanilla game the delegate is `null` and the engine's callback would throw if it ever fired. Assigning it is your job, and reassigning it after `ClearManager` is mandatory because `ClearManager` sets it back to `null` (`BannerlordTableauManager.cs:29`).

Finally, `RequestCharacterTableauRender` does not pass managed objects — it passes `poseEntity.Pointer` and `cameraObject.Pointer` (`BannerlordTableauManager.cs:22`). Both native objects must stay alive for the duration of the request; a scene that has been unloaded or a `GameEntity` already disposed leaves the renderer holding a dangling pointer.

## How to use

**Getting one.** It is a static class; there is nothing to obtain. Initialise it during module load (`InitializeCharacterTableauRenderSystem`, `BannerlordTableauManager.cs:34`), install your handler on the public `RequestCallback` field (`BannerlordTableauManager.cs:70`), and render with `RequestCharacterTableauRender` (`BannerlordTableauManager.cs:20`).

**Typical use** — install a setup handler and queue a character tableau render:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public static class MyTableauHook
{
    // tableauType must be one of the five slots: 0..4.
    private const int MyTableauType = 3;

    public static void Install()
    {
        BannerlordTableauManager.InitializeCharacterTableauRenderSystem();

        // A static void method converts implicitly to the delegate type.
        BannerlordTableauManager.RequestCallback = MyTableauHook.OnTableauSetup;
    }

    // Hooked by the engine through RequestCharacterTableauSetup.
    public static void OnTableauSetup(int characterCodeId, Scene scene, GameEntity poseEntity)
    {
        if (scene == null || poseEntity == null)
        {
            return;
        }

        // Build your character here, into the scene the engine handed you.
    }

    public static int Pending => BannerlordTableauManager.GetNumberOfPendingTableauRequests();
}
```

Assign `MyTableauHook.OnTableauSetup` to the field rather than the local function above — `RequestCallback` is a static field of delegate type `RequestCharacterTableauSetupDelegate(int, Scene, GameEntity)` (`BannerlordTableauManager.cs:74`), so a plain `void (int, Scene, GameEntity)` method converts implicitly and needs no wrapper. If your mod is unloaded before the view module is, mirror `ViewSubModule.OnSubModuleUnloaded` (`ViewSubModule.cs:185`) and call `BannerlordTableauManager.ClearManager()`.

**Most common mistake:** trusting `TableauCharacterScenes` before the engine has populated it, or indexing past the end.

```csharp
Scene s = BannerlordTableauManager.TableauCharacterScenes[MyTableauType];
s.DoSomething();          // NullReferenceException: the slot is still null
```

The array is allocated with five `null` elements at type-init time (`BannerlordTableauManager.cs:64`) and only filled by the engine callback. Every game-side reader — for example `CharacterThumbnailCache.cs:57` — is reached through a code path that guarantees initialisation first. Read a slot only from inside your `RequestCallback` handler, where the scene has just been handed to you, and check it for `null` before use.

## Key Properties

| Name | Signature |
|------|-----------|
| `TableauCharacterScenes` | `public static Scene TableauCharacterScenes { get; }` |

## Key Methods

### RequestCharacterTableauRender
`public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)`

**Purpose:** Executes the RequestCharacterTableauRender logic.

```csharp
// Static call; no instance required
BannerlordTableauManager.RequestCharacterTableauRender(0, "example", poseEntity, cameraObject, 0);
```

### ClearManager
`public static void ClearManager()`

**Purpose:** Removes all manager from the this instance.

```csharp
// Static call; no instance required
BannerlordTableauManager.ClearManager();
```

### InitializeCharacterTableauRenderSystem
`public static void InitializeCharacterTableauRenderSystem()`

**Purpose:** Prepares the resources, state, or bindings required by character tableau render system.

```csharp
// Static call; no instance required
BannerlordTableauManager.InitializeCharacterTableauRenderSystem();
```

### GetNumberOfPendingTableauRequests
`public static int GetNumberOfPendingTableauRequests()`

**Purpose:** Reads and returns the number of pending tableau requests value held by the this instance.

```csharp
// Static call; no instance required
BannerlordTableauManager.GetNumberOfPendingTableauRequests();
```

### RequestCharacterTableauSetupDelegate
`public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)`

**Purpose:** Executes the RequestCharacterTableauSetupDelegate logic.

```csharp
// Obtain an instance of BannerlordTableauManager from the subsystem API first
BannerlordTableauManager bannerlordTableauManager = ...;
bannerlordTableauManager.RequestCharacterTableauSetupDelegate(0, scene, poseEntity);
```

## Usage Example

```csharp
var manager = BannerlordTableauManager.Current;
```

## See Also

- [Area Index](../)
- [ThumbnailCacheManager — the consumer that renders into these scenes](../ThumbnailCacheManager)
- [CharacterThumbnailCache — reads `TableauCharacterScenes` by index](../CharacterThumbnailCache)
- [IMBBannerlordTableauManager — the native interface it forwards to](../../mission/IMBBannerlordTableauManager)
- [中文页面](../../../../zh/api/mission-ext/BannerlordTableauManager)