---
title: "BannerColorVM"
description: "BannerColorVM: a public class in TaleWorlds.Core.ViewModelCollection.BannerEditor, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerColorVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerColorVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

BannerColorVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerColorVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerColorVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor`, inheritance chain BannerColorVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ColorID` | `public int ColorID` | property |
| `Color` | `public uint Color` | property |
| `BannerColorVM` | `public BannerColorVM(int colorID, uint color, Action<BannerColorVM>onSelection)` | constructor |
| `ExecuteSelectIcon` | `public void ExecuteSelectIcon()` | method |
| `SetOnSelectionAction` | `public void SetOnSelectionAction(Action<BannerColorVM>onSelection)` | method |
| `ColorAsStr` | `public string ColorAsStr` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerIconVM](../BannerIconVM/)
- [same namespace BannerViewModel](../BannerViewModel/)
