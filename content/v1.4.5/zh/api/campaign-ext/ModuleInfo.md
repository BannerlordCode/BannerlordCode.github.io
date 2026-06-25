---
title: "ModuleInfo"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ModuleInfo`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public class ModuleInfo`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.ModuleManager/TaleWorlds.ModuleManager/ModuleInfo.cs`

## 概述

`ModuleInfo` 位于 `TaleWorlds.ModuleManager`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ModuleManager` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; }` |
| `Id` | `public string Id { get; }` |
| `Name` | `public string Name { get; }` |
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `RequiredBaseVersion` | `public ApplicationVersion RequiredBaseVersion { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |

## 主要方法

### LoadWithFullPath
`public void LoadWithFullPath(string fullPath)`

**用途 / Purpose:** 加载 `with full path` 数据。

### ActivateModule
`public void ActivateModule()`

**用途 / Purpose:** 处理 `activate module` 相关逻辑。

### DeactivateModule
`public void DeactivateModule()`

**用途 / Purpose:** 处理 `deactivate module` 相关逻辑。

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**用途 / Purpose:** 更新 `version change set` 的状态或数据。

## 使用示例

```csharp
var value = new ModuleInfo();
value.LoadWithFullPath("example");
```

## 参见

- [完整类目录](../catalog)