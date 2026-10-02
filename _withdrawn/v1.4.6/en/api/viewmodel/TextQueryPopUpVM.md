---
title: "TextQueryPopUpVM"
description: "TextQueryPopUpVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries, inheriting PopUpBaseVM; 8 exposed members (4 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class TextQueryPopUpVM : PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

TextQueryPopUpVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs. It is a public class, implementing/inheriting PopUpBaseVM; the inheritance chain is TextQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextQueryPopUpVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`, inheritance chain TextQueryPopUpVM → PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TextQueryPopUpVM` | `public TextQueryPopUpVM(Action closeQuery) : base(closeQuery)` | constructor |
| `SetData` | `public void SetData(TextInquiryData data)` | method |
| `ExecuteAffirmativeAction` | `public override void ExecuteAffirmativeAction()` | method |
| `ExecuteNegativeAction` | `public override void ExecuteNegativeAction()` | method |
| `OnClearData` | `public override void OnClearData()` | method |
| `InputText` | `public string InputText` | property |
| `IsInputObfuscated` | `public bool IsInputObfuscated` | property |
| `DoneButtonDisabledReasonHint` | `public HintViewModel DoneButtonDisabledReasonHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PopUpBaseVM](../PopUpBaseVM/)
- [same namespace MultiSelectionQueryPopUpVM](../MultiSelectionQueryPopUpVM/)
- [same namespace PopUpBaseVM](../PopUpBaseVM/)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM/)
