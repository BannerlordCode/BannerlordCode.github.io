---
title: "CombatStatCalculator"
description: "CombatStatCalculator: a public class in TaleWorlds.Core; 12 exposed members (5 methods, 0 properties, 7 fields). Source: TaleWorlds.Core/CombatStatCalculator.cs."
---
# CombatStatCalculator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class CombatStatCalculator`
**File:** `TaleWorlds.Core/CombatStatCalculator.cs`

## Overview

CombatStatCalculator lives in the TaleWorlds.Core module, source file TaleWorlds.Core/CombatStatCalculator.cs. It is a public class; the inheritance chain is CombatStatCalculator. It exposes 12 public/protected members: 5 methods, 7 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatStatCalculator is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain CombatStatCalculator. The surface is method-led (methods 5/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/CombatStatCalculator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForSwing` | `public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)` | method |
| `CalculateStrikeMagnitudeForThrust` | `public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)` | method |
| `CalculateBaseBlowMagnitudeForSwing` | `public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)` | method |
| `CalculateBaseBlowMagnitudeForThrust` | `public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)` | method |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)` | method |
| `ReferenceSwingSpeed` | `public const float ReferenceSwingSpeed` | field |
| `ReferenceThrustSpeed` | `public const float ReferenceThrustSpeed` | field |
| `SwingSpeedConst` | `public const float SwingSpeedConst` | field |
| `ThrustSpeedConst` | `public const float ThrustSpeedConst` | field |
| `DefaultImpactDistanceFromTip` | `public const float DefaultImpactDistanceFromTip` | field |
| `ArmLength` | `public const float ArmLength` | field |
| `ArmWeight` | `public const float ArmWeight` | field |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
