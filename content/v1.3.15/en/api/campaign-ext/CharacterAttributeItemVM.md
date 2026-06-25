---
title: "CharacterAttributeItemVM"
description: "Auto-generated class reference for CharacterAttributeItemVM."
---
# CharacterAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/CharacterAttributeItemVM.cs`

## Overview

`CharacterAttributeItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttributeType` | `public CharacterAttribute AttributeType { get; }` |
| `BoundSkills` | `public MBBindingList<AttributeBoundSkillItemVM> BoundSkills { get; set; }` |
| `AttributeValue` | `public int AttributeValue { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `UnspentAttributePointsText` | `public string UnspentAttributePointsText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NameExtended` | `public string NameExtended { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `IncreaseHelpText` | `public string IncreaseHelpText { get; set; }` |
| `IsInspecting` | `public bool IsInspecting { get; set; }` |
| `IsAttributeAtMax` | `public bool IsAttributeAtMax { get; set; }` |
| `CanAddPoint` | `public bool CanAddPoint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshValues();
```

### ExecuteInspectAttribute
`public void ExecuteInspectAttribute()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with inspect attribute.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.ExecuteInspectAttribute();
```

### ExecuteAddAttributePoint
`public void ExecuteAddAttributePoint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with add attribute point.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.ExecuteAddAttributePoint();
```

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.Reset();
```

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**Purpose:** **Purpose:** Keeps the display or cache of with current values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshWithCurrentValues();
```

### Commit
`public void Commit()`

**Purpose:** **Purpose:** Executes the Commit logic.

```csharp
// Obtain an instance of CharacterAttributeItemVM from the subsystem API first
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.Commit();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterAttributeItemVM characterAttributeItemVM = ...;
characterAttributeItemVM.RefreshValues();
```

## See Also

- [Area Index](../)