---
title: "NameplateVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NameplateVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NameplateVM

**Namespace:** SandBox.ViewModelCollection.Nameplate
**Module:** SandBox.ViewModelCollection
**Type:** `public class NameplateVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Nameplate/NameplateVM.cs`

## 概述

`NameplateVM` 位于 `SandBox.ViewModelCollection.Nameplate`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Nameplate` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Scale` | `public double Scale { get; set; }` |
| `NameplateOrder` | `public int NameplateOrder { get; set; }` |
| `SizeType` | `public int SizeType { get; set; }` |
| `FactionColor` | `public string FactionColor { get; set; }` |
| `DistanceToCamera` | `public float DistanceToCamera { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |
| `IsTargetedByTutorial` | `public bool IsTargetedByTutorial { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `CanParley` | `public bool CanParley { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Initialize
`public virtual void Initialize(GameEntity strategicEntity)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RefreshDynamicProperties
`public virtual void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** 刷新 `dynamic properties` 的显示或缓存。

### RefreshPosition
`public virtual void RefreshPosition()`

**用途 / Purpose:** 刷新 `position` 的显示或缓存。

### RefreshRelationStatus
`public virtual void RefreshRelationStatus()`

**用途 / Purpose:** 刷新 `relation status` 的显示或缓存。

### RefreshTutorialStatus
`public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** 刷新 `tutorial status` 的显示或缓存。

## 使用示例

```csharp
var value = new NameplateVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)