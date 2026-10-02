---
title: "DictionaryByType"
description: "DictionaryByType: a public class in TaleWorlds.Library.EventSystem; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/EventSystem/DictionaryByType.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DictionaryByType

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class DictionaryByType`
**File:** `TaleWorlds.Library/EventSystem/DictionaryByType.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

DictionaryByType lives in the TaleWorlds.Library module, source file TaleWorlds.Library/EventSystem/DictionaryByType.cs. It is a public class; the inheritance chain is DictionaryByType. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DictionaryByType lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.EventSystem`, inheritance chain DictionaryByType. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/EventSystem/DictionaryByType.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Add` | `public void Add<T>(Action<T>value)` | method |
| `Remove` | `public void Remove<T>(Action<T>value)` | method |
| `InvokeActions` | `public void InvokeActions<T>(T item)` | method |
| `List` | `public List<Action<T>>Get<T>()` | method |
| `TryGet` | `public bool TryGet<T>(out List<Action<T>>value)` | method |
| `object>GetClone` | `public IDictionary<Type, object>GetClone()` | method |
| `Clear` | `public void Clear()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EventBase](../EventBase/)
- [same namespace EventManager](../EventManager/)
