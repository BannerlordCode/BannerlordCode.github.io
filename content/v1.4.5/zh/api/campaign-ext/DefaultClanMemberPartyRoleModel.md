---
title: "DefaultClanMemberPartyRoleModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultClanMemberPartyRoleModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanMemberPartyRoleModel : ClanMemberPartyRoleModel`
**Base:** `ClanMemberPartyRoleModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanMemberPartyRoleModel.cs`

## 概述

`DefaultClanMemberPartyRoleModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultClanMemberPartyRoleModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAssignablePartyRoles
`public override IEnumerable<PartyRole> GetAssignablePartyRoles()`

**用途 / Purpose:** 获取 `assignable party roles` 的当前值。

### GetRelevantSkillForPartyRole
`public override SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

**用途 / Purpose:** 获取 `relevant skill for party role` 的当前值。

### IsHeroAssignableForPartyRole
`public override bool IsHeroAssignableForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 处理 `is hero assignable for party role` 相关逻辑。

### DoesHeroHaveEnoughSkillForPartyRole
`public override bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero, PartyRole role, MobileParty party)`

**用途 / Purpose:** 处理 `does hero have enough skill for party role` 相关逻辑。

### IsHeroAssignableForPartyRoleInParty
`public override bool IsHeroAssignableForPartyRoleInParty(PartyRole role, Hero hero, MobileParty party)`

**用途 / Purpose:** 处理 `is hero assignable for party role in party` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultClanMemberPartyRoleModel>(new MyDefaultClanMemberPartyRoleModel());
```

## 参见

- [完整类目录](../catalog)