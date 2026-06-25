---
title: "WeatherNode"
description: "WeatherNode 的自动生成类参考。"
---
# WeatherNode

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeatherNode`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/WeatherNode.cs`

## 概述

`WeatherNode` 位于 `TaleWorlds.CampaignSystem.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisuallyDirty` | `public bool IsVisuallyDirty { get; }` |

## 主要方法

### SetVisualDirty
`public void SetVisualDirty()`

**用途 / Purpose:** **用途 / Purpose:** 为 visual dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeatherNode 实例
WeatherNode weatherNode = ...;
weatherNode.SetVisualDirty();
```

### OnVisualUpdated
`public void OnVisualUpdated()`

**用途 / Purpose:** **用途 / Purpose:** 在 visual updated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 WeatherNode 实例
WeatherNode weatherNode = ...;
weatherNode.OnVisualUpdated();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
WeatherNode weatherNode = ...;
weatherNode.SetVisualDirty();
```

## 参见

- [本区域目录](../)