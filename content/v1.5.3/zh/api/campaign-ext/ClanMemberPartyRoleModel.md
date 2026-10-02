---
title: "ClanMemberPartyRoleModel"
description: "ClanMemberPartyRoleModel 的自动生成类参考。"
---
# ClanMemberPartyRoleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanMemberPartyRoleModel : MBGameModel<ClanMemberPartyRoleModel> `
**Base:** MBGameModel<ClanMemberPartyRoleModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs

## 概述

`ClanMemberPartyRoleModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanMemberPartyRoleModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetAssignablePartyRoles
`public abstract IEnumerable<PartyRole> GetAssignablePartyRoles()`

### GetRelevantSkillForPartyRole
`public abstract SkillObject GetRelevantSkillForPartyRole(PartyRole role)`

### IsHeroAssignableForPartyRole
`public abstract bool IsHeroAssignableForPartyRole(Hero hero,PartyRole role,MobileParty party)`

### DoesHeroHaveEnoughSkillForPartyRole
`public abstract bool DoesHeroHaveEnoughSkillForPartyRole(Hero hero,PartyRole role,MobileParty party)`

### IsHeroAssignableForPartyRoleInParty
`public abstract bool IsHeroAssignableForPartyRoleInParty(PartyRole role,Hero hero,MobileParty party)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
