---
title: "RundownTooltipVM"
description: "RundownTooltipVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting TooltipBaseVM; 13 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs."
---
# RundownTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs`

## Overview

RundownTooltipVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is RundownTooltipVM → TooltipBaseVM. It exposes 13 public/protected members: 4 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RundownTooltipVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip) the module directory; inheritance chain RundownTooltipVM → TooltipBaseVM. The surface is property-led (properties 7/13, methods 4/13), so it mostly exposes state for reading. TooltipBaseVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInitializedProperly` | `public bool IsInitializedProperly` | property |
| `RundownTooltipVM` | `public RundownTooltipVM(Type invokedType, object[]invokedArgs) : base(invokedType, invokedArgs)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnPeriodicRefresh` | `protected override void OnPeriodicRefresh()` | method |
| `OnIsExtendedChanged` | `protected override void OnIsExtendedChanged()` | method |
| `RefreshGenericRundownTooltip` | `public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object[]args)` | method |
| `MBBindingList` | `public MBBindingList<RundownLineVM>Lines` | property |
| `TitleText` | `public string TitleText` | property |
| `ExpectedChangeText` | `public string ExpectedChangeText` | property |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt` | property |
| `ExtendText` | `public string ExtendText` | property |
| `ValueCategorization` | `public enum ValueCategorization` | property |
| `ValueCategorization` | `public enum ValueCategorization` | nested type |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace RundownLineVM](../RundownLineVM)
