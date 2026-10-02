---
title: "ActionOptionData"
description: "ActionOptionData: a public class in TaleWorlds.MountAndBlade.Options, inheriting IOptionData; 12 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Options/ActionOptionData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ActionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ActionOptionData : IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ActionOptionData lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Options/ActionOptionData.cs. It is a public class, implementing/inheriting IOptionData; the inheritance chain is ActionOptionData → IOptionData. It exposes 12 public/protected members: 8 methods, 1 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ActionOptionData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Options`, inheritance chain ActionOptionData → IOptionData. The surface is method-led (methods 8/12, properties 1/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Options/ActionOptionData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IOptionData](../../engine/IOptionData/)
- [same namespace OptionCategory](../OptionCategory/)
- [same namespace OptionGroup](../OptionGroup/)
- [same namespace OptionsProvider](../OptionsProvider/)
