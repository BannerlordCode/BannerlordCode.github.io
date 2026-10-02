---
title: "BannerBuilderCategoryVM"
description: "BannerBuilderCategoryVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderCategoryVM.cs."
---
# BannerBuilderCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderCategoryVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderCategoryVM.cs`

## Overview

BannerBuilderCategoryVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderCategoryVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerBuilderCategoryVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderCategoryVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder) the module directory; inheritance chain BannerBuilderCategoryVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderCategoryVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BannerBuilderCategoryVM` | `public BannerBuilderCategoryVM(BannerIconGroup category, Action<BannerBuilderItemVM>onItemSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Title` | `public string Title` | property |
| `IsPattern` | `public bool IsPattern` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `MBBindingList` | `public MBBindingList<BannerBuilderItemVM>ItemsList` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderColorItemVM](../BannerBuilderColorItemVM)
- [same namespace BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM)
- [same namespace BannerBuilderItemVM](../BannerBuilderItemVM)
- [same namespace BannerBuilderLayerVM](../BannerBuilderLayerVM)
