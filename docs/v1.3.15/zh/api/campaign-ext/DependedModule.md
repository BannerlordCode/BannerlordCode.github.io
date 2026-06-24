<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DependedModule`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DependedModule

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public struct DependedModule`
**Base:** 无
**File:** `TaleWorlds.ModuleManager/DependedModule.cs`

## 概述

`DependedModule` 位于 `TaleWorlds.ModuleManager`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ModuleManager` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ModuleId` | `public string ModuleId { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `IsOptional` | `public bool IsOptional { get; }` |

## 主要方法

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**用途 / Purpose:** 更新 `version change set` 的状态或数据。

## 使用示例

```csharp
var value = new DependedModule();
value.UpdateVersionChangeSet();
```

## 参见

- [完整类目录](../catalog)