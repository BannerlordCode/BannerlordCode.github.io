---
title: "AtmosphereGrid"
description: "AtmosphereGrid 的自动生成类参考。"
---
# AtmosphereGrid

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AtmosphereGrid`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/AtmosphereGrid.cs`

## 概述

`AtmosphereGrid` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 AtmosphereGrid 实例
AtmosphereGrid atmosphereGrid = ...;
atmosphereGrid.Initialize();
```

### GetInterpolatedStateInfo
`public AtmosphereState GetInterpolatedStateInfo(Vec3 pos)`

**用途 / Purpose:** 读取并返回当前对象中 interpolated state info 的结果。

```csharp
// 先通过子系统 API 拿到 AtmosphereGrid 实例
AtmosphereGrid atmosphereGrid = ...;
var result = atmosphereGrid.GetInterpolatedStateInfo(pos);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AtmosphereGrid atmosphereGrid = ...;
atmosphereGrid.Initialize();
```

## 参见

- [本区域目录](../)