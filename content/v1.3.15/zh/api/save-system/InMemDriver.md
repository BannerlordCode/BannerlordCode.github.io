---
title: "InMemDriver"
description: "InMemDriver 的自动生成类参考。"
---
# InMemDriver

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class InMemDriver : ISaveDriver`
**Base:** `ISaveDriver`
**File:** `TaleWorlds.SaveSystem/InMemDriver.cs`

## 概述

`InMemDriver` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Save
`public Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.Save("example", 0, metaData, gameData);
```

### LoadMetaData
`public MetaData LoadMetaData(string saveName)`

**用途 / Purpose:** 从持久化存储或流中读取 「meta data」。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.LoadMetaData("example");
```

### Load
`public LoadData Load(string saveName)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.Load("example");
```

### GetSaveGameFileInfos
`public SaveGameFileInfo GetSaveGameFileInfos()`

**用途 / Purpose:** 读取并返回当前对象中 「save game file infos」 的结果。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.GetSaveGameFileInfos();
```

### GetSaveGameFileNames
`public string GetSaveGameFileNames()`

**用途 / Purpose:** 读取并返回当前对象中 「save game file names」 的结果。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.GetSaveGameFileNames();
```

### Delete
`public bool Delete(string saveName)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.Delete("example");
```

### IsSaveGameFileExists
`public bool IsSaveGameFileExists(string saveName)`

**用途 / Purpose:** 判断当前对象是否处于 「save game file exists」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.IsSaveGameFileExists("example");
```

### IsWorkingAsync
`public bool IsWorkingAsync()`

**用途 / Purpose:** 判断当前对象是否处于 「working async」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InMemDriver 实例
InMemDriver inMemDriver = ...;
var result = inMemDriver.IsWorkingAsync();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InMemDriver inMemDriver = ...;
inMemDriver.Save("example", 0, metaData, gameData);
```

## 参见

- [本区域目录](../)