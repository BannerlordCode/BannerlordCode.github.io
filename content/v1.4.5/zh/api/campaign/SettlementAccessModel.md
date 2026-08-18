---
title: "SettlementAccessModel"
description: "裁决主线英雄能否进入或通过某定居点（城镇/城堡/村庄）及其内部场所（领主厅、地牢、竞技场、酒馆等）与可执行的定居点动作的访问权限模型，由 Campaign 在运行时通过 Campaign.Current.Models.SettlementAccessModel 解析。"
---

# SettlementAccessModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** `public abstract class SettlementAccessModel : MBGameModel<SettlementAccessModel>`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementAccessModel.cs

## 概述

该模型是战役层裁决“主线英雄能否进入或通过某定居点”的纯规则模型：它判定英雄能否进入城镇、城堡、村庄，能否进入要塞内部（领主厅与地牢），能否访问特定场所（中心广场、竞技场、酒馆、领主厅、监狱、码头等），以及能否执行招募、锻造、交易、参加或观看比武大会、驻留、管理城镇、绕竞技场散步等定居点动作。每个判定要么通过 `out AccessDetails` 返回访问级别（无/受限/完全）、进入方式（直接/申请）、受限原因与化解方案（贿赂/伪装），要么返回 `bool` 并给出被禁用的选项与提示文本。它本身不持有任何会被写进存档的世界状态，由定居点行为、遭遇菜单与场所系统在 UI 与逻辑层调用。

## 心智模型

SettlementAccessModel 是 Campaign 层的纯规则裁决扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并持有，运行时统一用 `Campaign.Current.Models.SettlementAccessModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。PlayerTownVisitCampaignBehavior 与 EncounterGameMenuBehavior 在玩家进入定居点菜单时调用 `CanMainHeroEnterSettlement` / `CanMainHeroEnterLordsHall` / `CanMainHeroEnterDungeon` 来开关选项；LocationComplex 在玩家试图进入某个场所时调用 `CanMainHeroAccessLocation`，菜单与 TournamentCampaignBehavior 用 `CanMainHeroDoSettlementAction` 判定动作可用性。要改规则就提供一个派生类覆盖这些抽象方法并通过子模块注册替换默认实现 `DefaultSettlementAccessModel`；要读结果就走模型。真正的世界状态（如英雄是否伪装、犯罪值、村庄状态）由 `Hero` / `CrimeModel` / `Village` 持有，模型只是读取它们做裁决，绝不要给模型加可变字段指望其随存档恢复。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“英雄能否进入某定居点/场所、能否执行某动作”的裁决规则时，读取 `Campaign.Current.Models.SettlementAccessModel` 的返回值，或派生新类覆盖 7 个抽象方法并通过子模块注册替换 `DefaultSettlementAccessModel`。
- **不要使用**：不要把模型当作状态容器来“记住”某次访问结果——模型无状态、不含 `[SaveableField]`，每次调用都即时基于 `Hero` / `CrimeModel` / `Village` 等当前状态重新裁决。要改变“能否进入”的世界前置条件（如洗清犯罪、解除伪装、修复被劫掠村庄）应走对应行为或 `*Action` / `CrimeModel`，而不是改模型字段。也不要在 `Mission` / 战斗层取 `Campaign.Current.Models` 来裁决进入权限——那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<SettlementAccessModel>()` 解析并缓存实例。
- [CrimeModel](../CrimeModel) —— 默认实现读取其犯罪等级（中度/重度/任意）来裁决受限访问与禁用选项。
- [BribeCalculationModel](../BribeCalculationModel) —— 当进入领主厅/地牢被判定为“受限-贿赂”时，默认实现调用其 `GetBribeToEnterLordsHall` / `GetBribeToEnterDungeon` 判定贿赂金额是否为零。

下游与协同系统：

- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 访问裁决所针对的目标类型，模型读取其 `OwnerClan`、`IsFortification`、`IsTown`、`IsCastle`、`IsVillage`、`VillageState` 等状态。
- [PlayerTownVisitCampaignBehavior](../PlayerTownVisitCampaignBehavior) —— 主要调用方，在定居点菜单里调用 `CanMainHeroEnter*`、`CanMainHeroAccessLocation` 与 `CanMainHeroDoSettlementAction`。
- [EncounterGameMenuBehavior](../EncounterGameMenuBehavior) —— 遭遇与请求会面菜单调用 `CanMainHeroEnterSettlement` 与 `IsRequestMeetingOptionAvailable`。
- [TournamentCampaignBehavior](../TournamentCampaignBehavior) —— 调用 `CanMainHeroDoSettlementAction(JoinTournament / WatchTournament)`。
- [LocationComplex](../LocationComplex) —— 玩家进入场所时调用 `CanMainHeroAccessLocation` 决定可否进入对应场所。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.SettlementAccessModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯裁决，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission / 战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：模型只做裁决，真正“进入/执行”的副作用（实际传送、开启菜单、推进 `FaceCharges` 前置）在 `PlayerTownVisitCampaignBehavior` 等调用方里。只替换模型、却让调用方按旧假设处理 `AccessDetails`，会出现选项与预测不一致。
- **忽略 `AccessDetails` 的受限细节**：`CanMainHeroEnter*` 系列通过 `out` 返回 `AccessDetails`，若调用方只检查 `AccessLevel` 而忽略 `AccessLimitationReason` / `LimitedAccessSolution`，会丢失“为何受限、如何化解（贿赂金额、伪装）”的信息，导致 UI 提示与真实裁决错位。

## 成员说明

模型还定义了配套的嵌套枚举与结构，用于描述裁决结果（均已单独建页）：`AccessDetails`（[AccessDetails](../AccessDetails) 结构，含 `AccessLevel` / `AccessMethod` / `AccessLimitationReason` / `LimitedAccessSolution` / `PreliminaryActionObligation` / `PreliminaryActionType`）、`AccessLevel`（[AccessLevel](../AccessLevel)）、`AccessMethod`、`AccessLimitationReason`（[AccessLimitationReason](../AccessLimitationReason)）、`LimitedAccessSolution`、`PreliminaryActionObligation`、`PreliminaryActionType`，以及动作枚举 `SettlementAction`。

### 进入定居点与要塞内部

- **`CanMainHeroEnterSettlement(Settlement settlement, out AccessDetails accessDetails)`**
  - 用途：给定定居点（城镇/城堡/村庄，或本方可立即进驻的空守军要塞），裁决主英雄能否整体进入。依据阵营关系：自己领地或同阵营→完全访问（城镇在犯罪中度/重度时附加“面对指控”可选前置）；中立城镇→完全访问，犯罪中重度时降级为“受限-伪装”；敌对→仅“受限-伪装”；城堡在中立且关系差或无守军时拒绝；村庄要求英雄所在队伍非军团从属且未被劫掠，否则 `NoAccess(VillageIsLooted)`。
  - 副作用：仅写入 `out accessDetails`，不改动任何世界状态。
  - 调用时机：PlayerTownVisitCampaignBehavior 与 EncounterGameMenuBehavior 在进入定居点菜单时调用，用以开关“进入”选项。

- **`CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)`**
  - 用途：裁决能否进入领主厅（要塞内部）。自己领地或同阵营且未消灭→完全访问；中立且伪装→受限-伪装，有犯罪→受限-贿赂，家族等级 < 3→受限-贿赂（`ClanTier`）；敌对→受限-伪装；若 `lordshall` 与 `prison` 当前都无人，则降级为 `NoAccess(LocationEmpty)`。
  - 副作用：仅写入 `out accessDetails`。
  - 调用时机：由 `CanMainHeroAccessLocation("lordshall")` 委托；也在进入要塞菜单以及 `DefaultBribeCalculationModel` / `DefaultHeroAgentLocationModel` 中调用。

- **`CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)`**
  - 用途：裁决能否进入地牢/监狱，逻辑与领主厅共享内部实现，同样会在两个要塞场所都空无一人时降级为 `NoAccess(LocationEmpty)`。
  - 副作用：仅写入 `out accessDetails`。
  - 调用时机：由 `CanMainHeroAccessLocation("prison")` 委托；PlayerTownVisitCampaignBehavior、GuardsCampaignBehavior、DefaultBribeCalculationModel 中调用。

