---
title: "MBUnusedResourceManager"
description: "Auto-generated class reference for MBUnusedResourceManager."
---
# MBUnusedResourceManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBUnusedResourceManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBUnusedResourceManager.cs`

## Overview

`MBUnusedResourceManager` is a three-method static forwarder (`MBUnusedResourceManager.cs:6`) into the engine's resource-usage tracker. `SetMeshUsed`, `SetMaterialUsed` and `SetBodyUsed` each call the identically-named method on `MBAPI.IMBWorld` and do nothing else — no state, no validation, no return value.

It exists for one situation: the engine streams and unloads meshes, materials and bodies based on what the loaded XML declares as in use. A mod that creates or references an asset *at runtime* — built in code, not declared in a module XML — is invisible to that bookkeeping, so the resource can be unloaded out from under it. These three calls are how you tell the engine to keep it.

The parameter names are worth reading carefully, because one of them is misleading. `SetMeshUsed(string meshName)` and `SetBodyUsed(string bodyName)` name their parameters correctly, but `SetMaterialUsed` also names its parameter `meshName` (`MBUnusedResourceManager.cs:15`) and forwards it as `MBAPI.IMBWorld.SetMaterialUsed(meshName)` (`MBUnusedResourceManager.cs:17`). The name is a copy-paste leftover from the method above it; the *position* and the forwarded call are both correct. If you are reading this decompiled source and not a signature, it looks as though materials are looked up by mesh name — they are not.

## Mental Model

These are one-way marks with no query and no unmark. There is no `IsMeshUsed`, no `ClearUsed`, and no scope. Once you have told the world a mesh is in use, it stays in use for the rest of the process, including after the thing that needed it is gone. That is a deliberate trade — leaking a reference is cheap, and un-marking risks unloading something still live.

The names are passed straight through to the engine and are **not** validated here. A misspelled mesh name does not throw at this layer; the engine either finds nothing or logs. So a typo in a mod's asset name presents as "the asset was unloaded anyway", not as an exception at the call site, which makes it a genuinely annoying failure to diagnose.

Because the calls are unconditional forwards, there is no benefit to batching or deduplicating them, but there is also no reason to call them in a hot path — each call is a round trip into the engine's bookkeeping. Call once at setup.

## How to use

**Getting it.** Nothing to construct — it is a plain class with no instance members:

```csharp
MBUnusedResourceManager.SetMeshUsed("my_mod_ground_mesh");
```

**Typical use** — marking assets you reference from code, at the point you know you need them:

```csharp
public class MyCustomMissionObject : MissionObject
{
    public override void InitializeComponents()
    {
        base.InitializeComponents();

        // These are built in code, so no module XML declares them.
        MBUnusedResourceManager.SetBodyUsed("my_mod_body_armoured_recluse");
        MBUnusedResourceManager.SetMaterialUsed("my_mod_material_cloth");
        MBUnusedResourceManager.SetMeshUsed("my_mod_mesh_ramp");
    }
}
```

**Typical use** — marking a batch once during module load, from a `SubModule`:

```csharp
public override void OnGameStart(Game game, IGameStarter gameStarter)
{
    foreach (string meshName in ModAssets.ReferencedAtRuntime)
        MBUnusedResourceManager.SetMeshUsed(meshName);
}
```

**Most common mistake, and what it costs.** Marking assets by `Mesh`/`GameEntity` name copied out of a rendering screenshot rather than out of the asset definition, or assuming the call validates. It does not — it is a bare forward to `MBAPI.IMBWorld.SetMeshUsed` with whatever string you gave it. A name that does not resolve means the engine never learns the asset is in use, so it unloads the asset mid-battle and the object you built renders as nothing, a default mesh, or not at all — with the failure appearing at draw time rather than at the call you thought was responsible. Mark the names the engine will resolve, and mark them during setup rather than at first use, so the asset is never at risk during a frame.

## Key Methods

### SetMeshUsed
`public static void SetMeshUsed(string meshName)`

**Purpose:** Assigns a new value to mesh used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetMeshUsed("example");
```

### SetMaterialUsed
`public static void SetMaterialUsed(string meshName)`

**Purpose:** Assigns a new value to material used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetMaterialUsed("example");
```

### SetBodyUsed
`public static void SetBodyUsed(string bodyName)`

**Purpose:** Assigns a new value to body used and updates the object's internal state.

```csharp
// Static call; no instance required
MBUnusedResourceManager.SetBodyUsed("example");
```

## Usage Example

```csharp
var manager = MBUnusedResourceManager.Current;
```

## See Also

- [Area Index](../)
- [MBGameManager](../MBGameManager)
- [EditorGameManager](../EditorGameManager)
- [ViewCreatorManager](../ViewCreatorManager)
- [MBUnusedResourceManager (中文页面)](../../../../zh/api/mission-ext/MBUnusedResourceManager)