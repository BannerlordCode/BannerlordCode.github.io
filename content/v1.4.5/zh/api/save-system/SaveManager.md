---
title: "SaveManager"
description: "SaveManager 的自动生成类参考。"
---
# SaveManager

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class SaveManager`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs`

## 概述

`SaveManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SaveManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### InitializeGlobalDefinitionContext
`public static void InitializeGlobalDefinitionContext()`

**用途 / Purpose:** 为 global definition context 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
SaveManager.InitializeGlobalDefinitionContext();
```

### CheckSaveableTypes
`public static List<Type> CheckSaveableTypes()`

**用途 / Purpose:** 检查saveable types在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
SaveManager.CheckSaveableTypes();
```

### Save
`public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
SaveManager.Save(target, metaData, "example", driver);
```

### ShouldResolveConflicts
`public static bool ShouldResolveConflicts()`

**用途 / Purpose:** 调用 ShouldResolveConflicts 对应的操作。

```csharp
// 静态调用，不需要实例
SaveManager.ShouldResolveConflicts();
```

### LoadMetaData
`public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`

**用途 / Purpose:** 从持久化存储或流中读取 meta data。

```csharp
// 静态调用，不需要实例
SaveManager.LoadMetaData("example", driver);
```

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 静态调用，不需要实例
SaveManager.Load("example", driver);
```

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 静态调用，不需要实例
SaveManager.Load("example", driver, false);
```

## 使用示例

```csharp
var manager = SaveManager.Current;
```

## 参见

- [本区域目录](../)