<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MobileParty`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [⭐ SDK 总览（规范版）](../../../../v1.3.15/zh/architecture/sdk-overview)
- [🔀 跨版本对比 /versions/MobileParty](/versions/MobileParty)
<!-- END BREADCRUMB -->
# MobileParty (v1.3.0)

**命名空间**: TaleWorlds.CampaignSystem.Party
**模块**: TaleWorlds.CampaignSystem
**版本**: v1.3.0
**类型**: 密封类（`public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`）

> v1.3.0 版本的 `MobileParty` 文档。完整 API 参考（含属性、方法、用例）请见规范版：
> [v1.3.15 `MobileParty`](../../../../v1.3.15/zh/api/campaign/MobileParty)
> 如需查看该类在 1.3.0 / 1.3.15 / 1.4.5 三个版本间的 API 变化，见 [跨版本对比](/versions/MobileParty)

## 概述

`MobileParty` 是战役系统中可移动的部队，代表在地图上移动的军队、商队、村民队或劫匪队伍。每个 `MobileParty` 都有一个 `PartyBase` 用于存储共享数据，以及一个 `MobilePartyAi` 用于控制 AI 行为。在 v1.3.0 中该类为 `public sealed class`，继承自 `CampaignObjectBase` 并实现 `ILocatable<MobileParty>` 等多个接口；通过静态属性 `MobileParty.MainParty` 访问玩家主部队。

## v1.3.0 要点

- 密封类，位于 `TaleWorlds.CampaignSystem.Party` 命名空间，源文件 `TaleWorlds.CampaignSystem/Party/MobileParty.cs`（约 5100 行）。
- 静态访问（均为 v1.3.0 实有）：`public static MobileParty MainParty`、`public static MBReadOnlyList<MobileParty> All`，以及分类集合 `AllCaravanParties`、`AllPatrolParties`、`AllBanditParties`、`AllLordParties`、`AllGarrisonParties`、`AllMilitiaParties`、`AllVillagerParties`、`AllCustomParties`。
- 关键属性（均为 v1.3.0 实有）：`Party`（`PartyBase`）、`Ai`（`MobilePartyAi`）、`IsActive`（`bool`）、`Position`（`CampaignVec2`）、`Name`（`TextObject`）、`MemberRoster`（`TroopRoster`）、`PrisonRoster`（`TroopRoster`）、`ItemRoster`（`ItemRoster`）、`CurrentSettlement`、`HomeSettlement`、`Army`。
- 关键方法（均为 v1.3.0 实有）：`public void SetMoveModeHold()`、`public void SetMoveEngageParty(MobileParty, NavigationType)`、`public void SetMoveGoAroundParty(MobileParty, NavigationType)`、`public void SetMoveGoToSettlement(Settlement, NavigationType, bool)`、`public void SetMoveGoToPoint(CampaignVec2, NavigationType)`、`public void SetTargetSettlement(Settlement, bool)`。
- 注意：v1.3.0 没有 v1.3.15 文档中列出的 `SetMoveGatherMode` / `SetMoveTargetParty` / `SetMoveTargetSettlement` 方法；移动控制通过上述 `SetMove*` 系列方法实现。
- 相比 v1.3.15：AI 系统更简单，缺少部分后续新增的部队功能与高级导航系统，人员配置系统更简化。

## 参见

- [v1.3.15 完整文档](../../../../v1.3.15/zh/api/campaign/MobileParty)
- [跨版本 API 对比](/versions/MobileParty)
- [本领域 API 索引](./)
- [v1.3.0 API 总览](../)
