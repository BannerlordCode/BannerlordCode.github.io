---
title: "BannerBuilderLayerVM"
description: "BannerBuilderLayerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 36 exposed members (12 methods, 23 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs."
---
# BannerBuilderLayerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderLayerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs`

## Overview

BannerBuilderLayerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerBuilderLayerVM → ViewModel. It exposes 36 public/protected members: 12 methods, 23 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderLayerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder) the module directory; inheritance chain BannerBuilderLayerVM → ViewModel. The surface is property-led (properties 23/36, methods 12/36), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderLayerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public BannerData Data` | property |
| `BannerBuilderLayerVM` | `public BannerBuilderLayerVM(BannerData data, int layerIndex)` | constructor |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteDelete` | `public void ExecuteDelete()` | method |
| `ExecuteSelection` | `public void ExecuteSelection()` | method |
| `SetLayerIndex` | `public void SetLayerIndex(int newIndex)` | method |
| `ExecuteSelectColor1` | `public void ExecuteSelectColor1()` | method |
| `ExecuteSelectColor2` | `public void ExecuteSelectColor2()` | method |
| `ExecuteSwapColors` | `public void ExecuteSwapColors()` | method |
| `ExecuteCenterSigil` | `public void ExecuteCenterSigil()` | method |
| `ExecuteResetSize` | `public void ExecuteResetSize()` | method |
| `ExecuteUpdateBanner` | `public void ExecuteUpdateBanner()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `CanDeleteLayer` | `public bool CanDeleteLayer` | property |
| `IsLayerPattern` | `public bool IsLayerPattern` | property |
| `IsDrawStrokeActive` | `public bool IsDrawStrokeActive` | property |
| `IsMirrorActive` | `public bool IsMirrorActive` | property |
| `RotationValue` | `public float RotationValue` | property |
| `RotationValue360` | `public int RotationValue360` | property |
| `IconID` | `public int IconID` | property |
| `LayerIndex` | `public int LayerIndex` | property |
| `EditableAreaSize` | `public int EditableAreaSize` | property |
| `TotalAreaSize` | `public int TotalAreaSize` | property |
| `IconIDAsString` | `public string IconIDAsString` | property |
| `Color1` | `public Color Color1` | property |
| `Color2` | `public Color Color2` | property |
| `Color1AsStr` | `public string Color1AsStr` | property |
| `Color2AsStr` | `public string Color2AsStr` | property |
| `PositionValue` | `public Vec2 PositionValue` | property |
| `PositionValueX` | `public float PositionValueX` | property |
| `PositionValueY` | `public float PositionValueY` | property |
| `SizeValue` | `public Vec2 SizeValue` | property |
| `SizeValueX` | `public float SizeValueX` | property |
| `SizeValueY` | `public float SizeValueY` | property |
| `SetLayerActions` | `public static void SetLayerActions(Action refresh, Action<BannerBuilderLayerVM>onSelection, Action<BannerBuilderLayerVM>onDeletion, Action<int, Action<BannerBuilderColorItemVM>>onColorSelection)` | method |
| `ResetLayerActions` | `public static void ResetLayerActions()` | method |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerBuilderCategoryVM](../BannerBuilderCategoryVM)
- [same namespace BannerBuilderColorItemVM](../BannerBuilderColorItemVM)
- [same namespace BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM)
- [same namespace BannerBuilderItemVM](../BannerBuilderItemVM)
