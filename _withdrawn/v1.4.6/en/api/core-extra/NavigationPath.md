---
title: "NavigationPath"
description: "NavigationPath: a public class in TaleWorlds.Library, inheriting ISerializable; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/NavigationPath.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NavigationPath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class NavigationPath : ISerializable`
**File:** `TaleWorlds.Library/NavigationPath.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

NavigationPath lives in the TaleWorlds.Library module, source file TaleWorlds.Library/NavigationPath.cs. It is a public class, implementing/inheriting ISerializable; the inheritance chain is NavigationPath → ISerializable. It exposes 7 public/protected members: 3 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NavigationPath lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain NavigationPath → ISerializable. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. ISerializable on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/NavigationPath.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Vec2[]PathPoints` | `public Vec2[]PathPoints` | property |
| `Size` | `public int Size` | property |
| `NavigationPath` | `public NavigationPath()` | constructor |
| `NavigationPath` | `protected NavigationPath(SerializationInfo info, StreamingContext context)` | constructor |
| `GetObjectData` | `public virtual void GetObjectData(SerializationInfo info, StreamingContext context)` | method |
| `this[...]` | `public Vec2 this[int i]` | indexer |
| `OverridePathPointAtIndex` | `public void OverridePathPointAtIndex(int index, in Vec2 newValue)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
