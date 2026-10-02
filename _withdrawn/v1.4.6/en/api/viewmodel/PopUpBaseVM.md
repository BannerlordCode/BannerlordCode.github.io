---
title: "PopUpBaseVM"
description: "PopUpBaseVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries, inheriting ViewModel; 22 exposed members (9 methods, 12 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PopUpBaseVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public abstract class PopUpBaseVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

PopUpBaseVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 9 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PopUpBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Inquiries`, inheritance chain PopUpBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 12/22, methods 9/22), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Inquiries/PopUpBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MultiSelectionQueryPopUpVM](../MultiSelectionQueryPopUpVM/)
- [same namespace SingleQueryPopUpVM](../SingleQueryPopUpVM/)
- [same namespace TextQueryPopUpVM](../TextQueryPopUpVM/)
