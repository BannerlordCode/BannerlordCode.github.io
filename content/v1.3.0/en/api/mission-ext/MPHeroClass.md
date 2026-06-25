---
title: "MPHeroClass"
description: "Auto-generated class reference for MPHeroClass."
---
# MPHeroClass

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHeroClass : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## Overview

`MPHeroClass` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroCharacter` | `public BasicCharacterObject HeroCharacter { get; }` |
| `TroopCharacter` | `public BasicCharacterObject TroopCharacter { get; }` |
| `BannerBearerCharacter` | `public BasicCharacterObject BannerBearerCharacter { get; }` |
| `Culture` | `public BasicCultureObject Culture { get; }` |
| `ClassGroup` | `public MultiplayerClassDivisions.MPHeroClassGroup ClassGroup { get; }` |
| `HeroIdleAnim` | `public string HeroIdleAnim { get; }` |
| `HeroMountIdleAnim` | `public string HeroMountIdleAnim { get; }` |
| `TroopIdleAnim` | `public string TroopIdleAnim { get; }` |
| `TroopMountIdleAnim` | `public string TroopMountIdleAnim { get; }` |
| `ArmorValue` | `public int ArmorValue { get; }` |
| `Health` | `public int Health { get; }` |
| `HeroMovementSpeedMultiplier` | `public float HeroMovementSpeedMultiplier { get; }` |
| `HeroCombatMovementSpeedMultiplier` | `public float HeroCombatMovementSpeedMultiplier { get; }` |
| `HeroTopSpeedReachDuration` | `public float HeroTopSpeedReachDuration { get; }` |
| `TroopMovementSpeedMultiplier` | `public float TroopMovementSpeedMultiplier { get; }` |
| `TroopCombatMovementSpeedMultiplier` | `public float TroopCombatMovementSpeedMultiplier { get; }` |
| `TroopTopSpeedReachDuration` | `public float TroopTopSpeedReachDuration { get; }` |
| `TroopMultiplier` | `public float TroopMultiplier { get; }` |
| `TroopCost` | `public int TroopCost { get; }` |
| `TroopCasualCost` | `public int TroopCasualCost { get; }` |
| `TroopBattleCost` | `public int TroopBattleCost { get; }` |
| `MeleeAI` | `public int MeleeAI { get; }` |
| `RangedAI` | `public int RangedAI { get; }` |
| `HeroInformation` | `public TextObject HeroInformation { get; }` |
| `TroopInformation` | `public TextObject TroopInformation { get; }` |
| `IconType` | `public TargetIconType IconType { get; }` |
| `HeroName` | `public TextObject HeroName { get; }` |
| `TroopName` | `public TextObject TroopName { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MPHeroClass from the subsystem API first
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MPHeroClass from the subsystem API first
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.GetHashCode();
```

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**Purpose:** Reads and returns the all available perks for list index value held by the this instance.

```csharp
// Obtain an instance of MPHeroClass from the subsystem API first
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.GetAllAvailablePerksForListIndex(0, "example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MPHeroClass from the subsystem API first
MPHeroClass mPHeroClass = ...;
mPHeroClass.Deserialize(objectManager, node);
```

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop character state or condition.

```csharp
// Obtain an instance of MPHeroClass from the subsystem API first
MPHeroClass mPHeroClass = ...;
var result = mPHeroClass.IsTroopCharacter(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPHeroClass mPHeroClass = ...;
mPHeroClass.Equals(obj);
```

## See Also

- [Area Index](../)