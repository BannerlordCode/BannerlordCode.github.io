---
title: "IScene"
description: "Internal engine interface for scenes (TaleWorlds.Engine): mods reach it through the managed Scene wrapper via Mission.Current.Scene / the map IMapScene, never by constructing IScene directly."
---
# IScene

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal interface IScene`
**Base:** none
**File:** `TaleWorlds.Engine/IScene.cs`

## Overview

`IScene` is the **internal interface** that the engine layer (`TaleWorlds.Engine`) defines for a "Scene" — the native-side contract surface of a scene object. Low-level capabilities such as entities, meshes, lighting, cameras, and physics are all exposed through it. It lives on the managed/native boundary and **cannot be instantiated directly by mods**; the managed side operates on a scene through `Scene` (a subclass of `NativeObject` that wraps the `IScene` boundary). In other words, a mod should almost never hold an `IScene` reference — it should obtain a `Scene` and let `Scene` drive this interface indirectly. Think of `IScene` as the "native contract surface of scene capabilities": it is the anchor for reading `Scene`, Mission scenes, and the map scene internals.

## Mental Model

Think of `IScene` as the scene's "ID card + capability list on the engine side": **you almost never touch it directly.**

- **What it is:** an internal engine interface describing what a scene can do (spawn entities, query meshes, read cameras, run physics…). It lives in native code; the managed side only talks to it through the `Scene` `NativeObject` wrapper.
- **Why it exists:** Bannerlord's scene system runs largely in the C++ engine; `IScene` is the agreed interface on the managed/native boundary that lets `Scene` drive the underlying scene uniformly.
- **How mods actually use it:** you neither `new` nor hold an `IScene`; you take a `Scene` — the battle/mission scene comes from `Mission.Current.Scene`, the campaign map scene from `Campaign`'s `IMapScene` (`MapSceneWrapper`). Every scene-level operation (iterate entities, read cameras, edit meshes) goes through `Scene`'s public methods, and `Scene` in turn talks to `IScene` to do the work.
- **Layer:** engine layer (below `Mission` / `Campaign`); it is an "engine bridge", not a "campaign/mission API".

## When to use / When not to use

- **Use:** when you want to understand `Scene`'s underlying contract, debug native scene-related calls, or write advanced engine extensions that need the raw native scene handle (even then you get a `Scene`, not an `IScene`).
- **Do not use:** to obtain the current scene — use `Mission.Current.Scene` (returns `Scene`) or the map's `IMapScene`; **never** write a placeholder that treats IScene as an injectable "service" — there is no such type as `IIScene`, and a scene is not obtained via DI/factory. Also do not assume you can implement or replace `IScene` to alter a scene; always go through `Scene`'s public methods.

## Dependencies

- Upstream / related: `[Scene](../Scene)` (the only scene managed class mods hold; wraps the `IScene` boundary), `[Mission](../../mission/Mission)` (`Mission.Current.Scene` provides the battle/mission scene), `[Campaign](../../campaign/Campaign)` (`IMapScene` / `MapSceneWrapper` provides the map scene), `NativeObject` (`Scene`'s base class, native handle model), `[EngineApplicationInterface](../EngineApplicationInterface)` (engine-side interface entry point), `[GameEntity](../GameEntity)` (entities hosted by a `Scene`).
- Downstream / boundary: this is an engine-native boundary; mod code consumes it indirectly via `Scene`; do not treat it as a replaceable managed service.

## Example

```csharp
// Enter the current Mission runtime; it binds the native Scene internally
Mission mission = Mission.Current;
// Get the scene object bound to the Mission (managed Scene wraps the engine IScene boundary)
Scene scene = mission.Scene;
// Operate on the scene through Scene's public methods (which drive IScene underneath)
bool isEditorScene = scene.IsDefaultEditorScene();
```

## See Also

- [Scene](../Scene) (the scene managed class mods actually use)
- [Mission](../../mission/Mission) (battle/mission scene source)
- [Campaign](../../campaign/Campaign) (map scene source)
- NativeObject (native handle base class)
- ↑ [Engine API index](../)
