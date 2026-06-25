---
title: "MultiplayerClassDivisions"
description: "Auto-generated class reference for MultiplayerClassDivisions."
---
# MultiplayerClassDivisions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassDivisions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

## Overview

`MultiplayerClassDivisions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MultiplayerHeroClassGroups` | `public static List<MultiplayerClassDivisions.MPHeroClassGroup> MultiplayerHeroClassGroups { get; }` |
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

### GetMPHeroClasses
`public static IEnumerable<MultiplayerClassDivisions.MPHeroClass> GetMPHeroClasses(BasicCultureObject culture)`

**Purpose:** Reads and returns the m p hero classes value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMPHeroClasses(culture);
```

### GetMPHeroClasses
`public static MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass> GetMPHeroClasses()`

**Purpose:** Reads and returns the m p hero classes value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMPHeroClasses();
```

### GetMPHeroClassForCharacter
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)`

**Purpose:** Reads and returns the m p hero class for character value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMPHeroClassForCharacter(character);
```

### GetAllPerksForHeroClass
`public static List<List<IReadOnlyPerkObject>> GetAllPerksForHeroClass(MultiplayerClassDivisions.MPHeroClass heroClass, string forcedForGameMode = null)`

**Purpose:** Reads and returns the all perks for hero class value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetAllPerksForHeroClass(heroClass, "example");
```

### GetMPHeroClassForPeer
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)`

**Purpose:** Reads and returns the m p hero class for peer value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMPHeroClassForPeer(peer, false);
```

### GetMPHeroClassForFormation
`public static TargetIconType GetMPHeroClassForFormation(Formation formation)`

**Purpose:** Reads and returns the m p hero class for formation value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMPHeroClassForFormation(formation);
```

### GetAvailablePerksForPeer
`public static List<List<IReadOnlyPerkObject>> GetAvailablePerksForPeer(MissionPeer missionPeer)`

**Purpose:** Reads and returns the available perks for peer value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetAvailablePerksForPeer(missionPeer);
```

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.Initialize();
```

### Release
`public static void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.Release();
```

### GetMinimumTroopCost
`public static int GetMinimumTroopCost(BasicCultureObject culture = null)`

**Purpose:** Reads and returns the minimum troop cost value held by the this instance.

```csharp
// Static call; no instance required
MultiplayerClassDivisions.GetMinimumTroopCost(null);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetHashCode();
```

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**Purpose:** Reads and returns the all available perks for list index value held by the this instance.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetAllAvailablePerksForListIndex(0, "example");
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
multiplayerClassDivisions.Deserialize(objectManager, node);
```

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**Purpose:** Determines whether the this instance is in the troop character state or condition.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.IsTroopCharacter(character);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of MultiplayerClassDivisions from the subsystem API first
MultiplayerClassDivisions multiplayerClassDivisions = ...;
var result = multiplayerClassDivisions.GetHashCode();
```

## Usage Example

```csharp
MultiplayerClassDivisions.GetMPHeroClasses(culture);
```

## See Also

- [Area Index](../)