<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationCharacter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationCharacter

**命名空间:** TaleWorlds.CampaignSystem.Settlements.Locations
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`LocationCharacter` 是 `TaleWorlds.CampaignSystem.Settlements.Locations` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Character` | `public CharacterObject Character { get; }` |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin { get; }` |
| `AgentData` | `public AgentData AgentData { get; set; }` |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment { get; set; }` |
| `ActionSetCode` | `public string ActionSetCode { get; set; }` |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode { get; set; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag { get; set; }` |
| `AddBehaviors` | `public LocationCharacter.AddBehaviorsDelegate AddBehaviors { get; }` |
| `AfterAgentCreated` | `public LocationCharacter.AfterAgentCreatedDelegate AfterAgentCreated { get; }` |
| `FixedLocation` | `public bool FixedLocation { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialItem` | `public ItemObject SpecialItem { get; }` |


## 主要方法

### SetAlleyOfCharacter

```csharp
public void SetAlleyOfCharacter(Alley alley)
```

### CreateBodyguardHero

```csharp
public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)
```

### AddBehaviorsDelegate

```csharp
public delegate void AddBehaviorsDelegate(IAgent agent)
```

### AfterAgentCreatedDelegate

```csharp
public delegate void AfterAgentCreatedDelegate(IAgent agent)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)