---
title: "BarberCampaignBehavior"
description: "BarberCampaignBehavior 的自动生成类参考。"
---
# BarberCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BarberCampaignBehavior.cs`

## 概述

`BarberCampaignBehavior` 位于 `SandBox.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore store)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.SyncData(store);
```

### GetFaceGenFilter
`public IFaceGeneratorCustomFilter GetFaceGenFilter()`

**用途 / Purpose:** 读取并返回当前对象中 「face gen filter」 的结果。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetFaceGenFilter();
```

### GetHaircutIndices
`public int GetHaircutIndices(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「haircut indices」 的结果。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetHaircutIndices(character);
```

### GetFacialHairIndices
`public int GetFacialHairIndices(BasicCharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「facial hair indices」 的结果。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetFacialHairIndices(character);
```

### GetAvailableStages
`public FaceGeneratorStage GetAvailableStages()`

**用途 / Purpose:** 读取并返回当前对象中 「available stages」 的结果。

```csharp
// 先通过子系统 API 拿到 BarberCampaignBehavior 实例
BarberCampaignBehavior barberCampaignBehavior = ...;
var result = barberCampaignBehavior.GetAvailableStages();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BarberCampaignBehavior barberCampaignBehavior = ...;
barberCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)