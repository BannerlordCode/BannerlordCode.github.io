<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPHeroClass`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPHeroClass

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPHeroClass : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerClassDivisions.cs`

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
| `ClassGroup` | `public MPHeroClassGroup ClassGroup { get; }` |
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

## Key Methods

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

## Usage Example

```csharp
var value = new MPHeroClass();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)