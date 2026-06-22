<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SkeletonScale`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkeletonScale

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `SkeletonScale` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### SetBoneIndices

```csharp
public void SetBoneIndices(sbyte boneIndices)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)