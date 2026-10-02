---
title: "LibraryCallback"
description: "LibraryCallback: a public class in TaleWorlds.DotNet, inheriting ManagedFromNativeCallback; 1 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.DotNet/LibraryCallback.cs."
---
# LibraryCallback

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public class LibraryCallback : ManagedFromNativeCallback`
**File:** `TaleWorlds.DotNet/LibraryCallback.cs`

## Overview

LibraryCallback lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/LibraryCallback.cs. It is a public class, implementing/inheriting ManagedFromNativeCallback; the inheritance chain is LibraryCallback → ManagedFromNativeCallback → Attribute. It exposes 1 public/protected members: 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LibraryCallback is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain LibraryCallback → ManagedFromNativeCallback → Attribute. The surface is method-led (methods 0/1, properties 0/1), so it mostly exposes operations. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/LibraryCallback.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LibraryCallback` | `public LibraryCallback(string[]conditionals = null, bool isMultiThreadCallable = false) : base(conditionals, isMultiThreadCallable)` | constructor |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ManagedFromNativeCallback](../ManagedFromNativeCallback)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
