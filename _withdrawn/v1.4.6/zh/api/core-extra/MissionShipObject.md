---
title: "MissionShipObject"
description: "MissionShipObject：TaleWorlds.Core 的 public 类，继承 MBObjectBase；公开成员 39 个（方法 2、属性 35、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/MissionShipObject.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionShipObject

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MissionShipObject : MBObjectBase`
**File:** `TaleWorlds.Core/MissionShipObject.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

MissionShipObject 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/MissionShipObject.cs。它是一个 public 类，实现/继承 MBObjectBase，继承链为 MissionShipObject → MBObjectBase。public/protected 成员共 39 个：2 方法、35 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionShipObject 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 MissionShipObject → MBObjectBase。成员构成以属性为主（属性 35/39，方法 2/39），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/MissionShipObject.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Prefab` | `public string Prefab` | 属性 |
| `DeploymentArea` | `public Vec2 DeploymentArea` | 属性 |
| `Mass` | `public float Mass` | 属性 |
| `FloatingForceMultiplier` | `public float FloatingForceMultiplier` | 属性 |
| `MaximumSubmergedVolumeRatio` | `public float MaximumSubmergedVolumeRatio` | 属性 |
| `RudderStockPosition` | `public Vec3 RudderStockPosition` | 属性 |
| `MaxLateralDragShift` | `public float MaxLateralDragShift` | 属性 |
| `LateralDragShiftCriticalAngle` | `public float LateralDragShiftCriticalAngle` | 属性 |
| `PhysicsReference` | `public ShipPhysicsReference PhysicsReference` | 属性 |
| `MomentOfInertiaMultiplier` | `public Vec3 MomentOfInertiaMultiplier` | 属性 |
| `LinearFrictionMultiplier` | `public LinearFrictionTerm LinearFrictionMultiplier` | 属性 |
| `AngularFrictionMultiplier` | `public Vec3 AngularFrictionMultiplier` | 属性 |
| `TorqueMultiplierOfLateralBuoyantForces` | `public float TorqueMultiplierOfLateralBuoyantForces` | 属性 |
| `TorqueMultiplierOfVerticalBuoyantForces` | `public Vec3 TorqueMultiplierOfVerticalBuoyantForces` | 属性 |
| `OarsmenForceMultiplier` | `public float OarsmenForceMultiplier` | 属性 |
| `OarsTipSpeed` | `public float OarsTipSpeed` | 属性 |
| `OarFrictionMultiplier` | `public float OarFrictionMultiplier` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<ShipSail>Sails` | 属性 |
| `OarCount` | `public int OarCount` | 属性 |
| `RudderBladeLength` | `public float RudderBladeLength` | 属性 |
| `RudderBladeHeight` | `public float RudderBladeHeight` | 属性 |
| `RudderDeflectionCoef` | `public float RudderDeflectionCoef` | 属性 |
| `RudderRotationMax` | `public float RudderRotationMax` | 属性 |
| `RudderRotationRate` | `public float RudderRotationRate` | 属性 |
| `RudderForceMax` | `public float RudderForceMax` | 属性 |
| `MaxLinearSpeed` | `public float MaxLinearSpeed` | 属性 |
| `MaxLinearAccel` | `public float MaxLinearAccel` | 属性 |
| `MaxAngularSpeed` | `public float MaxAngularSpeed` | 属性 |
| `MaxAngularAccel` | `public float MaxAngularAccel` | 属性 |
| `PartialHitPointsRatio` | `public float PartialHitPointsRatio` | 属性 |
| `HasSails` | `public bool HasSails` | 属性 |
| `HasValidRudderStockPosition` | `public bool HasValidRudderStockPosition` | 属性 |
| `ShipPhysicsReferenceId` | `public string ShipPhysicsReferenceId` | 属性 |
| `BowAngleLimitFromCenterline` | `public float BowAngleLimitFromCenterline` | 属性 |
| `LandingDepth` | `public float LandingDepth` | 属性 |
| `MissionShipObject` | `public MissionShipObject()` | 构造函数 |
| `MissionShipObject` | `public MissionShipObject(string stringId) : base(stringId)` | 构造函数 |
| `SetPhysicsReference` | `public void SetPhysicsReference(ShipPhysicsReference physicsReference)` | 方法 |
| `Deserialize` | `public override void Deserialize(MBObjectManager objectManager, XmlNode node)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBObjectBase](../../campaign-ext/MBObjectBase/)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
