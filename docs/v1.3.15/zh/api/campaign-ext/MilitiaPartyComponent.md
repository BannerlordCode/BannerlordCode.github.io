<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MilitiaPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MilitiaPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MilitiaPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/MilitiaPartyComponent.cs`

## 概述

`MilitiaPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MilitiaPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

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
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreateMilitiaParty
```csharp
public static MobileParty CreateMilitiaParty(string stringId, Settlement settlement)
```

### ConvertPartyToMilitiaParty
```csharp
public static void ConvertPartyToMilitiaParty(MobileParty mobileParty, Settlement settlement)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeMilitiaPartyProperties
```csharp
public void InitializeMilitiaPartyProperties(MobileParty mobileParty, Settlement settlement)
```

## 使用示例

```csharp
// MilitiaPartyComponent (Component) 的典型用法
agent.GetComponent<MilitiaPartyComponent>();
```

## 参见

- [完整类目录](../catalog)