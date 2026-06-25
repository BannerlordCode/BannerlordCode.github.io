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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Character(characterObject);
```

### Monster
`public AgentData Monster(Monster monster)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Monster(monster);
```

### OwnerParty
`public AgentData OwnerParty(IBattleCombatant owner)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.OwnerParty(owner);
```

### Equipment
`public AgentData Equipment(Equipment equipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Equipment(equipment);
```

### EquipmentSeed
`public AgentData EquipmentSeed(int seed)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.EquipmentSeed(0);
```

### NoHorses
`public AgentData NoHorses(bool noHorses)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoHorses(false);
```

### NoWeapons
`public AgentData NoWeapons(bool noWeapons)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoWeapons(false);
```

### NoArmor
`public AgentData NoArmor(bool noArmor)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.NoArmor(false);
```

### FixedEquipment
`public AgentData FixedEquipment(bool fixedEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.FixedEquipment(false);
```

### CivilianEquipment
`public AgentData CivilianEquipment(bool civilianEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.CivilianEquipment(false);
```

### SetPrepareImmediately
`public AgentData SetPrepareImmediately()`

**Purpose:** Assigns a new value to `prepare immediately` and updates the object's internal state.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.SetPrepareImmediately();
```

### ClothingColor1
`public AgentData ClothingColor1(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.ClothingColor1(0);
```

### ClothingColor2
`public AgentData ClothingColor2(uint color)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.ClothingColor2(0);
```

### BodyProperties
`public AgentData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.BodyProperties(bodyProperties);
```

### Age
`public AgentData Age(int age)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Age(0);
```

### TroopOrigin
`public AgentData TroopOrigin(IAgentOriginBase troopOrigin)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.TroopOrigin(troopOrigin);
```

### IsFemale
`public AgentData IsFemale(bool isFemale)`

**Purpose:** Determines whether the current object is in the `female` state or condition.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.IsFemale(false);
```

### Race
`public AgentData Race(int race)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentData from the subsystem API first
AgentData agentData = ...;
var result = agentData.Race(0);
```

### MountKey
`public AgentData MountKey(string mountKey)`

**Purpose:** Performs the operation described by this method.

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