---
title: "UsablePlace"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UsablePlace`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UsablePlace

**Namespace:** SandBox.Objects.Usables
**Module:** SandBox.Objects
**Type:** `public class UsablePlace : UsableMachine`
**Base:** `UsableMachine`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects.Usables/UsablePlace.cs`

## 概述

`UsablePlace` 位于 `SandBox.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

## 使用示例

```csharp
var value = new UsablePlace();
value.GetDescriptionText(gameEntity);
```

## 参见

- [完整类目录](../catalog)