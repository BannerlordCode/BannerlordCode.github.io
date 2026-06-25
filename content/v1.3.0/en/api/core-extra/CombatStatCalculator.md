---
title: "CombatStatCalculator"
description: "Auto-generated class reference for CombatStatCalculator."
---
# CombatStatCalculator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class CombatStatCalculator`
**Base:** none
**File:** `TaleWorlds.Core/CombatStatCalculator.cs`

## Overview

`CombatStatCalculator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CalculateStrikeMagnitudeForSwing
`public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)`

**Purpose:** Calculates the current value or result of `strike magnitude for swing`.

```csharp
// Static call; no instance required
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)`

**Purpose:** Calculates the current value or result of `strike magnitude for thrust`.

```csharp
// Static call; no instance required
CombatStatCalculator.CalculateStrikeMagnitudeForThrust(0, 0, 0, false);
```

### CalculateBaseBlowMagnitudeForSwing
`public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)`

**Purpose:** Calculates the current value or result of `base blow magnitude for swing`.

```csharp
// Static call; no instance required
CombatStatCalculator.CalculateBaseBlowMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

### CalculateBaseBlowMagnitudeForThrust
`public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)`

**Purpose:** Calculates the current value or result of `base blow magnitude for thrust`.

```csharp
// Static call; no instance required
CombatStatCalculator.CalculateBaseBlowMagnitudeForThrust(0, 0, 0);
```

### CalculateBaseBlowMagnitudeForPassiveUsage
`public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)`

**Purpose:** Calculates the current value or result of `base blow magnitude for passive usage`.

```csharp
// Static call; no instance required
CombatStatCalculator.CalculateBaseBlowMagnitudeForPassiveUsage(0, 0);
```

## Usage Example

```csharp
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

## See Also

- [Area Index](../)