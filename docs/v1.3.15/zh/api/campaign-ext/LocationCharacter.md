<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationCharacter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LocationCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationCharacter`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs`

## 概述

`LocationCharacter` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void SetAlleyOfCharacter(Alley alley)`

**用途 / Purpose:** 设置 `alley of character` 的值或状态。

### CreateBodyguardHero
`public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)`

**用途 / Purpose:** 创建一个 `bodyguard hero` 实例或对象。

### AddBehaviorsDelegate
`public delegate void AddBehaviorsDelegate(IAgent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `behaviors delegate`。

### AfterAgentCreatedDelegate
`public delegate void AfterAgentCreatedDelegate(IAgent agent)`

**用途 / Purpose:** 处理 `after agent created delegate` 相关逻辑。

## 使用示例

```csharp
var value = new LocationCharacter();
value.SetAlleyOfCharacter(alley);
```

## 参见

- [完整类目录](../catalog)