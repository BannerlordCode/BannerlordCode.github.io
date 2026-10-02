---
title: "LocationCharacter"
description: "LocationCharacter：TaleWorlds.CampaignSystem.Settlements.Locations 的 public 类；公开成员 22 个（方法 4、属性 14、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LocationCharacter

**Namespace:** `TaleWorlds.CampaignSystem.Settlements.Locations`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class LocationCharacter`
**File:** `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

LocationCharacter 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs。它是一个 public 类，继承链为 LocationCharacter。public/protected 成员共 22 个：4 方法、14 属性、1 构造函数、3 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：LocationCharacter 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations`，继承链 LocationCharacter。成员构成以属性为主（属性 14/22，方法 4/22），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Character` | `public CharacterObject Character` | 属性 |
| `AgentOrigin` | `public IAgentOriginBase AgentOrigin` | 属性 |
| `AgentData` | `public AgentData AgentData` | 属性 |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment` | 属性 |
| `ActionSetCode` | `public string ActionSetCode` | 属性 |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode` | 属性 |
| `SpecialTargetTag` | `public string SpecialTargetTag` | 属性 |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag` | 属性 |
| `AddBehaviors` | `public LocationCharacter.AddBehaviorsDelegate AddBehaviors` | 属性 |
| `AfterAgentCreated` | `public LocationCharacter.AfterAgentCreatedDelegate AfterAgentCreated` | 属性 |
| `FixedLocation` | `public bool FixedLocation` | 属性 |
| `MemberOfAlley` | `public Alley MemberOfAlley` | 属性 |
| `SpecialItem` | `public ItemObject SpecialItem` | 属性 |
| `LocationCharacter` | `public LocationCharacter(AgentData agentData, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate, string spawnTag, bool fixedLocation, LocationCharacter.CharacterRelations characterRelation, string actionSetCode, bool useCivilianEquipment, bool isFixedCharacter = false, ItemObject specialItem = null, bool isHidden = false, bool isVisualTracked = false, bool overrideBodyProperties = true, LocationCharacter.AfterAgentCreatedDelegate afterAgentCreated = null, bool forceSpawnOnSpecialTargetTag = false)` | 构造函数 |
| `SetAlleyOfCharacter` | `public void SetAlleyOfCharacter(Alley alley)` | 方法 |
| `CreateBodyguardHero` | `public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, LocationCharacter.AddBehaviorsDelegate addBehaviorsDelegate)` | 方法 |
| `AddBehaviorsDelegate` | `public delegate void AddBehaviorsDelegate(IAgent agent);` | 方法 |
| `AfterAgentCreatedDelegate` | `public delegate void AfterAgentCreatedDelegate(IAgent agent);` | 方法 |
| `CharacterRelations` | `public enum CharacterRelations` | 属性 |
| `AddBehaviorsDelegate` | `public delegate void AddBehaviorsDelegate(IAgent agent)` | 嵌套类型 |
| `AfterAgentCreatedDelegate` | `public delegate void AfterAgentCreatedDelegate(IAgent agent)` | 嵌套类型 |
| `CharacterRelations` | `public enum CharacterRelations` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AccompanyingCharacter](../AccompanyingCharacter/)
- [同命名空间 CanUseDoor](../CanUseDoor/)
- [同命名空间 CreateLocationCharacterDelegate](../CreateLocationCharacterDelegate/)
- [同命名空间 Location](../Location/)
