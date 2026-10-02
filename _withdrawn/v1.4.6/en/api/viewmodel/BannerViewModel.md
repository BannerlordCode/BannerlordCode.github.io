---
title: "BannerViewModel"
description: "BannerViewModel: a public class in TaleWorlds.Core.ViewModelCollection.BannerEditor, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

BannerViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerViewModel → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerViewModel lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.BannerEditor`, inheritance chain BannerViewModel → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | property |
| `BannerViewModel` | `public BannerViewModel(Banner banner)` | constructor |
| `BannerCode` | `public string BannerCode` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerColorVM](../BannerColorVM/)
- [same namespace BannerIconVM](../BannerIconVM/)
