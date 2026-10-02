---
title: "TooltipBaseVM"
description: "TooltipBaseVM: a public class in TaleWorlds.Library, inheriting ViewModel; 9 exposed members (6 methods, 2 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/TooltipBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TooltipBaseVM

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class TooltipBaseVM : ViewModel`
**File:** `TaleWorlds.Library/TooltipBaseVM.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

TooltipBaseVM lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TooltipBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipBaseVM lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TooltipBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TooltipBaseVM` | `public TooltipBaseVM(Type invokedType, object[]invokedArgs)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnFinalizeInternal` | `protected virtual void OnFinalizeInternal()` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `InvokeRefreshData` | `protected void InvokeRefreshData<T>(T tooltip) where T : TooltipBaseVM` | method |
| `OnPeriodicRefresh` | `protected virtual void OnPeriodicRefresh()` | method |
| `OnIsExtendedChanged` | `protected virtual void OnIsExtendedChanged()` | method |
| `IsActive` | `public bool IsActive` | property |
| `IsExtended` | `public bool IsExtended` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
