---
title: "MBException"
description: "MBException: a public class in TaleWorlds.Core, inheriting ApplicationException; 4 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MBException.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBException

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class MBException : ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MBException lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBException.cs. It is a public class, implementing/inheriting ApplicationException; the inheritance chain is MBException → ApplicationException. It exposes 4 public/protected members: 4 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBException lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MBException → ApplicationException. The surface is method-led (methods 0/4, properties 0/4), so it mostly exposes operations. ApplicationException on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBException.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MBException` | `public MBException(string message, Exception innerException) : base(message, innerException)` | constructor |
| `MBException` | `public MBException(string message) : base(message)` | constructor |
| `MBException` | `public MBException()` | constructor |
| `MBException` | `public MBException(SerializationInfo info, StreamingContext context) : base(info, context)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
