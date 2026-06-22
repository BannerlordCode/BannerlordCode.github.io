<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CustomPartyComponent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CustomPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CustomPartyComponent.cs`

## 概述

`CustomPartyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<CustomPartyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomPartyBaseSpeed` | `public float CustomPartyBaseSpeed { get; set; }` |
| `AvoidHostileActions` | `public override bool AvoidHostileActions { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `BaseSpeed` | `public float BaseSpeed { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `IsCreatedWithPartyTemplate` | `public bool IsCreatedWithPartyTemplate { get; }` |

## 主要方法

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### CreateCustomPartyWithPartyTemplate
```csharp
public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### CreateCustomPartyWithPartyTemplate
```csharp
public static MobileParty CreateCustomPartyWithPartyTemplate(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, PartyTemplateObject partyTemplate, Hero owner, Hero leader, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### CreateCustomPartyWithTroopRoster
```csharp
public static MobileParty CreateCustomPartyWithTroopRoster(CampaignVec2 position, float spawnRadius, Settlement homeSettlement, TextObject name, Clan clan, TroopRoster troopRoster, TroopRoster prisonerRoster, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### ConvertPartyToCustomParty
```csharp
public static void ConvertPartyToCustomParty(MobileParty mobileParty, Settlement homeSettlement, TextObject name, Hero owner, string partyMountStringId = "", string partyHarnessStringId = "", float customPartyBaseSpeed = 0f, bool avoidHostileActions = false)
```

### SetBaseSpeed
```csharp
public void SetBaseSpeed(float speed)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### InitializeCustomPartyPropertiesWithPartyTemplate
```csharp
public void InitializeCustomPartyPropertiesWithPartyTemplate(MobileParty mobileParty)
```

### InitializeCustomPartyPropertiesWithTroopRoster
```csharp
public void InitializeCustomPartyPropertiesWithTroopRoster(MobileParty mobileParty)
```

## 使用示例

```csharp
// CustomPartyComponent (Component) 的典型用法
agent.GetComponent<CustomPartyComponent>();
```

## 参见

- [完整类目录](../catalog)