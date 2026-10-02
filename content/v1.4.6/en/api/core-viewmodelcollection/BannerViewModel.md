---
title: "BannerViewModel"
description: "BannerViewModel: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 3 exposed members (0 methods, 2 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs."
---
# BannerViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerViewModel : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs`

## Overview

BannerViewModel lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerViewModel → ViewModel. It exposes 3 public/protected members: 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerViewModel is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.BannerEditor) the module directory; inheritance chain BannerViewModel → ViewModel. The surface is property-led (properties 2/3, methods 0/3), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerViewModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Banner` | `public Banner Banner` | property |
| `BannerViewModel` | `public BannerViewModel(Banner banner)` | constructor |
| `BannerCode` | `public string BannerCode` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerColorVM](../BannerColorVM)
- [same namespace BannerIconVM](../BannerIconVM)
