<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Monster`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Monster

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`Monster` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

### GetBoneToAttachForItemFlags

```csharp
public sbyte GetBoneToAttachForItemFlags(ItemFlags itemFlags)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)