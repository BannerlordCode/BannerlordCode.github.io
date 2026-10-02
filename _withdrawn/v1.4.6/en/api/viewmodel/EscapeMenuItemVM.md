---
title: "EscapeMenuItemVM"
description: "EscapeMenuItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EscapeMenuItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class EscapeMenuItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

EscapeMenuItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EscapeMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EscapeMenuItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`, inheritance chain EscapeMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EscapeMenuItemVM` | `public EscapeMenuItemVM(TextObject item, Action<object>onExecute, object identifier, Func<Tuple<bool, TextObject>>getIsDisabledAndReason, bool isPositiveBehaviored = false)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `DisabledHint` | `public HintViewModel DisabledHint` | property |
| `ActionText` | `public string ActionText` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsPositiveBehaviored` | `public bool IsPositiveBehaviored` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EscapeMenuVM](../EscapeMenuVM/)
- [same namespace GameTipsVM](../GameTipsVM/)
