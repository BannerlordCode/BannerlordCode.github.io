---
title: "ManagedParameters"
description: "ManagedParameters: a public class in TaleWorlds.Core, inheriting IManagedParametersInitializer; 5 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.Core/ManagedParameters.cs."
---
# ManagedParameters

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.Core/ManagedParameters.cs`

## Overview

ManagedParameters lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ManagedParameters.cs. It is a public class (sealed), implementing/inheriting IManagedParametersInitializer; the inheritance chain is ManagedParameters → IManagedParametersInitializer. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedParameters is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain ManagedParameters → IManagedParametersInitializer. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ManagedParameters.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | property |
| `GetParameter` | `public static float GetParameter(ManagedParametersEnum managedParameterType)` | method |
| `SetParameter` | `public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)` | method |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | method |
| `GetManagedParameter` | `public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IManagedParametersInitializer](../IManagedParametersInitializer)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
