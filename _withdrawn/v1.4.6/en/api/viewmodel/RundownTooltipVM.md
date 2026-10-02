---
title: "RundownTooltipVM"
description: "RundownTooltipVM: a public class in TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip, inheriting TooltipBaseVM; 13 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RundownTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

RundownTooltipVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is RundownTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 4 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RundownTooltipVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`, inheritance chain RundownTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/13, methods 4/13), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TooltipBaseVM](../../core-extra/TooltipBaseVM/)
- [same namespace RundownLineVM](../RundownLineVM/)
