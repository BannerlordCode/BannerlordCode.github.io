<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BanditPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## 概述

`BanditPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<BanditPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## 主要方法

### CreateBanditParty
```csharp
public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToBanditParty
```csharp
public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)
```

### CreateLooterParty
```csharp
public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToLooterParty
```csharp
public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)
```

### SetHomeHideout
```csharp
public void SetHomeHideout(Hideout hideout)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeBanditOnCreation
```csharp
public void InitializeBanditOnCreation(MobileParty mobileParty)
```

## 使用示例

```csharp
// BanditPartyComponent (Component) 的典型用法
agent.GetComponent<BanditPartyComponent>();
```

## 参见

- [完整类目录](../catalog)