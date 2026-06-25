---
title: "CharacterCreationCampaignBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationCampaignBehavior`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## Overview

`CharacterCreationCampaignBehavior` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**Purpose:** Initializes the state, resources, or bindings for `character creation stages`.

### InitializeCharacterCreationCultures
`public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)`

**Purpose:** Initializes the state, resources, or bindings for `character creation cultures`.

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**Purpose:** Initializes the state, resources, or bindings for `data`.

### FaceGenUpdated
`public void FaceGenUpdated()`

**Purpose:** Handles logic related to `face gen updated`.

### UpdateParentEquipment
`public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)`

**Purpose:** Updates the state or data of `parent equipment`.

### AddEducationMenu
`public void AddEducationMenu(CharacterCreationManager characterCreationManager)`

**Purpose:** Adds `education menu` to the current collection or state.

### SetHeroAge
`public void SetHeroAge(float age)`

**Purpose:** Sets the value or state of `hero age`.

### IsUrbanOccupation
`public static bool IsUrbanOccupation(string occupation)`

**Purpose:** Handles logic related to `is urban occupation`.

## Usage Example

```csharp
var value = new CharacterCreationCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)