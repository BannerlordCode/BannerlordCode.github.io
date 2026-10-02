---
title: "MBGUID"
description: "MBGUID：TaleWorlds.ObjectSystem 的 public 结构体，继承 IComparable、IEquatable<MBGUID>；公开成员 17 个（方法 13、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.ObjectSystem/MBGUID.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBGUID

**Namespace:** `TaleWorlds.ObjectSystem`
**Module:** `TaleWorlds.ObjectSystem`
**Type:** `public struct MBGUID : IComparable, IEquatable<MBGUID>`
**File:** `TaleWorlds.ObjectSystem/MBGUID.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.ObjectSystem)

## 概述

MBGUID 位于 TaleWorlds.ObjectSystem 模块，源文件 TaleWorlds.ObjectSystem/MBGUID.cs。它是一个 public 结构体，实现/继承 IComparable、IEquatable<MBGUID>，继承链为 MBGUID → IComparable。public/protected 成员共 17 个：13 方法、2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MBGUID 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.ObjectSystem`），命名空间 `TaleWorlds.ObjectSystem`，继承链 MBGUID → IComparable。成员构成以方法为主（方法 13/17，属性 2/17），对外主要以操作入口暴露。继承链上的 IComparable 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.ObjectSystem/MBGUID.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBGUID` | `public MBGUID(uint id)` | 构造函数 |
| `MBGUID` | `public MBGUID(uint objType, uint subId)` | 构造函数 |
| `InternalValue` | `public uint InternalValue` | 属性 |
| `SubId` | `public uint SubId` | 属性 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `operator` | `public static bool operator<(MBGUID id1, MBGUID id2)` | 运算符 |
| `operator>` | `public static bool operator>(MBGUID id1, MBGUID id2)` | 运算符 |
| `operator` | `public static bool operator<=(MBGUID id1, MBGUID id2)` | 运算符 |
| `operator>=` | `public static bool operator>=(MBGUID id1, MBGUID id2)` | 运算符 |
| `GetHash2` | `public static long GetHash2(MBGUID id1, MBGUID id2)` | 方法 |
| `CompareTo` | `public int CompareTo(object a)` | 方法 |
| `GetTypeIndex` | `public uint GetTypeIndex()` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(MBGUID other)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 IObjectManagerHandler](../IObjectManagerHandler/)
- [同命名空间 MBCanNotCreatePresumedObjectException](../MBCanNotCreatePresumedObjectException/)
- [同命名空间 MBIllegalRegisterException](../MBIllegalRegisterException/)
- [同命名空间 MBInvalidReferenceException](../MBInvalidReferenceException/)
