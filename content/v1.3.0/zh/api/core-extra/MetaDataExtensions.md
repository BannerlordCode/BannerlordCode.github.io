---
title: "MetaDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MetaDataExtensions`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `creation time` 的当前值。

### GetModules
`public static string GetModules(this MetaData metaData)`

**用途 / Purpose:** 获取 `modules` 的当前值。

### GetModuleVersion
`public static ApplicationVersion GetModuleVersion(this MetaData metaData, string moduleName)`

**用途 / Purpose:** 获取 `module version` 的当前值。

## 使用示例

```csharp
MetaDataExtensions.GetCreationTime(metaData);
```

## 参见

- [完整类目录](../catalog)