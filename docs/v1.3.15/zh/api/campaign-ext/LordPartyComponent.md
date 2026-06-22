<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LordPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## 概述

`LordPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<LordPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

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
```csharp
public override void SetWagePaymentLimit(int newLimit)
```

### CreateLordParty
```csharp
public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)
```

### ConvertPartyToLordParty
```csharp
public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeLordPartyProperties
```csharp
public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)
```

## 使用示例

```csharp
// LordPartyComponent (Component) 的典型用法
agent.GetComponent<LordPartyComponent>();
```

## 参见

- [完整类目录](../catalog)