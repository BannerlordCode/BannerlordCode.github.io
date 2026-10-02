---
title: "WeakNativeObjectReference<T>"
description: "WeakNativeObjectReference<T>: a public class in TaleWorlds.DotNet, inheriting NativeObject; 3 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.DotNet/WeakNativeObjectReference.2.cs."
---
# WeakNativeObjectReference<T>

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class WeakNativeObjectReference<T>where T : NativeObject`
**File:** `TaleWorlds.DotNet/WeakNativeObjectReference.2.cs`

## Overview

WeakNativeObjectReference<T> lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/WeakNativeObjectReference.2.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is WeakNativeObjectReference → NativeObject. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeakNativeObjectReference<T> is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain WeakNativeObjectReference → NativeObject. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/WeakNativeObjectReference.2.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WeakNativeObjectReference` | `public WeakNativeObjectReference(T nativeObject)` | constructor |
| `ManualInvalidate` | `public void ManualInvalidate()` | method |
| `GetNativeObject` | `public NativeObject GetNativeObject()` | method |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface NativeObject](../NativeObject)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
