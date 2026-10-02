---
title: "NativeArray"
description: "NativeArray: a public class in TaleWorlds.DotNet, inheriting NativeObject; 10 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.DotNet/NativeArray.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NativeArray

**Namespace:** `TaleWorlds.DotNet`
**Module:** `TaleWorlds.DotNet`
**Type:** `public sealed class NativeArray : NativeObject`
**File:** `TaleWorlds.DotNet/NativeArray.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.DotNet)

## Overview

NativeArray lives in the TaleWorlds.DotNet module, source file TaleWorlds.DotNet/NativeArray.cs. It is a public class (sealed), implementing/inheriting NativeObject; the inheritance chain is NativeArray → NativeObject. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NativeArray lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.DotNet`), namespace `TaleWorlds.DotNet`, inheritance chain NativeArray → NativeObject. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.DotNet/NativeArray.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Create` | `public static NativeArray Create()` | method |
| `DataSize` | `public int DataSize` | property |
| `GetLength` | `public int GetLength<T>() where T : struct` | method |
| `GetElementAt` | `public T GetElementAt<T>(int index) where T : struct` | method |
| `IEnumerable` | `public IEnumerable<T>GetEnumerator<T>() where T : struct` | method |
| `T[]ToArray` | `public T[]ToArray<T>() where T : struct` | method |
| `AddElement` | `public void AddElement(int value)` | method |
| `AddElement` | `public void AddElement(float value)` | method |
| `AddElement` | `public void AddElement<T>(T value) where T : struct` | method |
| `Clear` | `public void Clear()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface NativeObject](../NativeObject/)
- [same namespace CallbackDebugTool](../CallbackDebugTool/)
- [same namespace CallbackStringBufferManager](../CallbackStringBufferManager/)
- [same namespace Controller](../Controller/)
- [same namespace CustomEngineStructMemberData](../CustomEngineStructMemberData/)
