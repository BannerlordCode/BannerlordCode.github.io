---
title: BeHostileAction
description: BeHostileAction - 敌对行动处理
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BeHostileAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BeHostileAction
**命名空间:** TaleWorlds.CampaignSystem.Actions
**模块:** TaleWorlds.CampaignSystem
**类型:** static class

## 概述
`BeHostileAction

` 是处理敌对行动的静态工具类，在攻击方对防御方实施敌对行为时计算并应用关系变化、犯罪评级、影响力损失和特?XP 变化。不同严重程度的行动通过 

`value

` 参数区分：轻微胁?1，重大胁?2，遭?6?
`ApplyInternal

` 根据防御方类型（村庄/村民队伍/商队）和是否处于战争状态应用不同的关系惩罚。`ApplyGeneralConsequencesOnPeace

` 处理非战争状态下的通用后果：玩家触发特质变化和犯罪评级变化，王国领袖损失影响力，雇佣兵可能被解雇?
## 心智模型
?

`BeHostileAction

` 看作"敌对行为后果计算?。：攻击方对防御方实施敌对行??根据防御方类型（村庄/村民/商队）和战争状态计算关系惩??通用后果（特?犯罪/影响?解雇?
## 主要方法
### ApplyHostileAction
`

`

`csharp
public static void ApplyHostileAction(PartyBase attackerParty, PartyBase defenderParty, float value)
`

`

`
应用自定义严重程度的敌对行动。`value

` 越大惩罚越重。空队伍?value=0 时断言失败?
### ApplyMinorCoercionHostileAction
`

`

`csharp
public static void ApplyMinorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
`

`

`
轻微胁迫敌对行动（value=1）。用于轻微的敌对交互?
### ApplyMajorCoercionHostileAction
`

`

`csharp
public static void ApplyMajorCoercionHostileAction(PartyBase attackerParty, PartyBase defenderParty)
`

`

`
重大胁迫敌对行动（value=2）。惩罚比轻微胁迫更重?
### ApplyEncounterHostileAction
`

`

`csharp
public static void ApplyEncounterHostileAction(PartyBase attackerParty, PartyBase defenderParty)
`

`

`
遭遇敌对行动（value=6）。最严重的敌对行为。若玩家攻击非战争阵营，降低关系 10 点并宣战。受 

`EncounterModel.IsEncounterExemptFromHostileActions

` 豁免检查?
### ApplyInternal (private)
`

`

`csharp
private static void ApplyInternal(PartyBase attackerParty, PartyBase defenderParty, float value)
`

`

`
核心逻辑：根据防御方类型应用关系变化?- **村庄（非战争?*: 关系变化 -4×value（领主）?4×value（名人），加通用后果
- **村民队伍（战争）**: 关系变化 -1×value（名人）
- **村民队伍（非战争?*: 关系变化 -1×value（领主）?5×value（名人），加通用后果
- **商队（战争）**: 关系变化 -2×value（所有者）
- **商队（非战争?*: 关系变化 -10×value（所有者），加通用后果

### ApplyGeneralConsequencesOnPeace (private)
`

`

`csharp
private static void ApplyGeneralConsequencesOnPeace(PartyBase attackerParty, PartyBase defenderParty, float value)
`

`

`
非战争状态下的通用后果?- **玩家**: 特质变化 -25×value，犯罪评?+10×value
- **王国领袖**: 影响?-50×value
- **雇佣?*: 关系变化 -2×value（阵营领袖），value=6 时退出王?- **其他**: 关系变化 -2×value（防御方领袖），影响?-50×value

## 使用示例
### 示例: 触发遭遇敌对行动
**场景**: 玩家攻击非战争阵营的商队
`

`

`csharp
BeHostileAction.ApplyEncounterHostileAction(attackerParty, defenderParty);
// 若玩家与非战争阵营交互，会自动宣战并降低关系
`

`

`
**要点**: 

`ApplyEncounterHostileAction

` 是最严重的敌对行动，会触发宣战?
## 参见
- [完整类目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
