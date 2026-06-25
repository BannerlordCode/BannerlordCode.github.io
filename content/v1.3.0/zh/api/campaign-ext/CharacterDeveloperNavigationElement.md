---
title: "CharacterDeveloperNavigationElement"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperNavigationElement`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDeveloperNavigationElement

**Namespace:** SandBox.View.Map.Navigation.NavigationElements
**Module:** SandBox.View
**Type:** `public class CharacterDeveloperNavigationElement : MapNavigationElementBase`
**Base:** `MapNavigationElementBase`
**File:** `SandBox.View/Map/Navigation/NavigationElements/CharacterDeveloperNavigationElement.cs`

## 概述

`CharacterDeveloperNavigationElement` 位于 `SandBox.View.Map.Navigation.NavigationElements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

**用途 / Purpose:** 处理 `open view` 相关逻辑。

### OpenView
`public override void OpenView(params object parameters)`

**用途 / Purpose:** 处理 `open view` 相关逻辑。

## 使用示例

```csharp
var value = new CharacterDeveloperNavigationElement();
value.OpenView();
```

## 参见

- [完整类目录](../catalog)