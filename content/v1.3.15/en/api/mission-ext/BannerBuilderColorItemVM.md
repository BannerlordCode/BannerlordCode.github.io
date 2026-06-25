---
title: "BannerBuilderColorItemVM"
description: "Auto-generated class reference for BannerBuilderColorItemVM."
---
# BannerBuilderColorItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderColorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorItemVM.cs`

## Overview

`BannerBuilderColorItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; }` |
| `BannerColor` | `public BannerColor BannerColor { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |

## Key Methods

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with selection.

```csharp
// Obtain an instance of BannerBuilderColorItemVM from the subsystem API first
BannerBuilderColorItemVM bannerBuilderColorItemVM = ...;
bannerBuilderColorItemVM.ExecuteSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerBuilderColorItemVM bannerBuilderColorItemVM = ...;
bannerBuilderColorItemVM.ExecuteSelection();
```

## See Also

- [Area Index](../)