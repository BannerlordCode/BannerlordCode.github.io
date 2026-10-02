---
title: "MBMisuseException"
description: "MBMisuseException: a public class in TaleWorlds.Core, inheriting MBException; 1 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/MBMisuseException.cs."
---
# MBMisuseException

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBMisuseException : MBException`
**File:** `TaleWorlds.Core/MBMisuseException.cs`

## Overview

MBMisuseException lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBMisuseException.cs. It is a public class, implementing/inheriting MBException; the inheritance chain is MBMisuseException → MBException → ApplicationException. It exposes 1 public/protected members: 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBMisuseException is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBMisuseException → MBException → ApplicationException. The surface is method-led (methods 0/1, properties 0/1), so it mostly exposes operations. ApplicationException on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBMisuseException.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBMisuseException` | `public MBMisuseException(string exceptionString) : base(exceptionString)` | constructor |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MBException](../MBException)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
