---
title: "NameplateVM"
description: "NameplateVM 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.OnFinalize();
```

### Initialize
`public virtual void Initialize(GameEntity strategicEntity)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.Initialize(strategicEntity);
```

### RefreshDynamicProperties
`public virtual void RefreshDynamicProperties(bool forceUpdate)`

**用途 / Purpose:** **用途 / Purpose:** 使 dynamic properties 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.RefreshDynamicProperties(false);
```

### RefreshPosition
`public virtual void RefreshPosition()`

**用途 / Purpose:** **用途 / Purpose:** 使 position 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.RefreshPosition();
```

### RefreshRelationStatus
`public virtual void RefreshRelationStatus()`

**用途 / Purpose:** **用途 / Purpose:** 使 relation status 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.RefreshRelationStatus();
```

### RefreshTutorialStatus
`public virtual void RefreshTutorialStatus(string newTutorialHighlightElementID)`

**用途 / Purpose:** **用途 / Purpose:** 使 tutorial status 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 NameplateVM 实例
NameplateVM nameplateVM = ...;
nameplateVM.RefreshTutorialStatus("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NameplateVM nameplateVM = ...;
nameplateVM.OnFinalize();
```

## 参见

- [本区域目录](../)