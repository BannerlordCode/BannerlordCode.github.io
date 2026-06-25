---
title: "SettlementProjectVM"
description: "Auto-generated class reference for SettlementProjectVM."
---
# SettlementProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProjectVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs`

## Overview

`SettlementProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Building` | `public Building Building { get; set; }` |
| `VisualCode` | `public string VisualCode { get; set; }` |
| `ProductionText` | `public string ProductionText { get; set; }` |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText { get; set; }` |
| `NextPositiveEffectText` | `public string NextPositiveEffectText { get; set; }` |
| `ProductionCostText` | `public string ProductionCostText { get; set; }` |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.RefreshValues();
```

### RefreshProductionText
`public virtual void RefreshProductionText()`

**Purpose:** Keeps the display or cache of `production text` in sync with the underlying state.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.RefreshProductionText();
```

### ExecuteAddToQueue
`public abstract void ExecuteAddToQueue()`

**Purpose:** Runs the operation or workflow associated with `add to queue`.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.ExecuteAddToQueue();
```

### ExecuteSetAsActiveDevelopment
`public abstract void ExecuteSetAsActiveDevelopment()`

**Purpose:** Runs the operation or workflow associated with `set as active development`.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.ExecuteSetAsActiveDevelopment();
```

### ExecuteSetAsCurrent
`public abstract void ExecuteSetAsCurrent()`

**Purpose:** Runs the operation or workflow associated with `set as current`.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.ExecuteSetAsCurrent();
```

### ExecuteResetCurrent
`public abstract void ExecuteResetCurrent()`

**Purpose:** Runs the operation or workflow associated with `reset current`.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.ExecuteResetCurrent();
```

### ExecuteToggleSelected
`public abstract void ExecuteToggleSelected()`

**Purpose:** Runs the operation or workflow associated with `toggle selected`.

```csharp
// Obtain an instance of SettlementProjectVM from the subsystem API first
SettlementProjectVM settlementProjectVM = ...;
settlementProjectVM.ExecuteToggleSelected();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SettlementProjectVM instance = ...;
```

## See Also

- [Area Index](../)