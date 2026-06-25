---
title: "MarriageOfferCampaignBehavior"
description: "MarriageOfferCampaignBehavior 的自动生成类参考。"
---
# MarriageOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferCampaignBehavior : CampaignBehaviorBase, IMarriageOfferCampaignBehavior, ICampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/MarriageOfferCampaignBehavior.cs`

## 概述

`MarriageOfferCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.SyncData(dataStore);
```

### CreateMarriageOffer
`public void CreateMarriageOffer(Hero currentOfferedPlayerClanHero, Hero currentOfferedOtherClanHero)`

**用途 / Purpose:** 构建一个新的 「marriage offer」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.CreateMarriageOffer(currentOfferedPlayerClanHero, currentOfferedOtherClanHero);
```

### GetMarriageAcceptedConsequences
`public MBBindingList<TextObject> GetMarriageAcceptedConsequences()`

**用途 / Purpose:** 读取并返回当前对象中 「marriage accepted consequences」 的结果。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
var result = marriageOfferCampaignBehavior.GetMarriageAcceptedConsequences();
```

### OnMarriageOfferAcceptedOnPopUp
`public void OnMarriageOfferAcceptedOnPopUp()`

**用途 / Purpose:** 在 「marriage offer accepted on pop up」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferAcceptedOnPopUp();
```

### OnMarriageOfferedToPlayer
`public void OnMarriageOfferedToPlayer(Hero suitor, Hero maiden)`

**用途 / Purpose:** 在 「marriage offered to player」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferedToPlayer(suitor, maiden);
```

### OnMarriageOfferDeclinedOnPopUp
`public void OnMarriageOfferDeclinedOnPopUp()`

**用途 / Purpose:** 在 「marriage offer declined on pop up」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferDeclinedOnPopUp();
```

### OnMarriageOfferCanceled
`public void OnMarriageOfferCanceled(Hero suitor, Hero maiden)`

**用途 / Purpose:** 在 「marriage offer canceled」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.OnMarriageOfferCanceled(suitor, maiden);
```

### IsHeroEngaged
`public bool IsHeroEngaged(Hero hero)`

**用途 / Purpose:** 判断当前对象是否处于 「hero engaged」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MarriageOfferCampaignBehavior 实例
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
var result = marriageOfferCampaignBehavior.IsHeroEngaged(hero);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MarriageOfferCampaignBehavior marriageOfferCampaignBehavior = ...;
marriageOfferCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)