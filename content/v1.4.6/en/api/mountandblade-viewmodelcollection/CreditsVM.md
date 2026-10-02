---
title: "CreditsVM"
description: "CreditsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs."
---
# CreditsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CreditsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs`

## Overview

CreditsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CreditsVM → ViewModel. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CreditsVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.Credits) the module directory; inheritance chain CreditsVM → ViewModel. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreditsVM` | `public CreditsVM()` | constructor |
| `FillFromFile` | `public void FillFromFile(string path)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RootItem` | `public CreditsItemVM RootItem` | property |
| `ExitKey` | `public InputKeyItemVM ExitKey` | property |
| `ExitText` | `public string ExitText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CreditsItemVM](../CreditsItemVM)
