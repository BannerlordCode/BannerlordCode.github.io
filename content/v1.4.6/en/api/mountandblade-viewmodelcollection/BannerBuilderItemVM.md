---
title: "BannerBuilderItemVM"
description: "BannerBuilderItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 8 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs."
---
# BannerBuilderItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs`

## Overview

BannerBuilderItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerBuilderItemVM → ViewModel. It exposes 8 public/protected members: 1 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder) the module directory; inheritance chain BannerBuilderItemVM → ViewModel. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IconData` | `public BannerIconData IconData` | property |
| `BackgroundTextureID` | `public string BackgroundTextureID` | property |
| `BannerBuilderItemVM` | `public BannerBuilderItemVM(int key, BannerIconData iconData, Action<BannerBuilderItemVM>onItemSelection)` | constructor |
| `BannerBuilderItemVM` | `public BannerBuilderItemVM(int key, string backgroundTextureID, Action<BannerBuilderItemVM>onItemSelection)` | constructor |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `MeshID` | `public int MeshID` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MeshIDAsString` | `public string MeshIDAsString` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderCategoryVM](../BannerBuilderCategoryVM)
- [same namespace BannerBuilderColorItemVM](../BannerBuilderColorItemVM)
- [same namespace BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM)
- [same namespace BannerBuilderLayerVM](../BannerBuilderLayerVM)
