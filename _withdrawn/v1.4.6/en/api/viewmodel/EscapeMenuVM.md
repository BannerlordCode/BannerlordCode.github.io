---
title: "EscapeMenuVM"
description: "EscapeMenuVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EscapeMenuVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class EscapeMenuVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

EscapeMenuVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EscapeMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EscapeMenuVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`, inheritance chain EscapeMenuVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EscapeMenuVM` | `public EscapeMenuVM(IEnumerable<EscapeMenuItemVM>items, TextObject title = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `RefreshItems` | `public void RefreshItems(IEnumerable<EscapeMenuItemVM>items)` | method |
| `Title` | `public string Title` | property |
| `MBBindingList` | `public MBBindingList<EscapeMenuItemVM>MenuItems` | property |
| `Tips` | `public GameTipsVM Tips` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EscapeMenuItemVM](../EscapeMenuItemVM/)
- [same namespace GameTipsVM](../GameTipsVM/)
