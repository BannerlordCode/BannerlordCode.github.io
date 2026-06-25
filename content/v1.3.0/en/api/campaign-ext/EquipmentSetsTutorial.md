---
title: "EquipmentSetsTutorial"
description: "Auto-generated class reference for EquipmentSetsTutorial."
---
# EquipmentSetsTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class EquipmentSetsTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/EquipmentSetsTutorial.cs`

## Overview

`EquipmentSetsTutorial` lives in `StoryMode.GauntletUI.Tutorial` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.GauntletUI.Tutorial` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**Purpose:** Determines whether the current object is in the `conditions met for completion` state or condition.

```csharp
// Obtain an instance of EquipmentSetsTutorial from the subsystem API first
EquipmentSetsTutorial equipmentSetsTutorial = ...;
var result = equipmentSetsTutorial.IsConditionsMetForCompletion();
```

### OnInventoryEquipmentTypeChange
`public override void OnInventoryEquipmentTypeChange(InventoryEquipmentTypeChangedEvent obj)`

**Purpose:** Invoked when the `inventory equipment type change` event is raised.

```csharp
// Obtain an instance of EquipmentSetsTutorial from the subsystem API first
EquipmentSetsTutorial equipmentSetsTutorial = ...;
equipmentSetsTutorial.OnInventoryEquipmentTypeChange(obj);
```

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**Purpose:** Reads and returns the `tutorials relevant context` value held by the current object.

```csharp
// Obtain an instance of EquipmentSetsTutorial from the subsystem API first
EquipmentSetsTutorial equipmentSetsTutorial = ...;
var result = equipmentSetsTutorial.GetTutorialsRelevantContext();
```

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**Purpose:** Determines whether the current object is in the `conditions met for activation` state or condition.

```csharp
// Obtain an instance of EquipmentSetsTutorial from the subsystem API first
EquipmentSetsTutorial equipmentSetsTutorial = ...;
var result = equipmentSetsTutorial.IsConditionsMetForActivation();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EquipmentSetsTutorial equipmentSetsTutorial = ...;
equipmentSetsTutorial.IsConditionsMetForCompletion();
```

## See Also

- [Area Index](../)