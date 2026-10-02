---
title: "BannerIconVM"
description: "BannerIconVM: a public class in TaleWorlds.Core.ViewModelCollection.BannerEditor, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerIconVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerIconVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerIconVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerIconVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

BannerIconVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerIconVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerIconVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerIconVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor`, inheritance chain BannerIconVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerIconVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IconID` | `public int IconID` | property |
| `BannerIconVM` | `public BannerIconVM(int iconID, Action<BannerIconVM>onSelection)` | constructor |
| `ExecuteSelectIcon` | `public void ExecuteSelectIcon()` | method |
| `IconPath` | `public string IconPath` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerColorVM](../BannerColorVM/)
- [same namespace BannerViewModel](../BannerViewModel/)
