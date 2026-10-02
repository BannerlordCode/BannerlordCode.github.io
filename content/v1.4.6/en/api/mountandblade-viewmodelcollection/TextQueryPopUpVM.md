---
title: "TextQueryPopUpVM"
description: "TextQueryPopUpVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting PopUpBaseVM; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs."
---
# TextQueryPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class TextQueryPopUpVM : PopUpBaseVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs`

## Overview

TextQueryPopUpVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs. It is a public class, implementing/inheriting PopUpBaseVM; the inheritance chain is TextQueryPopUpVM → PopUpBaseVM → ViewModel. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextQueryPopUpVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries) the module directory; inheritance chain TextQueryPopUpVM → PopUpBaseVM → ViewModel. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/TextQueryPopUpVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PopUpBaseVM](../PopUpBaseVM)
- [same namespace MultiSelectionQueryPopUpVM](../MultiSelectionQueryPopUpVM)
- [same namespace PopUpBaseVM](../PopUpBaseVM)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM)
