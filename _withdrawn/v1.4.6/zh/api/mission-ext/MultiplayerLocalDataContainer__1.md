---
title: "MultiplayerLocalDataContainer<T>"
description: "MultiplayerLocalDataContainer<T>：TaleWorlds.MountAndBlade.Diamond.Lobby 的 public 类，继承 MultiplayerLocalData；公开成员 11 个（方法 10、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLocalDataContainer<T>

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public abstract class MultiplayerLocalDataContainer<T>where T : MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerLocalDataContainer<T> 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs。它是一个 public 类（abstract），实现/继承 MultiplayerLocalData，继承链为 MultiplayerLocalDataContainer → MultiplayerLocalData。public/protected 成员共 11 个：10 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLocalDataContainer<T> 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby`，继承链 MultiplayerLocalDataContainer → MultiplayerLocalData。成员构成以方法为主（方法 10/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLocalDataContainer` | `public MultiplayerLocalDataContainer()` | 构造函数 |
| `GetSaveDirectoryName` | `protected abstract string GetSaveDirectoryName();` | 方法 |
| `GetSaveFileName` | `protected abstract string GetSaveFileName();` | 方法 |
| `AddEntry` | `public void AddEntry(T item)` | 方法 |
| `InsertEntry` | `public void InsertEntry(T item, int index)` | 方法 |
| `RemoveEntry` | `public void RemoveEntry(T item)` | 方法 |
| `MBReadOnlyList` | `public MBReadOnlyList<T>GetEntries()` | 方法 |
| `OnBeforeAddEntry` | `protected virtual void OnBeforeAddEntry(T item, out bool canAddEntry)` | 方法 |
| `OnBeforeRemoveEntry` | `protected virtual void OnBeforeRemoveEntry(T item, out bool canRemoveEntry)` | 方法 |
| `GetCompatibilityFilePath` | `protected virtual PlatformFilePath GetCompatibilityFilePath()` | 方法 |
| `List` | `protected virtual List<T>DeserializeInCompatibilityMode(string serializedJson)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MultiplayerLocalData](../MultiplayerLocalData/)
- [同命名空间 MultiplayerLocalData](../MultiplayerLocalData/)
- [同命名空间 MultiplayerLocalDataManager](../MultiplayerLocalDataManager/)
