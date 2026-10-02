---
title: "ManagedOptionData"
description: "ManagedOptionData: a public class in TaleWorlds.MountAndBlade, inheriting IOptionData; 9 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs."
---
# ManagedOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class ManagedOptionData : IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## Overview

ManagedOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs. It is a public class (abstract), implementing/inheriting IOptionData; the inheritance chain is ManagedOptionData → IOptionData. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedOptionData is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Options.ManagedOptions) the module directory; inheritance chain ManagedOptionData → IOptionData. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. IOptionData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedOptionData` | `protected ManagedOptionData(ManagedOptions.ManagedOptionsType type)` | constructor |
| `GetDefaultValue` | `public virtual float GetDefaultValue()` | method |
| `Commit` | `public void Commit()` | method |
| `GetValue` | `public float GetValue(bool forceRefresh)` | method |
| `SetValue` | `public void SetValue(float value)` | method |
| `GetOptionType` | `public object GetOptionType()` | method |
| `IsNative` | `public bool IsNative()` | method |
| `IsAction` | `public bool IsAction()` | method |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ManagedBooleanOptionData](../ManagedBooleanOptionData)
- [same namespace ManagedNumericOptionData](../ManagedNumericOptionData)
- [same namespace ManagedSelectionOptionData](../ManagedSelectionOptionData)
