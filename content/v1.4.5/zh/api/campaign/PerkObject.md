---
title: "PerkObject"
description: "PerkObject 的自动生成类参考。"
---
# PerkObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PerkObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/PerkObject.cs`

## 概述

`PerkObject` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Skill` | `public SkillObject Skill { get; }` |
| `RequiredSkillValue` | `public float RequiredSkillValue { get; }` |
| `AlternativePerk` | `public PerkObject AlternativePerk { get; }` |
| `PrimaryRole` | `public PartyRole PrimaryRole { get; }` |
| `SecondaryRole` | `public PartyRole SecondaryRole { get; }` |
| `PrimaryBonus` | `public float PrimaryBonus { get; }` |
| `SecondaryBonus` | `public float SecondaryBonus { get; }` |
| `PrimaryIncrementType` | `public EffectIncrementType PrimaryIncrementType { get; }` |
| `SecondaryIncrementType` | `public EffectIncrementType SecondaryIncrementType { get; }` |
| `PrimaryTroopUsageMask` | `public TroopUsageFlags PrimaryTroopUsageMask { get; }` |
| `SecondaryTroopUsageMask` | `public TroopUsageFlags SecondaryTroopUsageMask { get; }` |
| `PrimaryDescription` | `public TextObject PrimaryDescription { get; }` |
| `SecondaryDescription` | `public TextObject SecondaryDescription { get; }` |
| `IsTrash` | `public bool IsTrash { get; }` |

## 主要方法

### Initialize
`public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk, string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType, string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f, EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid, TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined, TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 PerkObject 实例
PerkObject perkObject = ...;
perkObject.Initialize("example", skill, 0, alternativePerk, "example", primaryRole, 0, incrementType, "example", partyRole.None, 0, effectIncrementType.Invalid, troopUsageFlags.Undefined, troopUsageFlags.Undefined);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PerkObject 实例
PerkObject perkObject = ...;
var result = perkObject.ToString();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PerkObject perkObject = ...;
perkObject.Initialize("example", skill, 0, alternativePerk, "example", primaryRole, 0, incrementType, "example", partyRole.None, 0, effectIncrementType.Invalid, troopUsageFlags.Undefined, troopUsageFlags.Undefined);
```

## 参见

- [本区域目录](../)