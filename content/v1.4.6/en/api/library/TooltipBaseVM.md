---
title: "TooltipBaseVM"
description: "TooltipBaseVM: a public class in TaleWorlds.Library, inheriting ViewModel; 9 exposed members (6 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/TooltipBaseVM.cs."
---
# TooltipBaseVM

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class TooltipBaseVM : ViewModel`
**File:** `TaleWorlds.Library/TooltipBaseVM.cs`

## Overview

TooltipBaseVM lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TooltipBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 9 public/protected members: 6 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipBaseVM is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/9, properties 2/9), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TooltipBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
