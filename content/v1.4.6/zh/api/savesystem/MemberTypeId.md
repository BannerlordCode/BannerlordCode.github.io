---
title: "MemberTypeId"
description: "MemberTypeId：TaleWorlds.SaveSystem 的 public 结构体；公开成员 8 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.SaveSystem/Definition/MemberTypeId.cs。"
---
# MemberTypeId

**Namespace:** `TaleWorlds.SaveSystem.Definition`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct MemberTypeId`
**File:** `TaleWorlds.SaveSystem/Definition/MemberTypeId.cs`

## 概述

MemberTypeId 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/Definition/MemberTypeId.cs。它是一个 public 结构体，继承链为 MemberTypeId。public/protected 成员共 8 个：5 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MemberTypeId 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.SaveSystem.Definition），继承链 MemberTypeId。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/Definition/MemberTypeId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SaveId` | `public short SaveId` | 属性 |
| `Invalid` | `public static MemberTypeId Invalid` | 属性 |
| `ToString` | `public override string ToString()` | 方法 |
| `MemberTypeId` | `public MemberTypeId(byte typeLevel, short localSaveId)` | 构造函数 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CollectObjectsDelegate](../CollectObjectsDelegate)
- [同命名空间 ContainerDefinition](../ContainerDefinition)
- [同命名空间 ContainerSaveId](../ContainerSaveId)
- [同命名空间 CustomField](../CustomField)
