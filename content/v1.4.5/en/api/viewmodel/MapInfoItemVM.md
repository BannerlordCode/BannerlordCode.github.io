---
title: "MapInfoItemVM"
description: "Auto-generated class reference for MapInfoItemVM."
---
# MapInfoItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapInfoItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapInfoItemVM.cs`

## Overview

`MapInfoItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasWarning` | `public bool HasWarning { get; set; }` |
| `IntValue` | `public int IntValue { get; set; }` |
| `FloatValue` | `public float FloatValue { get; set; }` |
| `VisualId` | `public string VisualId { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Key Methods

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of MapInfoItemVM from the subsystem API first
MapInfoItemVM mapInfoItemVM = ...;
mapInfoItemVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of MapInfoItemVM from the subsystem API first
MapInfoItemVM mapInfoItemVM = ...;
mapInfoItemVM.ExecuteEndHint();
```

### SetOverriddenVisualId
`public void SetOverriddenVisualId(string visualId)`

**Purpose:** **Purpose:** Assigns a new value to overridden visual id and updates the object's internal state.

```csharp
// Obtain an instance of MapInfoItemVM from the subsystem API first
MapInfoItemVM mapInfoItemVM = ...;
mapInfoItemVM.SetOverriddenVisualId("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapInfoItemVM mapInfoItemVM = ...;
mapInfoItemVM.ExecuteBeginHint();
```

## See Also

- [Area Index](../)