---
title: "FullScreenNoticeVM"
description: "Auto-generated class reference for FullScreenNoticeVM."
---
# FullScreenNoticeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FullScreenNoticeVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs`

## Overview

`FullScreenNoticeVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsNoticeActive` | `public bool IsNoticeActive { get; set; }` |
| `NoticeTitleText` | `public string NoticeTitleText { get; set; }` |
| `NoticeContentText` | `public string NoticeContentText { get; set; }` |
| `ConfirmText` | `public string ConfirmText { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of FullScreenNoticeVM from the subsystem API first
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.RefreshValues();
```

### ExecuteCloseNotice
`public void ExecuteCloseNotice()`

**Purpose:** Runs the operation or workflow associated with `close notice`.

```csharp
// Obtain an instance of FullScreenNoticeVM from the subsystem API first
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.ExecuteCloseNotice();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of FullScreenNoticeVM from the subsystem API first
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of FullScreenNoticeVM from the subsystem API first
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.SetDoneInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FullScreenNoticeVM fullScreenNoticeVM = ...;
fullScreenNoticeVM.RefreshValues();
```

## See Also

- [Area Index](../)