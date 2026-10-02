---
title: "MultiSelectionQueryPopUpVM"
description: "MultiSelectionQueryPopUpVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries, inheriting PopUpBaseVM; 11 exposed members (4 methods, 6 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiSelectionQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MultiSelectionQueryPopUpVM : PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MultiSelectionQueryPopUpVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs. It is a public class, implementing/inheriting PopUpBaseVM; the inheritance chain is MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 4 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiSelectionQueryPopUpVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`, inheritance chain MultiSelectionQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 6/11, methods 4/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/MultiSelectionQueryPopUpVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PopUpBaseVM](../PopUpBaseVM/)
- [same namespace PopUpBaseVM](../PopUpBaseVM/)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM/)
- [same namespace TextQueryPopUpVM](../TextQueryPopUpVM/)
