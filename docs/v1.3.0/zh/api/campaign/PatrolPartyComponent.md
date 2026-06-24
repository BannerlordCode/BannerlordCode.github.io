<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PatrolPartyComponent`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PatrolPartyComponent.cs`

## 概述

`PatrolPartyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `PatrolPartyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Clan` | `public Clan Clan { get; }` |

## 主要方法

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**用途 / Purpose:** 获取 `default component banner` 的当前值。

### CreatePatrolParty
`public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)`

**用途 / Purpose:** 创建一个 `patrol party` 实例或对象。

### SortRoster
`public void SortRoster()`

**用途 / Purpose:** 处理 `sort roster` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<PatrolPartyComponent>();
```

## 参见

- [完整类目录](../catalog)