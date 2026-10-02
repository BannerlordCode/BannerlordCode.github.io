---
title: "Vec3i"
description: "Vec3i：TaleWorlds.Library 的 public 结构体；公开成员 12 个（方法 10、属性 0、字段 1）。源文件 TaleWorlds.Library/Vec3i.cs。"
---
# Vec3i

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec3i`
**File:** `TaleWorlds.Library/Vec3i.cs`

## 概述

Vec3i 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Vec3i.cs。它是一个 public 结构体，继承链为 Vec3i。public/protected 成员共 12 个：10 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Vec3i 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Vec3i。成员构成以方法为主（方法 10/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Vec3i.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Vec3i` | `public Vec3i(int x = 0, int y = 0, int z = 0)` | 构造函数 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `ToVec3` | `public Vec3 ToVec3()` | 方法 |
| `this[...]` | `public int this[int index]` | 索引器 |
| `*` | `public static Vec3i operator *(Vec3i v, int mult)` | 运算符 |
| `+` | `public static Vec3i operator +(Vec3i v1, Vec3i v2)` | 运算符 |
| `-` | `public static Vec3i operator -(Vec3i v1, Vec3i v2)` | 运算符 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `Zero` | `public static readonly Vec3i Zero` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
