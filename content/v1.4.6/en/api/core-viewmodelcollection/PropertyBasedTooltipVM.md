---
title: "PropertyBasedTooltipVM"
description: "PropertyBasedTooltipVM: a public class in TaleWorlds.Core.ViewModelCollection, inheriting TooltipBaseVM; 18 exposed members (13 methods, 3 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs."
---
# PropertyBasedTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`

## Overview

PropertyBasedTooltipVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is PropertyBasedTooltipVM → TooltipBaseVM. It exposes 18 public/protected members: 13 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PropertyBasedTooltipVM is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain PropertyBasedTooltipVM → TooltipBaseVM. The surface is method-led (methods 13/18, properties 3/18), so it mostly exposes operations. TooltipBaseVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PropertyBasedTooltipVM` | `public PropertyBasedTooltipVM(Type invokedType, object[]invokedArgs) : base(invokedType, invokedArgs)` | constructor |
| `OnFinalizeInternal` | `protected override void OnFinalizeInternal()` | method |
| `AddKeyType` | `public static void AddKeyType(string keyID, Func<string>getKeyText)` | method |
| `GetKeyText` | `public string GetKeyText(string keyID)` | method |
| `OnPeriodicRefresh` | `protected override void OnPeriodicRefresh()` | method |
| `OnIsExtendedChanged` | `protected override void OnIsExtendedChanged()` | method |
| `RefreshGenericPropertyBasedTooltip` | `public static void RefreshGenericPropertyBasedTooltip(PropertyBasedTooltipVM propertyBasedTooltip, object[]args)` | method |
| `AddProperty` | `public void AddProperty(string definition, string value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddModifierProperty` | `public void AddModifierProperty(string definition, int modifierValue, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddProperty` | `public void AddProperty(string definition, Func<string>value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddProperty` | `public void AddProperty(Func<string>definition, Func<string>value, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddColoredProperty` | `public void AddColoredProperty(string definition, string value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddColoredProperty` | `public void AddColoredProperty(string definition, Func<string>value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `AddColoredProperty` | `public void AddColoredProperty(Func<string>definition, Func<string>value, Color color, int textHeight = 0, TooltipProperty.TooltipPropertyFlags propertyFlags = TooltipProperty.TooltipPropertyFlags.None)` | method |
| `MBBindingList` | `public MBBindingList<TooltipProperty>TooltipPropertyList` | property |
| `Mode` | `public int Mode` | property |
| `TooltipMode` | `public enum TooltipMode` | property |
| `TooltipMode` | `public enum TooltipMode` | nested type |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
