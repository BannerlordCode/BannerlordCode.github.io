---
title: "AssemblyLoader"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AssemblyLoader`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** 无
**File:** `TaleWorlds.Library/AssemblyLoader.cs`

## 概述

`AssemblyLoader` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, bool show_error = true)`

**用途 / Purpose:** 加载 `from` 数据。

## 使用示例

```csharp
AssemblyLoader.Initialize();
```

## 参见

- [完整类目录](../catalog)