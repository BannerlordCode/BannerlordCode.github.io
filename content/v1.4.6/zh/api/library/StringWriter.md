---
title: "StringWriter"
description: "StringWriter：TaleWorlds.Library 的 public 类，继承 IWriter；公开成员 20 个（方法 18、属性 1、字段 0）。源文件 TaleWorlds.Library/StringWriter.cs。"
---
# StringWriter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class StringWriter : IWriter`
**File:** `TaleWorlds.Library/StringWriter.cs`

## 概述

StringWriter 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/StringWriter.cs。它是一个 public 类，实现/继承 IWriter，继承链为 StringWriter → IWriter。public/protected 成员共 20 个：18 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StringWriter 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 StringWriter → IWriter。成员构成以方法为主（方法 18/20，属性 1/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/StringWriter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Data` | `public string Data` | 属性 |
| `StringWriter` | `public StringWriter()` | 构造函数 |
| `WriteSerializableObject` | `public void WriteSerializableObject(ISerializableObject serializableObject)` | 方法 |
| `WriteByte` | `public void WriteByte(byte value)` | 方法 |
| `WriteBytes` | `public void WriteBytes(byte[]bytes)` | 方法 |
| `WriteInt` | `public void WriteInt(int value)` | 方法 |
| `WriteShort` | `public void WriteShort(short value)` | 方法 |
| `WriteString` | `public void WriteString(string value)` | 方法 |
| `WriteColor` | `public void WriteColor(Color value)` | 方法 |
| `WriteBool` | `public void WriteBool(bool value)` | 方法 |
| `WriteFloat` | `public void WriteFloat(float value)` | 方法 |
| `WriteUInt` | `public void WriteUInt(uint value)` | 方法 |
| `WriteULong` | `public void WriteULong(ulong value)` | 方法 |
| `WriteLong` | `public void WriteLong(long value)` | 方法 |
| `WriteVec2` | `public void WriteVec2(Vec2 vec2)` | 方法 |
| `WriteVec3` | `public void WriteVec3(Vec3 vec3)` | 方法 |
| `WriteVec3Int` | `public void WriteVec3Int(Vec3i vec3)` | 方法 |
| `WriteSByte` | `public void WriteSByte(sbyte value)` | 方法 |
| `WriteUShort` | `public void WriteUShort(ushort value)` | 方法 |
| `WriteDouble` | `public void WriteDouble(double value)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IWriter](../IWriter)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
