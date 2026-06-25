---
title: "EncyclopediaSearchResultVM"
description: "Auto-generated class reference for EncyclopediaSearchResultVM."
---
# EncyclopediaSearchResultVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## Overview

`EncyclopediaSearchResultVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrgNameText` | `public string OrgNameText { get; }` |
| `NameText` | `public string NameText { get; set; }` |

## Key Methods

### UpdateSearchedText
`public void UpdateSearchedText(string searchedText)`

**Purpose:** Recalculates and stores the latest representation of searched text.

```csharp
// Obtain an instance of EncyclopediaSearchResultVM from the subsystem API first
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.UpdateSearchedText("example");
```

### Execute
`public void Execute()`

**Purpose:** Runs the operation or workflow represented by the this instance.

```csharp
// Obtain an instance of EncyclopediaSearchResultVM from the subsystem API first
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.Execute();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.UpdateSearchedText("example");
```

## See Also

- [Area Index](../)