---
title: "LordPartyComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordPartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## 概述

`LordPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `LordPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |

## 主要方法

### SetWagePaymentLimit
`public override void SetWagePaymentLimit(int newLimit)`

**用途 / Purpose:** 设置 `wage payment limit` 的值或状态。

### CreateLordParty
`public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)`

**用途 / Purpose:** 创建一个 `lord party` 实例或对象。

### ConvertPartyToLordParty
`public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)`

**用途 / Purpose:** 处理 `convert party to lord party` 相关逻辑。

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 处理 `clear cached name` 相关逻辑。

### InitializeLordPartyProperties
`public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)`

**用途 / Purpose:** 初始化 `lord party properties` 的状态、资源或绑定。

## 使用示例

```csharp
var component = agent.GetComponent<LordPartyComponent>();
```

## 参见

- [完整类目录](../catalog)