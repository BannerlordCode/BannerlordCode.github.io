---
title: "VisualDefinition"
description: "VisualDefinition 的自动生成类参考。"
---
# VisualDefinition

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class VisualDefinition`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs`

## 概述

`VisualDefinition` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `TransitionDuration` | `public float TransitionDuration { get; }` |
| `DelayOnBegin` | `public float DelayOnBegin { get; }` |
| `EaseType` | `public AnimationInterpolation.Type EaseType { get; }` |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction { get; }` |
| `VisualStates` | `public Dictionary<string, VisualState> VisualStates { get; }` |

## 主要方法

### AddVisualState
`public void AddVisualState(VisualState visualState)`

**用途 / Purpose:** 将 visual state 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 VisualDefinition 实例
VisualDefinition visualDefinition = ...;
visualDefinition.AddVisualState(visualState);
```

### GetVisualState
`public VisualState GetVisualState(string state)`

**用途 / Purpose:** 读取并返回当前对象中 visual state 的结果。

```csharp
// 先通过子系统 API 拿到 VisualDefinition 实例
VisualDefinition visualDefinition = ...;
var result = visualDefinition.GetVisualState("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VisualDefinition visualDefinition = ...;
visualDefinition.AddVisualState(visualState);
```

## 参见

- [本区域目录](../)