---
title: "PartyCompositionVM"
description: "PartyCompositionVM 的自动生成类参考。"
---
# PartyCompositionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyCompositionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party/PartyCompositionVM.cs`

## 概述

`PartyCompositionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `InfantryHint` | `public HintViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public HintViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public HintViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public HintViewModel HorseArcherHint { get; set; }` |

## 主要方法

### OnTroopRemoved
`public void OnTroopRemoved(FormationClass formationClass, int count)`

**用途 / Purpose:** 在 「troop removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyCompositionVM 实例
PartyCompositionVM partyCompositionVM = ...;
partyCompositionVM.OnTroopRemoved(formationClass, 0);
```

### OnTroopAdded
`public void OnTroopAdded(FormationClass formationClass, int count)`

**用途 / Purpose:** 在 「troop added」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 PartyCompositionVM 实例
PartyCompositionVM partyCompositionVM = ...;
partyCompositionVM.OnTroopAdded(formationClass, 0);
```

### RefreshCounts
`public void RefreshCounts(MBBindingList<PartyCharacterVM> list)`

**用途 / Purpose:** 使 「counts」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyCompositionVM 实例
PartyCompositionVM partyCompositionVM = ...;
partyCompositionVM.RefreshCounts(list);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyCompositionVM partyCompositionVM = ...;
partyCompositionVM.OnTroopRemoved(formationClass, 0);
```

## 参见

- [本区域目录](../)