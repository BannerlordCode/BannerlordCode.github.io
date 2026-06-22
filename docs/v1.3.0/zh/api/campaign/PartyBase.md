<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PartyBase`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyBase (v1.3.0)

**命名空间**: TaleWorlds.CampaignSystem.Party
**模块**: TaleWorlds.CampaignSystem
**版本**: v1.3.0
**类型**: 密封类（`public sealed class PartyBase : IBattleCombatant, IRandomOwner, IInteractablePoint`）

> v1.3.0 版本的 `PartyBase` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `PartyBase`](../../../../v1.3.15/zh/api/campaign/PartyBase)

## 概述

`PartyBase` 是战役系统中部队（Party）的基础类，用于管理部队的通用数据，如位置、成员、囚犯、物品和食物等。`PartyBase` 既可以代表移动部队（`MobileParty`），也可以代表定居点（`Settlement`）。在 v1.3.0 中该类为 `public sealed class`，实现 `IBattleCombatant`、`IRandomOwner`、`IInteractablePoint` 三个接口；通过静态属性 `PartyBase.MainParty` 访问玩家主部队的 `PartyBase`。

## v1.3.0 要点

- 密封类，位于 `TaleWorlds.CampaignSystem.Party` 命名空间，源文件 `TaleWorlds.CampaignSystem/Party/PartyBase.cs`。
- 静态访问：`public static PartyBase MainParty`。
- 关键属性（均为 v1.3.0 实有）：`Settlement`（`Settlement`）、`MobileParty`（`MobileParty`）、`IsSettlement`（`bool`）、`IsMobile`（`bool`）、`IsActive`（`bool`）、`MemberRoster`（`TroopRoster`）、`PrisonRoster`（`TroopRoster`）、`ItemRoster`（`ItemRoster`）、`Position`（`CampaignVec2`）、`Name`（`TextObject`）。
- 成员计数属性（均为 v1.3.0 实有）：`NumberOfHealthyMembers`、`NumberOfRegularMembers`、`NumberOfWoundedTotalMembers`、`NumberOfAllMembers`、`NumberOfPrisoners`、`NumberOfMounts`、`NumberOfPackAnimals`、`NumberOfMenWithHorse`、`NumberOfMenWithoutHorse`。
- 关键方法（均为 v1.3.0 实有）：`public void OnVisibilityChanged(bool)`、`public void OnConsumedFood()`、`public int AddMember(CharacterObject, int, int)`、`public int AddPrisoner(CharacterObject, int)`、`public void AddMembers(TroopRoster)`、`public void AddPrisoners(TroopRoster)`、`public void SetCustomName(TextObject)`。
- 相比 v1.3.15：结构更简单，`ComponentInterface` 集成更少，缺少部分后续新增的部队相关功能；保存系统实现有所不同（`TaleWorlds.SaveSystem` 已存在但实现细节差异）。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/campaign/PartyBase)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
