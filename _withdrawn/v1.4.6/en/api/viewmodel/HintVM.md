---
title: "HintVM"
description: "HintVM: a public class in TaleWorlds.Core.ViewModelCollection.Information, inheriting TooltipBaseVM; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HintVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class HintVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

HintVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is HintVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HintVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information`, inheritance chain HintVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HintVM` | `public HintVM(Type type, object[]args) : base(type, args)` | constructor |
| `OnFinalizeInternal` | `protected override void OnFinalizeInternal()` | method |
| `RefreshGenericHintTooltip` | `public static void RefreshGenericHintTooltip(HintVM hint, object[]args)` | method |
| `Text` | `public string Text` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TooltipBaseVM](../../core-extra/TooltipBaseVM/)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel/)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM/)
- [same namespace GameNotificationVM](../GameNotificationVM/)
- [same namespace HintViewModel](../HintViewModel/)
