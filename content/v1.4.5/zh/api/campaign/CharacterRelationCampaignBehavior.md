---
title: "CharacterRelationCampaignBehavior"
description: "CharacterRelationCampaignBehavior 的自动生成类参考。"
---
# CharacterRelationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CharacterRelationCampaignBehavior.cs`

## 概述

`CharacterRelationCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CharacterRelationCampaignBehavior 实例
CharacterRelationCampaignBehavior characterRelationCampaignBehavior = ...;
characterRelationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CharacterRelationCampaignBehavior 实例
CharacterRelationCampaignBehavior characterRelationCampaignBehavior = ...;
characterRelationCampaignBehavior.SyncData(dataStore);
```

### OnSettlementOwnerChanged
`public void OnSettlementOwnerChanged(Settlement settlement, bool openToClaim, Hero newOwner, Hero oldOwner, Hero capturerHero, ChangeOwnerOfSettlementAction.ChangeOwnerOfSettlementDetail detail)`

**用途 / Purpose:** 在 settlement owner changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CharacterRelationCampaignBehavior 实例
CharacterRelationCampaignBehavior characterRelationCampaignBehavior = ...;
characterRelationCampaignBehavior.OnSettlementOwnerChanged(settlement, false, newOwner, oldOwner, capturerHero, detail);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterRelationCampaignBehavior characterRelationCampaignBehavior = ...;
characterRelationCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)