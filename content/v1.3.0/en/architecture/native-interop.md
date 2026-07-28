---
title: Managed-Native Interop
description: How Bannerlord v1.3.0 C# managed code calls into TaleWorlds.Native.dll via EngineMethod, and how mod developers should safely cross that boundary.
---
# Managed-Native Interop

## Parent navigation

- [Home](../../)
- [Architecture](./)
- [SDK overview](../sdk-overview/)

## Sibling navigation

| Page | Solves |
|------|--------|
| [SDK overview](../sdk-overview/) | Full module map |
| [Module system](../module-system/) | Lifecycle and loading |
| [Save system](../save-system/) | Persisting custom data |
| [Version delta](../version-delta/) | What changed in later versions |

> **v1.3.0 note**
> The managed-to-native interop mechanism is the same as v1.3.15. Because there is no separate `native-1.3.0/` decompile, use the [v1.3.15 Native source reference](../../../../v1.3.15/en/native-1.3.15-src/) when you need to trace the native side. For cross-version migration, also see the [cross-version class comparison](../../../../versions/).

## Where the native source lives

Decompiled `TaleWorlds.Native.dll` source is kept next to the repo by version. The references available for v1.3.0 are:

| Directory | Version | Notes |
|-----------|---------|-------|
| `native-1.3.15/` | v1.3.15 | Main reference; use when managed-to-native mappings line up, [full index](../../../../v1.3.15/en/native-1.3.15-src/) |
| `native-1.4.5/` | v1.4.5 | Later version decompile; different layout but useful conceptually |
| `native-1.3.0/` | — | Not unpacked separately |
| `native-1.2.9/` | — | Removed; no longer present |

---

## Mental model

The Bannerlord engine has two layers:

- **Managed layer**: your C# mod code and the `TaleWorlds.*` assemblies.
- **Native layer**: `TaleWorlds.Native.dll`, which holds the renderer, physics, animation, audio, and networking implementations.

Managed code does not call native functions directly. TaleWorlds uses `[EngineMethod]` and `[EngineClass]` attributes to map C# wrapper classes to native exports, creating a **controlled interop boundary**. Normal mods should use the managed wrappers and ignore function pointers or exports.

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
| `Mission.Scene` | `TaleWorlds.MountAndBlade` | [Scene system](../../../../v1.3.15/en/native-1.3.15-src/scene) | Get the Scene for the current mission |
| `Camera.SetFovVertical` | `TaleWorlds.Engine` | [Rendering](../../../../v1.3.15/en/native-1.3.15-src/rendering) | Change field of view for a custom camera |
| `Agent.GetCurrentVelocity` | `TaleWorlds.MountAndBlade` | [Physics](../../../../v1.3.15/en/native-1.3.15-src/physics) | Read an Agent current velocity |
| `Agent.SetTargetPosition` | `TaleWorlds.MountAndBlade` | [Mission](../../../../v1.3.15/en/native-1.3.15-src/mission) + [Scene](../../../../v1.3.15/en/native-1.3.15-src/scene) | Steer an Agent toward a point |
| `MBBounds` (`Min`, `Max`, `Center`) | `TaleWorlds.Library` | [Utilities / math](../../../../v1.3.15/en/native-1.3.15-src/utilities) | Bounding-box calculations |
| `Mat3` (rotation matrix) | `TaleWorlds.Library` | [Utilities / math](../../../../v1.3.15/en/native-1.3.15-src/utilities) | Coordinate-frame conversions |
| `Vec3` operations (`Distance`, `Normalize`, etc.) | `TaleWorlds.Library` | [Utilities / math](../../../../v1.3.15/en/native-1.3.15-src/utilities) | 3D vector math |
| `GameEntity.SetGlobalFrame` | `TaleWorlds.Engine` | [Scene system](../../../../v1.3.15/en/native-1.3.15-src/scene) | Move or rotate a scene entity |
| `Scene.AddEntity` | `TaleWorlds.Engine` | [Scene system](../../../../v1.3.15/en/native-1.3.15-src/scene) | Spawn a new entity into the scene |
| `Mission.GetCamera` | `TaleWorlds.MountAndBlade` | [Rendering](../../../../v1.3.15/en/native-1.3.15-src/rendering) | Get the active render camera |
| `Skeleton.SetFrameAtChannel` | `TaleWorlds.Engine` | [Animation](../../../../v1.3.15/en/native-1.3.15-src/animation) | Drive skeletal animation |
| `SoundEvent.PlayEvent` | `TaleWorlds.Engine` | [Audio](../../../../v1.3.15/en/native-1.3.15-src/audio) | Play an FMOD sound event |

