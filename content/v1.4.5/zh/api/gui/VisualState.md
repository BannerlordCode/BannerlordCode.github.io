---
title: "VisualState"
description: "VisualState 的自动生成类参考。"
---
# VisualState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualState`
**Base:** 无
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/VisualState.cs`

## 概述

`VisualState` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `State` | `public string State { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; set; }` |
| `PositionXOffset` | `public float PositionXOffset { get; set; }` |
| `PositionYOffset` | `public float PositionYOffset { get; set; }` |
| `SuggestedWidth` | `public float SuggestedWidth { get; set; }` |
| `SuggestedHeight` | `public float SuggestedHeight { get; set; }` |
| `MarginTop` | `public float MarginTop { get; set; }` |
| `MarginBottom` | `public float MarginBottom { get; set; }` |
| `MarginLeft` | `public float MarginLeft { get; set; }` |
| `MarginRight` | `public float MarginRight { get; }` |
| `GotTransitionDuration` | `public bool GotTransitionDuration { get; }` |
| `GotPositionXOffset` | `public bool GotPositionXOffset { get; }` |
| `GotPositionYOffset` | `public bool GotPositionYOffset { get; }` |
| `GotSuggestedWidth` | `public bool GotSuggestedWidth { get; }` |
| `GotSuggestedHeight` | `public bool GotSuggestedHeight { get; }` |
| `GotMarginTop` | `public bool GotMarginTop { get; }` |
| `GotMarginBottom` | `public bool GotMarginBottom { get; }` |
| `GotMarginLeft` | `public bool GotMarginLeft { get; }` |
| `GotMarginRight` | `public bool GotMarginRight { get; }` |

## 主要方法

### FillFromWidget
`public void FillFromWidget(Widget widget)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 VisualState 实例
VisualState visualState = ...;
visualState.FillFromWidget(widget);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualState visualState = ...;
visualState.FillFromWidget(widget);
```

## 参见

- [本区域目录](../)