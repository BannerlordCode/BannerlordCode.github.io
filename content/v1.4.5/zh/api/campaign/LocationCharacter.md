---
title: "LocationCharacter"
description: "LocationCharacter 的自动生成类参考。"
---
# LocationCharacter

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Locations
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LocationCharacter`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements.Locations/LocationCharacter.cs`

## 概述

`LocationCharacter` 位于 `TaleWorlds.CampaignSystem.Settlements.Locations`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Locations` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AgentData` | `public AgentData AgentData { get; set; }` |
| `UseCivilianEquipment` | `public bool UseCivilianEquipment { get; set; }` |
| `ActionSetCode` | `public string ActionSetCode { get; set; }` |
| `AlarmedActionSetCode` | `public string AlarmedActionSetCode { get; set; }` |
| `SpecialTargetTag` | `public string SpecialTargetTag { get; set; }` |
| `ForceSpawnInSpecialTargetTag` | `public bool ForceSpawnInSpecialTargetTag { get; set; }` |
| `AddBehaviors` | `public AddBehaviorsDelegate AddBehaviors { get; }` |
| `AfterAgentCreated` | `public AfterAgentCreatedDelegate AfterAgentCreated { get; }` |
| `FixedLocation` | `public bool FixedLocation { get; }` |
| `MemberOfAlley` | `public Alley MemberOfAlley { get; }` |
| `SpecialItem` | `public ItemObject SpecialItem { get; }` |

## 主要方法

### AddBehaviorsDelegate
`public delegate void AddBehaviorsDelegate(IAgent agent)`

**用途 / Purpose:** 将 behaviors delegate 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LocationCharacter 实例
LocationCharacter locationCharacter = ...;
locationCharacter.AddBehaviorsDelegate(agent);
```

### AfterAgentCreatedDelegate
`public delegate void AfterAgentCreatedDelegate(IAgent agent)`

**用途 / Purpose:** 调用 AfterAgentCreatedDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 LocationCharacter 实例
LocationCharacter locationCharacter = ...;
locationCharacter.AfterAgentCreatedDelegate(agent);
```

### SetAlleyOfCharacter
`public void SetAlleyOfCharacter(Alley alley)`

**用途 / Purpose:** 为 alley of character 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LocationCharacter 实例
LocationCharacter locationCharacter = ...;
locationCharacter.SetAlleyOfCharacter(alley);
```

### CreateBodyguardHero
`public static LocationCharacter CreateBodyguardHero(Hero hero, MobileParty party, AddBehaviorsDelegate addBehaviorsDelegate)`

**用途 / Purpose:** 构建一个新的 bodyguard hero 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
LocationCharacter.CreateBodyguardHero(hero, party, addBehaviorsDelegate);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LocationCharacter locationCharacter = ...;
locationCharacter.AddBehaviorsDelegate(agent);
```

## 参见

- [本区域目录](../)