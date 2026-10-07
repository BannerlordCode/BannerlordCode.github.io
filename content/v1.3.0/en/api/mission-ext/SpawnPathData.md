---
title: "SpawnPathData"
description: "Auto-generated class reference for SpawnPathData."
---
# SpawnPathData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SpawnPathData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawnPathData.cs`

## Overview

`SpawnPathData` is a small immutable `struct` that maps a normalised offset onto a point and a facing direction along a scene `Path` (`SpawnPathData.cs:8`). It is how spawn points get placed *along a route* rather than at a fixed marker — reinforcement columns arriving from a map edge, or a sally-out walking a line.

Everything is built from four `readonly` fields: the `Scene`, the `Path`, `IsInverted`, and `PivotRatio` — the offset that maps to the path's own start. There is also a `SnapType` that decides what the vertical component becomes. You obtain one through `Create` or `Invert`; the constructor is private.

Offsets are always **relative to the pivot**, not absolute along the path. `ClampPathOffset` adds the pivot, clamps the result into 0..1, then subtracts the pivot again, so it returns a correction that can legitimately be negative (`SpawnPathData.cs:27`). `GetOffsetOverflow` is the diagnostic companion: it reports how far past either end you went, as a negative number below the start and a positive overshoot past the end (`SpawnPathData.cs:33`).

There are three facing modes, one per public geometry method: `GetSpawnPathFrameFacingTarget` faces one offset toward another, `GetSpawnPathFrameFacingPivot` faces an offset outward from the pivot, and `GetSpawnPathFrameFacingTangentDirection` follows the path's tangent in a chosen direction.

## Mental Model

`IsValid` is stricter than it looks: it requires a non-null scene, a non-null path, **and** `Path.NumberOfPoints > 1` (`SpawnPathData.cs:16`). A single-point path is invalid, and so is `SpawnPathData.Invalid`, which is a static readonly instance constructed with null scene and null path (`SpawnPathData.cs:153`). The important consequence is in `GetSpawnFrame`: when `IsValid` is false it returns `MatrixFrame.Identity` (`SpawnPathData.cs:116`). So an invalid `SpawnPathData` does not throw — it silently hands every caller the origin with identity rotation. Any spawn position computed from a bad path is the world origin.

Direction is derived by *finite difference*, never analytically. Each facing method samples the frame at a small step along the offset and normalises the difference. That step is the literal `0.01f`, and it is inlined at every site rather than taken from `SpawnPathEpsilon = 0.01f` (`SpawnPathData.cs:150`) — the constant is declared and never referenced. The consequence is that if the two samples land on the same path point — which happens at the ends of a short path, or where the pivot clamp collapses the step — the difference is zero and `Normalized()` has nothing to work with.

`GetSpawnPathFrameFacingTarget` has a genuinely surprising branch. If `baseOffset == targetOffset` it immediately delegates to the *pivot* method rather than the tangent one (`SpawnPathData.cs:48`). Separately, when `decideDirectionDynamically` is set and tangent direction is off, it asks the scene for the true path distance between the two sample points; if that distance is at least the straight-line length times `(1 + dynamicDistancePercentage)`, it concludes the path "backtracks" there and switches to tangent direction (`SpawnPathData.cs:65`). That is how it keeps a spawn from facing the wrong way when the route doubles back on itself.

`GetSpawnPathFrameFacingPivot` contains a branch that cannot execute as written. It initialises `num` to `0f` and then tests `if (useTangentDirection || num == pathOffset)` (`SpawnPathData.cs:85`). Since `num` is `0f` and `pathOffset` has already been through `ClampPathOffset`, the `num == pathOffset` disjunct is true only when the clamped offset is zero — so the condition reduces almost entirely to `useTangentDirection`, and the offset it then samples from is always `0f`, i.e. the pivot, never the original `pathOffset`. Read it as "face away from the pivot", which is what the name promises.

`Invert` mirrors the whole coordinate frame rather than reversing sample order: it flips `IsInverted`, mirrors `PivotRatio` as `1 - pivotRatio` floored at zero, and negates the forward vector inside `GetSpawnFrame` (`SpawnPathData.cs:23`, `SpawnPathData.cs:126`) before re-orthonormalising. The `MathF.Max(..., 0f)` on the pivot means an inverted path with pivot 1 gets pivot 0, not a negative one.

## How to use

**Getting it.** Build one from a scene path:

