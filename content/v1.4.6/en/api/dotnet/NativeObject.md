---
title: "NativeObject"
description: "NativeObject: a public class in TaleWorlds.DotNet; 7 exposed members (6 methods, 1 properties, 0 fields). Source: TaleWorlds.DotNet/NativeObject.cs."
---
# NativeObject

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public abstract class NativeObject`
**File:** `TaleWorlds.DotNet/NativeObject.cs`

## Overview

NativeObject lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeObject.cs. It is a public class (abstract); the inheritance chain is NativeObject. It exposes 7 public/protected members: 6 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeObject is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain NativeObject. The surface is method-led (methods 6/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Pointer` | `public UIntPtr Pointer` | property |
| `ManualInvalidate` | `public void ManualInvalidate()` | method |
| `AddUnmanagedMemoryPressure` | `protected void AddUnmanagedMemoryPressure(int size)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `operator` | `public static bool operator` | operator |
| `!` | `public static bool operator !` | operator |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
