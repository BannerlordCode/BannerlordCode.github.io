---
title: "SkeletonScale"
description: "Auto-generated class reference for SkeletonScale."
---
# SkeletonScale

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/SkeletonScale.cs`

## Overview

`SkeletonScale` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkeletonModel` | `public string SkeletonModel { get; }` |
| `MountSitBoneScale` | `public Vec3 MountSitBoneScale { get; }` |
| `MountRadiusAdder` | `public float MountRadiusAdder { get; }` |
| `Scales` | `public Vec3 Scales { get; }` |
| `BoneNames` | `public List<string> BoneNames { get; }` |
| `BoneIndices` | `public sbyte BoneIndices { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of SkeletonScale from the subsystem API first
SkeletonScale skeletonScale = ...;
skeletonScale.Deserialize(objectManager, node);
```

### SetBoneIndices
`public void SetBoneIndices(sbyte boneIndices)`

**Purpose:** Assigns a new value to bone indices and updates the object's internal state.

```csharp
// Obtain an instance of SkeletonScale from the subsystem API first
SkeletonScale skeletonScale = ...;
skeletonScale.SetBoneIndices(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SkeletonScale skeletonScale = ...;
skeletonScale.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)