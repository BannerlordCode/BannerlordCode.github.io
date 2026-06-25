---
title: "BannerBuilderColorSelectionVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerBuilderColorSelectionVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBuilderColorSelectionVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderColorSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderColorSelectionVM.cs`

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

**Purpose:** Handles logic related to `enable with`.

## Usage Example

```csharp
var value = new BannerBuilderColorSelectionVM();
value.EnableWith(0, onSelection);
```

## See Also

- [Complete Class Catalog](../catalog)