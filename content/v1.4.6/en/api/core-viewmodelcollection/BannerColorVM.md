---
title: "BannerColorVM"
description: "BannerColorVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs."
---
# BannerColorVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.BannerEditor`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class BannerColorVM : ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs`

## Overview

BannerColorVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BannerColorVM → ViewModel. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerColorVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.BannerEditor) the module directory; inheritance chain BannerColorVM → ViewModel. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/BannerEditor/BannerColorVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ColorID` | `public int ColorID` | property |
| `Color` | `public uint Color` | property |
| `BannerColorVM` | `public BannerColorVM(int colorID, uint color, Action<BannerColorVM>onSelection)` | constructor |
| `ExecuteSelectIcon` | `public void ExecuteSelectIcon()` | method |
| `SetOnSelectionAction` | `public void SetOnSelectionAction(Action<BannerColorVM>onSelection)` | method |
| `ColorAsStr` | `public string ColorAsStr` | property |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerIconVM](../BannerIconVM)
- [same namespace BannerViewModel](../BannerViewModel)
