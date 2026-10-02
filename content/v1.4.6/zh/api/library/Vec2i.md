---
title: "Vec2i"
description: "Vec2i：TaleWorlds.Library 的 public 结构体，继承 IEquatable<Vec2i>；公开成员 12 个（方法 5、属性 2、字段 4）。源文件 TaleWorlds.Library/Vec2i.cs。"
---
# Vec2i

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public struct Vec2i : IEquatable<Vec2i>`
**File:** `TaleWorlds.Library/Vec2i.cs`

## 概述

Vec2i 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/Vec2i.cs。它是一个 public 结构体，实现/继承 IEquatable<Vec2i>，继承链为 Vec2i → IEquatable。public/protected 成员共 12 个：5 方法、2 属性、4 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Vec2i 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 Vec2i → IEquatable。成员构成以方法为主（方法 5/12，属性 2/12），对外主要以操作入口暴露。继承链上的 IEquatable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/Vec2i.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item1` | `public int Item1` | 属性 |
| `Item2` | `public int Item2` | 属性 |
| `Vec2i` | `public Vec2i(int x = 0, int y = 0)` | 构造函数 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(Vec2i value)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `Side` | `public static readonly Vec2i Side` | 字段 |
| `Forward` | `public static readonly Vec2i Forward` | 字段 |
| `One` | `public static readonly Vec2i One` | 字段 |
| `Zero` | `public static readonly Vec2i Zero` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)
