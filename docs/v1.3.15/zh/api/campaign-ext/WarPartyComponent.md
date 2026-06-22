<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WarPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WarPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WarPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/WarPartyComponent.cs`

## 概述

`WarPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<WarPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Clan` | `public Clan Clan { get; }` |

## 主要方法

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

## 使用示例

```csharp
// WarPartyComponent (Component) 的典型用法
agent.GetComponent<WarPartyComponent>();
```

## 参见

- [完整类目录](../catalog)