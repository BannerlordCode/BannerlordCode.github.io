---
title: "BinaryReader"
description: "BinaryReader：TaleWorlds.Library 的 public 类，继承 IReader；公开成员 24 个（方法 21、属性 2、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/BinaryReader.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BinaryReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class BinaryReader : IReader`
**File:** `TaleWorlds.Library/BinaryReader.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

BinaryReader 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/BinaryReader.cs。它是一个 public 类，实现/继承 IReader，继承链为 BinaryReader → IReader。public/protected 成员共 24 个：21 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BinaryReader 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 BinaryReader → IReader。成员构成以方法为主（方法 21/24，属性 2/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/BinaryReader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Data` | `public byte[]Data` | 属性 |
| `BinaryReader` | `public BinaryReader(byte[]data)` | 构造函数 |
| `UnreadByteCount` | `public int UnreadByteCount` | 属性 |
| `ReadSerializableObject` | `public ISerializableObject ReadSerializableObject()` | 方法 |
| `Read3ByteInt` | `public int Read3ByteInt()` | 方法 |
| `ReadInt` | `public int ReadInt()` | 方法 |
| `ReadShort` | `public short ReadShort()` | 方法 |
| `ReadFloats` | `public void ReadFloats(float[]output, int count)` | 方法 |
| `ReadShorts` | `public void ReadShorts(short[]output, int count)` | 方法 |
| `ReadString` | `public string ReadString()` | 方法 |
| `ReadColor` | `public Color ReadColor()` | 方法 |
| `ReadBool` | `public bool ReadBool()` | 方法 |
| `ReadFloat` | `public float ReadFloat()` | 方法 |
| `ReadUInt` | `public uint ReadUInt()` | 方法 |
| `ReadULong` | `public ulong ReadULong()` | 方法 |
| `ReadLong` | `public long ReadLong()` | 方法 |
| `ReadByte` | `public byte ReadByte()` | 方法 |
| `byte[]ReadBytes` | `public byte[]ReadBytes(int length)` | 方法 |
| `ReadVec2` | `public Vec2 ReadVec2()` | 方法 |
| `ReadVec3` | `public Vec3 ReadVec3()` | 方法 |
| `ReadVec3Int` | `public Vec3i ReadVec3Int()` | 方法 |
| `ReadSByte` | `public sbyte ReadSByte()` | 方法 |
| `ReadUShort` | `public ushort ReadUShort()` | 方法 |
| `ReadDouble` | `public double ReadDouble()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IReader](../IReader/)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
