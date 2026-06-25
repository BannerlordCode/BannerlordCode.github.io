---
title: "BannerColorVM"
description: "Auto-generated class reference for BannerColorVM."
---
# BannerColorVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.BannerEditor
**Module:** TaleWorlds.Core
**Type:** `public class BannerColorVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection.BannerEditor/BannerColorVM.cs`

## Overview

`BannerColorVM` lives in `TaleWorlds.Core.ViewModelCollection.BannerEditor` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; set; }` |
| `Color` | `public uint Color { get; set; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### ExecuteSelectIcon
`public void ExecuteSelectIcon()`

**Purpose:** Runs the operation or workflow associated with select icon.

```csharp
// Obtain an instance of BannerColorVM from the subsystem API first
BannerColorVM bannerColorVM = ...;
bannerColorVM.ExecuteSelectIcon();
```

### SetOnSelectionAction
`public void SetOnSelectionAction(Action<BannerColorVM> onSelection)`

**Purpose:** Assigns a new value to on selection action and updates the object's internal state.

```csharp
// Obtain an instance of BannerColorVM from the subsystem API first
BannerColorVM bannerColorVM = ...;
bannerColorVM.SetOnSelectionAction(onSelection);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerColorVM bannerColorVM = ...;
bannerColorVM.ExecuteSelectIcon();
```

## See Also

- [Area Index](../)