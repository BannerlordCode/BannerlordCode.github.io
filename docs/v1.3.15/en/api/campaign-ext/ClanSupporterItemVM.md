<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanSupporterItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSupporterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterItemVM.cs`

## Overview

`ClanSupporterItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public HeroVM Hero { get; set; }` |

## Key Methods

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** Executes the `open tooltip` operation or workflow.

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** Executes the `close tooltip` operation or workflow.

## Usage Example

```csharp
var value = new ClanSupporterItemVM();
value.ExecuteOpenTooltip();
```

## See Also

- [Complete Class Catalog](../catalog)