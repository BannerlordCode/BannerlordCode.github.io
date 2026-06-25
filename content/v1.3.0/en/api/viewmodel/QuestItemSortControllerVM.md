---
title: "QuestItemSortControllerVM"
description: "Auto-generated class reference for QuestItemSortControllerVM."
---
# QuestItemSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Quests
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class QuestItemSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Quests/QuestItemSortControllerVM.cs`

## Overview

`QuestItemSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Quests` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public QuestItemSortControllerVM.QuestItemSortOption? CurrentSortOption { get; }` |
| `IsThereAnyQuest` | `public bool IsThereAnyQuest { get; set; }` |

## Key Methods

### SortByOption
`public void SortByOption(QuestItemSortControllerVM.QuestItemSortOption sortOption)`

**Purpose:** **Purpose:** Executes the SortByOption logic.

```csharp
// Obtain an instance of QuestItemSortControllerVM from the subsystem API first
QuestItemSortControllerVM questItemSortControllerVM = ...;
questItemSortControllerVM.SortByOption(sortOption);
```

### Compare
`public abstract int Compare(QuestItemVM x, QuestItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of QuestItemSortControllerVM from the subsystem API first
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of QuestItemSortControllerVM from the subsystem API first
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of QuestItemSortControllerVM from the subsystem API first
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

### Compare
`public override int Compare(QuestItemVM first, QuestItemVM second)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of QuestItemSortControllerVM from the subsystem API first
QuestItemSortControllerVM questItemSortControllerVM = ...;
var result = questItemSortControllerVM.Compare(first, second);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
QuestItemSortControllerVM questItemSortControllerVM = ...;
questItemSortControllerVM.SortByOption(sortOption);
```

## See Also

- [Area Index](../)