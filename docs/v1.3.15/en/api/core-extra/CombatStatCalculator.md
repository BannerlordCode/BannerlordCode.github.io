<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CombatStatCalculator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CombatStatCalculator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class CombatStatCalculator`
**Area:** core-extra

## Overview

`CombatStatCalculator` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CalculateStrikeMagnitudeForSwing
`public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)`

**Purpose:** Handles logic related to `calculate strike magnitude for swing`.

### CalculateStrikeMagnitudeForThrust
`public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)`

**Purpose:** Handles logic related to `calculate strike magnitude for thrust`.

### CalculateBaseBlowMagnitudeForSwing
`public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)`

**Purpose:** Handles logic related to `calculate base blow magnitude for swing`.

### CalculateBaseBlowMagnitudeForThrust
`public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)`

**Purpose:** Handles logic related to `calculate base blow magnitude for thrust`.

### CalculateBaseBlowMagnitudeForPassiveUsage
`public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)`

**Purpose:** Handles logic related to `calculate base blow magnitude for passive usage`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
