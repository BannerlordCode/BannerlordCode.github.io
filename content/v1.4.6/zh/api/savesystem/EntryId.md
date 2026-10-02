---
title: "EntryId"
description: "EntryId：TaleWorlds.SaveSystem 的 public 结构体，继承 IEquatable<EntryId>；公开成员 8 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.SaveSystem/EntryId.cs。"
---
# EntryId

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public struct EntryId : IEquatable<EntryId>`
**File:** `TaleWorlds.SaveSystem/EntryId.cs`

## 概述

EntryId 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/EntryId.cs。它是一个 public 结构体，实现/继承 IEquatable<EntryId>，继承链为 EntryId → IEquatable。public/protected 成员共 8 个：5 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EntryId 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 EntryId → IEquatable。成员构成以方法为主（方法 5/8，属性 2/8），对外主要以操作入口暴露。继承链上的 IEquatable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/EntryId.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public int Id` | 属性 |
| `Extension` | `public SaveEntryExtension Extension` | 属性 |
| `EntryId` | `public EntryId(int id, SaveEntryExtension extension)` | 构造函数 |
| `Equals` | `public override bool Equals(object obj)` | 方法 |
| `Equals` | `public bool Equals(EntryId other)` | 方法 |
| `GetHashCode` | `public override int GetHashCode()` | 方法 |
| `operator` | `public static bool operator` | 运算符 |
| `!` | `public static bool operator !` | 运算符 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 FileDriver](../FileDriver)
- [同命名空间 FolderId](../FolderId)
