---
title: "EncyclopediaSettlementVM"
description: "Auto-generated class reference for EncyclopediaSettlementVM."
---
# EncyclopediaSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSettlementVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaSettlementVM.cs`

## Overview

`EncyclopediaSettlementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FileName` | `public string FileName { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaSettlementVM from the subsystem API first
EncyclopediaSettlementVM encyclopediaSettlementVM = ...;
encyclopediaSettlementVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of EncyclopediaSettlementVM from the subsystem API first
EncyclopediaSettlementVM encyclopediaSettlementVM = ...;
encyclopediaSettlementVM.ExecuteLink();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of EncyclopediaSettlementVM from the subsystem API first
EncyclopediaSettlementVM encyclopediaSettlementVM = ...;
encyclopediaSettlementVM.ExecuteEndHint();
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of EncyclopediaSettlementVM from the subsystem API first
EncyclopediaSettlementVM encyclopediaSettlementVM = ...;
encyclopediaSettlementVM.ExecuteBeginHint();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaSettlementVM encyclopediaSettlementVM = ...;
encyclopediaSettlementVM.RefreshValues();
```

## See Also

- [Area Index](../)