---
title: "HintVM"
description: "HintVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting TooltipBaseVM; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs."
---
# HintVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class HintVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs`

## Overview

HintVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is HintVM → TooltipBaseVM. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HintVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain HintVM → TooltipBaseVM. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. TooltipBaseVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/HintVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HintVM` | `public HintVM(Type type, object[]args) : base(type, args)` | constructor |
| `OnFinalizeInternal` | `protected override void OnFinalizeInternal()` | method |
| `RefreshGenericHintTooltip` | `public static void RefreshGenericHintTooltip(HintVM hint, object[]args)` | method |
| `Text` | `public string Text` | property |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
