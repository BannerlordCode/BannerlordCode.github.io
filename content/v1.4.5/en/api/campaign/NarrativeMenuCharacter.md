---
title: "NarrativeMenuCharacter"
description: "Auto-generated class reference for NarrativeMenuCharacter."
---
# NarrativeMenuCharacter

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuCharacter`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuCharacter.cs`

## Overview

`NarrativeMenuCharacter` lives in `TaleWorlds.CampaignSystem.CharacterCreationContent` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterCreationContent` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Equipment` | `public MBEquipmentRoster Equipment { get; }` |
| `AnimationId` | `public string AnimationId { get; }` |
| `MountCreationKey` | `public MountCreationKey MountCreationKey { get; }` |
| `Item1Id` | `public string Item1Id { get; }` |
| `Item2Id` | `public string Item2Id { get; }` |
| `RightHandEquipmentIndex` | `public EquipmentIndex RightHandEquipmentIndex { get; }` |
| `LeftHandEquipmentIndex` | `public EquipmentIndex LeftHandEquipmentIndex { get; }` |

## Key Methods

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties, int race, bool isFemale)`

**Purpose:** Recalculates and stores the latest representation of `body properties`.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.UpdateBodyProperties(bodyProperties, 0, false);
```

### SetEquipment
`public void SetEquipment(MBEquipmentRoster equipment)`

**Purpose:** Assigns a new value to `equipment` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetEquipment(equipment);
```

### SetAnimationId
`public void SetAnimationId(string animationId)`

**Purpose:** Assigns a new value to `animation id` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetAnimationId("example");
```

### SetRightHandItem
`public void SetRightHandItem(string itemId)`

**Purpose:** Assigns a new value to `right hand item` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetRightHandItem("example");
```

### SetLeftHandItem
`public void SetLeftHandItem(string itemId)`

**Purpose:** Assigns a new value to `left hand item` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetLeftHandItem("example");
```

### EquipRightHandItemWithEquipmentIndex
`public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.EquipRightHandItemWithEquipmentIndex(item);
```

### EquipLeftHandItemWithEquipmentIndex
`public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.EquipLeftHandItemWithEquipmentIndex(item);
```

### SetSpawnPointEntityId
`public void SetSpawnPointEntityId(string spawnPointEntityId)`

**Purpose:** Assigns a new value to `spawn point entity id` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetSpawnPointEntityId("example");
```

### ChangeAge
`public void ChangeAge(float age)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.ChangeAge(0);
```

### SetMountCreationKey
`public void SetMountCreationKey(MountCreationKey mountCreationKey)`

**Purpose:** Assigns a new value to `mount creation key` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetMountCreationKey(mountCreationKey);
```

### SetHorseItemId
`public void SetHorseItemId(string itemId)`

**Purpose:** Assigns a new value to `horse item id` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetHorseItemId("example");
```

### SetHarnessItemId
`public void SetHarnessItemId(string itemId)`

**Purpose:** Assigns a new value to `harness item id` and updates the object's internal state.

```csharp
// Obtain an instance of NarrativeMenuCharacter from the subsystem API first
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetHarnessItemId("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.UpdateBodyProperties(bodyProperties, 0, false);
```

## See Also

- [Area Index](../)