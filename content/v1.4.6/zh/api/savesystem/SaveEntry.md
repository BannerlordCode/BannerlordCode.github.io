---
title: "SaveEntry"
description: "SaveEntry：TaleWorlds.SaveSystem 的 public 类；公开成员 7 个（方法 4、属性 3、字段 0）。源文件 TaleWorlds.SaveSystem/SaveEntry.cs。"
---
# SaveEntry

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class SaveEntry`
**File:** `TaleWorlds.SaveSystem/SaveEntry.cs`

## 概述

SaveEntry 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/SaveEntry.cs。它是一个 public 类，继承链为 SaveEntry。public/protected 成员共 7 个：4 方法、3 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SaveEntry 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 SaveEntry。成员构成以方法为主（方法 4/7，属性 3/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/SaveEntry.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `byte[]Data` | `public byte[]Data` | 属性 |
| `Id` | `public EntryId Id` | 属性 |
| `FolderId` | `public int FolderId` | 属性 |
| `CreateFrom` | `public static SaveEntry CreateFrom(int entryFolderId, EntryId entryId, byte[]data)` | 方法 |
| `CreateNew` | `public static SaveEntry CreateNew(SaveEntryFolder parentFolder, EntryId entryId)` | 方法 |
| `GetBinaryReader` | `public BinaryReader GetBinaryReader()` | 方法 |
| `FillFrom` | `public void FillFrom(BinaryWriter writer)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)
