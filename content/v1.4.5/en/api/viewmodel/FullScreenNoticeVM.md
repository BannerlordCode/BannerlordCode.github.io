---
title: "FullScreenNoticeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FullScreenNoticeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FullScreenNoticeVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FullScreenNoticeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteCloseNotice
`public void ExecuteCloseNotice()`

**Purpose:** Executes the `close notice` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new FullScreenNoticeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)