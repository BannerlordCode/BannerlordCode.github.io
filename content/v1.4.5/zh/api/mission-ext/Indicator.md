---
title: "Indicator"
description: "Indicator 的自动生成类参考。"
---
# Indicator

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Indicator`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/FormationIndicatorMissionView.cs`

## 概述

`Indicator` 位于 `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**用途 / Purpose:** 根据当前状态判定「indicator state」的结果。

```csharp
// 先通过子系统 API 拿到 Indicator 实例
Indicator indicator = ...;
indicator.DetermineIndicatorState(0, position);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Indicator indicator = ...;
indicator.DetermineIndicatorState(0, position);
```

## 参见

- [本区域目录](../)