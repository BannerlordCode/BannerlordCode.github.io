---
title: "DeformKeyData"
description: "Auto-generated class reference for DeformKeyData."
---
# DeformKeyData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct DeformKeyData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DeformKeyData.cs`

## Overview

`DeformKeyData` is one keyframe of the engine's vertex-deformation animation. It is a plain `public struct` carrying `[EngineStruct("Deform_Key_Data", false, null)]` (`DeformKeyData.cs:8`), so like the other engine structs it is marshalled by value and never allocated by the engine. Six public fields, no methods, no constructor.

The fields are `int GroupId` (`DeformKeyData.cs:12`), `int KeyTimePoint` (`DeformKeyData.cs:15`), `float KeyMin` (`DeformKeyData.cs:18`), `float KeyMax` (`DeformKeyData.cs:21`), `float Value` (`DeformKeyData.cs:24`) and `string Id` (`DeformKeyData.cs:28`). Note the time point is an **int**, not a float, and the last field is a string rather than another number. There is no managed code in the 1.3.0 tree that reads or writes it — it exists to describe a keyframe to the native deform system, and the only thing you can do with it from C# is build one and hand it over.

## Mental Model

The struct has no lifecycle and no owner. There is no registry, no pool, no factory and no consumer in managed code. Nothing in the shipped assemblies constructs a `DeformKeyData`, so if you are holding one, you built it yourself and you own it entirely.

`GroupId` is the field that gives the keyframe meaning: it says which deformation channel the key belongs to, and `KeyTimePoint` says when in the animation it fires — as an integer, so sub-second timing has to be expressed in whatever unit the native side counts. `KeyMin` and `KeyMax` are the magnitude range and `Value` the interpolated amount, while `Id` is a free-form string identifier.

Because there is no managed consumer, there is also no validation. Nothing checks that `GroupId` refers to a group you defined, that `KeyTimePoint` is inside the animation's duration, or that `KeyMin <= KeyMax`. The engine receives whatever you built. Get the group wrong and the key is attributed to a different channel — a silent misplacement rather than an error.

The `[EngineStruct]` attribute's `false, null` arguments (`DeformKeyData.cs:8`) mean the engine does not allocate or own the storage, so the struct is passed by value across the boundary. That makes copies free and aliases impossible to observe, but it also means any edit you make after handing it over does not reach the engine.

## How to use

**Getting one.** There is no entry point: construct it yourself with the object-initializer syntax and pass it to whichever engine or mod code consumes deformation keys. No shipped 1.3.0 API takes one, so in practice this means a mod-side deform system of your own.

**Typical use** — building a key list for a deform group:

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

// One keyframe: which group, when, and the magnitude range.
var keys = new List<DeformKeyData>
{
    new DeformKeyData
    {
        Id = "my_deform_intro",
        GroupId = myDeformGroupId,
        KeyTimePoint = 0,          // int, not float
        KeyMin = 0f,
        KeyMax = 1f,
        Value = 0f
    },
    new DeformKeyData
    {
        Id = "my_deform_intro",
        GroupId = myDeformGroupId,
        KeyTimePoint = 500,
        KeyMin = 0f,
        KeyMax = 1f,
        Value = 1f
    }
};

// The struct is passed by value across the engine boundary
// ([EngineStruct("Deform_Key_Data", false, null)]), so build it, use it, done.
foreach (DeformKeyData key in keys)
{
    MyDeformSystem.AddKey(key.Id, key.GroupId, key.KeyTimePoint, key.KeyMin, key.KeyMax, key.Value);
}
```

Every field name comes straight from the declaration: `GroupId` (`DeformKeyData.cs:12`), `KeyTimePoint` (`DeformKeyData.cs:15`), `KeyMin` (`DeformKeyData.cs:18`), `KeyMax` (`DeformKeyData.cs:21`), `Value` (`DeformKeyData.cs:24`), `Id` (`DeformKeyData.cs:28`).

**Most common mistake:** expecting the struct to be usable as a standalone animation description.

```csharp
var key = new DeformKeyData { GroupId = 0, KeyTimePoint = 0.5f };
//                            ^ int field, float literal: does not compile
```

Nothing in the managed tree constructs or consumes a `DeformKeyData`, so there is no pipeline that will pick your value up — writing the consumer is on you, including whatever validation the engine would otherwise have given you. Treat this as a description format you feed to your own code, set the group and the integer time point explicitly, and do not expect the game to interpret the value for you.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DeformKeyData entry = ...;
```

## See Also

- [Area Index](../)
- [HitParticleResultData — the sibling engine struct with a `Reset` method](../HitParticleResultData)
- [中文页面](../../../../zh/api/mission-ext/DeformKeyData)