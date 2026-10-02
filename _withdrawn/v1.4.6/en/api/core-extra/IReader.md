---
title: "IReader"
description: "IReader: a public interface in TaleWorlds.Library; 18 exposed members (18 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/IReader.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IReader`
**File:** `TaleWorlds.Library/IReader.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IReader lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IReader.cs. It is a public interface; the inheritance chain is IReader. It exposes 18 public/protected members: 18 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IReader lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain IReader. The surface is method-led (methods 18/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IReader.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ReadSerializableObject` | `ISerializableObject ReadSerializableObject();` | method |
| `ReadInt` | `int ReadInt();` | method |
| `ReadShort` | `short ReadShort();` | method |
| `ReadString` | `string ReadString();` | method |
| `ReadColor` | `Color ReadColor();` | method |
| `ReadBool` | `bool ReadBool();` | method |
| `ReadFloat` | `float ReadFloat();` | method |
| `ReadUInt` | `uint ReadUInt();` | method |
| `ReadULong` | `ulong ReadULong();` | method |
| `ReadLong` | `long ReadLong();` | method |
| `ReadByte` | `byte ReadByte();` | method |
| `byte[]ReadBytes` | `byte[]ReadBytes(int length);` | method |
| `ReadVec2` | `Vec2 ReadVec2();` | method |
| `ReadVec3` | `Vec3 ReadVec3();` | method |
| `ReadVec3Int` | `Vec3i ReadVec3Int();` | method |
| `ReadSByte` | `sbyte ReadSByte();` | method |
| `ReadUShort` | `ushort ReadUShort();` | method |
| `ReadDouble` | `double ReadDouble();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
