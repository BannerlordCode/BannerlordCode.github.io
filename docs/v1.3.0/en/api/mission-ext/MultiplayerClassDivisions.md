<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerClassDivisions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `m p hero classes`.

### GetMPHeroClasses
`public static MBReadOnlyList<MultiplayerClassDivisions.MPHeroClass> GetMPHeroClasses()`

**Purpose:** Gets the current value of `m p hero classes`.

### GetMPHeroClassForCharacter
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForCharacter(BasicCharacterObject character)`

**Purpose:** Gets the current value of `m p hero class for character`.

### GetAllPerksForHeroClass
`public static List<List<IReadOnlyPerkObject>> GetAllPerksForHeroClass(MultiplayerClassDivisions.MPHeroClass heroClass, string forcedForGameMode = null)`

**Purpose:** Gets the current value of `all perks for hero class`.

### GetMPHeroClassForPeer
`public static MultiplayerClassDivisions.MPHeroClass GetMPHeroClassForPeer(MissionPeer peer, bool skipTeamCheck = false)`

**Purpose:** Gets the current value of `m p hero class for peer`.

### GetMPHeroClassForFormation
`public static TargetIconType GetMPHeroClassForFormation(Formation formation)`

**Purpose:** Gets the current value of `m p hero class for formation`.

### GetAvailablePerksForPeer
`public static List<List<IReadOnlyPerkObject>> GetAvailablePerksForPeer(MissionPeer missionPeer)`

**Purpose:** Gets the current value of `available perks for peer`.

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Release
`public static void Release()`

**Purpose:** Handles logic related to `release`.

### GetMinimumTroopCost
`public static int GetMinimumTroopCost(BasicCultureObject culture = null)`

**Purpose:** Gets the current value of `minimum troop cost`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### GetAllAvailablePerksForListIndex
`public List<IReadOnlyPerkObject> GetAllAvailablePerksForListIndex(int index, string forcedForGameMode = null)`

**Purpose:** Gets the current value of `all available perks for list index`.

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### IsTroopCharacter
`public bool IsTroopCharacter(BasicCharacterObject character)`

**Purpose:** Handles logic related to `is troop character`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
MultiplayerClassDivisions.GetMPHeroClasses(culture);
```

## See Also

- [Complete Class Catalog](../catalog)