---
title: "GauntletMapEventVisual"
description: "GauntletMapEventVisual 的自动生成类参考。"
---
# GauntletMapEventVisual

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisual : IMapEventVisual`
**Base:** `IMapEventVisual`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapEventVisual.cs`

## 概述

`GauntletMapEventVisual` 位于 `SandBox.GauntletUI.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.GauntletUI.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MapEvent` | `public MapEvent MapEvent { get; }` |
| `WorldPosition` | `public Vec2 WorldPosition { get; }` |
| `IsVisible` | `public bool IsVisible { get; }` |

## 主要方法

### Initialize
`public void Initialize(CampaignVec2 position, bool isVisible)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletMapEventVisual 实例
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.Initialize(position, false);
```

### OnMapEventEnd
`public void OnMapEventEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 map event end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 GauntletMapEventVisual 实例
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.OnMapEventEnd();
```

### SetVisibility
`public void SetVisibility(bool isVisible)`

**用途 / Purpose:** **用途 / Purpose:** 为 visibility 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 GauntletMapEventVisual 实例
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.SetVisibility(false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletMapEventVisual gauntletMapEventVisual = ...;
gauntletMapEventVisual.Initialize(position, false);
```

## 参见

- [本区域目录](../)