---
title: "INumericOptionData"
description: "INumericOptionData: a public interface in TaleWorlds.Engine.Options, inheriting IOptionData; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Options/INumericOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# INumericOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface INumericOptionData : IOptionData`
**File:** `TaleWorlds.Engine/Options/INumericOptionData.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

INumericOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/INumericOptionData.cs. It is a public interface, implementing/inheriting IOptionData; the inheritance chain is INumericOptionData → IOptionData. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: INumericOptionData lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine.Options`, inheritance chain INumericOptionData → IOptionData. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/INumericOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetMinValue` | `float GetMinValue();` | method |
| `GetMaxValue` | `float GetMaxValue();` | method |
| `GetIsDiscrete` | `bool GetIsDiscrete();` | method |
| `GetDiscreteIncrementInterval` | `int GetDiscreteIncrementInterval();` | method |
| `GetShouldUpdateContinuously` | `bool GetShouldUpdateContinuously();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IOptionData](../IOptionData/)
- [same namespace IBooleanOptionData](../IBooleanOptionData/)
- [same namespace IOptionData](../IOptionData/)
- [same namespace ISelectionOptionData](../ISelectionOptionData/)
- [same namespace NativeBooleanOptionData](../NativeBooleanOptionData/)
