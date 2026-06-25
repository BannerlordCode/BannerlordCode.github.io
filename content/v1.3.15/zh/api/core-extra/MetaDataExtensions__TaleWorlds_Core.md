---
title: "MetaDataExtensions"
description: "MetaDataExtensions 的自动生成类参考。"
---
# MetaDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MetaDataExtensions`
**Base:** 无
**File:** `TaleWorlds.Core/MetaDataExtensions.cs`

## 概述

`MetaDataExtensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetCreationTime
`public static DateTime GetCreationTime(this MetaData metaData)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 creation time 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetCreationTime(metaData);
```

### GetModules
`public static string GetModules(this MetaData metaData)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 modules 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetModules(metaData);
```

### GetModuleVersion
`public static ApplicationVersion GetModuleVersion(this MetaData metaData, string moduleName)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 module version 的结果。

```csharp
// 静态调用，不需要实例
MetaDataExtensions.GetModuleVersion(metaData, "example");
```

## 使用示例

```csharp
MetaDataExtensions.GetCreationTime(metaData);
```

## 参见

- [本区域目录](../)