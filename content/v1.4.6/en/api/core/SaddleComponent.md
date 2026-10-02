---
title: "SaddleComponent"
description: "SaddleComponent: a public class in TaleWorlds.Core, inheriting ItemComponent; 2 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/SaddleComponent.cs."
---
# SaddleComponent

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class SaddleComponent : ItemComponent`
**File:** `TaleWorlds.Core/SaddleComponent.cs`

## Overview

SaddleComponent lives in the TaleWorlds.Core module, source file TaleWorlds.Core/SaddleComponent.cs. It is a public class, implementing/inheriting ItemComponent; the inheritance chain is SaddleComponent → ItemComponent → MBObjectBase. It exposes 2 public/protected members: 1 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SaddleComponent is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain SaddleComponent → ItemComponent → MBObjectBase. The surface is method-led (methods 1/2, properties 0/2), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/SaddleComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaddleComponent` | `public SaddleComponent(SaddleComponent saddleComponent)` | constructor |
| `GetCopy` | `public override ItemComponent GetCopy()` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ItemComponent](../ItemComponent)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
