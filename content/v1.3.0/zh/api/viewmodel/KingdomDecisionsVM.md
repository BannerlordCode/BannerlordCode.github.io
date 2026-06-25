---
title: "KingdomDecisionsVM"
description: "KingdomDecisionsVM 的自动生成类参考。"
---
# KingdomDecisionsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomDecisionsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/KingdomDecisionsVM.cs`

## 概述

`KingdomDecisionsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsCurrentDecisionActive` | `public bool IsCurrentDecisionActive { get; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CurrentDecision` | `public DecisionItemBaseVM CurrentDecision { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `IsRefreshed` | `public bool IsRefreshed { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshValues();
```

### OnFrameTick
`public void OnFrameTick()`

**用途 / Purpose:** **用途 / Purpose:** 在 frame tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.OnFrameTick();
```

### HandleNextDecision
`public void HandleNextDecision()`

**用途 / Purpose:** **用途 / Purpose:** 执行与 next decision 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.HandleNextDecision();
```

### HandleDecision
`public void HandleDecision(KingdomDecision curDecision)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 decision 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.HandleDecision(curDecision);
```

### RefreshWith
`public void RefreshWith(KingdomDecision decision)`

**用途 / Purpose:** **用途 / Purpose:** 使 with 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshWith(decision);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**用途 / Purpose:** **用途 / Purpose:** 为 done input key 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionsVM 实例
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.SetDoneInputKey(hotKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
KingdomDecisionsVM kingdomDecisionsVM = ...;
kingdomDecisionsVM.RefreshValues();
```

## 参见

- [本区域目录](../)