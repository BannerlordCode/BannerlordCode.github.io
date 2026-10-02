---
title: "CreditsVM"
description: "CreditsVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.Credits, inheriting ViewModel; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CreditsVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CreditsVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

CreditsVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CreditsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CreditsVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Credits`, inheritance chain CreditsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/Credits/CreditsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreditsVM` | `public CreditsVM()` | constructor |
| `FillFromFile` | `public void FillFromFile(string path)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `RootItem` | `public CreditsItemVM RootItem` | property |
| `ExitKey` | `public InputKeyItemVM ExitKey` | property |
| `ExitText` | `public string ExitText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CreditsItemVM](../CreditsItemVM/)
