<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillagerPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillagerPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/VillagerPartyComponent.cs`

## 概述

`VillagerPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<VillagerPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Village` | `public Village Village { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### CreateVillagerParty
```csharp
public static MobileParty CreateVillagerParty(string stringId, Village village)
```

### ConvertPartyToVillagerParty
```csharp
public static void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)
```

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeVillagerPartyProperties
```csharp
public void InitializeVillagerPartyProperties(MobileParty mobileParty, Village village)
```

## 使用示例

```csharp
// VillagerPartyComponent (Component) 的典型用法
agent.GetComponent<VillagerPartyComponent>();
```

## 参见

- [完整类目录](../catalog)