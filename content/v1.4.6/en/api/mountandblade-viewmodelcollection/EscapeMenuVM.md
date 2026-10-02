---
title: "EscapeMenuVM"
description: "EscapeMenuVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs."
---
# EscapeMenuVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class EscapeMenuVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs`

## Overview

EscapeMenuVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EscapeMenuVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EscapeMenuVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.EscapeMenu) the module directory; inheritance chain EscapeMenuVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/EscapeMenu/EscapeMenuVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EscapeMenuVM` | `public EscapeMenuVM(IEnumerable<EscapeMenuItemVM>items, TextObject title = null)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `RefreshItems` | `public void RefreshItems(IEnumerable<EscapeMenuItemVM>items)` | method |
| `Title` | `public string Title` | property |
| `MBBindingList` | `public MBBindingList<EscapeMenuItemVM>MenuItems` | property |
| `Tips` | `public GameTipsVM Tips` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EscapeMenuItemVM](../EscapeMenuItemVM)
- [same namespace GameTipsVM](../GameTipsVM)
