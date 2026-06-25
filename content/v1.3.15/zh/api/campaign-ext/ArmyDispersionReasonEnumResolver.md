---
title: "ArmyDispersionReasonEnumResolver"
description: "ArmyDispersionReasonEnumResolver 的自动生成类参考。"
---
# ArmyDispersionReasonEnumResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyDispersionReasonEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/ArmyDispersionReasonEnumResolver.cs`

## 概述

`ArmyDispersionReasonEnumResolver` 位于 `TaleWorlds.CampaignSystem.SaveCompability`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.SaveCompability` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ResolveObject
`public string ResolveObject(string originalObject)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ArmyDispersionReasonEnumResolver 实例
ArmyDispersionReasonEnumResolver armyDispersionReasonEnumResolver = ...;
var result = armyDispersionReasonEnumResolver.ResolveObject("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyDispersionReasonEnumResolver armyDispersionReasonEnumResolver = ...;
armyDispersionReasonEnumResolver.ResolveObject("example");
```

## 参见

- [本区域目录](../)