---
title: "IReader"
description: "IReader：TaleWorlds.Library 的 public 接口；公开成员 18 个（方法 18、属性 0、字段 0）。源文件 TaleWorlds.Library/IReader.cs。"
---
# IReader

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IReader`
**File:** `TaleWorlds.Library/IReader.cs`

## 概述

IReader 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IReader.cs。它是一个 public 接口，继承链为 IReader。public/protected 成员共 18 个：18 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IReader 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 IReader。成员构成以方法为主（方法 18/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IReader.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReadSerializableObject` | `ISerializableObject ReadSerializableObject();` | 方法 |
| `ReadInt` | `int ReadInt();` | 方法 |
| `ReadShort` | `short ReadShort();` | 方法 |
| `ReadString` | `string ReadString();` | 方法 |
| `ReadColor` | `Color ReadColor();` | 方法 |
| `ReadBool` | `bool ReadBool();` | 方法 |
| `ReadFloat` | `float ReadFloat();` | 方法 |
| `ReadUInt` | `uint ReadUInt();` | 方法 |
| `ReadULong` | `ulong ReadULong();` | 方法 |
| `ReadLong` | `long ReadLong();` | 方法 |
| `ReadByte` | `byte ReadByte();` | 方法 |
| `byte[]ReadBytes` | `byte[]ReadBytes(int length);` | 方法 |
| `ReadVec2` | `Vec2 ReadVec2();` | 方法 |
| `ReadVec3` | `Vec3 ReadVec3();` | 方法 |
| `ReadVec3Int` | `Vec3i ReadVec3Int();` | 方法 |
| `ReadSByte` | `sbyte ReadSByte();` | 方法 |
| `ReadUShort` | `ushort ReadUShort();` | 方法 |
| `ReadDouble` | `double ReadDouble();` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
