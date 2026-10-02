---
title: "StringReader"
description: "StringReader: a public class in TaleWorlds.Library, inheriting IReader; 20 exposed members (18 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/StringReader.cs."
---
# StringReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class StringReader : IReader`
**File:** `TaleWorlds.Library/StringReader.cs`

## Overview

StringReader lives in the TaleWorlds.Library module, source file TaleWorlds.Library/StringReader.cs. It is a public class, implementing/inheriting IReader; the inheritance chain is StringReader → IReader. It exposes 20 public/protected members: 18 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StringReader is a top-level type in TaleWorlds.Library, namespace matching the module directory; inheritance chain StringReader → IReader. The surface is method-led (methods 18/20, properties 1/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/StringReader.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public string Data` | property |
| `StringReader` | `public StringReader(string data)` | constructor |
| `ReadSerializableObject` | `public ISerializableObject ReadSerializableObject()` | method |
| `ReadInt` | `public int ReadInt()` | method |
| `ReadShort` | `public short ReadShort()` | method |
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