```csharp
SpawnPathData path = SpawnPathData.Create(scene, scenePath,
    pivotRatio: 0.1f,
    isInverted: false,
    snapType: SpawnPathData.SnapMethod.SnapToTerrain);

if (!path.IsValid)
    MBDebug.Print("bad spawn path — positions would all be the world origin");
```

**Typical use** — placing a spawn that faces along the route toward the next slot:

```csharp
SpawnPathData path = SpawnPathData.Create(scene, scenePath, pivotRatio: 0f);

path.GetSpawnPathFrameFacingTarget(
    baseOffset: slotRatio,
    targetOffset: slotRatio + 0.05f,
    useTangentDirection: false,
    decideDirectionDynamically: true,   // avoid facing backwards on a doubling-back path
    out Vec2 position,
    out Vec2 direction);

agent.SetPosition(new Vec3(position.X, position.Y, 0f));
agent.SetFacingDirection(direction);
```

**Typical use** — reusing the same path reversed for the enemy side:

```csharp
SpawnPathData playerPath = SpawnPathData.Create(scene, scenePath, pivotRatio: 0.05f);
SpawnPathData enemyPath  = playerPath.Invert();   // mirrors pivot and flips the forward vector
```

**Most common mistake, and what it costs.** Treating `IsValid` as advisory and going ahead with the maths. An invalid instance does not fail — `GetSpawnFrame` returns `MatrixFrame.Identity`, so every position comes back as the world origin and every direction as a normalized zero vector. Reinforcements stack at the map corner instead of arriving along the route, and because the frame is well-formed nothing throws and no assertion fires. The same trap applies to the end-of-path degenerate case: `GetSpawnPathFrameFacingPivot` samples from `0f` regardless of where you asked, so a caller passing `pathOffset` other than the pivot gets a direction that was computed somewhere else entirely. Always branch on `IsValid` before using a `SpawnPathData`, and pass offsets that stay inside the usable range — `GetOffsetOverflow` will tell you how far outside you are.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### Invert
`public SpawnPathData Invert()`

**Purpose:** Executes the Invert logic.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.Invert();
```

### ClampPathOffset
`public float ClampPathOffset(float pathOffsetRatio)`

**Purpose:** Executes the ClampPathOffset logic.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.ClampPathOffset(0);
```

### GetOffsetOverflow
`public float GetOffsetOverflow(float pathOffset)`

**Purpose:** Reads and returns the offset overflow value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
var result = spawnPathData.GetOffsetOverflow(0);
```

### GetSpawnPathFrameFacingTarget
`public void GetSpawnPathFrameFacingTarget(float baseOffset, float targetOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection, bool decideDirectionDynamically = false, float dynamicDistancePercentage = 0.2f)`

**Purpose:** Reads and returns the spawn path frame facing target value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTarget(0, 0, false, spawnPathPosition, spawnPathDirection, false, 0);
```

### GetSpawnPathFrameFacingPivot
`public void GetSpawnPathFrameFacingPivot(float pathOffset, bool useTangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Reads and returns the spawn path frame facing pivot value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingPivot(0, false, spawnPathPosition, spawnPathDirection);
```

### GetSpawnPathFrameFacingTangentDirection
`public void GetSpawnPathFrameFacingTangentDirection(float baseOffset, int tangentDirection, out Vec2 spawnPathPosition, out Vec2 spawnPathDirection)`

**Purpose:** Reads and returns the spawn path frame facing tangent direction value held by the this instance.

```csharp
// Obtain an instance of SpawnPathData from the subsystem API first
SpawnPathData spawnPathData = ...;
spawnPathData.GetSpawnPathFrameFacingTangentDirection(0, 0, spawnPathPosition, spawnPathDirection);
```

### Create
`public static SpawnPathData Create(Scene scene, Path path, float pivotRatio = 0f, bool isInverted = false, SpawnPathData.SnapMethod snapType = SpawnPathData.SnapMethod.DontSnap)`

**Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
SpawnPathData.Create(scene, path, 0, false, spawnPathData.SnapMethod.DontSnap);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SpawnPathData entry = ...;
```

## See Also

- [Area Index](../)
- [MissionAgentSpawnLogic](../MissionAgentSpawnLogic)
- [SpawnComponent](../SpawnComponent)
- [BattleSpawnLogic](../BattleSpawnLogic)
- [SpawnPathData (中文页面)](../../../../zh/api/mission-ext/SpawnPathData)