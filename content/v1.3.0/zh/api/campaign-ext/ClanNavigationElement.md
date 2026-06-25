---
title: "ClanNavigationElement"
description: "ClanNavigationElement 的自动生成类参考。"
---
# ClanNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class ClanNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/ClanNavigationElement.cs`

## 概述

`ClanNavigationElement` 位于 `SandBox.View.Map.Navigation.NavigationElements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 打开「view」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 ClanNavigationElement 实例
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView();
```

### OpenView
`public override void OpenView(params object parameters)`

**用途 / Purpose:** 打开「view」对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 ClanNavigationElement 实例
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView(parameters);
```

### OnClanScreenPermission
`public void OnClanScreenPermission(bool isAvailable, TextObject reasonString)`

**用途 / Purpose:** 在 「clan screen permission」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanNavigationElement 实例
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OnClanScreenPermission(false, reasonString);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanNavigationElement clanNavigationElement = ...;
clanNavigationElement.OpenView();
```

## 参见

- [本区域目录](../)