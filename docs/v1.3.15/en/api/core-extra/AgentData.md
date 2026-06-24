<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** none
**File:** `TaleWorlds.Core/AgentData.cs`

## Overview

`AgentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AgentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentCharacter` | `public BasicCharacterObject AgentCharacter { get; }` |
| `AgentMonster` | `public Monster AgentMonster { get; }` |
| `AgentOwnerParty` | `public IBattleCombatant AgentOwnerParty { get; }` |
| `AgentOverridenEquipment` | `public Equipment AgentOverridenEquipment { get; }` |
| `AgentEquipmentSeed` | `public int AgentEquipmentSeed { get; }` |
| `AgentNoHorses` | `public bool AgentNoHorses { get; }` |
| `AgentMountKey` | `public string AgentMountKey { get; }` |
| `AgentNoWeapons` | `public bool AgentNoWeapons { get; }` |
| `AgentNoArmor` | `public bool AgentNoArmor { get; }` |
| `AgentFixedEquipment` | `public bool AgentFixedEquipment { get; }` |
| `AgentCivilianEquipment` | `public bool AgentCivilianEquipment { get; }` |
| `AgentClothingColor1` | `public uint AgentClothingColor1 { get; }` |
| `AgentClothingColor2` | `public uint AgentClothingColor2 { get; }` |
| `PrepareImmediately` | `public bool PrepareImmediately { get; }` |
| `BodyPropertiesOverriden` | `public bool BodyPropertiesOverriden { get; }` |
| `AgentBodyProperties` | `public BodyProperties AgentBodyProperties { get; }` |
| `AgeOverriden` | `public bool AgeOverriden { get; }` |
| `AgentAge` | `public int AgentAge { get; }` |
| `GenderOverriden` | `public bool GenderOverriden { get; }` |
| `AgentIsFemale` | `public bool AgentIsFemale { get; }` |
| `AgentRace` | `public int AgentRace { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |

## Key Methods

### Character
`public AgentData Character(BasicCharacterObject characterObject)`

**Purpose:** Handles logic related to `character`.

### Monster
`public AgentData Monster(Monster monster)`

**Purpose:** Handles logic related to `monster`.

### OwnerParty
`public AgentData OwnerParty(IBattleCombatant owner)`

**Purpose:** Handles logic related to `owner party`.

### Equipment
`public AgentData Equipment(Equipment equipment)`

**Purpose:** Handles logic related to `equipment`.

### EquipmentSeed
`public AgentData EquipmentSeed(int seed)`

**Purpose:** Handles logic related to `equipment seed`.

### NoHorses
`public AgentData NoHorses(bool noHorses)`

**Purpose:** Handles logic related to `no horses`.

### NoWeapons
`public AgentData NoWeapons(bool noWeapons)`

**Purpose:** Handles logic related to `no weapons`.

### NoArmor
`public AgentData NoArmor(bool noArmor)`

**Purpose:** Handles logic related to `no armor`.

### FixedEquipment
`public AgentData FixedEquipment(bool fixedEquipment)`

**Purpose:** Handles logic related to `fixed equipment`.

### CivilianEquipment
`public AgentData CivilianEquipment(bool civilianEquipment)`

**Purpose:** Handles logic related to `civilian equipment`.

### SetPrepareImmediately
`public AgentData SetPrepareImmediately()`

**Purpose:** Sets the value or state of `prepare immediately`.

### ClothingColor1
`public AgentData ClothingColor1(uint color)`

**Purpose:** Handles logic related to `clothing color1`.

### ClothingColor2
`public AgentData ClothingColor2(uint color)`

**Purpose:** Handles logic related to `clothing color2`.

### BodyProperties
`public AgentData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `body properties`.

### Age
`public AgentData Age(int age)`

**Purpose:** Handles logic related to `age`.

### TroopOrigin
`public AgentData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** Handles logic related to `troop origin`.

### IsFemale
`public AgentData IsFemale(bool isFemale)`

**Purpose:** Handles logic related to `is female`.

### Race
`public AgentData Race(int race)`

**Purpose:** Handles logic related to `race`.

### MountKey
`public AgentData MountKey(string mountKey)`

**Purpose:** Handles logic related to `mount key`.

## Usage Example

```csharp
var value = new AgentData();
```

## See Also

- [Complete Class Catalog](../catalog)