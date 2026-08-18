---
title: "SettlementPatrolModel"
description: "定义定居点巡逻队（patrol party）生成间隔、能否入驻巡逻、以及巡逻队兵种模板的计算模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementPatrolModel 解析。"
---

# SettlementPatrolModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** `public abstract class SettlementPatrolModel : MBGameModel<SettlementPatrolModel>`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementPatrolModel.cs

## 概述

该模型裁决每个定居点的巡逻队（patrol party）三件事：下一次生成要等多久、这个定居点是否允许拥有巡逻队、以及巡逻队该用哪个兵种模板来组队。它只做纯计算、不持有任何会被写进存档的世界状态，真正创建与维护巡逻队（一个 `MobileParty`）的是 `PatrolPartiesCampaignBehavior`，模型只是它每次决策时查询的规则来源。

## 心智模型

SettlementPatrolModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并持有，运行时统一用 `Campaign.Current.Models.SettlementPatrolModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。行为 `PatrolPartiesCampaignBehavior` 是它的唯一真实调用方——在 `DailyTickSettlement` 里用 `GetPatrolPartySpawnDuration` 给该定居点排定下一次生成时间，用 `CanSettlementHavePatrolParties` 判断该城能否（及是否仍应）拥有巡逻队，用 `GetPartyTemplateForPatrolParty` 在生成或补充时决定巡逻队兵种组成。要改规则就继承并注册一个替换实现（默认实现 `DefaultSettlementPatrolModel` 依赖守备营 `SettlementGuardHouse` 建筑等级与文化模板）；要读结果就走模型，绝不要直接改模型字段或手动伪造巡逻队。

## 何时使用 / 何时不要使用

- **使用**：需要查询“某城多久出一支巡逻队”“某定居点能不能驻巡逻队”“巡逻队用什么兵种模板”时，读取 `Campaign.Current.Models.SettlementPatrolModel` 的返回值；或提供一个新的派生类覆盖三个抽象方法，并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Settlement.PatrolParty` 赋值或手动创建/解散巡逻队来“让某城多出一支巡逻队”——那是 `PatrolPartiesCampaignBehavior` 与对应 `*Action` 的职责，模型本身无状态也不产生任何队伍。要改变世界状态应走行为或 action，而不是篡改模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementPatrolModel>()` 解析并缓存实例。
- [Settlement](../Settlement) / [Town](../Town) —— 调用方上下文；`CanSettlementHavePatrolParties` 依赖 `Settlement.IsTown`、`Settlement.OwnerClan` 与 `Town.Buildings`。

下游与协同系统：

- [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) —— `CampaignBehaviorBase` 的具体子类，是该模型的唯一真实调用方，实际创建、补充与解散巡逻队。
- [BuildingEffectModel](../BuildingEffectModel) —— 默认实现在 `GetPartyTemplateForPatrolParty` 中读取 `PatrolPartyStrength` 建筑效果，以决定取弱/中/强哪一档文化模板。
- [PartyTemplateObject](../PartyTemplateObject) —— `GetPartyTemplateForPatrolParty` 的返回类型，对应文化的 `SettlementPatrolPartyTemplateWeak/Moderate/Strong`。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `PatrolPartiesCampaignBehavior` 是其基类，是调度这些查询的行为宿主。
- [MobileParty](../MobileParty) —— 模型裁决所服务的对象，即被生成、补充与巡逻的巡逻队本身。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementPatrolModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了生成节奏或兵种模板公式，但真正生成、出生点排队与补充巡逻队的是 `PatrolPartiesCampaignBehavior`。只替换模型、却让行为按旧假设处理 `Settlement.PatrolParty`，会出现实际巡逻队与预测规则不一致。

## 成员说明

### 生成节奏

- **`GetPatrolPartySpawnDuration(Settlement settlement, bool naval)`**
  - 用途：返回该定居点下一次生成巡逻队需要等待的时长（`CampaignTime`）。默认实现为 `CampaignTime.Days(10f - (guardHouse.CurrentLevel - 1f) * 2f)`，即守备营 `SettlementGuardHouse` 建筑等级为 1/2/3 时分别是 10/8/6 天；没有守备营时按 `CurrentLevel` 默认取 10 天。`naval` 参数在当前默认实现与被调处均固定为 `false`（海巡分支未启用）。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `PatrolPartiesCampaignBehavior.DailyTickSettlement` 在决定“该城本次生成后，下一次排到什么时候”时调用，把返回值加到 `CampaignTime.Now` 后写进生成队列。

### 入驻资格

- **`CanSettlementHavePatrolParties(Settlement settlement, bool naval)`**
  - 用途：返回该定居点是否允许拥有巡逻队。默认实现仅在 `settlement.OwnerClan != null && !settlement.OwnerClan.IsRebelClan && settlement.IsTown && HasGuardHouse(settlement)` 时返回 `true`——即必须是非叛军家族拥有的城镇、且建有等级大于 0 的守备营。城堡、村庄与叛军据点一律返回 `false`。`naval` 参数在默认实现中未参与判断。
  - 副作用：无，纯计算。
  - 调用时机：由 `PatrolPartiesCampaignBehavior` 在每日结算、守备营等级变化（`OnBuildingLevelChanged`）以及移除/更新现有巡逻队（`UpdateSettlementParties`）时调用，作为“能否生成 / 是否应保留现有巡逻队”的门槛判断。

### 兵种模板

- **`GetPartyTemplateForPatrolParty(Settlement settlement, bool naval)`**
  - 用途：返回用于组建巡逻队兵种名册的 `PartyTemplateObject`。默认实现先取守备营，再按 `Campaign.Current.Models.BuildingEffectModel.GetBuildingEffect(guardHouse, BuildingEffectEnum.PatrolPartyStrength).ResultNumber` 的值（1/2/3）选择文化的 `SettlementPatrolPartyTemplateWeak` / `SettlementPatrolPartyTemplateModerate` / `SettlementPatrolPartyTemplateStrong`；没有守备营时返回 `null`。`naval` 参数在默认实现中未参与判断。
  - 副作用：无，纯计算；真正的名册由调用方经 `PartySizeLimitModel.FindAppropriateInitialRosterForMobileParty` 生成并写入队伍。
  - 调用时机：由 `PatrolPartiesCampaignBehavior` 在生成巡逻队（约第 649 行）与补充巡逻队（`ReplenishParty`）时调用，作为兵种模板来源。

## 示例

查询某定居点的巡逻队生成节奏与入驻资格：

```csharp
Settlement settlement = Settlement.All.GetRandomElement();
CampaignTime nextSpawnIn = Campaign.Current.Models.SettlementPatrolModel
    .GetPatrolPartySpawnDuration(settlement, naval: false);
bool canHostPatrol = Campaign.Current.Models.SettlementPatrolModel
    .CanSettlementHavePatrolParties(settlement, naval: false);
```

取得该城巡逻队应使用的兵种模板（若返回非 `null`，行为会用它组建巡逻队名册）：

```csharp
PartyTemplateObject template = Campaign.Current.Models.SettlementPatrolModel
    .GetPartyTemplateForPatrolParty(settlement, naval: false);
MobileParty patrolParty = settlement.PatrolParty;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Settlement](../Settlement) · [Town](../Town) · [PatrolPartiesCampaignBehavior](../PatrolPartiesCampaignBehavior) · [BuildingEffectModel](../BuildingEffectModel) · [PartyTemplateObject](../PartyTemplateObject) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [MobileParty](../MobileParty)
