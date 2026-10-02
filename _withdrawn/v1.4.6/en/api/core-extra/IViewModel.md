---
title: "IViewModel"
description: "IViewModel: a public interface in TaleWorlds.Library, inheriting INotifyPropertyChanged; 14 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/IViewModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IViewModel

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IViewModel : INotifyPropertyChanged`
**File:** `TaleWorlds.Library/IViewModel.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IViewModel lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IViewModel.cs. It is a public interface, implementing/inheriting INotifyPropertyChanged; the inheritance chain is IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 6 methods, 8 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IViewModel lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/14, properties 0/14), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IViewModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path);` | method |
| `GetViewModelAtPath` | `object GetViewModelAtPath(BindingPath path, bool isList);` | method |
| `GetPropertyValue` | `object GetPropertyValue(string name);` | method |
| `GetPropertyValue` | `object GetPropertyValue(string name, PropertyTypeFeeder propertyTypeFeeder);` | method |
| `SetPropertyValue` | `void SetPropertyValue(string name, object value);` | method |
| `ExecuteCommand` | `void ExecuteCommand(string commandName, object[]parameters);` | method |
| `PropertyChangedWithValue;` | `event PropertyChangedWithValueEventHandler PropertyChangedWithValue;` | event |
| `PropertyChangedWithBoolValue;` | `event PropertyChangedWithBoolValueEventHandler PropertyChangedWithBoolValue;` | event |
| `PropertyChangedWithIntValue;` | `event PropertyChangedWithIntValueEventHandler PropertyChangedWithIntValue;` | event |
| `PropertyChangedWithFloatValue;` | `event PropertyChangedWithFloatValueEventHandler PropertyChangedWithFloatValue;` | event |
| `PropertyChangedWithUIntValue;` | `event PropertyChangedWithUIntValueEventHandler PropertyChangedWithUIntValue;` | event |
| `PropertyChangedWithColorValue;` | `event PropertyChangedWithColorValueEventHandler PropertyChangedWithColorValue;` | event |
| `PropertyChangedWithDoubleValue;` | `event PropertyChangedWithDoubleValueEventHandler PropertyChangedWithDoubleValue;` | event |
| `PropertyChangedWithVec2Value;` | `event PropertyChangedWithVec2ValueEventHandler PropertyChangedWithVec2Value;` | event |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
