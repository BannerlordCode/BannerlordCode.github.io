<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationGainedAttributeItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationGainedAttributeItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationGainedAttributeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationGainedAttributeItemVM.cs`

## Overview

`CharacterCreationGainedAttributeItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage { get; set; }` |

## Key Methods

### SetValue
`public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)`

**Purpose:** Sets the value or state of `value`.

## Usage Example

```csharp
var value = new CharacterCreationGainedAttributeItemVM();
value.SetValue(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)