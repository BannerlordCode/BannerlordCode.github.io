---
title: "CharacterCreationCampaignBehavior"
description: "Auto-generated class reference for CharacterCreationCampaignBehavior."
---
# CharacterCreationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## Overview

`CharacterCreationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsUrbanOccupation
`public static bool IsUrbanOccupation(string occupation)`

**Purpose:** **Purpose:** Determines whether the this instance is in the urban occupation state or condition.

```csharp
// Static call; no instance required
CharacterCreationCampaignBehavior.IsUrbanOccupation("example");
```

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** **Purpose:** Registers events with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** **Purpose:** Synchronizes data across the relevant contexts or systems.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.SyncData(dataStore);
```

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by character creation stages.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeCharacterCreationStages(characterCreationManager);
```

### InitializeCharacterCreationCultures
`public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by character creation cultures.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeCharacterCreationCultures(characterCreationManager);
```

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by data.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeData(characterCreationManager);
```

### FaceGenUpdated
`public void FaceGenUpdated()`

**Purpose:** **Purpose:** Executes the FaceGenUpdated logic.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.FaceGenUpdated();
```

### UpdateParentEquipment
`public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of parent equipment.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.UpdateParentEquipment(characterCreationManager, motherEquipment, fatherEquipment, "example", "example");
```

### AddEducationMenu
`public void AddEducationMenu(CharacterCreationManager characterCreationManager)`

**Purpose:** **Purpose:** Adds education menu to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.AddEducationMenu(characterCreationManager);
```

### SetHeroAge
`public void SetHeroAge(float age)`

**Purpose:** **Purpose:** Assigns a new value to hero age and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationCampaignBehavior from the subsystem API first
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.SetHeroAge(0);
```

## Usage Example

```csharp
CharacterCreationCampaignBehavior.IsUrbanOccupation("example");
```

## See Also

- [Area Index](../)