---
title: "SettlementBuildingProjectVM"
description: "Auto-generated class reference for SettlementBuildingProjectVM."
---
# SettlementBuildingProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`

## Overview

`SettlementBuildingProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DevelopmentLevelText` | `public string DevelopmentLevelText { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint { get; set; }` |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshValues();
```

### RefreshProductionText
`public override void RefreshProductionText()`

**Purpose:** Keeps the display or cache of production text in sync with the underlying state.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshProductionText();
```

### ExecuteAddToQueue
`public override void ExecuteAddToQueue()`

**Purpose:** Runs the operation or workflow associated with add to queue.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteAddToQueue();
```

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**Purpose:** Runs the operation or workflow associated with set as active development.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteSetAsActiveDevelopment();
```

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**Purpose:** Runs the operation or workflow associated with set as current.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteSetAsCurrent();
```

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**Purpose:** Runs the operation or workflow associated with reset current.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteResetCurrent();
```

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**Purpose:** Runs the operation or workflow associated with toggle selected.

```csharp
// Obtain an instance of SettlementBuildingProjectVM from the subsystem API first
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteToggleSelected();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshValues();
```

## See Also

- [Area Index](../)