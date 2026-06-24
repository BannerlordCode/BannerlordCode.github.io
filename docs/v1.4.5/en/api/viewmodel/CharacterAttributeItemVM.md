<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterAttributeItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/CharacterAttributeItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteInspectAttribute
`public void ExecuteInspectAttribute()`

**Purpose:** Executes the `inspect attribute` operation or workflow.

### ExecuteAddAttributePoint
`public void ExecuteAddAttributePoint()`

**Purpose:** Executes the `add attribute point` operation or workflow.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### RefreshWithCurrentValues
`public void RefreshWithCurrentValues()`

**Purpose:** Refreshes the display or cache of `with current values`.

### Commit
`public void Commit()`

**Purpose:** Handles logic related to `commit`.

## Usage Example

```csharp
var value = new CharacterAttributeItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)