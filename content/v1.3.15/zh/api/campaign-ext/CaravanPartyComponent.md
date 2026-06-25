---
title: "CaravanPartyComponent"
description: "CaravanPartyComponent 的自动生成类参考。"
---
# CaravanPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CaravanPartyComponent.cs`

## 概述

`CaravanPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CaravanPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `IsElite` | `public bool IsElite { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public override bool CanHaveLandNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Leader` | `public override Hero Leader { get; }` |

## 主要方法

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanPartyComponent 实例
CaravanPartyComponent caravanPartyComponent = ...;
var result = caravanPartyComponent.GetDefaultComponentBanner();
```

### ConvertPartyToCaravanParty
`public static void ConvertPartyToCaravanParty(MobileParty mobileParty, Hero caravanOwner, Settlement spawnSettlement, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**用途 / Purpose:** **用途 / Purpose:** 把party to caravan party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
CaravanPartyComponent.ConvertPartyToCaravanParty(mobileParty, caravanOwner, spawnSettlement, false, null, null, false);
```

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的cached name。

```csharp
// 先通过子系统 API 拿到 CaravanPartyComponent 实例
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.ClearCachedName();
```

### CreateCaravanParty
`public static MobileParty CreateCaravanParty(Hero caravanOwner, Settlement spawnSettlement, PartyTemplateObject templateObject, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 caravan party 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CaravanPartyComponent.CreateCaravanParty(caravanOwner, spawnSettlement, templateObject, false, null, null, false);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount and harness visual ids for party icon 的结果。

```csharp
// 先通过子系统 API 拿到 CaravanPartyComponent 实例
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

### TransferCaravanOwnership
`public static void TransferCaravanOwnership(MobileParty caravan, Hero newOwner, Settlement homeSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 TransferCaravanOwnership 对应的操作。

```csharp
// 静态调用，不需要实例
CaravanPartyComponent.TransferCaravanOwnership(caravan, newOwner, homeSettlement);
```

### ChangeHomeSettlement
`public void ChangeHomeSettlement(Settlement newHomeSettlement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeHomeSettlement 对应的操作。

```csharp
// 先通过子系统 API 拿到 CaravanPartyComponent 实例
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.ChangeHomeSettlement(newHomeSettlement);
```

### InitializeCaravanOnCreation
`public void InitializeCaravanOnCreation(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** **用途 / Purpose:** 为 caravan on creation 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CaravanPartyComponent 实例
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.InitializeCaravanOnCreation(mobileParty, settlement);
```

## 使用示例

```csharp
var component = agent.GetComponent<CaravanPartyComponent>();
```

## 参见

- [本区域目录](../)