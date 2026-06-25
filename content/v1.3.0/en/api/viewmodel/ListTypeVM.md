---
title: "ListTypeVM"
description: "Auto-generated class reference for ListTypeVM."
---
# ListTypeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ListTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/ListTypeVM.cs`

## Overview

`ListTypeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ID` | `public string ID { get; set; }` |
| `Order` | `public int Order { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageID` | `public string ImageID { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ListTypeVM from the subsystem API first
ListTypeVM listTypeVM = ...;
listTypeVM.RefreshValues();
```

### Execute
`public void Execute()`

**Purpose:** Runs the operation or workflow represented by the current object.

```csharp
// Obtain an instance of ListTypeVM from the subsystem API first
ListTypeVM listTypeVM = ...;
listTypeVM.Execute();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ListTypeVM listTypeVM = ...;
listTypeVM.RefreshValues();
```

## See Also

- [Area Index](../)