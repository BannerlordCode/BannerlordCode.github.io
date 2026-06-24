<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListSelectorVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListSelectorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListSelectorVM : SelectorVM<EncyclopediaListSelectorItemVM>`
**Base:** `SelectorVM<EncyclopediaListSelectorItemVM>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListSelectorVM.cs`

## Overview

`EncyclopediaListSelectorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteOnDropdownActivated
`public void ExecuteOnDropdownActivated()`

**Purpose:** Executes the `on dropdown activated` operation or workflow.

## Usage Example

```csharp
var value = new EncyclopediaListSelectorVM();
value.ExecuteOnDropdownActivated();
```

## See Also

- [Complete Class Catalog](../catalog)