---
title: "MapNavigationElementBase"
description: "MapNavigationElementBase 的自动生成类参考。"
---
# MapNavigationElementBase

**Namespace:** SandBox.View.Map.Navigation
**Module:** SandBox.View
**Type:** `public abstract class MapNavigationElementBase : INavigationElement`
**Base:** `INavigationElement`
**File:** `SandBox.View/Map/Navigation/MapNavigationElementBase.cs`

## 概述

`MapNavigationElementBase` 位于 `SandBox.View.Map.Navigation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Navigation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Permission` | `public NavigationPermissionItem Permission { get; }` |
| `Tooltip` | `public TextObject Tooltip { get; }` |
| `AlertTooltip` | `public TextObject AlertTooltip { get; }` |
| `IsActive` | `public abstract bool IsActive { get; }` |
| `IsLockingNavigation` | `public abstract bool IsLockingNavigation { get; }` |
| `HasAlert` | `public abstract bool HasAlert { get; }` |
| `StringId` | `public abstract string StringId { get; }` |

## 主要方法

### OpenView
`public abstract void OpenView()`

**用途 / Purpose:** 打开「view」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapNavigationElementBase 实例
MapNavigationElementBase mapNavigationElementBase = ...;
mapNavigationElementBase.OpenView();
```

### OpenView
`public abstract void OpenView(params object parameters)`

**用途 / Purpose:** 打开「view」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 MapNavigationElementBase 实例
MapNavigationElementBase mapNavigationElementBase = ...;
mapNavigationElementBase.OpenView(parameters);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MapNavigationElementBase instance = ...;
```

## 参见

- [本区域目录](../)