---
title: "ClanCardSelectionPopupItemPropertyVM"
description: "Auto-generated class reference for ClanCardSelectionPopupItemPropertyVM."
---
# ClanCardSelectionPopupItemPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupItemPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanCardSelectionPopupItemPropertyVM.cs`

## Overview

`ClanCardSelectionPopupItemPropertyVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanCardSelectionPopupItemPropertyVM from the subsystem API first
ClanCardSelectionPopupItemPropertyVM clanCardSelectionPopupItemPropertyVM = ...;
clanCardSelectionPopupItemPropertyVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanCardSelectionPopupItemPropertyVM clanCardSelectionPopupItemPropertyVM = ...;
clanCardSelectionPopupItemPropertyVM.RefreshValues();
```

## See Also

- [Area Index](../)