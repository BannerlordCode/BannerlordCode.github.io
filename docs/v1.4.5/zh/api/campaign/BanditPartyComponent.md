<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditPartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/BanditPartyComponent.cs`

## 概述

`BanditPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `BanditPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### InitializeBanditOnCreation
`public void InitializeBanditOnCreation(MobileParty mobileParty)`

**用途 / Purpose:** 初始化 `bandit on creation` 的状态、资源或绑定。

### CreateBanditParty
`public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 创建一个 `bandit party` 实例或对象。

### ConvertPartyToBanditParty
`public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)`

**用途 / Purpose:** 处理 `convert party to bandit party` 相关逻辑。

### CreateLooterParty
`public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)`

**用途 / Purpose:** 创建一个 `looter party` 实例或对象。

### ConvertPartyToLooterParty
`public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)`

**用途 / Purpose:** 处理 `convert party to looter party` 相关逻辑。

### SetHomeHideout
`public void SetHomeHideout(Hideout hideout)`

**用途 / Purpose:** 设置 `home hideout` 的值或状态。

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 处理 `clear cached name` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<BanditPartyComponent>();
```

## 参见

- [完整类目录](../catalog)