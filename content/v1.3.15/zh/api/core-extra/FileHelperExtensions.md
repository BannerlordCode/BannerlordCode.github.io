---
title: "FileHelperExtensions"
description: "FileHelperExtensions 的自动生成类参考。"
---
# FileHelperExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelperExtensions`
**Base:** 无
**File:** `TaleWorlds.Library/FileHelperExtensions.cs`

## 概述

`FileHelperExtensions` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Load
`public static void Load(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 静态调用，不需要实例
FileHelperExtensions.Load(document, path);
```

### LoadAsync
`public static Task LoadAsync(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 从持久化存储或流中读取 async。

```csharp
// 静态调用，不需要实例
FileHelperExtensions.LoadAsync(document, path);
```

### Save
`public static void Save(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelperExtensions.Save(document, path);
```

### SaveAsync
`public static Task SaveAsync(this XmlDocument document, PlatformFilePath path)`

**用途 / Purpose:** 将 async 写入持久化存储或流中。

```csharp
// 静态调用，不需要实例
FileHelperExtensions.SaveAsync(document, path);
```

## 使用示例

```csharp
FileHelperExtensions.Load(document, path);
```

## 参见

- [本区域目录](../)