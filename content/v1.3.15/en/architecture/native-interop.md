---
title: Managed-Native Interop
description: How Bannerlord C# managed code calls into TaleWorlds.Native.dll via EngineMethod, and how mod developers should safely cross that boundary.
---
# Managed-Native Interop

## Mental model

Bannerlord engine has two layers:

- **Managed layer**: your C# mod code and the `TaleWorlds.*` assemblies.
- **Native layer**: `TaleWorlds.Native.dll`, which holds the renderer, physics, animation, audio, and networking implementations.

Managed code does not call native functions directly. TaleWorlds uses `[EngineMethod]` and `[EngineClass]` attributes to map C# wrapper classes to native exports, creating a **controlled interop boundary**. Normal mods should use the managed wrappers and ignore function pointers or exports.

---

## Where the native source lives

Decompiled `TaleWorlds.Native.dll` source is kept next to the repo by version:

| Directory | Version | Notes |
|-----------|---------|-------|
| `native-1.3.15/src/` | v1.3.15 | Main reference; single large decompile `TaleWorlds.Native.dll.c` plus address-range index, [site full index](../../native-1.3.15-src/) |
| `native-1.4.5/src/` | v1.4.5 | Later version decompile; split by subsystem under `subsystems/` and by chunk under `modules/` |
| `native-1.2.9/` | — | Removed; no longer present |

The links on this page point into the [v1.3.15 decompiled source reference](../../native-1.3.15-src/). If you plan to migrate to 1.4.5, also see the [cross-version class comparison](../../../../versions/).

---

## Call flow

```
Your mod code
    ↓ calls managed APIs such as Mission.Scene, Camera.SetFovVertical, Vec3
TaleWorlds.Engine / TaleWorlds.MountAndBlade (managed assemblies)
    ↓ [EngineMethod("native_name")] interface methods
LibraryApplicationInterface.INative* static delegates
    ↓ function pointers injected by TaleWorlds.Native.dll at startup
TaleWorlds.Native.dll
```

At startup, `MBDotNet` passes native function pointers to `ScriptingInterfaceObjects.SetFunctionPointer` through a handful of DllImports. After that, every `[EngineMethod]` call travels through those static delegates instead of making fresh P/Invoke calls.

---

## Common managed to native calls

The table below lists calls you are likely to make as a modder. They look like ordinary C# properties or methods, but each one crosses into the native engine.

| Managed call | Wrapper assembly | Native subsystem | Typical use |
|--------------|------------------|------------------|-------------|
| `Mission.Scene` | `TaleWorlds.MountAndBlade` | [Scene system](../../native-1.3.15-src/scene) | Get the Scene for the current mission |
| `Camera.SetFovVertical` | `TaleWorlds.Engine` | [Rendering](../../native-1.3.15-src/rendering) | Change field of view for a custom camera |
| `Agent.GetCurrentVelocity` | `TaleWorlds.MountAndBlade` | [Physics](../../native-1.3.15-src/physics) | Read an Agent current velocity |
| `Agent.SetTargetPosition` | `TaleWorlds.MountAndBlade` | [Mission](../../native-1.3.15-src/mission) + [Scene](../../native-1.3.15-src/scene) | Steer an Agent toward a point |
| `MBBounds` (`Min`, `Max`, `Center`) | `TaleWorlds.Library` | [Utilities / math](../../native-1.3.15-src/utilities) | Bounding-box calculations |
| `Mat3` (rotation matrix) | `TaleWorlds.Library` | [Utilities / math](../../native-1.3.15-src/utilities) | Coordinate-frame conversions |
| `Vec3` operations (`Distance`, `Normalize`, etc.) | `TaleWorlds.Library` | [Utilities / math](../../native-1.3.15-src/utilities) | 3D vector math |
| `GameEntity.SetGlobalFrame` | `TaleWorlds.Engine` | [Scene system](../../native-1.3.15-src/scene) | Move or rotate a scene entity |
| `Scene.AddEntity` | `TaleWorlds.Engine` | [Scene system](../../native-1.3.15-src/scene) | Spawn a new entity into the scene |
| `Mission.GetCamera` | `TaleWorlds.MountAndBlade` | [Rendering](../../native-1.3.15-src/rendering) | Get the active render camera |
| `Skeleton.SetFrameAtChannel` | `TaleWorlds.Engine` | [Animation](../../native-1.3.15-src/animation) | Drive skeletal animation |
| `SoundEvent.PlayEvent` | `TaleWorlds.Engine` | [Audio](../../native-1.3.15-src/audio) | Play an FMOD sound event |

