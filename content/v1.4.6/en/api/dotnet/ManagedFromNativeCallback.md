---
title: "ManagedFromNativeCallback"
description: "ManagedFromNativeCallback: a public class in TaleWorlds.DotNet, inheriting Attribute; 2 exposed members (0 methods, 1 properties, 0 fields). Source: TaleWorlds.DotNet/ManagedFromNativeCallback.cs."
---
# ManagedFromNativeCallback

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class ManagedFromNativeCallback : Attribute`
**File:** `TaleWorlds.DotNet/ManagedFromNativeCallback.cs`

## Overview

ManagedFromNativeCallback lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/ManagedFromNativeCallback.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is ManagedFromNativeCallback → Attribute. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ManagedFromNativeCallback is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain ManagedFromNativeCallback → Attribute. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/ManagedFromNativeCallback.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `string[]Conditionals` | `public string[]Conditionals` | property |
| `ManagedFromNativeCallback` | `public ManagedFromNativeCallback(string[]conditionals = null, bool isMultiThreadCallable = false)` | constructor |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
