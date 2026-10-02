---
title: "TWException"
description: "TWException: a public class in TaleWorlds.Library, inheriting ApplicationException; 4 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Library/TWException.cs."
---
# TWException

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TWException : ApplicationException`
**File:** `TaleWorlds.Library/TWException.cs`

## Overview

TWException lives in the TaleWorlds.Library module, source file TaleWorlds.Library/TWException.cs. It is a public class, implementing/inheriting ApplicationException; the inheritance chain is TWException → ApplicationException. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TWException is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain TWException → ApplicationException. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. ApplicationException on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/TWException.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TWException` | `public TWException(string message, Exception innerException) : base(message, innerException)` | constructor |
| `TWException` | `public TWException(string message) : base(message)` | constructor |
| `TWException` | `public TWException()` | constructor |
| `TWException` | `public TWException(SerializationInfo info, StreamingContext context) : base(info, context)` | constructor |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
