---
title: "NativeOptionData"
description: "NativeOptionData: a public class in TaleWorlds.Engine, inheriting IOptionData; 9 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/Options/NativeOptionData.cs."
---
# NativeOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public abstract class NativeOptionData : IOptionData`
**File:** `TaleWorlds.Engine/Options/NativeOptionData.cs`

## Overview

NativeOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/NativeOptionData.cs. It is a public class (abstract), implementing/inheriting IOptionData; the inheritance chain is NativeOptionData → IOptionData. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeOptionData is a top-level type in TaleWorlds.Engine, namespace differing from (TaleWorlds.Engine.Options) the module directory; inheritance chain NativeOptionData → IOptionData. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/NativeOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeOptionData` | `protected NativeOptionData(NativeOptions.NativeOptionsType type)` | constructor |
| `GetDefaultValue` | `public virtual float GetDefaultValue()` | method |
| `Commit` | `public void Commit()` | method |
| `GetValue` | `public float GetValue(bool forceRefresh)` | method |
| `SetValue` | `public void SetValue(float value)` | method |
| `GetOptionType` | `public object GetOptionType()` | method |
| `IsNative` | `public bool IsNative()` | method |
| `IsAction` | `public bool IsAction()` | method |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IOptionData](../IOptionData)
- [same namespace IBooleanOptionData](../IBooleanOptionData)
- [same namespace INumericOptionData](../INumericOptionData)
- [same namespace IOptionData](../IOptionData)
- [same namespace ISelectionOptionData](../ISelectionOptionData)
