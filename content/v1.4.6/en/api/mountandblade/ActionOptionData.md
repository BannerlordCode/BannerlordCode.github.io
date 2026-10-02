---
title: "ActionOptionData"
description: "ActionOptionData: a public class in TaleWorlds.MountAndBlade, inheriting IOptionData; 12 exposed members (8 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Options/ActionOptionData.cs."
---
# ActionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ActionOptionData : IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## Overview

ActionOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ActionOptionData.cs. It is a public class, implementing/inheriting IOptionData; the inheritance chain is ActionOptionData → IOptionData. It exposes 12 public/protected members: 8 methods, 1 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionOptionData is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Options) the module directory; inheritance chain ActionOptionData → IOptionData. The surface is method-led (methods 8/12, properties 1/12), so it mostly exposes operations. IOptionData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ActionOptionData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAction` | `public Action OnAction` | property |
| `ActionOptionData` | `public ActionOptionData(ManagedOptions.ManagedOptionsType managedType, Action onAction)` | constructor |
| `ActionOptionData` | `public ActionOptionData(NativeOptions.NativeOptionsType nativeType, Action onAction)` | constructor |
| `ActionOptionData` | `public ActionOptionData(string optionTypeId, Action onAction)` | constructor |
| `Commit` | `public void Commit()` | method |
| `GetDefaultValue` | `public float GetDefaultValue()` | method |
| `GetOptionType` | `public object GetOptionType()` | method |
| `GetValue` | `public float GetValue(bool forceRefresh)` | method |
| `IsNative` | `public bool IsNative()` | method |
| `SetValue` | `public void SetValue(float value)` | method |
| `IsAction` | `public bool IsAction()` | method |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace OptionCategory](../OptionCategory)
- [same namespace OptionGroup](../OptionGroup)
- [same namespace OptionsProvider](../OptionsProvider)
