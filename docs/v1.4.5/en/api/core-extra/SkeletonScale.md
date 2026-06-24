<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkeletonScale`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SkeletonScale

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class SkeletonScale : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SkeletonScale.cs`

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

**Purpose:** Handles logic related to `deserialize`.

### SetBoneIndices
`public void SetBoneIndices(sbyte boneIndices)`

**Purpose:** Sets the value or state of `bone indices`.

## Usage Example

```csharp
var value = new SkeletonScale();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)