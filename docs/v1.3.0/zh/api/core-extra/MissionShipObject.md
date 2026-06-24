<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionShipObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionShipObject

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MissionShipObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.Core/MissionShipObject.cs`

## 概述

`MissionShipObject` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Prefab` | `public string Prefab { get; }` |
| `DeploymentArea` | `public Vec2 DeploymentArea { get; }` |
| `Mass` | `public float Mass { get; }` |
| `FloatingForceMultiplier` | `public float FloatingForceMultiplier { get; }` |
| `MaximumSubmergedVolumeRatio` | `public float MaximumSubmergedVolumeRatio { get; }` |
| `RudderStockPosition` | `public Vec3 RudderStockPosition { get; }` |
| `MaxLateralDragShift` | `public float MaxLateralDragShift { get; }` |
| `LateralDragShiftCriticalAngle` | `public float LateralDragShiftCriticalAngle { get; }` |
| `PhysicsReference` | `public ShipPhysicsReference PhysicsReference { get; }` |
| `MomentOfInertiaMultiplier` | `public Vec3 MomentOfInertiaMultiplier { get; }` |
| `LinearFrictionMultiplier` | `public LinearFrictionTerm LinearFrictionMultiplier { get; }` |
| `AngularFrictionMultiplier` | `public Vec3 AngularFrictionMultiplier { get; }` |
| `TorqueMultiplierOfLateralBuoyantForces` | `public float TorqueMultiplierOfLateralBuoyantForces { get; }` |
| `TorqueMultiplierOfVerticalBuoyantForces` | `public Vec3 TorqueMultiplierOfVerticalBuoyantForces { get; }` |
| `OarsmenForceMultiplier` | `public float OarsmenForceMultiplier { get; }` |
| `OarsTipSpeed` | `public float OarsTipSpeed { get; }` |
| `OarFrictionMultiplier` | `public float OarFrictionMultiplier { get; }` |
| `Sails` | `public MBReadOnlyList<ShipSail> Sails { get; }` |
| `OarCount` | `public int OarCount { get; }` |
| `RudderBladeLength` | `public float RudderBladeLength { get; }` |
| `RudderBladeHeight` | `public float RudderBladeHeight { get; }` |
| `RudderDeflectionCoef` | `public float RudderDeflectionCoef { get; }` |
| `RudderRotationMax` | `public float RudderRotationMax { get; }` |
| `RudderRotationRate` | `public float RudderRotationRate { get; }` |
| `RudderForceMax` | `public float RudderForceMax { get; }` |
| `MaxLinearSpeed` | `public float MaxLinearSpeed { get; }` |
| `MaxLinearAccel` | `public float MaxLinearAccel { get; }` |
| `MaxAngularSpeed` | `public float MaxAngularSpeed { get; }` |
| `MaxAngularAccel` | `public float MaxAngularAccel { get; }` |
| `PartialHitPointsRatio` | `public float PartialHitPointsRatio { get; }` |
| `HasSails` | `public bool HasSails { get; }` |
| `HasValidRudderStockPosition` | `public bool HasValidRudderStockPosition { get; }` |
| `ShipPhysicsReferenceId` | `public string ShipPhysicsReferenceId { get; }` |

## 主要方法

### SetPhysicsReference
`public void SetPhysicsReference(ShipPhysicsReference physicsReference)`

**用途 / Purpose:** 设置 `physics reference` 的值或状态。

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var value = new MissionShipObject();
value.SetPhysicsReference(physicsReference);
```

## 参见

- [完整类目录](../catalog)