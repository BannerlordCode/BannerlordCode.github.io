---
title: "LinearFrictionTerm"
description: "LinearFrictionTerm: a public struct in TaleWorlds.Core; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.Core/LinearFrictionTerm.cs."
---
# LinearFrictionTerm

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public struct LinearFrictionTerm`
**File:** `TaleWorlds.Core/LinearFrictionTerm.cs`

## Overview

LinearFrictionTerm lives in the TaleWorlds.Core module, source file TaleWorlds.Core/LinearFrictionTerm.cs. It is a public struct; the inheritance chain is LinearFrictionTerm. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LinearFrictionTerm is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain LinearFrictionTerm. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/LinearFrictionTerm.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Invalid` | `public static LinearFrictionTerm Invalid` | property |
| `One` | `public static LinearFrictionTerm One` | property |
| `IsValid` | `public bool IsValid` | property |
| `LinearFrictionTerm` | `public LinearFrictionTerm(float right, float left, float forward, float backward, float up, float down)` | constructor |
| `/` | `public static LinearFrictionTerm operator /(LinearFrictionTerm o, float f)` | operator |
| `*` | `public static LinearFrictionTerm operator *(LinearFrictionTerm o, float f)` | operator |
| `ElementWiseProduct` | `public LinearFrictionTerm ElementWiseProduct(LinearFrictionTerm o)` | method |
| `NearlyEquals` | `public bool NearlyEquals(in LinearFrictionTerm o, float epsilon = 1E-05f)` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
