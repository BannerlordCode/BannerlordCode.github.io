---
title: "IWriter"
description: "IWriter：TaleWorlds.Library 的 public 接口；公开成员 18 个（方法 18、属性 0、字段 0）。源文件 TaleWorlds.Library/IWriter.cs。"
---
# IWriter

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public interface IWriter`
**File:** `TaleWorlds.Library/IWriter.cs`

## 概述

IWriter 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/IWriter.cs。它是一个 public 接口，继承链为 IWriter。public/protected 成员共 18 个：18 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IWriter 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 IWriter。成员构成以方法为主（方法 18/18，属性 0/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/IWriter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WriteSerializableObject` | `void WriteSerializableObject(ISerializableObject serializableObject);` | 方法 |
| `WriteByte` | `void WriteByte(byte value);` | 方法 |
| `WriteSByte` | `void WriteSByte(sbyte value);` | 方法 |
| `WriteBytes` | `void WriteBytes(byte[]bytes);` | 方法 |
| `WriteInt` | `void WriteInt(int value);` | 方法 |
| `WriteUInt` | `void WriteUInt(uint value);` | 方法 |
| `WriteShort` | `void WriteShort(short value);` | 方法 |
| `WriteUShort` | `void WriteUShort(ushort value);` | 方法 |
| `WriteString` | `void WriteString(string value);` | 方法 |
| `WriteColor` | `void WriteColor(Color value);` | 方法 |
| `WriteBool` | `void WriteBool(bool value);` | 方法 |
| `WriteFloat` | `void WriteFloat(float value);` | 方法 |
| `WriteDouble` | `void WriteDouble(double value);` | 方法 |
| `WriteULong` | `void WriteULong(ulong value);` | 方法 |
| `WriteLong` | `void WriteLong(long value);` | 方法 |
| `WriteVec2` | `void WriteVec2(Vec2 vec2);` | 方法 |
| `WriteVec3` | `void WriteVec3(Vec3 vec3);` | 方法 |
| `WriteVec3Int` | `void WriteVec3Int(Vec3i vec3);` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
