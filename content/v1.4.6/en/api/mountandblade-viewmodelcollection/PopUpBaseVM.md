---
title: "PopUpBaseVM"
description: "PopUpBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 22 exposed members (9 methods, 12 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs."
---
# PopUpBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`

## Overview

PopUpBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is PopUpBaseVM → ViewModel. It exposes 22 public/protected members: 9 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopUpBaseVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries) the module directory; inheritance chain PopUpBaseVM → ViewModel. The surface is property-led (properties 12/22, methods 9/22), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PopUpBaseVM` | `public PopUpBaseVM(Action closeQuery)` | constructor |
| `ExecuteAffirmativeAction` | `public abstract void ExecuteAffirmativeAction();` | method |
| `ExecuteNegativeAction` | `public abstract void ExecuteNegativeAction();` | method |
| `OnTick` | `public virtual void OnTick(float dt)` | method |
| `OnClearData` | `public virtual void OnClearData()` | method |
| `ForceRefreshKeyVisuals` | `public void ForceRefreshKeyVisuals()` | method |
| `CloseQuery` | `public void CloseQuery()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `TitleText` | `public string TitleText` | property |
| `PopUpLabel` | `public string PopUpLabel` | property |
| `ButtonOkLabel` | `public string ButtonOkLabel` | property |
| `ButtonCancelLabel` | `public string ButtonCancelLabel` | property |
| `IsButtonOkShown` | `public bool IsButtonOkShown` | property |
| `IsButtonCancelShown` | `public bool IsButtonCancelShown` | property |
| `IsButtonOkEnabled` | `public bool IsButtonOkEnabled` | property |
| `IsButtonCancelEnabled` | `public bool IsButtonCancelEnabled` | property |
| `ButtonOkHint` | `public HintViewModel ButtonOkHint` | property |
| `ButtonCancelHint` | `public HintViewModel ButtonCancelHint` | property |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiSelectionQueryPopUpVM](../MultiSelectionQueryPopUpVM)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM)
- [same namespace TextQueryPopUpVM](../TextQueryPopUpVM)
