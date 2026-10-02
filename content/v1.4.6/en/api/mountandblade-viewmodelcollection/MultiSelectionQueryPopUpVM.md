---
title: "MultiSelectionQueryPopUpVM"
description: "MultiSelectionQueryPopUpVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting PopUpBaseVM; 11 exposed members (4 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs."
---
# MultiSelectionQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs`

## Overview

MultiSelectionQueryPopUpVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs. It is a public class, implementing/inheriting PopUpBaseVM; the inheritance chain is MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiSelectionQueryPopUpVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries) the module directory; inheritance chain MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiSelectionQueryPopUpVM` | `public MultiSelectionQueryPopUpVM(Action closeQuery) : base(closeQuery)` | constructor |
| `SetData` | `public void SetData(MultiSelectionInquiryData data)` | method |
| `ExecuteAffirmativeAction` | `public override void ExecuteAffirmativeAction()` | method |
| `ExecuteNegativeAction` | `public override void ExecuteNegativeAction()` | method |
| `OnClearData` | `public override void OnClearData()` | method |
| `MBBindingList` | `public MBBindingList<InquiryElementVM>InquiryElements` | property |
| `MaxSelectableOptionCount` | `public int MaxSelectableOptionCount` | property |
| `MinSelectableOptionCount` | `public int MinSelectableOptionCount` | property |
| `IsSearchAvailable` | `public bool IsSearchAvailable` | property |
| `SearchText` | `public string SearchText` | property |
| `SearchPlaceholderText` | `public string SearchPlaceholderText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PopUpBaseVM](../PopUpBaseVM)
- [same namespace PopUpBaseVM](../PopUpBaseVM)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM)
- [same namespace TextQueryPopUpVM](../TextQueryPopUpVM)
