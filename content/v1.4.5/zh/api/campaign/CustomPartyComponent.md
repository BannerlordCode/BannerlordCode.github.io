---
title: "CustomPartyComponent"
description: "CustomPartyComponent 的自动生成类参考。"
---
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

## 概述

`CustomPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CustomPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomPartyBaseSpeed` | `public float CustomPartyBaseSpeed { get; set; }` |

## 主要方法

### InitializeCustomPartyPropertiesWithPartyTemplate
`public void InitializeCustomPartyPropertiesWithPartyTemplate(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 为 custom party properties with party template 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CustomPartyComponent 实例
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.InitializeCustomPartyPropertiesWithPartyTemplate(mobileParty);
```

### InitializeCustomPartyPropertiesWithTroopRoster
`public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 为 custom party properties with troop roster 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CustomPartyComponent 实例
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.InitializeCustomPartyPropertiesWithTroopRoster(mobileParty);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 default component banner 的结果。

```csharp
// 先通过子系统 API 拿到 CustomPartyComponent 实例
CustomPartyComponent customPartyComponent = ...;
var result = customPartyComponent.GetDefaultComponentBanner();
```

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 custom party with party template 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, 0, homeSettlement, name, clan, partyTemplate, owner, "example", "example", 0, false);
```

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 custom party with party template 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CustomPartyComponent.CreateCustomPartyWithPartyTemplate(position, 0, homeSettlement, name, clan, partyTemplate, owner, leader, "example", "example", 0, false);
```

### CreateCustomPartyWithTroopRoster
`public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 custom party with troop roster 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
CustomPartyComponent.CreateCustomPartyWithTroopRoster(position, 0, homeSettlement, name, clan, troopRoster, prisonerRoster, owner, "example", "example", 0, false);
```

### ConvertPartyToCustomParty
`public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** **用途 / Purpose:** 把party to custom party转换为另一种表示或类型。

```csharp
// 静态调用，不需要实例
CustomPartyComponent.ConvertPartyToCustomParty(mobileParty, homeSettlement, name, owner, "example", "example", 0, false);
```

### SetBaseSpeed
`public void SetBaseSpeed(float speed)`

**用途 / Purpose:** **用途 / Purpose:** 为 base speed 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CustomPartyComponent 实例
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.SetBaseSpeed(0);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mount and harness visual ids for party icon 的结果。

```csharp
// 先通过子系统 API 拿到 CustomPartyComponent 实例
CustomPartyComponent customPartyComponent = ...;
customPartyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

## 使用示例

```csharp
var component = agent.GetComponent<CustomPartyComponent>();
```

## 参见

- [本区域目录](../)