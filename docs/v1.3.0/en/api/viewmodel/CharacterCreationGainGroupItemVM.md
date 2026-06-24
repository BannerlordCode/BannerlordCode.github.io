<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationGainGroupItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationGainGroupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainGroupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs`

## Overview

`CharacterCreationGainGroupItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttributeObj` | `public CharacterAttribute AttributeObj { get; }` |
| `Skills` | `public MBBindingList<CharacterCreationGainedSkillItemVM> Skills { get; set; }` |
| `Attribute` | `public CharacterCreationGainedAttributeItemVM Attribute { get; set; }` |

## Key Methods

### ResetValues
`public void ResetValues()`

**Purpose:** Resets `values` to its initial state.

## Usage Example

```csharp
var value = new CharacterCreationGainGroupItemVM();
value.ResetValues();
```

## See Also

- [Complete Class Catalog](../catalog)