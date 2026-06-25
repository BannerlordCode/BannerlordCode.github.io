---
title: "ItemPreviewVM"
description: "Auto-generated class reference for ItemPreviewVM."
---
# ItemPreviewVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemPreviewVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/ItemPreviewVM.cs`

## Overview

`ItemPreviewVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `ItemTableau` | `public ItemCollectionElementViewModel ItemTableau { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ItemPreviewVM from the subsystem API first
ItemPreviewVM itemPreviewVM = ...;
itemPreviewVM.OnFinalize();
```

### Open
`public void Open(EquipmentElement item)`

**Purpose:** Opens the resource or UI represented by the this instance.

```csharp
// Obtain an instance of ItemPreviewVM from the subsystem API first
ItemPreviewVM itemPreviewVM = ...;
itemPreviewVM.Open(item);
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of ItemPreviewVM from the subsystem API first
ItemPreviewVM itemPreviewVM = ...;
itemPreviewVM.ExecuteClose();
```

### Close
`public void Close()`

**Purpose:** Closes the resource or UI represented by the this instance.

```csharp
// Obtain an instance of ItemPreviewVM from the subsystem API first
ItemPreviewVM itemPreviewVM = ...;
itemPreviewVM.Close();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemPreviewVM itemPreviewVM = ...;
itemPreviewVM.OnFinalize();
```

## See Also

- [Area Index](../)