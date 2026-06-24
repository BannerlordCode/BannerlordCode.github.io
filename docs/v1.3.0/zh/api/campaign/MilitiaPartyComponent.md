<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MilitiaPartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/MilitiaPartyComponent.cs`

## 概述

`MilitiaPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MilitiaPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |

## 主要方法

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 获取 `default component banner` 的当前值。

### CreateMilitiaParty
`public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)`

**用途 / Purpose:** 创建一个 `militia party` 实例或对象。

### ConvertPartyToMilitiaParty
`public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 处理 `convert party to militia party` 相关逻辑。

### ClearCachedName
`public override void ClearCachedName()`

**用途 / Purpose:** 处理 `clear cached name` 相关逻辑。

### InitializeMilitiaPartyProperties
`public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)`

**用途 / Purpose:** 初始化 `militia party properties` 的状态、资源或绑定。

## 使用示例

```csharp
var component = agent.GetComponent<MilitiaPartyComponent>();
```

## 参见

- [完整类目录](../catalog)