---
title: "MissionArenaPracticeFightVM"
description: "MissionArenaPracticeFightVM 的自动生成类参考。"
---
# MissionArenaPracticeFightVM

**Namespace:** SandBox.ViewModelCollection.Missions
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs`

## 概述

`MissionArenaPracticeFightVM` 位于 `SandBox.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OpponentsBeatenText` | `public string OpponentsBeatenText { get; set; }` |
| `PrizeText` | `public string PrizeText { get; set; }` |
| `OpponentsRemainingText` | `public string OpponentsRemainingText { get; set; }` |
| `IsPlayerPracticing` | `public bool IsPlayerPracticing { get; set; }` |

## 主要方法

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MissionArenaPracticeFightVM 实例
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.Tick();
```

### UpdatePrizeText
`public void UpdatePrizeText()`

**用途 / Purpose:** 重新计算并更新 prize text 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionArenaPracticeFightVM 实例
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.UpdatePrizeText();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionArenaPracticeFightVM missionArenaPracticeFightVM = ...;
missionArenaPracticeFightVM.Tick();
```

## 参见

- [本区域目录](../)