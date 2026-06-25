---
title: "GauntletMapBarGlobalLayer"
description: "GauntletMapBarGlobalLayer 的自动生成类参考。"
---
# GauntletMapBarGlobalLayer

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBarGlobalLayer : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `SandBox.GauntletUI/Map/GauntletMapBarGlobalLayer.cs`

## 概述

`GauntletMapBarGlobalLayer` 位于 `SandBox.GauntletUI.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; }` |

## 主要方法

### Initialize
`public void Initialize(MapBarVM dataSource)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletMapBarGlobalLayer 实例
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Initialize(dataSource);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMapBarGlobalLayer 实例
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.OnFinalize();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 GauntletMapBarGlobalLayer 实例
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Refresh();
```

### IsEscaped
`public bool IsEscaped()`

**用途 / Purpose:** 判断当前对象是否处于 escaped 状态或条件。

```csharp
// 先通过子系统 API 拿到 GauntletMapBarGlobalLayer 实例
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
var result = gauntletMapBarGlobalLayer.IsEscaped();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletMapBarGlobalLayer gauntletMapBarGlobalLayer = ...;
gauntletMapBarGlobalLayer.Initialize(dataSource);
```

## 参见

- [本区域目录](../)