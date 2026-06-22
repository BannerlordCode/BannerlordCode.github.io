<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CaravanPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CaravanPartyComponent.cs`

## 概述

`CaravanPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<CaravanPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `IsElite` | `public bool IsElite { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public override bool CanHaveLandNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Leader` | `public override Hero Leader { get; }` |

## 主要方法

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### ConvertPartyToCaravanParty
```csharp
public static void ConvertPartyToCaravanParty(MobileParty mobileParty, Hero caravanOwner, Settlement spawnSettlement, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### CreateCaravanParty
```csharp
public static MobileParty CreateCaravanParty(Hero caravanOwner, Settlement spawnSettlement, PartyTemplateObject templateObject, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### TransferCaravanOwnership
```csharp
public static void TransferCaravanOwnership(MobileParty caravan, Hero newOwner, Settlement homeSettlement)
```

### ChangeHomeSettlement
```csharp
public void ChangeHomeSettlement(Settlement newHomeSettlement)
```

### InitializeCaravanOnCreation
```csharp
public void InitializeCaravanOnCreation(MobileParty mobileParty, Settlement settlement)
```

## 使用示例

```csharp
// CaravanPartyComponent (Component) 的典型用法
agent.GetComponent<CaravanPartyComponent>();
```

## 参见

- [完整类目录](../catalog)