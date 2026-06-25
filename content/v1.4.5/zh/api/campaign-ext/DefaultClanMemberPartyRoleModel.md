---
title: "DefaultClanMemberPartyRoleModel"
description: "DefaultClanMemberPartyRoleModel 的自动生成类参考。"
---
# DefaultClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**Base:** `ClanMemberPartyRoleModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanMemberPartyRoleModel.cs`

## 概述

`DefaultClanMemberPartyRoleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanMemberPartyRoleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAssignablePartyRoles
`public override IEnumerable<PartyRole> GetAssignablePartyRoles()`

**用途 / Purpose:** 读取并返回当前对象中 「assignable party roles」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanMemberPartyRoleModel 实例
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.GetAssignablePartyRoles();
```

### GetRelevantSkillForPartyRole
`public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**用途 / Purpose:** 读取并返回当前对象中 「relevant skill for party role」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanMemberPartyRoleModel 实例
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.GetRelevantSkillForPartyRole(role);
```

### IsHeroAssignableForPartyRole
`public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 「hero assignable for party role」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultClanMemberPartyRoleModel 实例
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.IsHeroAssignableForPartyRole(hero, role, party);
```

### DoesHeroHaveEnoughSkillForPartyRole
`public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 返回「hero have enough skill for party role」对当前对象是否成立的布尔结果。

```csharp
// 先通过子系统 API 拿到 DefaultClanMemberPartyRoleModel 实例
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.DoesHeroHaveEnoughSkillForPartyRole(hero, role, party);
```

### IsHeroAssignableForPartyRoleInParty
`public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**用途 / Purpose:** 判断当前对象是否处于 「hero assignable for party role in party」 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultClanMemberPartyRoleModel 实例
DefaultClanMemberPartyRoleModel defaultClanMemberPartyRoleModel = ...;
var result = defaultClanMemberPartyRoleModel.IsHeroAssignableForPartyRoleInParty(role, hero, party);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanMemberPartyRoleModel>(new MyDefaultClanMemberPartyRoleModel());
```

## 参见

- [本区域目录](../)