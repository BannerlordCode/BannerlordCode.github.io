<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Monster`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Monster

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `Monster` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `BaseMonster` | `public string BaseMonster { get; }` |
| `BodyCapsuleRadius` | `public float BodyCapsuleRadius { get; }` |
| `BodyCapsulePoint1` | `public Vec3 BodyCapsulePoint1 { get; }` |
| `BodyCapsulePoint2` | `public Vec3 BodyCapsulePoint2 { get; }` |
| `CrouchedBodyCapsuleRadius` | `public float CrouchedBodyCapsuleRadius { get; }` |
| `CrouchedBodyCapsulePoint1` | `public Vec3 CrouchedBodyCapsulePoint1 { get; }` |
| `CrouchedBodyCapsulePoint2` | `public Vec3 CrouchedBodyCapsulePoint2 { get; }` |
| `Flags` | `public AgentFlag Flags { get; }` |
| `Weight` | `public int Weight { get; }` |
| `HitPoints` | `public int HitPoints { get; }` |
| `ActionSetCode` | `public string ActionSetCode { get; }` |
| `FemaleActionSetCode` | `public string FemaleActionSetCode { get; }` |
| `NumPaces` | `public int NumPaces { get; }` |
| `MonsterUsage` | `public string MonsterUsage { get; }` |
| `WalkingSpeedLimit` | `public float WalkingSpeedLimit { get; }` |
| `CrouchWalkingSpeedLimit` | `public float CrouchWalkingSpeedLimit { get; }` |
| `JumpAcceleration` | `public float JumpAcceleration { get; }` |
| `AbsorbedDamageRatio` | `public float AbsorbedDamageRatio { get; }` |
| `SoundAndCollisionInfoClassName` | `public string SoundAndCollisionInfoClassName { get; }` |
| `RiderCameraHeightAdder` | `public float RiderCameraHeightAdder { get; }` |


## Key Methods

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetBoneToAttachForItemFlags

```csharp
public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)