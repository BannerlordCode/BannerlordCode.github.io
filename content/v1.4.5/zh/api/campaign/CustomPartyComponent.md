---
title: "CustomPartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomPartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CustomPartyComponent.cs`

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

**用途 / Purpose:** 初始化 `custom party properties with party template` 的状态、资源或绑定。

### InitializeCustomPartyPropertiesWithTroopRoster
`public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)`

**用途 / Purpose:** 初始化 `custom party properties with troop roster` 的状态、资源或绑定。

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 获取 `default component banner` 的当前值。

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** 创建一个 `custom party with party template` 实例或对象。

### CreateCustomPartyWithPartyTemplate
`public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** 创建一个 `custom party with party template` 实例或对象。

### CreateCustomPartyWithTroopRoster
`public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** 创建一个 `custom party with troop roster` 实例或对象。

### ConvertPartyToCustomParty
`public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)`

**用途 / Purpose:** 处理 `convert party to custom party` 相关逻辑。

### SetBaseSpeed
`public void SetBaseSpeed(float speed)`

**用途 / Purpose:** 设置 `base speed` 的值或状态。

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**用途 / Purpose:** 获取 `mount and harness visual ids for party icon` 的当前值。

## 使用示例

```csharp
var component = agent.GetComponent<CustomPartyComponent>();
```

## 参见

- [完整类目录](../catalog)