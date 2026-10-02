---
title: "IWriter"
description: "IWriter: a public interface in TaleWorlds.Library; 18 exposed members (18 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/IWriter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IWriter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IWriter`
**File:** `TaleWorlds.Library/IWriter.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

IWriter lives in the TaleWorlds.Library module, source file TaleWorlds.Library/IWriter.cs. It is a public interface; the inheritance chain is IWriter. It exposes 18 public/protected members: 18 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IWriter lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain IWriter. The surface is method-led (methods 18/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/IWriter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WriteSerializableObject` | `void WriteSerializableObject(ISerializableObject serializableObject);` | method |
| `WriteByte` | `void WriteByte(byte value);` | method |
| `WriteSByte` | `void WriteSByte(sbyte value);` | method |
| `WriteBytes` | `void WriteBytes(byte[]bytes);` | method |
| `WriteInt` | `void WriteInt(int value);` | method |
| `WriteUInt` | `void WriteUInt(uint value);` | method |
| `WriteShort` | `void WriteShort(short value);` | method |
| `WriteUShort` | `void WriteUShort(ushort value);` | method |
| `WriteString` | `void WriteString(string value);` | method |
| `WriteColor` | `void WriteColor(Color value);` | method |
| `WriteBool` | `void WriteBool(bool value);` | method |
| `WriteFloat` | `void WriteFloat(float value);` | method |
| `WriteDouble` | `void WriteDouble(double value);` | method |
| `WriteULong` | `void WriteULong(ulong value);` | method |
| `WriteLong` | `void WriteLong(long value);` | method |
| `WriteVec2` | `void WriteVec2(Vec2 vec2);` | method |
| `WriteVec3` | `void WriteVec3(Vec3 vec3);` | method |
| `WriteVec3Int` | `void WriteVec3Int(Vec3i vec3);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
