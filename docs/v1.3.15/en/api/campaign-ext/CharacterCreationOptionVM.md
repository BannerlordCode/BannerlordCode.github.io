<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationOptionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationOptionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationOptionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs`

## Overview

`CharacterCreationOptionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ActionText` | `public string ActionText { get; set; }` |
| `PositiveEffectText` | `public string PositiveEffectText { get; set; }` |
| `NegativeEffectText` | `public string NegativeEffectText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new CharacterCreationOptionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)