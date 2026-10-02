---
title: "NativeNumericOptionData"
description: "NativeNumericOptionData: a public class in TaleWorlds.Engine.Options, inheriting NativeOptionData, INumericOptionData; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Options/NativeNumericOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeNumericOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public class NativeNumericOptionData : NativeOptionData, INumericOptionData, IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeNumericOptionData.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

NativeNumericOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/NativeNumericOptionData.cs. It is a public class, implementing/inheriting NativeOptionData, INumericOptionData, IOptionData; the inheritance chain is NativeNumericOptionData → NativeOptionData → IOptionData. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeNumericOptionData lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine.Options`, inheritance chain NativeNumericOptionData → NativeOptionData → IOptionData. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/NativeNumericOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NativeNumericOptionData` | `public NativeNumericOptionData(NativeOptions.NativeOptionsType type) : base(type)` | constructor |
| `GetMinValue` | `public float GetMinValue()` | method |
| `GetMaxValue` | `public float GetMaxValue()` | method |
| `GetIsDiscrete` | `public bool GetIsDiscrete()` | method |
| `GetDiscreteIncrementInterval` | `public int GetDiscreteIncrementInterval()` | method |
| `GetShouldUpdateContinuously` | `public bool GetShouldUpdateContinuously()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeOptionData](../NativeOptionData/)
- [base / interface INumericOptionData](../INumericOptionData/)
- [base / interface IOptionData](../IOptionData/)
- [same namespace IBooleanOptionData](../IBooleanOptionData/)
- [same namespace INumericOptionData](../INumericOptionData/)
- [same namespace IOptionData](../IOptionData/)
- [same namespace ISelectionOptionData](../ISelectionOptionData/)
