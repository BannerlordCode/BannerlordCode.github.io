---
title: "ModuleInfo"
description: "ModuleInfo 的自动生成类参考。"
---
# ModuleInfo

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public class ModuleInfo`
**Base:** 无
**File:** `TaleWorlds.ModuleManager/ModuleInfo.cs`

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
| `IsOfficial` | `public bool IsOfficial { get; }` |
| `IsDefault` | `public bool IsDefault { get; }` |
| `IsRequiredOfficial` | `public bool IsRequiredOfficial { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `Version` | `public ApplicationVersion Version { get; }` |
| `Category` | `public ModuleCategory Category { get; }` |
| `FolderPath` | `public string FolderPath { get; }` |
| `Type` | `public ModuleType Type { get; }` |
| `HasMultiplayerCategory` | `public bool HasMultiplayerCategory { get; }` |
| `IsNative` | `public bool IsNative { get; }` |

## 主要方法

### LoadWithFullPath
`public void LoadWithFullPath(string fullPath)`

**用途 / Purpose:** 从持久化存储或流中读取 with full path。

```csharp
// 先通过子系统 API 拿到 ModuleInfo 实例
ModuleInfo moduleInfo = ...;
moduleInfo.LoadWithFullPath("example");
```

### ActivateModule
`public void ActivateModule()`

**用途 / Purpose:** 激活module对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ModuleInfo 实例
ModuleInfo moduleInfo = ...;
moduleInfo.ActivateModule();
```

### DeactivateModule
`public void DeactivateModule()`

**用途 / Purpose:** 停用module对应的资源、状态或功能。

```csharp
// 先通过子系统 API 拿到 ModuleInfo 实例
ModuleInfo moduleInfo = ...;
moduleInfo.DeactivateModule();
```

### UpdateVersionChangeSet
`public void UpdateVersionChangeSet()`

**用途 / Purpose:** 重新计算并更新 version change set 的最新表示。

```csharp
// 先通过子系统 API 拿到 ModuleInfo 实例
ModuleInfo moduleInfo = ...;
moduleInfo.UpdateVersionChangeSet();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ModuleInfo moduleInfo = ...;
moduleInfo.LoadWithFullPath("example");
```

## 参见

- [本区域目录](../)