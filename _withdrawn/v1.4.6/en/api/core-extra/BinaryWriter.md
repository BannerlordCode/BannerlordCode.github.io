---
title: "BinaryWriter"
description: "BinaryWriter: a public class in TaleWorlds.Library, inheriting IWriter; 29 exposed members (25 methods, 2 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/BinaryWriter.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BinaryWriter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BinaryWriter : IWriter`
**File:** `TaleWorlds.Library/BinaryWriter.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

BinaryWriter lives in the TaleWorlds.Library module, source file TaleWorlds.Library/BinaryWriter.cs. It is a public class, implementing/inheriting IWriter; the inheritance chain is BinaryWriter → IWriter. It exposes 29 public/protected members: 25 methods, 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BinaryWriter lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library`, inheritance chain BinaryWriter → IWriter. The surface is method-led (methods 25/29, properties 2/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/BinaryWriter.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `byte[]Data` | `public byte[]Data` | property |
| `Length` | `public int Length` | property |
| `BinaryWriter` | `public BinaryWriter()` | constructor |
| `BinaryWriter` | `public BinaryWriter(int capacity)` | constructor |
| `Clear` | `public void Clear()` | method |
| `EnsureLength` | `public void EnsureLength(int added)` | method |
| `WriteSerializableObject` | `public void WriteSerializableObject(ISerializableObject serializableObject)` | method |
| `WriteByte` | `public void WriteByte(byte value)` | method |
| `WriteBytes` | `public void WriteBytes(byte[]bytes)` | method |
| `Write3ByteInt` | `public void Write3ByteInt(int value)` | method |
| `WriteInt` | `public void WriteInt(int value)` | method |
| `WriteShort` | `public void WriteShort(short value)` | method |
| `WriteString` | `public void WriteString(string value)` | method |
| `WriteFloats` | `public void WriteFloats(float[]value, int count)` | method |
| `WriteShorts` | `public void WriteShorts(short[]value, int count)` | method |
| `WriteColor` | `public void WriteColor(Color value)` | method |
| `WriteBool` | `public void WriteBool(bool value)` | method |
| `WriteFloat` | `public void WriteFloat(float value)` | method |
| `WriteUInt` | `public void WriteUInt(uint value)` | method |
| `WriteULong` | `public void WriteULong(ulong value)` | method |
| `WriteLong` | `public void WriteLong(long value)` | method |
| `WriteVec2` | `public void WriteVec2(Vec2 vec2)` | method |
| `WriteVec3` | `public void WriteVec3(Vec3 vec3)` | method |
| `WriteVec3Int` | `public void WriteVec3Int(Vec3i vec3)` | method |
| `WriteSByte` | `public void WriteSByte(sbyte value)` | method |
| `WriteUShort` | `public void WriteUShort(ushort value)` | method |
| `WriteDouble` | `public void WriteDouble(double value)` | method |
| `AppendData` | `public void AppendData(BinaryWriter writer)` | method |
| `byte[]GetFinalData` | `public byte[]GetFinalData()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IWriter](../IWriter/)
- [same namespace AmbientInformation](../AmbientInformation/)
- [same namespace ApplicationPlatform](../ApplicationPlatform/)
- [same namespace ApplicationVersion](../ApplicationVersion/)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
