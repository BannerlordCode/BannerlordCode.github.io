---
title: "ClanMemberPartyRoleModel"
description: "ClanMemberPartyRoleModel 的自动生成类参考。"
---
# ClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel>`
**Base:** `MBGameModel<ClanMemberPartyRoleModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanMemberPartyRoleModel.cs`

## 概述

`ClanMemberPartyRoleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ClanMemberPartyRoleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumPartyRoleAssignmentCount` | `public abstract int MaximumPartyRoleAssignmentCount { get; }` |

## 主要方法

### GetAssignablePartyRoles
`public abstract IEnumerable<PartyRole> GetAssignablePartyRoles()`

**用途 / Purpose:** 读取并返回当前对象中 assignable party roles 的结果。

```csharp
// 先通过子系统 API 拿到 ClanMemberPartyRoleModel 实例
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.GetAssignablePartyRoles();
```

### GetRelevantSkillForPartyRole
`public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**用途 / Purpose:** 读取并返回当前对象中 relevant skill for party role 的结果。

```csharp
// 先通过子系统 API 拿到 ClanMemberPartyRoleModel 实例
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.GetRelevantSkillForPartyRole(role);
```

### IsHeroAssignableForPartyRole
`public abstract bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for party role 状态或条件。

```csharp
// 先通过子系统 API 拿到 ClanMemberPartyRoleModel 实例
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.IsHeroAssignableForPartyRole(hero, role, party);
```

### DoesHeroHaveEnoughSkillForPartyRole
`public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 判断hero have enough skill for party role这一条件在当前对象上是否成立。

```csharp
// 先通过子系统 API 拿到 ClanMemberPartyRoleModel 实例
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.DoesHeroHaveEnoughSkillForPartyRole(hero, role, party);
```

### IsHeroAssignableForPartyRoleInParty
`public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 hero assignable for party role in party 状态或条件。

```csharp
// 先通过子系统 API 拿到 ClanMemberPartyRoleModel 实例
ClanMemberPartyRoleModel clanMemberPartyRoleModel = ...;
var result = clanMemberPartyRoleModel.IsHeroAssignableForPartyRoleInParty(role, hero, party);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ClanMemberPartyRoleModel instance = ...;
```

## 参见

- [本区域目录](../)