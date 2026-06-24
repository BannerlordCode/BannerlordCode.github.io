<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandingPointWithWeaponRequirement`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StandingPointWithWeaponRequirement

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StandingPointWithWeaponRequirement : StandingPoint`
**Base:** `StandingPoint`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithWeaponRequirement.cs`

## Overview

`StandingPointWithWeaponRequirement` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### InitRequiredWeaponClasses
`public void InitRequiredWeaponClasses(WeaponClass requiredWeaponClasses)`

**Purpose:** Initializes the state, resources, or bindings for `required weapon classes`.

### InitRequiredWeapon
`public void InitRequiredWeapon(ItemObject weapon)`

**Purpose:** Initializes the state, resources, or bindings for `required weapon`.

### InitGivenWeapon
`public void InitGivenWeapon(ItemObject weapon)`

**Purpose:** Initializes the state, resources, or bindings for `given weapon`.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### SetHasAlternative
`public void SetHasAlternative(bool hasAlternative)`

**Purpose:** Sets the value or state of `has alternative`.

### HasAlternative
`public override bool HasAlternative()`

**Purpose:** Checks whether the current object has/contains `alternative`.

### SetUsingBattleSide
`public void SetUsingBattleSide(BattleSideEnum side)`

**Purpose:** Sets the value or state of `using battle side`.

## Usage Example

```csharp
var value = new StandingPointWithWeaponRequirement();
value.InitRequiredWeaponClasses(requiredWeaponClasses);
```

## See Also

- [Complete Class Catalog](../catalog)