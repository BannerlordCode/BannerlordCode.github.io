<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GarrisonPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GarrisonPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GarrisonPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/GarrisonPartyComponent.cs`

## 概述

`GarrisonPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<GarrisonPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |

## 主要方法

### CreateGarrisonParty
```csharp
public static MobileParty CreateGarrisonParty(string stringId, Settlement settlement)
```

### ConvertPartyToGarrisonParty
```csharp
public static void ConvertPartyToGarrisonParty(MobileParty mobileParty, Settlement settlement)
```

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### SetWagePaymentLimit
```csharp
public override void SetWagePaymentLimit(int newLimit)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeGarrisonPartyProperties
```csharp
public void InitializeGarrisonPartyProperties(MobileParty mobileParty, Settlement settlement)
```

## 使用示例

```csharp
// GarrisonPartyComponent (Component) 的典型用法
agent.GetComponent<GarrisonPartyComponent>();
```

## 参见

- [完整类目录](../catalog)