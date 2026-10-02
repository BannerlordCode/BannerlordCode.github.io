---
title: "StringReader"
description: "StringReader：TaleWorlds.Library 的 public 类，继承 IReader；公开成员 20 个（方法 18、属性 1、字段 0）。源文件 TaleWorlds.Library/StringReader.cs。"
---
# StringReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class StringReader : IReader`
**File:** `TaleWorlds.Library/StringReader.cs`

## 概述

StringReader 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/StringReader.cs。它是一个 public 类，实现/继承 IReader，继承链为 StringReader → IReader。public/protected 成员共 20 个：18 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StringReader 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 StringReader → IReader。成员构成以方法为主（方法 18/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/StringReader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public string Data` | 属性 |
| `StringReader` | `public StringReader(string data)` | 构造函数 |
| `ReadSerializableObject` | `public ISerializableObject ReadSerializableObject()` | 方法 |
| `ReadInt` | `public int ReadInt()` | 方法 |
| `ReadShort` | `public short ReadShort()` | 方法 |
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

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IReader](../IReader)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
