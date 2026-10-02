---
title: "ISelectionOptionData"
description: "ISelectionOptionData: a public interface in TaleWorlds.Engine.Options, inheriting IOptionData; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Options/ISelectionOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ISelectionOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface ISelectionOptionData : IOptionData`
**File:** `TaleWorlds.Engine/Options/ISelectionOptionData.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

ISelectionOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/ISelectionOptionData.cs. It is a public interface, implementing/inheriting IOptionData; the inheritance chain is ISelectionOptionData → IOptionData. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISelectionOptionData lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine.Options`, inheritance chain ISelectionOptionData → IOptionData. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/ISelectionOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSelectableOptionsLimit` | `int GetSelectableOptionsLimit();` | method |
| `IEnumerable` | `IEnumerable<SelectionData>GetSelectableOptionNames();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IOptionData](../IOptionData/)
- [same namespace IBooleanOptionData](../IBooleanOptionData/)
- [same namespace INumericOptionData](../INumericOptionData/)
- [same namespace IOptionData](../IOptionData/)
- [same namespace NativeBooleanOptionData](../NativeBooleanOptionData/)
