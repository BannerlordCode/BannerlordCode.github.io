---
title: "PropertyBasedTooltipVM"
description: "PropertyBasedTooltipVM: a public class in TaleWorlds.Core.ViewModelCollection.Information, inheriting TooltipBaseVM; 18 exposed members (13 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PropertyBasedTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class PropertyBasedTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.Core.ViewModelCollection)

## Overview

PropertyBasedTooltipVM lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs. It is a public class, implementing/inheriting TooltipBaseVM; the inheritance chain is PropertyBasedTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 13 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PropertyBasedTooltipVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.Core.ViewModelCollection`), namespace `TaleWorlds.Core.ViewModelCollection.Information`, inheritance chain PropertyBasedTooltipVM → TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 13/18, properties 3/18), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/PropertyBasedTooltipVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TooltipBaseVM](../../core-extra/TooltipBaseVM/)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel/)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM/)
- [same namespace GameNotificationVM](../GameNotificationVM/)
- [same namespace HintViewModel](../HintViewModel/)
