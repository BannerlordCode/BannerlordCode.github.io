---
title: "MBUnderFlowException"
description: "MBUnderFlowException: a public class in TaleWorlds.Core, inheriting MBException; 2 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/MBUnderFlowException.cs."
---
# MBUnderFlowException

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBUnderFlowException : MBException`
**File:** `TaleWorlds.Core/MBUnderFlowException.cs`

## Overview

MBUnderFlowException lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBUnderFlowException.cs. It is a public class, implementing/inheriting MBException; the inheritance chain is MBUnderFlowException → MBException → ApplicationException. It exposes 2 public/protected members: 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBUnderFlowException is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain MBUnderFlowException → MBException → ApplicationException. The surface is method-led (methods 0/2, properties 0/2), so it mostly exposes operations. ApplicationException on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBUnderFlowException.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBUnderFlowException` | `public MBUnderFlowException() : base(" ")` | constructor |
| `MBUnderFlowException` | `public MBUnderFlowException(string parameterName) : base(" " + parameterName)` | constructor |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MBException](../MBException)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
