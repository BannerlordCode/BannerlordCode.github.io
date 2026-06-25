---
title: "EncyclopediaListSelectorVM"
description: "Auto-generated class reference for EncyclopediaListSelectorVM."
---
# EncyclopediaListSelectorVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaListSelectorVM : SelectorVM<EncyclopediaListSelectorItemVM>`
**Base:** `SelectorVM<EncyclopediaListSelectorItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List/EncyclopediaListSelectorVM.cs`

## Overview

`EncyclopediaListSelectorVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ExecuteOnDropdownActivated
`public void ExecuteOnDropdownActivated()`

**Purpose:** Runs the operation or workflow associated with on dropdown activated.

```csharp
// Obtain an instance of EncyclopediaListSelectorVM from the subsystem API first
EncyclopediaListSelectorVM encyclopediaListSelectorVM = ...;
encyclopediaListSelectorVM.ExecuteOnDropdownActivated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaListSelectorVM encyclopediaListSelectorVM = ...;
encyclopediaListSelectorVM.ExecuteOnDropdownActivated();
```

## See Also

- [Area Index](../)