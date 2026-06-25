---
title: "ClanCardSelectionPopupVM"
description: "Auto-generated class reference for ClanCardSelectionPopupVM."
---
# ClanCardSelectionPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanCardSelectionPopupVM.cs`

## Overview

`ClanCardSelectionPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<ClanCardSelectionPopupItemVM> Items { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `ActionResult` | `public string ActionResult { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.SetCancelInputKey(hotKey);
```

### Open
`public void Open(ClanCardSelectionInfo info)`

**Purpose:** Opens the resource or UI represented by the this instance.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.Open(info);
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of ClanCardSelectionPopupVM from the subsystem API first
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.ExecuteDone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanCardSelectionPopupVM clanCardSelectionPopupVM = ...;
clanCardSelectionPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)