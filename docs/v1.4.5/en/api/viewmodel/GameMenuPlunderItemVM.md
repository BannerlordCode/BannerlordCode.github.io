<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuPlunderItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuPlunderItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuPlunderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu/GameMenuPlunderItemVM.cs`

## Overview

`GameMenuPlunderItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |

## Key Methods

### ExecuteBeginTooltip
`public void ExecuteBeginTooltip()`

**Purpose:** Executes the `begin tooltip` operation or workflow.

### ExecuteEndTooltip
`public void ExecuteEndTooltip()`

**Purpose:** Executes the `end tooltip` operation or workflow.

## Usage Example

```csharp
var value = new GameMenuPlunderItemVM();
value.ExecuteBeginTooltip();
```

## See Also

- [Complete Class Catalog](../catalog)