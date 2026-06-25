---
title: "SaveManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SaveManager`
- [← 本领域 / 返回 save-system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveManager

**命名空间:** TaleWorlds.SaveSystem
**模块:** TaleWorlds.SaveSystem
**类型:** `public static class SaveManager`

## 概述

`SaveManager` 是 Bannerlord 存档系统的高层入口。模组作者通常通过它做三类事情：初始化可存档类型定义、把对象图写入存档文件、以及从存档文件恢复对象图和元数据。

## 心智模型

把 `SaveManager` 当作“存档门面”来看待：你的 mod 不直接操作底层二进制结构，而是先定义哪些类型可存、再把根对象交给它统一序列化。大多数时候，`SaveManager` 负责调度 `DefinitionContext`、`ISaveDriver` 和 `MetaData` 这些下层对象。

## 关键用例

### 1. 初始化存档定义上下文

当 mod 注册新的存档类型或字段时，先调用初始化入口，让运行时建立当前 AppDomain 的类型定义图。

### 2. 保存游戏状态

把 `Campaign.Current` 或你自己的根对象与 `MetaData` 一起交给 `SaveManager.Save(...)`，由驱动层落盘。

### 3. 读取元数据或恢复存档

在真正反序列化前，可以先调用 `LoadMetaData(...)` 做版本检查；确认兼容后，再走 `Load(...)` 恢复完整对象图。

## 主要方法

### InitializeGlobalDefinitionContext
`public static void InitializeGlobalDefinitionContext()`

**用途 / Purpose:** 初始化全局类型定义上下文，使当前进程里的可存档类型在后续保存/加载时可被解析。

### CheckSaveableTypes
`public static List<Type> CheckSaveableTypes()`

**用途 / Purpose:** 扫描当前应用域中标了 `Saveable*` 特性的类型，找出定义不完整或未注册的类型。

### Save
`public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`

**用途 / Purpose:** 以 `target` 为根对象执行一次完整存档，并返回保存结果。

### LoadMetaData
`public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`

**用途 / Purpose:** 只读取存档头和元数据，不反序列化完整对象图，适合做版本预检和存档列表展示。

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize = false)`

**用途 / Purpose:** 从指定存档恢复对象图，并返回加载结果和延迟初始化相关状态。

## 使用示例

```csharp
SaveManager.InitializeGlobalDefinitionContext();

MetaData metaData = new MetaData();
metaData["ModVersion"] = "1.0.0";

SaveOutput saveResult = SaveManager.Save(
    Campaign.Current,
    metaData,
    "my_mod_save",
    SaveGameFileDriver
);

MetaData loadedMeta = SaveManager.LoadMetaData("my_mod_save", SaveGameFileDriver);
LoadResult loadResult = SaveManager.Load("my_mod_save", SaveGameFileDriver);
```

## 参见

- [SaveContext](./SaveContext)
- [LoadContext](./LoadContext)
- [MetaData](./MetaData)
- [ISaveDriver](./ISaveDriver)
