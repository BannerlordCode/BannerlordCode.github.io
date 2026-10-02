---
title: "ManagedParameters"
description: "ManagedParameters: a public class in TaleWorlds.Core, inheriting IManagedParametersInitializer; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/ManagedParameters.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ManagedParameters

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**File:** `TaleWorlds.Core/ManagedParameters.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

ManagedParameters lives in the TaleWorlds.Core module, source file TaleWorlds.Core/ManagedParameters.cs. It is a public class (sealed), implementing/inheriting IManagedParametersInitializer; the inheritance chain is ManagedParameters → IManagedParametersInitializer. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedParameters lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain ManagedParameters → IManagedParametersInitializer. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/ManagedParameters.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static ManagedParameters Instance` | property |
| `GetParameter` | `public static float GetParameter(ManagedParametersEnum managedParameterType)` | method |
| `SetParameter` | `public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)` | method |
| `Initialize` | `public void Initialize(string relativeXmlPath)` | method |
| `GetManagedParameter` | `public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IManagedParametersInitializer](../IManagedParametersInitializer/)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
