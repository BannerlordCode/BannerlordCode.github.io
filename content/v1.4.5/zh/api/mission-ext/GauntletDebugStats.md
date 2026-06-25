---
title: "GauntletDebugStats"
description: "GauntletDebugStats 的自动生成类参考。"
---
# GauntletDebugStats

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDebugStats : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletDebugStats.cs`

## 概述

`GauntletDebugStats` 位于 `TaleWorlds.MountAndBlade.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletDebugStats 实例
GauntletDebugStats gauntletDebugStats = ...;
gauntletDebugStats.Initialize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GauntletDebugStats gauntletDebugStats = ...;
gauntletDebugStats.Initialize();
```

## 参见

- [本区域目录](../)