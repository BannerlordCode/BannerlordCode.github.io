---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData: a public class in TaleWorlds.MountAndBlade, inheriting ManagedOptionData, ISelectionOptionData; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs."
---
# ManagedSelectionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## Overview

ManagedSelectionOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs. It is a public class, implementing/inheriting ManagedOptionData, ISelectionOptionData, IOptionData; the inheritance chain is ManagedSelectionOptionData → ManagedOptionData → IOptionData. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedSelectionOptionData is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Options.ManagedOptions) the module directory; inheritance chain ManagedSelectionOptionData → ManagedOptionData → IOptionData. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. IOptionData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedSelectionOptionData` | `public ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | constructor |
| `GetSelectableOptionsLimit` | `public int GetSelectableOptionsLimit()` | method |
| `IEnumerable` | `public IEnumerable<SelectionData>GetSelectableOptionNames()` | method |
| `GetOptionsLimit` | `public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ManagedOptionData](../ManagedOptionData)
- [same namespace ManagedBooleanOptionData](../ManagedBooleanOptionData)
- [same namespace ManagedNumericOptionData](../ManagedNumericOptionData)
- [same namespace ManagedOptionData](../ManagedOptionData)
