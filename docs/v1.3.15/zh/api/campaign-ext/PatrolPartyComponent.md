<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PatrolPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PatrolPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PatrolPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PatrolPartyComponent.cs`

## 概述

`PatrolPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<PatrolPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Clan` | `public Clan Clan { get; }` |
| `IsNaval` | `public bool IsNaval { get; }` |

## 主要方法

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreatePatrolParty
```csharp
public static MobileParty CreatePatrolParty(string stringId, CampaignVec2 position, float spawnRadius, Settlement homeSettlement, PartyTemplateObject template)
```

### SortRoster
```csharp
public void SortRoster()
```

## 使用示例

```csharp
// PatrolPartyComponent (Component) 的典型用法
agent.GetComponent<PatrolPartyComponent>();
```

## 参见

- [完整类目录](../catalog)