### 访问具体场所

- **`CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`**
  - 用途：按场所字符串 id（`"center"` / `"arena"` / `"tavern"` / `"lordshall"` / `"prison"` / `"house_1..3"` / `"port"` 等）裁决能否进入该场所，返回 `bool` 表示允许，并通过 `out` 给出该选项是否禁用与禁用提示文本。例如 `"port"` 永远禁用（“门被锁”）；`"lordshall"` / `"prison"` 委托给对应的 `CanMainHeroEnter*`，并按贿赂金额是否为零进一步裁决；`"house_*"` 仅当被预留且有物品/人物时允许。
  - 副作用：仅写入两个 `out` 参数，不改动世界状态。
  - 调用时机：LocationComplex 在玩家试图进入某场所时调用；PlayerTownVisitCampaignBehavior 在菜单相关选项时调用。

### 执行定居点动作

- **`CanMainHeroDoSettlementAction(Settlement settlement, SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`**
  - 用途：按 `SettlementAction` 枚举（`RecruitTroops` / `Craft` / `JoinTournament` / `WatchTournament` / `Trade` / `WaitInSettlement` / `ManageTown` / `WalkAroundTheArena`）裁决能否执行该动作，返回 `bool` 并给出禁用选项与提示文本。例如征兵受村庄敌对/被劫掠限制；锻造受 `IsCraftingEnabled` 限制；参加比武受是否有赛事、是否伪装、是否受伤限制；交易在伪装时（除非有 `Roguery.SmugglerConnections` 专长）受限；管理城镇仅限该镇归属领主为玩家。
  - 副作用：仅写入两个 `out` 参数。
  - 调用时机：PlayerTownVisitCampaignBehavior 在各定居点动作菜单项上调用；TournamentCampaignBehavior 对 `JoinTournament` / `WatchTournament` 调用；菜单构造通过 `MenuHelper.SetOptionProperties` 间接使用该结果。

- **`IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`**
  - 用途：裁决“请求会面”菜单选项是否可用。自己领地→`false`；同阵营但 `AccessLevel == NoAccess` 时看镇上是否有人可会面；中立城镇且犯罪轻微→`false`；玩家家族等级 < 3 则禁用并提示等级不足；否则按 `TownHelpers.IsThereAnyoneToMeetInTown` 决定，无人则禁用并提示。
  - 副作用：仅写入两个 `out` 参数。
  - 调用时机：EncounterGameMenuBehavior 在请求会面菜单项上调用；DefaultEncounterModel 在判断是否可请求会面时调用。

## 示例

裁决主英雄能否进入当前定居点，并据访问级别分支：

```csharp
Settlement settlement = Settlement.CurrentSettlement;
Campaign.Current.Models.SettlementAccessModel
    .CanMainHeroEnterSettlement(settlement, out AccessDetails accessDetails);
if (accessDetails.AccessLevel == AccessLevel.FullAccess)
{
    // 直接获准进入
}
else if (accessDetails.AccessLevel == AccessLevel.LimitedAccess
    && accessDetails.LimitedAccessSolution == LimitedAccessSolution.Bribe)
{
    // 需要贿赂才能进入
}
```

判定能否在当前定居点交易，并在被禁用时显示提示文本：

```csharp
bool canTrade = Campaign.Current.Models.SettlementAccessModel
    .CanMainHeroDoSettlementAction(
        Settlement.CurrentSettlement,
        SettlementAction.Trade,
        out bool disableOption,
        out TextObject disabledText);
if (!canTrade && disableOption)
{
    InformationManager.DisplayMessage(disabledText);
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [CrimeModel](../CrimeModel) · [BribeCalculationModel](../BribeCalculationModel) · [LocationComplex](../LocationComplex) · [PlayerTownVisitCampaignBehavior](../PlayerTownVisitCampaignBehavior) · [EncounterGameMenuBehavior](../EncounterGameMenuBehavior) · [TournamentCampaignBehavior](../TournamentCampaignBehavior) · [SettlementMilitiaModel](../SettlementMilitiaModel) · [SettlementSecurityModel](../SettlementSecurityModel)
