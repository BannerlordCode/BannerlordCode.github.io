<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuCharacter`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuCharacter

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuCharacter`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs`

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

**Purpose:** Updates the state or data of `body properties`.

### SetEquipment
`public void SetEquipment(MBEquipmentRoster equipment)`

**Purpose:** Sets the value or state of `equipment`.

### SetAnimationId
`public void SetAnimationId(string animationId)`

**Purpose:** Sets the value or state of `animation id`.

### SetRightHandItem
`public void SetRightHandItem(string itemId)`

**Purpose:** Sets the value or state of `right hand item`.

### SetLeftHandItem
`public void SetLeftHandItem(string itemId)`

**Purpose:** Sets the value or state of `left hand item`.

### EquipRightHandItemWithEquipmentIndex
`public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)`

**Purpose:** Handles logic related to `equip right hand item with equipment index`.

### EquipLeftHandItemWithEquipmentIndex
`public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)`

**Purpose:** Handles logic related to `equip left hand item with equipment index`.

### SetSpawnPointEntityId
`public void SetSpawnPointEntityId(string spawnPointEntityId)`

**Purpose:** Sets the value or state of `spawn point entity id`.

### ChangeAge
`public void ChangeAge(float age)`

**Purpose:** Handles logic related to `change age`.

### SetMountCreationKey
`public void SetMountCreationKey(MountCreationKey mountCreationKey)`

**Purpose:** Sets the value or state of `mount creation key`.

### SetHorseItemId
`public void SetHorseItemId(string itemId)`

**Purpose:** Sets the value or state of `horse item id`.

### SetHarnessItemId
`public void SetHarnessItemId(string itemId)`

**Purpose:** Sets the value or state of `harness item id`.

## Usage Example

```csharp
var value = new NarrativeMenuCharacter();
value.UpdateBodyProperties(bodyProperties, 0, false);
```

## See Also

- [Complete Class Catalog](../catalog)