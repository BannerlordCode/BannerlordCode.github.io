<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatStatCalculator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatStatCalculator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `CombatStatCalculator` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### CalculateStrikeMagnitudeForSwing

```csharp
public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)
```

### CalculateStrikeMagnitudeForThrust

```csharp
public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)
```

### CalculateBaseBlowMagnitudeForSwing

```csharp
public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)
```

### CalculateBaseBlowMagnitudeForThrust

```csharp
public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)
```

### CalculateBaseBlowMagnitudeForPassiveUsage

```csharp
public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)