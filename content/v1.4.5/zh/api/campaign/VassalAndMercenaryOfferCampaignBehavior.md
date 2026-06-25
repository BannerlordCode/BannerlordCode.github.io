---
title: "VassalAndMercenaryOfferCampaignBehavior"
description: "VassalAndMercenaryOfferCampaignBehavior 的自动生成类参考。"
---
# VassalAndMercenaryOfferCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VassalAndMercenaryOfferCampaignBehavior : CampaignBehaviorBase, IVassalAndMercenaryOfferCampaignBehavior`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs`

## 概述

`VassalAndMercenaryOfferCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将「events」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 VassalAndMercenaryOfferCampaignBehavior 实例
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将「data」同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 VassalAndMercenaryOfferCampaignBehavior 实例
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.SyncData(dataStore);
```

### CancelVassalOrMercenaryServiceOffer
`public void CancelVassalOrMercenaryServiceOffer(Kingdom kingdom)`

**用途 / Purpose:** 检查当前对象是否满足 「cel vassal or mercenary service offer」 的前置条件。

```csharp
// 先通过子系统 API 拿到 VassalAndMercenaryOfferCampaignBehavior 实例
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CancelVassalOrMercenaryServiceOffer(kingdom);
```

### CreateMercenaryOffer
`public void CreateMercenaryOffer(Kingdom kingdom)`

**用途 / Purpose:** 构建一个新的 「mercenary offer」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 VassalAndMercenaryOfferCampaignBehavior 实例
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CreateMercenaryOffer(kingdom);
```

### CreateVassalOffer
`public void CreateVassalOffer(Kingdom kingdom)`

**用途 / Purpose:** 构建一个新的 「vassal offer」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 VassalAndMercenaryOfferCampaignBehavior 实例
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.CreateVassalOffer(kingdom);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
VassalAndMercenaryOfferCampaignBehavior vassalAndMercenaryOfferCampaignBehavior = ...;
vassalAndMercenaryOfferCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)