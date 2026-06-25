---
title: "KingdomNavigationElement"
description: "KingdomNavigationElement 的自动生成类参考。"
---
# KingdomNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class KingdomNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Navigation.NavigationElements/KingdomNavigationElement.cs`

## 概述

`KingdomNavigationElement` 位于 `SandBox.View.Map.Navigation.NavigationElements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Navigation.NavigationElements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenView
`public override void OpenView()`

**用途 / Purpose:** 打开view对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 KingdomNavigationElement 实例
KingdomNavigationElement kingdomNavigationElement = ...;
kingdomNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**用途 / Purpose:** 打开view对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 KingdomNavigationElement 实例
KingdomNavigationElement kingdomNavigationElement = ...;
kingdomNavigationElement.OpenView(parameters);
```

### GoToLink
`public override void GoToLink()`

**用途 / Purpose:** 调用 GoToLink 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomNavigationElement 实例
KingdomNavigationElement kingdomNavigationElement = ...;
kingdomNavigationElement.GoToLink();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomNavigationElement kingdomNavigationElement = ...;
kingdomNavigationElement.OpenView();
```

## 参见

- [本区域目录](../)