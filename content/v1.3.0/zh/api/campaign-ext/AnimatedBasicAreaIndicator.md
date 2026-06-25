---
title: "AnimatedBasicAreaIndicator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AnimatedBasicAreaIndicator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AnimatedBasicAreaIndicator

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class AnimatedBasicAreaIndicator : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs`

## 概述

`AnimatedBasicAreaIndicator` 位于 `SandBox.Objects.AreaMarkers`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects.AreaMarkers` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## 主要方法

### SetIsActive
`public void SetIsActive(bool isActive)`

**用途 / Purpose:** 设置 `is active` 的值或状态。

### SetOverriddenName
`public void SetOverriddenName(TextObject name)`

**用途 / Purpose:** 设置 `overridden name` 的值或状态。

### GetName
`public override TextObject GetName()`

**用途 / Purpose:** 获取 `name` 的当前值。

## 使用示例

```csharp
var value = new AnimatedBasicAreaIndicator();
value.SetIsActive(false);
```

## 参见

- [完整类目录](../catalog)