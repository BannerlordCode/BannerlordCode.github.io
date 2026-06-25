---
title: "PartyNavigationElement"
description: "PartyNavigationElement 的自动生成类参考。"
---
# PartyNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class PartyNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/PartyNavigationElement.cs`

## 概述

`PartyNavigationElement` 位于 `SandBox.View.Map.Navigation.NavigationElements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Navigation.NavigationElements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public override string StringId { get; }` |
| `IsActive` | `public override bool IsActive { get; }` |
| `IsLockingNavigation` | `public override bool IsLockingNavigation { get; }` |
| `HasAlert` | `public override bool HasAlert { get; }` |

## 主要方法

### OpenView
`public override void OpenView()`

**用途 / Purpose:** 打开view对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 PartyNavigationElement 实例
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**用途 / Purpose:** 打开view对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 PartyNavigationElement 实例
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView(parameters);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyNavigationElement partyNavigationElement = ...;
partyNavigationElement.OpenView();
```

## 参见

- [本区域目录](../)