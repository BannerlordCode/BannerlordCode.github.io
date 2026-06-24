<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectableFiefItemPropertyVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SelectableFiefItemPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SelectableFiefItemPropertyVM : SelectableItemPropertyVM`
**Base:** `SelectableItemPropertyVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/SelectableFiefItemPropertyVM.cs`

## Overview

`SelectableFiefItemPropertyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChangeAmount` | `public int ChangeAmount { get; set; }` |

## Usage Example

```csharp
var example = new SelectableFiefItemPropertyVM();
```

## See Also

- [Complete Class Catalog](../catalog)