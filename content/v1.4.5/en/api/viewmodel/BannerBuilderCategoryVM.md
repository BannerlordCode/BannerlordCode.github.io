---
title: "BannerBuilderCategoryVM"
description: "Auto-generated class reference for BannerBuilderCategoryVM."
---
# BannerBuilderCategoryVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderCategoryVM.cs`

## Overview

`BannerBuilderCategoryVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `IsPattern` | `public bool IsPattern { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ItemsList` | `public MBBindingList<BannerBuilderItemVM> ItemsList { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of BannerBuilderCategoryVM from the subsystem API first
BannerBuilderCategoryVM bannerBuilderCategoryVM = ...;
bannerBuilderCategoryVM.RefreshValues();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerBuilderCategoryVM bannerBuilderCategoryVM = ...;
bannerBuilderCategoryVM.RefreshValues();
```

## See Also

- [Area Index](../)