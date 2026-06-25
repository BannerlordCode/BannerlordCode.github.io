---
title: "EncyclopediaHistoryEventVM"
description: "Auto-generated class reference for EncyclopediaHistoryEventVM."
---
# EncyclopediaHistoryEventVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaHistoryEventVM : EncyclopediaLinkVM`
**Base:** `EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaHistoryEventVM.cs`

## Overview

`EncyclopediaHistoryEventVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HistoryEventTimeText` | `public string HistoryEventTimeText { get; set; }` |
| `HistoryEventText` | `public string HistoryEventText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of EncyclopediaHistoryEventVM from the subsystem API first
EncyclopediaHistoryEventVM encyclopediaHistoryEventVM = ...;
encyclopediaHistoryEventVM.RefreshValues();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of EncyclopediaHistoryEventVM from the subsystem API first
EncyclopediaHistoryEventVM encyclopediaHistoryEventVM = ...;
encyclopediaHistoryEventVM.ExecuteLink("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaHistoryEventVM encyclopediaHistoryEventVM = ...;
encyclopediaHistoryEventVM.RefreshValues();
```

## See Also

- [Area Index](../)