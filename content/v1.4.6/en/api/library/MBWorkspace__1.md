---
title: "MBWorkspace<T>"
description: "MBWorkspace<T>: a public class in TaleWorlds.Library, inheriting IMBCollection, new(); 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/MBWorkspace.cs."
---
# MBWorkspace<T>

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class MBWorkspace<T>where T : IMBCollection, new()`
**File:** `TaleWorlds.Library/MBWorkspace.cs`

## Overview

MBWorkspace<T> lives in the TaleWorlds.Library module, source file TaleWorlds.Library/MBWorkspace.cs. It is a public class, implementing/inheriting IMBCollection, new(); the inheritance chain is MBWorkspace → IMBCollection. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBWorkspace<T> is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain MBWorkspace → IMBCollection. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/MBWorkspace.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartUsingWorkspace` | `public T StartUsingWorkspace()` | method |
| `StopUsingWorkspace` | `public void StopUsingWorkspace()` | method |
| `GetWorkspace` | `public T GetWorkspace()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IMBCollection](../IMBCollection)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
