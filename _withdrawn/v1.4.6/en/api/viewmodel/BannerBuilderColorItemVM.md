---
title: "BannerBuilderColorItemVM"
description: "BannerBuilderColorItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerBuilderColorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderColorItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

BannerBuilderColorItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerBuilderColorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderColorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`, inheritance chain BannerBuilderColorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderColorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ColorID` | `public int ColorID` | property |
| `BannerColor` | `public BannerColor BannerColor` | property |
| `BannerBuilderColorItemVM` | `public BannerBuilderColorItemVM(Action<BannerBuilderColorItemVM>onItemSelection, int key, BannerColor value)` | constructor |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `ColorAsStr` | `public string ColorAsStr` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerBuilderCategoryVM](../BannerBuilderCategoryVM/)
- [same namespace BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM/)
- [same namespace BannerBuilderItemVM](../BannerBuilderItemVM/)
- [same namespace BannerBuilderLayerVM](../BannerBuilderLayerVM/)
