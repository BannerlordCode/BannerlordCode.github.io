---
title: "NativeArrayEnumerator<T>"
description: "NativeArrayEnumerator<T>: a public class in TaleWorlds.DotNet, inheriting IReadOnlyList<T>, IEnumerable<T>; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.DotNet/NativeArrayEnumerator.cs."
---
# NativeArrayEnumerator<T>

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeArrayEnumerator<T>: IReadOnlyList<T>, IEnumerable<T>, IEnumerable, IReadOnlyCollection<T>where T : struct`
**File:** `TaleWorlds.DotNet/NativeArrayEnumerator.cs`

## Overview

NativeArrayEnumerator<T> lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeArrayEnumerator.cs. It is a public class (sealed), implementing/inheriting IReadOnlyList<T>, IEnumerable<T>, IEnumerable, IReadOnlyCollection<T>; the inheritance chain is NativeArrayEnumerator → IReadOnlyList. It exposes 3 public/protected members: 1 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeArrayEnumerator<T> is a top-level type in TaleWorlds.DotNet, namespace matching the module directory; inheritance chain NativeArrayEnumerator → IReadOnlyList. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. IReadOnlyList on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeArrayEnumerator.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeArrayEnumerator` | `public NativeArrayEnumerator(NativeArray nativeArray)` | constructor |
| `this[...]` | `public T this[int index]` | indexer |
| `Count` | `public int Count` | property |

## See Also

- [↑ dotnet module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CallbackDebugTool](../CallbackDebugTool)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager)
- [same namespace Controller](../Controller)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData)
