---
title: "SettlementDailyProjectVM"
description: "Auto-generated class reference for SettlementDailyProjectVM."
---
# SettlementDailyProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementDailyProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/SettlementDailyProjectVM.cs`

## Overview

`SettlementDailyProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDefault` | `public bool IsDefault { get; set; }` |
| `DefaultText` | `public string DefaultText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshValues();
```

### RefreshProductionText
`public override void RefreshProductionText()`

**Purpose:** Keeps the display or cache of `production text` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshProductionText();
```

### ExecuteAddRemoveToQueue
`public override void ExecuteAddRemoveToQueue()`

**Purpose:** Runs the operation or workflow associated with `add remove to queue`.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteAddRemoveToQueue();
```

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**Purpose:** Runs the operation or workflow associated with `set as active development`.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteSetAsActiveDevelopment();
```

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**Purpose:** Runs the operation or workflow associated with `set as current`.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteSetAsCurrent();
```

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**Purpose:** Runs the operation or workflow associated with `reset current`.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteResetCurrent();
```

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**Purpose:** Runs the operation or workflow associated with `toggle selected`.

```csharp
// Obtain an instance of SettlementDailyProjectVM from the subsystem API first
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteToggleSelected();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshValues();
```

## See Also

- [Area Index](../)