---
title: "ManagedNumericOptionData"
description: "ManagedNumericOptionData: a public class in TaleWorlds.MountAndBlade, inheriting ManagedOptionData, INumericOptionData; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs."
---
# ManagedNumericOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## Overview

ManagedNumericOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs. It is a public class, implementing/inheriting ManagedOptionData, INumericOptionData, IOptionData; the inheritance chain is ManagedNumericOptionData → ManagedOptionData → IOptionData. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedNumericOptionData is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Options.ManagedOptions) the module directory; inheritance chain ManagedNumericOptionData → ManagedOptionData → IOptionData. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. IOptionData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedNumericOptionData` | `public ManagedNumericOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | constructor |
| `GetMinValue` | `public float GetMinValue()` | method |
| `GetMaxValue` | `public float GetMaxValue()` | method |
| `GetIsDiscrete` | `public bool GetIsDiscrete()` | method |
| `GetDiscreteIncrementInterval` | `public int GetDiscreteIncrementInterval()` | method |
| `GetShouldUpdateContinuously` | `public bool GetShouldUpdateContinuously()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ManagedOptionData](../ManagedOptionData)
- [same namespace ManagedBooleanOptionData](../ManagedBooleanOptionData)
- [same namespace ManagedOptionData](../ManagedOptionData)
- [same namespace ManagedSelectionOptionData](../ManagedSelectionOptionData)
