---
title: "InMemDriver"
description: "InMemDriver：TaleWorlds.SaveSystem 的 public 类，继承 ISaveDriver；公开成员 8 个（方法 8、属性 0、字段 0）。canonical 桶 save-system。源文件 TaleWorlds.SaveSystem/InMemDriver.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InMemDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class InMemDriver : ISaveDriver`
**File:** `TaleWorlds.SaveSystem/InMemDriver.cs`
**Bucket:** `save-system` (rule:TaleWorlds.SaveSystem)

## 概述

InMemDriver 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/InMemDriver.cs。它是一个 public 类，实现/继承 ISaveDriver，继承链为 InMemDriver → ISaveDriver。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InMemDriver 落在 canonical 桶 `save-system`（命中规则 `rule:TaleWorlds.SaveSystem`），命名空间 `TaleWorlds.SaveSystem`，继承链 InMemDriver → ISaveDriver。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/InMemDriver.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Task` | `public Task<SaveResultWithMessage>Save(string saveName, int version, MetaData metaData, GameData gameData)` | 方法 |
| `LoadMetaData` | `public MetaData LoadMetaData(string saveName)` | 方法 |
| `Load` | `public LoadData Load(string saveName)` | 方法 |
| `SaveGameFileInfo[]GetSaveGameFileInfos` | `public SaveGameFileInfo[]GetSaveGameFileInfos()` | 方法 |
| `string[]GetSaveGameFileNames` | `public string[]GetSaveGameFileNames()` | 方法 |
| `Delete` | `public bool Delete(string saveName)` | 方法 |
| `IsSaveGameFileExists` | `public bool IsSaveGameFileExists(string saveName)` | 方法 |
| `IsWorkingAsync` | `public bool IsWorkingAsync()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ISaveDriver](../ISaveDriver/)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver/)
- [同命名空间 ContainerType](../ContainerType/)
- [同命名空间 EntryId](../EntryId/)
- [同命名空间 FileDriver](../FileDriver/)
