---
title: "StandingPointWithWeaponRequirement"
description: "Auto-generated class reference for StandingPointWithWeaponRequirement."
---
# StandingPointWithWeaponRequirement

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`
**Base:** `StandingPoint`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## Overview

`StandingPointWithWeaponRequirement` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitRequiredWeaponClasses
`public void InitRequiredWeaponClasses(WeaponClass requiredWeaponClasses)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by required weapon classes.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.InitRequiredWeaponClasses(requiredWeaponClasses);
```

### InitRequiredWeapon
`public void InitRequiredWeapon(ItemObject weapon)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by required weapon.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.InitRequiredWeapon(weapon);
```

### InitGivenWeapon
`public void InitGivenWeapon(ItemObject weapon)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by given weapon.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.InitGivenWeapon(weapon);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
var result = standingPointWithWeaponRequirement.IsDisabledForAgent(agent);
```

### SetHasAlternative
`public void SetHasAlternative(bool hasAlternative)`

**Purpose:** **Purpose:** Assigns a new value to has alternative and updates the object's internal state.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.SetHasAlternative(false);
```

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** **Purpose:** Determines whether the this instance already holds alternative.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
var result = standingPointWithWeaponRequirement.HasAlternative();
```

### SetUsingBattleSide
`public void SetUsingBattleSide(BattleSideEnum side)`

**Purpose:** **Purpose:** Assigns a new value to using battle side and updates the object's internal state.

```csharp
// Obtain an instance of StandingPointWithWeaponRequirement from the subsystem API first
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.SetUsingBattleSide(side);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StandingPointWithWeaponRequirement standingPointWithWeaponRequirement = ...;
standingPointWithWeaponRequirement.InitRequiredWeaponClasses(requiredWeaponClasses);
```

## See Also

- [Area Index](../)