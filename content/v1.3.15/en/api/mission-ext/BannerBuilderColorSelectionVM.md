---
title: "BannerBuilderColorSelectionVM"
description: "Auto-generated class reference for BannerBuilderColorSelectionVM."
---
# BannerBuilderColorSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderColorSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorSelectionVM.cs`

## Overview

`BannerBuilderColorSelectionVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Items` | `public MBBindingList<BannerBuilderColorItemVM> Items { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### EnableWith
`public void EnableWith(int selectedColorID, Action<BannerBuilderColorItemVM> onSelection)`

**Purpose:** Executes the EnableWith logic.

```csharp
// Obtain an instance of BannerBuilderColorSelectionVM from the subsystem API first
BannerBuilderColorSelectionVM bannerBuilderColorSelectionVM = ...;
bannerBuilderColorSelectionVM.EnableWith(0, onSelection);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerBuilderColorSelectionVM bannerBuilderColorSelectionVM = ...;
bannerBuilderColorSelectionVM.EnableWith(0, onSelection);
```

## See Also

- [Area Index](../)