> Subsystem links point into the v1.3.15 [decompiled source reference](../../../../v1.3.15/en/native-1.3.15-src/). Those pages index `TaleWorlds.Native.dll` by address ranges and string clues, which helps when you are investigating a crash or verifying a function mapping. v1.3.0 shares the same core mappings as v1.3.15, but individual function addresses may differ.

---

## Native interface index

If you want to see how `[EngineClass]`, `[EngineMethod]`, `NativeObject`, and the string/array wrappers bridge the gap, start here:

- [Native Reference overview](../../../../v1.3.15/en/native/)
- [EngineClass and EngineMethod attributes](../../../../v1.3.15/en/native/EngineMethod)
- [NativeObject base class](../../../../v1.3.15/en/native/NativeObject)
- [IManaged lifecycle](../../../../v1.3.15/en/native/IManaged)
- [INativeArray wrapper](../../../../v1.3.15/en/native/INativeArray)
- [INativeObjectArray wrapper](../../../../v1.3.15/en/native/INativeObjectArray)
- [INativeString wrapper](../../../../v1.3.15/en/native/INativeString)
- [LibraryApplicationInterface registry](../../../../v1.3.15/en/native/LibraryApplicationInterface)

---

## Native source reference index

When the managed interface is not enough for investigation, trace into the decompiled `TaleWorlds.Native.dll` source:

- [Native 1.3.15 source reference overview](../../../../v1.3.15/en/native-1.3.15-src/)
- [Exports and managed bridge](../../../../v1.3.15/en/native-1.3.15-src/exports-and-bridge)
- [Complete function catalog](../../../../v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS)
- [Complete type reference](../../../../v1.3.15/en/native-1.3.15-src/COMPLETE-TYPES)
- [Engine core](../../../../v1.3.15/en/native-1.3.15-src/engine-core)
- [Rendering](../../../../v1.3.15/en/native-1.3.15-src/rendering)
- [Animation](../../../../v1.3.15/en/native-1.3.15-src/animation)
- [Physics](../../../../v1.3.15/en/native-1.3.15-src/physics)
- [Audio](../../../../v1.3.15/en/native-1.3.15-src/audio)
- [Networking](../../../../v1.3.15/en/native-1.3.15-src/network)
- [Mission](../../../../v1.3.15/en/native-1.3.15-src/mission)
- [Scene](../../../../v1.3.15/en/native-1.3.15-src/scene)
- [Utilities](../../../../v1.3.15/en/native-1.3.15-src/utilities)

---

## When to touch the native layer

| Scenario | Recommended approach |
|----------|----------------------|
| Everyday mod features | Stay in managed APIs such as `Agent`, `Mission`, `Scene`, and `Camera` |
| Find which native function backs a C# method | Search for `[EngineMethod("...")]` on the method, then check the source reference |
| Crash stack stops in `TaleWorlds.Native.dll` | Use the crashing address or string in the [complete function catalog](../../../../v1.3.15/en/native-1.3.15-src/COMPLETE-FUNCTIONS) |
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
> If you truly need to call an undocumented export, read [exports and managed bridge](../../../../v1.3.15/en/native-1.3.15-src/exports-and-bridge) to understand the startup flow, and prefer Harmony or reflection against an existing managed wrapper.

---

## Related guides

- [SDK Overview](../sdk-overview/) — module map and entry classes for every layer
- [Common Patterns](../../../../v1.3.15/en/guide/common-patterns/) — code organization and best practices
- [Mission System](../../../../v1.3.15/en/guide/mission-system/) — Mission, Agent, MissionBehavior
- [Campaign System](../../../../v1.3.15/en/guide/campaign-system/) — CampaignBehavior and world map
- [Save System Guide](../../../../v1.3.15/en/guide/save-system-guide/) — persisting custom data across versions
- [Cross-version comparison](../../../../versions/) — check API changes before migrating

<!-- BEGIN SECTION INDEX -->

## ↑ Parent navigation

- [Architecture](./)
- [SDK Overview](../sdk-overview)
- [Guides](../../guide/)

## ↓ Child pages

- [Native Reference](../../../../v1.3.15/en/native/)
- [Native 1.3.15 Source Reference](../../../../v1.3.15/en/native-1.3.15-src/)

<!-- END SECTION INDEX -->
