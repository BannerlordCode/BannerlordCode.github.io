---
title: "MBException"
description: "MBException: a public class in TaleWorlds.Core, inheriting ApplicationException; 4 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/MBException.cs."
---
# MBException

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBException : ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`

## Overview

MBException lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBException.cs. It is a public class, implementing/inheriting ApplicationException; the inheritance chain is MBException → ApplicationException. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBException is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBException → ApplicationException. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. ApplicationException on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBException.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBException` | `public MBException(string message, Exception innerException) : base(message, innerException)` | constructor |
| `MBException` | `public MBException(string message) : base(message)` | constructor |
| `MBException` | `public MBException()` | constructor |
| `MBException` | `public MBException(SerializationInfo info, StreamingContext context) : base(info, context)` | constructor |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
