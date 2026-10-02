---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData: a public class in TaleWorlds.MountAndBlade.Options.ManagedOptions, inheriting ManagedOptionData, ISelectionOptionData; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedSelectionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ManagedSelectionOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs. It is a public class, implementing/inheriting ManagedOptionData, ISelectionOptionData, IOptionData; the inheritance chain is ManagedSelectionOptionData → ManagedOptionData → IOptionData. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedSelectionOptionData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Options.ManagedOptions`, inheritance chain ManagedSelectionOptionData → ManagedOptionData → IOptionData. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ManagedSelectionOptionData` | `public ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | constructor |
| `GetSelectableOptionsLimit` | `public int GetSelectableOptionsLimit()` | method |
| `IEnumerable` | `public IEnumerable<SelectionData>GetSelectableOptionNames()` | method |
| `GetOptionsLimit` | `public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ManagedOptionData](../ManagedOptionData/)
- [base / interface ISelectionOptionData](../../engine/ISelectionOptionData/)
- [base / interface IOptionData](../../engine/IOptionData/)
- [same namespace ManagedBooleanOptionData](../ManagedBooleanOptionData/)
- [same namespace ManagedNumericOptionData](../ManagedNumericOptionData/)
- [same namespace ManagedOptionData](../ManagedOptionData/)
