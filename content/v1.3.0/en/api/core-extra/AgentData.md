---
title: "AgentData"
description: "Auto-generated class reference for AgentData."
---
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

**Purpose:** **Purpose:** Executes the Character logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Character(characterObject);
```

### Monster
`public AgentData Monster(Monster monster)`

**Purpose:** **Purpose:** Executes the Monster logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Monster(monster);
```

### OwnerParty
`public AgentData OwnerParty(IBattleCombatant owner)`

**Purpose:** **Purpose:** Executes the OwnerParty logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.OwnerParty(owner);
```

### Equipment
`public AgentData Equipment(Equipment equipment)`

**Purpose:** **Purpose:** Executes the Equipment logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Equipment(equipment);
```

### EquipmentSeed
`public AgentData EquipmentSeed(int seed)`

**Purpose:** **Purpose:** Executes the EquipmentSeed logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.EquipmentSeed(0);
```

### NoHorses
`public AgentData NoHorses(bool noHorses)`

**Purpose:** **Purpose:** Executes the NoHorses logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoHorses(false);
```

### NoWeapons
`public AgentData NoWeapons(bool noWeapons)`

**Purpose:** **Purpose:** Executes the NoWeapons logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoWeapons(false);
```

### NoArmor
`public AgentData NoArmor(bool noArmor)`

**Purpose:** **Purpose:** Executes the NoArmor logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoArmor(false);
```

### FixedEquipment
`public AgentData FixedEquipment(bool fixedEquipment)`

**Purpose:** **Purpose:** Executes the FixedEquipment logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentData CivilianEquipment(bool civilianEquipment)`

**Purpose:** **Purpose:** Executes the CivilianEquipment logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.CivilianEquipment(false);
```

### ClothingColor1
`public AgentData ClothingColor1(uint color)`

**Purpose:** **Purpose:** Executes the ClothingColor1 logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.ClothingColor1(0);
```

### ClothingColor2
`public AgentData ClothingColor2(uint color)`

**Purpose:** **Purpose:** Executes the ClothingColor2 logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.ClothingColor2(0);
```

### BodyProperties
`public AgentData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** **Purpose:** Executes the BodyProperties logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.BodyProperties(bodyProperties);
```

### Age
`public AgentData Age(int age)`

**Purpose:** **Purpose:** Executes the Age logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Age(0);
```

### TroopOrigin
`public AgentData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** **Purpose:** Executes the TroopOrigin logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentData IsFemale(bool isFemale)`

**Purpose:** **Purpose:** Determines whether the this instance is in the female state or condition.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.IsFemale(false);
```

### Race
`public AgentData Race(int race)`

**Purpose:** **Purpose:** Executes the Race logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Race(0);
```

### MountKey
`public AgentData MountKey(string mountKey)`

**Purpose:** **Purpose:** Executes the MountKey logic.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.MountKey("example");
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AgentData entry = ...;
```

## See Also

- [Area Index](../)