---
title: "HitParticleResultData"
description: "Auto-generated class reference for HitParticleResultData."
---
# HitParticleResultData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct HitParticleResultData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/HitParticleResultData.cs`

## Overview

`HitParticleResultData` is the engine struct the native hit-particle system writes its result into. It is declared `[EngineStruct("Hit_particle_result_data", false, null)]` (`HitParticleResultData.cs:7`) on a `public struct` (`HitParticleResultData.cs:8`), so it is marshalled by value and never allocated by the engine.

Three `int` fields and one method. `StartHitParticleIndex`, `ContinueHitParticleIndex` and `EndHitParticleIndex` are the three particle slots a hit can drive — the burst on impact, the trail while it flies, and the burst at the end. The single member is `Reset()` (`HitParticleResultData.cs:11`), whose whole body sets all three to `-1` (`HitParticleResultData.cs:13`).

There is no constructor. Nothing in the managed 1.3.0 tree constructs this struct, and nothing reads its fields — it exists to be a buffer the native side fills.

## Mental Model

`-1` is the "no particle" sentinel, and `Reset` is the only thing that establishes it. A freshly `default`-initialised `HitParticleResultData` has three zeros, which is *not* the same as "no particle": index 0 is a valid particle index. So if you ever do construct this yourself, an unreset struct points the engine at particle slot 0 three times over, and the only method on the type is the one that fixes it.

The method mutates in place, so it needs a real variable. `Reset()` is not static and returns nothing; calling it on a readonly field, a property or a `default(...)` temporary is either a compile error or a no-op on a copy. Declare it as a local, reset it, then pass it by `ref`.

Because this is a by-value engine struct, the values you set before handing it over are what native sees; edits afterwards do not propagate. There is no notification when native fills it — the managed side does not read it in this version.

Note the sibling struct `AnimationSystemData` uses the same `-1` convention via its own `InvalidBoneIndex = -1` constant; the convention is engine-wide, not local to this type.

## How to use

**Getting one.** Nothing in the managed tree creates or consumes it; construct it yourself if a mod-side particle system needs the shape, and call `Reset()` before use.

**Typical use** — a local, reset, then handed out:

```csharp
using TaleWorlds.DotNet;
using TaleWorlds.MountAndBlade;

public static class MyHitParticles
{
    public static void Configure(ref HitParticleResultData data, int start, int continueIdx, int end)
    {
        // default(T) gives three zeros, which means "particle 0" three times.
        // Reset() is what establishes -1 == "no particle".
        data.Reset();

        data.StartHitParticleIndex = start;
        data.ContinueHitParticleIndex = continueIdx;
        data.EndHitParticleIndex = end;
    }
}

// Use it on a local you own, and pass it by ref:
var result = new HitParticleResultData();
MyHitParticles.Configure(ref result, 12, -1, 15);
// result.StartHitParticleIndex == 12, Continue == -1, End == 15
```

`Reset()` (`HitParticleResultData.cs:11`) and the three public fields (`HitParticleResultData.cs:19` onward) are the entire surface; `[EngineStruct("Hit_particle_result_data", false, null)]` (`HitParticleResultData.cs:7`) is why `ref` is the passing convention.

**Most common mistake:** treating a zero-initialised struct as "empty".

```csharp
var data = new HitParticleResultData();   // Start == 0, Continue == 0, End == 0
agent.PlayHitParticles(ref data);         // plays particle 0 three times
```

`new HitParticleResultData()` zero-initialises the three fields, and zero is a **valid** particle index — the sentinel for "nothing" is `-1`, which only `Reset()` writes (`HitParticleResultData.cs:13`). So an unreset struct silently requests particle 0 instead of requesting nothing, and the hit looks wrong with no error. Always call `Reset()` first, as in the example, and use `-1` for any slot you do not want.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of HitParticleResultData from the subsystem API first
HitParticleResultData hitParticleResultData = ...;
hitParticleResultData.Reset();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
HitParticleResultData entry = ...;
```

## See Also

- [Area Index](../)
- [AnimationSystemData — the sibling engine struct sharing the `-1` sentinel](../AnimationSystemData)
- [中文页面](../../../../zh/api/mission-ext/HitParticleResultData)