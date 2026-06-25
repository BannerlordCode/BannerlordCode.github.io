---
title: "MissionViewsContainer"
description: "MissionViewsContainer 的自动生成类参考。"
---
# MissionViewsContainer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionViewsContainer`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionViewsContainer.cs`

## 概述

`MissionViewsContainer` 位于 `TaleWorlds.MountAndBlade.View.MissionViews`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Add
`public void Add(MissionView missionView)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 先通过子系统 API 拿到 MissionViewsContainer 实例
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Add(missionView);
```

### Remove
`public void Remove(MissionView missionView)`

**用途 / Purpose:** 从当前容器或状态中移除项。

```csharp
// 先通过子系统 API 拿到 MissionViewsContainer 实例
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Remove(missionView);
```

### Contains
`public bool Contains(MissionView missionView)`

**用途 / Purpose:** 检查当前对象是否含有目标项。

```csharp
// 先通过子系统 API 拿到 MissionViewsContainer 实例
MissionViewsContainer missionViewsContainer = ...;
var result = missionViewsContainer.Contains(missionView);
```

### ForEach
`public void ForEach(Action<MissionView> action)`

**用途 / Purpose:** 调用 ForEach 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionViewsContainer 实例
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.ForEach(action);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Add(missionView);
```

## 参见

- [本区域目录](../)