> Subsystem links point into the decompiled source reference. Those pages index `TaleWorlds.Native.dll` by address ranges and string clues, which helps when you are investigating a crash or verifying a function mapping.

---

## Native interface index

If you want to see how `[EngineClass]`, `[EngineMethod]`, `NativeObject`, and the string/array wrappers bridge the gap, start here:

- [Native Reference overview](../../native/)
- [EngineClass and EngineMethod attributes](../../native/EngineMethod)
- [NativeObject base class](../../native/NativeObject)
- [IManaged lifecycle](../../native/IManaged)
- [INativeArray wrapper](../../native/INativeArray)
- [INativeObjectArray wrapper](../../native/INativeObjectArray)
- [INativeString wrapper](../../native/INativeString)
- [LibraryApplicationInterface registry](../../native/LibraryApplicationInterface)

---

## Native 1.3.15 source reference index

When the managed interface is not enough for investigation, trace into the decompiled `TaleWorlds.Native.dll` v1.3.15 source:

- [Native 1.3.15 source reference overview](../../native-1.3.15-src/)
- [Exports and managed bridge](../../native-1.3.15-src/exports-and-bridge)
- [Complete function catalog](../../native-1.3.15-src/COMPLETE-FUNCTIONS)
- [Complete type reference](../../native-1.3.15-src/COMPLETE-TYPES)
- [Engine core](../../native-1.3.15-src/engine-core)
- [Rendering](../../native-1.3.15-src/rendering)
- [Animation](../../native-1.3.15-src/animation)
- [Physics](../../native-1.3.15-src/physics)
- [Audio](../../native-1.3.15-src/audio)
- [Networking](../../native-1.3.15-src/network)
- [Mission](../../native-1.3.15-src/mission)
- [Scene](../../native-1.3.15-src/scene)
- [Utilities](../../native-1.3.15-src/utilities)

---

## When to touch the native layer

| Scenario | Recommended approach |
|----------|----------------------|
| Everyday mod features | Stay in managed APIs such as `Agent`, `Mission`, `Scene`, and `Camera` |
| Find which native function backs a C# method | Search for `[EngineMethod("...")]` on the method, then check the source reference |
| Crash stack stops in `TaleWorlds.Native.dll` | Use the crashing address or string in the [complete function catalog](../../native-1.3.15-src/COMPLETE-FUNCTIONS) |
| Need a new native capability | First confirm the managed layer really does not expose it, then prefer Harmony patches or reflection over direct P/Invoke |

---

> **Do not P/Invoke directly into `TaleWorlds.Native.dll`.**
>
> The exports of `TaleWorlds.Native.dll` are not a stable API. Function addresses, signatures, and calling conventions change between versions, and the engine only injects the function pointers into `LibraryApplicationInterface` during startup. Writing `[DllImport("TaleWorlds.Native.dll")]` directly will:
>
> - Break immediately on the next game update;
> - Mismatch calling conventions or reference counting, causing crashes or memory leaks;
> - Skip TaleWorlds initialization order and possibly give you a null pointer.
>
> If you truly need to call an undocumented export, read [exports and managed bridge](../../native-1.3.15-src/exports-and-bridge) to understand the startup flow, and prefer Harmony or reflection against an existing managed wrapper.

---

## Related guides

- [SDK Overview](../sdk-overview/) — module map and entry classes for every layer
- [Common Patterns](../../guide/common-patterns/) — code organization and best practices
- [Mission System](../../guide/mission-system/) — Mission, Agent, MissionBehavior
- [Campaign System](../../guide/campaign-system/) — CampaignBehavior and world map
- [Save System Guide](../../guide/save-system-guide/) — persisting custom data across versions
- [Cross-version comparison](../../../../versions/) — check 1.3.0/1.3.15/1.4.5 API changes before migrating

<!-- BEGIN SECTION INDEX -->

## ↑ Parent navigation

- [Architecture](./)
- [SDK Overview](../sdk-overview)
- [Guides](../../guide/)

## ↓ Child pages

- [Native Reference](../../native/)
- [Native 1.3.15 Source Reference](../../native-1.3.15-src/)

<!-- END SECTION INDEX -->