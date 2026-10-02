---
title: "NativeSelectionOptionData"
description: "NativeSelectionOptionData: a public class in TaleWorlds.Engine, inheriting NativeOptionData, ISelectionOptionData; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/Options/NativeSelectionOptionData.cs."
---
# NativeSelectionOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public class NativeSelectionOptionData : NativeOptionData, ISelectionOptionData, IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeSelectionOptionData.cs`

## Overview

NativeSelectionOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/NativeSelectionOptionData.cs. It is a public class, implementing/inheriting NativeOptionData, ISelectionOptionData, IOptionData; the inheritance chain is NativeSelectionOptionData → NativeOptionData → IOptionData. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeSelectionOptionData is a top-level type in TaleWorlds.Engine, namespace differing from (TaleWorlds.Engine.Options) the module directory; inheritance chain NativeSelectionOptionData → NativeOptionData → IOptionData. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/NativeSelectionOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeSelectionOptionData` | `public NativeSelectionOptionData(NativeOptions.NativeOptionsType type) : base(type)` | constructor |
| `GetSelectableOptionsLimit` | `public int GetSelectableOptionsLimit()` | method |
| `IEnumerable` | `public IEnumerable<SelectionData>GetSelectableOptionNames()` | method |
| `GetOptionsLimit` | `public static int GetOptionsLimit(NativeOptions.NativeOptionsType optionType)` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NativeOptionData](../NativeOptionData)
- [base / interface ISelectionOptionData](../ISelectionOptionData)
- [base / interface IOptionData](../IOptionData)
- [same namespace IBooleanOptionData](../IBooleanOptionData)
- [same namespace INumericOptionData](../INumericOptionData)
- [same namespace IOptionData](../IOptionData)
- [same namespace ISelectionOptionData](../ISelectionOptionData)
