---
title: "BannerBuilderVM"
description: "BannerBuilderVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder, inheriting ViewModel; 48 exposed members (15 methods, 31 properties, 1 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerBuilderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class BannerBuilderVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

BannerBuilderVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerBuilderVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 48 public/protected members: 15 methods, 31 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerBuilderVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`, inheritance chain BannerBuilderVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 31/48, methods 15/48), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/BannerBuilder/BannerBuilderVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentBanner` | `public Banner CurrentBanner` | property |
| `BannerBuilderVM` | `public BannerBuilderVM(BasicCharacterObject character, string initialKey, Action<bool>onExit, Action refresh, Action copyBannerCode)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteAddDefaultLayer` | `public void ExecuteAddDefaultLayer()` | method |
| `ExecuteDuplicateCurrentLayer` | `public void ExecuteDuplicateCurrentLayer()` | method |
| `ExecuteCopyBannerCode` | `public void ExecuteCopyBannerCode()` | method |
| `ExecuteReorderWithParameters` | `public void ExecuteReorderWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)` | method |
| `ExecuteReorderToEndWithParameters` | `public void ExecuteReorderToEndWithParameters(BannerBuilderLayerVM layer, int index, string targetTag)` | method |
| `GetBannerCode` | `public string GetBannerCode()` | method |
| `SetBannerCode` | `public void SetBannerCode(string v)` | method |
| `TranslateCurrentLayerWith` | `public void TranslateCurrentLayerWith(Vec2 moveDirection)` | method |
| `DeleteCurrentLayer` | `public void DeleteCurrentLayer()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `BannerImageIdentifier` | `public BannerImageIdentifierVM BannerImageIdentifier` | property |
| `Title` | `public string Title` | property |
| `MBBindingList` | `public MBBindingList<BannerBuilderCategoryVM>Categories` | property |
| `ColorSelection` | `public BannerBuilderColorSelectionVM ColorSelection` | property |
| `MBBindingList` | `public MBBindingList<BannerBuilderLayerVM>Layers` | property |
| `CurrentSelectedLayer` | `public BannerBuilderLayerVM CurrentSelectedLayer` | property |
| `CurrentSelectedItem` | `public BannerBuilderItemVM CurrentSelectedItem` | property |
| `RandomizeHint` | `public HintViewModel RandomizeHint` | property |
| `UndoHint` | `public HintViewModel UndoHint` | property |
| `RedoHint` | `public HintViewModel RedoHint` | property |
| `ResetHint` | `public HintViewModel ResetHint` | property |
| `DrawStrokeHint` | `public HintViewModel DrawStrokeHint` | property |
| `CenterHint` | `public HintViewModel CenterHint` | property |
| `ResetSizeHint` | `public HintViewModel ResetSizeHint` | property |
| `MirrorHint` | `public HintViewModel MirrorHint` | property |
| `CurrentShieldName` | `public string CurrentShieldName` | property |
| `MinIconSize` | `public int MinIconSize` | property |
| `MaxIconSize` | `public int MaxIconSize` | property |
| `BannerCodeAsString` | `public string BannerCodeAsString` | property |
| `CancelText` | `public string CancelText` | property |
| `DoneText` | `public string DoneText` | property |
| `BannerVM` | `public BannerViewModel BannerVM` | property |
| `IconCodes` | `public string IconCodes` | property |
| `ColorCodes` | `public string ColorCodes` | property |
| `CanChangeBackgroundColor` | `public bool CanChangeBackgroundColor` | property |
| `IsBannerPreviewsActive` | `public bool IsBannerPreviewsActive` | property |
| `IsEditorPreviewActive` | `public bool IsEditorPreviewActive` | property |
| `IsLayerPreviewActive` | `public bool IsLayerPreviewActive` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `ShieldSlotIndex` | `public int ShieldSlotIndex` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerBuilderCategoryVM](../BannerBuilderCategoryVM/)
- [same namespace BannerBuilderColorItemVM](../BannerBuilderColorItemVM/)
- [same namespace BannerBuilderColorSelectionVM](../BannerBuilderColorSelectionVM/)
- [same namespace BannerBuilderItemVM](../BannerBuilderItemVM/)
