---
title: "ResourceDepotLocation"
description: "ResourceDepotLocation：TaleWorlds.Library 的 public 类；公开成员 7 个（方法 2、属性 4、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Library/ResourceDepotLocation.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ResourceDepotLocation

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ResourceDepotLocation`
**File:** `TaleWorlds.Library/ResourceDepotLocation.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## 概述

ResourceDepotLocation 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ResourceDepotLocation.cs。它是一个 public 类，继承链为 ResourceDepotLocation。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ResourceDepotLocation 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Library`），命名空间 `TaleWorlds.Library`，继承链 ResourceDepotLocation。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ResourceDepotLocation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BasePath` | `public string BasePath` | 属性 |
| `Path` | `public string Path` | 属性 |
| `FullPath` | `public string FullPath` | 属性 |
| `Watcher` | `public FileSystemWatcher Watcher` | 属性 |
| `ResourceDepotLocation` | `public ResourceDepotLocation(string basePath, string path, string fullPath)` | 构造函数 |
| `StartWatchingChanges` | `public void StartWatchingChanges(FileSystemEventHandler onChangeEvent, RenamedEventHandler onRenameEvent)` | 方法 |
| `StopWatchingChanges` | `public void StopWatchingChanges()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AmbientInformation](../AmbientInformation/)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform/)
- [同命名空间 ApplicationVersion](../ApplicationVersion/)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter/)
