<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyManagementBoostEventVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyManagementBoostEventVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`

## Overview

`ArmyManagementBoostEventVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrencyToPayForCohesion` | `public ArmyManagementBoostEventVM.BoostCurrency CurrencyToPayForCohesion { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `AmountToPay` | `public int AmountToPay { get; set; }` |
| `CurrencyType` | `public int CurrencyType { get; set; }` |
| `AmountOfCohesionToGain` | `public int AmountOfCohesionToGain { get; set; }` |
| `SpendText` | `public string SpendText { get; set; }` |
| `GainText` | `public string GainText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new ArmyManagementBoostEventVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)