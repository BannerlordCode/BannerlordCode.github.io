---
title: "EntityVisualManagerBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EntityVisualManagerBase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EntityVisualManagerBase

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `public abstract class EntityVisualManagerBase : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/EntityVisualManagerBase.cs`

## 概述

`EntityVisualManagerBase` 位于 `SandBox.View.Map.Managers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.View.Map.Managers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapScene` | `public Scene MapScene { get; }` |

## 主要方法

### GetVisualOfEntity
`public abstract MapEntityVisual<TEntity> GetVisualOfEntity(TEntity entity)`

**用途 / Purpose:** 获取 `visual of entity` 的当前值。

### GetEntityVisualManagerBase
`public static EntityVisualManagerBase<TEntity> GetEntityVisualManagerBase()`

**用途 / Purpose:** 获取 `entity visual manager base` 的当前值。

## 使用示例

```csharp
var implementation = new CustomEntityVisualManagerBase();
```

## 参见

- [完整类目录](../catalog)