---
title: "VillagerPartyComponent"
description: "VillagerPartyComponent 的自动生成类参考。"
---
# VillagerPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/VillagerPartyComponent.cs`

## 概述

`VillagerPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `VillagerPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Village` | `public Village Village { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### CreateVillagerParty
`public static MobileParty CreateVillagerParty(string stringId, Village village)`

**用途 / Purpose:** 构建一个新的 villager party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
VillagerPartyComponent.CreateVillagerParty("example", village);
```

### ConvertPartyToVillagerParty
`public static void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)`

**用途 / Purpose:** 把party to villager party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
VillagerPartyComponent.ConvertPartyToVillagerParty(mobileParty, village);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 VillagerPartyComponent 实例
VillagerPartyComponent villagerPartyComponent = ...;
var result = villagerPartyComponent.GetDefaultComponentBanner();
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 清空当前对象中的cached name。

```csharp
// 先通过子系统 API 拿到 VillagerPartyComponent 实例
VillagerPartyComponent villagerPartyComponent = ...;
villagerPartyComponent.ClearCachedName();
```

### InitializeVillagerPartyProperties
`public void InitializeVillagerPartyProperties(MobileParty mobileParty, Village village)`

**用途 / Purpose:** 为 villager party properties 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 VillagerPartyComponent 实例
VillagerPartyComponent villagerPartyComponent = ...;
villagerPartyComponent.InitializeVillagerPartyProperties(mobileParty, village);
```

## 使用示例

```csharp
var component = agent.GetComponent<VillagerPartyComponent>();
```

## 参见

- [本区域目录](../)