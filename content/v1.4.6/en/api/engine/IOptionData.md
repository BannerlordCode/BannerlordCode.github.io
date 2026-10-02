---
title: "IOptionData"
description: "IOptionData: a public interface in TaleWorlds.Engine; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.Engine/Options/IOptionData.cs."
---
# IOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface IOptionData`
**File:** `TaleWorlds.Engine/Options/IOptionData.cs`

## Overview

IOptionData lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Options/IOptionData.cs. It is a public interface; the inheritance chain is IOptionData. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IOptionData is a top-level type in TaleWorlds.Engine, namespace differing from (TaleWorlds.Engine.Options) the module directory; inheritance chain IOptionData. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Options/IOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDefaultValue` | `float GetDefaultValue();` | method |
| `Commit` | `void Commit();` | method |
| `GetValue` | `float GetValue(bool forceRefresh);` | method |
| `SetValue` | `void SetValue(float value);` | method |
| `GetOptionType` | `object GetOptionType();` | method |
| `IsNative` | `bool IsNative();` | method |
| `IsAction` | `bool IsAction();` | method |
| `bool>GetIsDisabledAndReasonID` | `ValueTuple<string, bool>GetIsDisabledAndReasonID();` | method |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IBooleanOptionData](../IBooleanOptionData)
- [same namespace INumericOptionData](../INumericOptionData)
- [same namespace ISelectionOptionData](../ISelectionOptionData)
- [same namespace NativeBooleanOptionData](../NativeBooleanOptionData)
