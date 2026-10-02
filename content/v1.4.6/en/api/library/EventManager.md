---
title: "EventManager"
description: "EventManager: a public class in TaleWorlds.Library; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/EventSystem/EventManager.cs."
---
# EventManager

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class EventManager`
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## Overview

EventManager lives in the TaleWorlds.Library module, source file TaleWorlds.Library/EventSystem/EventManager.cs. It is a public class; the inheritance chain is EventManager. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EventManager is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.EventSystem) the module directory; inheritance chain EventManager. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/EventSystem/EventManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventManager` | `public EventManager()` | constructor |
| `RegisterEvent` | `public void RegisterEvent<T>(Action<T>eventObjType)` | method |
| `UnregisterEvent` | `public void UnregisterEvent<T>(Action<T>eventObjType)` | method |
| `TriggerEvent` | `public void TriggerEvent<T>(T eventObj)` | method |
| `Clear` | `public void Clear()` | method |
| `object>GetCloneOfEventDictionary` | `public IDictionary<Type, object>GetCloneOfEventDictionary()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DictionaryByType](../DictionaryByType)
- [same namespace EventBase](../EventBase)
