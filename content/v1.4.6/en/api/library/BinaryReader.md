---
title: "BinaryReader"
description: "BinaryReader: a public class in TaleWorlds.Library, inheriting IReader; 24 exposed members (21 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/BinaryReader.cs."
---
# BinaryReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BinaryReader : IReader`
**File:** `TaleWorlds.Library/BinaryReader.cs`

## Overview

BinaryReader lives in the TaleWorlds.Library module, source file TaleWorlds.Library/BinaryReader.cs. It is a public class, implementing/inheriting IReader; the inheritance chain is BinaryReader → IReader. It exposes 24 public/protected members: 21 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BinaryReader is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain BinaryReader → IReader. The surface is method-led (methods 21/24, properties 2/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/BinaryReader.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Data` | `public byte[]Data` | property |
| `BinaryReader` | `public BinaryReader(byte[]data)` | constructor |
| `UnreadByteCount` | `public int UnreadByteCount` | property |
| `ReadSerializableObject` | `public ISerializableObject ReadSerializableObject()` | method |
| `Read3ByteInt` | `public int Read3ByteInt()` | method |
| `ReadInt` | `public int ReadInt()` | method |
| `ReadShort` | `public short ReadShort()` | method |
| `ReadFloats` | `public void ReadFloats(float[]output, int count)` | method |
| `ReadShorts` | `public void ReadShorts(short[]output, int count)` | method |
| `ReadString` | `public string ReadString()` | method |
| `ReadColor` | `public Color ReadColor()` | method |
| `ReadBool` | `public bool ReadBool()` | method |
| `ReadFloat` | `public float ReadFloat()` | method |
| `ReadUInt` | `public uint ReadUInt()` | method |
| `ReadULong` | `public ulong ReadULong()` | method |
| `ReadLong` | `public long ReadLong()` | method |
| `ReadByte` | `public byte ReadByte()` | method |
| `byte[]ReadBytes` | `public byte[]ReadBytes(int length)` | method |
| `ReadVec2` | `public Vec2 ReadVec2()` | method |
| `ReadVec3` | `public Vec3 ReadVec3()` | method |
| `ReadVec3Int` | `public Vec3i ReadVec3Int()` | method |
| `ReadSByte` | `public sbyte ReadSByte()` | method |
| `ReadUShort` | `public ushort ReadUShort()` | method |
| `ReadDouble` | `public double ReadDouble()` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IReader](../IReader)
- [same namespace AmbientInformation](../AmbientInformation)
- [same namespace ApplicationPlatform](../ApplicationPlatform)
- [same namespace ApplicationVersion](../ApplicationVersion)
- [same namespace ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
