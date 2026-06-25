---
title: "GauntletMapEventVisualCreator"
description: "GauntletMapEventVisualCreator 的自动生成类参考。"
---
# GauntletMapEventVisualCreator

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualCreator : IMapEventVisualCreator`
**Base:** `IMapEventVisualCreator`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualCreator.cs`

## 概述

`GauntletMapEventVisualCreator` 位于 `SandBox.GauntletUI.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**用途 / Purpose:** 构建一个新的 map event visual 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GauntletMapEventVisualCreator 实例
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
var result = gauntletMapEventVisualCreator.CreateMapEventVisual(mapEvent);
```

### GetCurrentEvents
`public IEnumerable<GauntletMapEventVisual> GetCurrentEvents()`

**用途 / Purpose:** 读取并返回当前对象中 current events 的结果。

```csharp
// 先通过子系统 API 拿到 GauntletMapEventVisualCreator 实例
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
var result = gauntletMapEventVisualCreator.GetCurrentEvents();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletMapEventVisualCreator gauntletMapEventVisualCreator = ...;
gauntletMapEventVisualCreator.CreateMapEventVisual(mapEvent);
```

## 参见

- [本区域目录](../)