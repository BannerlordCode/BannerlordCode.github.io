---
title: "IReadOnlyPropertyOwnerF<T>"
description: "IReadOnlyPropertyOwnerF<T>: a public interface in TaleWorlds.Core, inheriting MBObjectBase; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.Core/IReadOnlyPropertyOwnerF.cs."
---
# IReadOnlyPropertyOwnerF<T>

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IReadOnlyPropertyOwnerF<T>where T : MBObjectBase`
**File:** `TaleWorlds.Core/IReadOnlyPropertyOwnerF.cs`

## Overview

IReadOnlyPropertyOwnerF<T> lives in the TaleWorlds.Core module, source file TaleWorlds.Core/IReadOnlyPropertyOwnerF.cs. It is a public interface, implementing/inheriting MBObjectBase; the inheritance chain is IReadOnlyPropertyOwnerF → MBObjectBase. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IReadOnlyPropertyOwnerF<T> is a top-level type in TaleWorlds.Core, namespace matching the module directory; inheritance chain IReadOnlyPropertyOwnerF → MBObjectBase. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBObjectBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/IReadOnlyPropertyOwnerF.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPropertyValue` | `float GetPropertyValue(T attribute);` | method |
| `HasProperty` | `bool HasProperty(T attribute);` | method |

## See Also

- [↑ core module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionSetCode](../ActionSetCode)
- [same namespace AgentAttackType](../AgentAttackType)
- [same namespace AgentControllerType](../AgentControllerType)
- [same namespace AgentData](../AgentData)
