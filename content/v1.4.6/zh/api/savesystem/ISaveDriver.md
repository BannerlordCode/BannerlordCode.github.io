---
title: "ISaveDriver"
description: "ISaveDriver：TaleWorlds.SaveSystem 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.SaveSystem/ISaveDriver.cs。"
---
# ISaveDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISaveDriver`
**File:** `TaleWorlds.SaveSystem/ISaveDriver.cs`

## 概述

ISaveDriver 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/ISaveDriver.cs。它是一个 public 接口，继承链为 ISaveDriver。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ISaveDriver 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 ISaveDriver。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/ISaveDriver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `Task<SaveResultWithMessage>Save(string saveName, int version, MetaData metaData, GameData gameData);` | 方法 |
| `SaveGameFileInfo[]GetSaveGameFileInfos` | `SaveGameFileInfo[]GetSaveGameFileInfos();` | 方法 |
| `string[]GetSaveGameFileNames` | `string[]GetSaveGameFileNames();` | 方法 |
| `LoadMetaData` | `MetaData LoadMetaData(string saveName);` | 方法 |
| `Load` | `LoadData Load(string saveName);` | 方法 |
| `Delete` | `bool Delete(string saveName);` | 方法 |
| `IsSaveGameFileExists` | `bool IsSaveGameFileExists(string saveName);` | 方法 |
| `IsWorkingAsync` | `bool IsWorkingAsync();` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)
