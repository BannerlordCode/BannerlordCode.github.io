---
title: "ProfitItemPropertyVM"
description: "Auto-generated class reference for ProfitItemPropertyVM."
---
# ProfitItemPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ProfitItemPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ProfitItemPropertyVM.cs`

## Overview

`ProfitItemPropertyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Value` | `public int Value { get; set; }` |
| `ValueString` | `public string ValueString { get; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `ColonText` | `public string ColonText { get; set; }` |
| `GovernorVisual` | `public CharacterImageIdentifierVM GovernorVisual { get; set; }` |
| `ShowGovernorPortrait` | `public bool ShowGovernorPortrait { get; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ProfitItemPropertyVM from the subsystem API first
ProfitItemPropertyVM profitItemPropertyVM = ...;
profitItemPropertyVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ProfitItemPropertyVM profitItemPropertyVM = ...;
profitItemPropertyVM.RefreshValues();
```

## See Also

- [Area Index](../)