---
title: "MobilePartyAIModel"
description: "裁决移动队伍（MobileParty）在地图上的主动性行为：何时该攻击、何时该躲避、巡逻半径与守城搜索范围如何计算，以及每支队伍周期性重新评估 AI 的间隔，由 Campaign 在运行时通过 Campaign.Current.Models.MobilePartyAIModel 解析，被 MobilePartyAi 与各类 AI 行为（AiMilitaryBehavior、AiVisitSettlementBehavior 等）调用。"
---

# MobilePartyAIModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MobilePartyAIModel.cs

## 概述

该模型集中裁决“队伍在地图上该做什么主动决策”：给定一支 `MobileParty` 与附近的敌对/友方目标，决定它是否应考虑攻击、是否应躲避、巡逻半径与守城时搜索敌人的范围是多少，以及 AI 多长时间重新评估一次。它只做纯判定与距离计算，真正的移动指令由 `MobilePartyAi` 与各 AI 行为写入 `MobileParty` 的 `Ai`/`DefaultBehavior`。

## 心智模型

MobilePartyAIModel 是一个纯裁决的 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultMobilePartyAIModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.MobilePartyAIModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。周期性地，`MobilePartyAi.Tick` 以 `AiCheckInterval` 为节奏唤醒，先调用 `ShouldPartyCheckInitiativeBehavior` 判断该队伍是否需要思考主动行为，若是则调用 `GetBestInitiativeBehavior` 计算“攻击/逃跑”评分并写回 `Ai`；而 `AiMilitaryBehavior`、`AiVisitSettlementBehavior` 等则读取 `NeededFoodsInDaysThresholdForRaid`/`NeededFoodsInDaysThresholdForSiege` 决定队伍是因缺粮去突袭还是围城，`PoliticalStagnationAndBorderIncidentCampaignBehavior` 用 `GetSettlementNearbyThreatAndAllyCheckRadius` 评估边境威胁。它属于 Campaign 层，仅在战役模拟中存在；要改队伍 AI 规则就继承并注册替换实现，要改世界状态（移动目标、行为）必须走 `MobilePartyAi`、各 `*Behavior` 或对应的 `*Action`，绝不要把模型当成写世界的入口或直接改 `MobileParty.Ai`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“队伍何时攻击/躲避、巡逻与守城搜索范围多大、AI 重算频率”这些规则时，读取 `Campaign.Current.Models.MobilePartyAIModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“命令”一支队伍移动——它只判定与计算距离，真正改变 `MobileParty.DefaultBehavior`/`ShortTermBehavior`、目标点、速度的是 `MobilePartyAi` 与各 AI 行为。不要在模型里缓存可变的世界状态（它应是无状态纯函数）；也不要在 `Mission`/战场逻辑里取 `Campaign.Current.Models`，那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<MobilePartyAIModel>()` 解析并缓存实例。
- [EncounterModel](../EncounterModel) —— `DefaultMobilePartyAIModel` 的 `FleeToNearbyPartyRadius` 与 `ShouldConsiderAttacking` 读取 `EncounterModel.GetEncounterJoiningRadius`。
- [MobileParty](../MobileParty) —— 主要被判定对象，几乎所有方法都以 `MobileParty` 为参数。
- [Settlement](../Settlement) —— `GetSettlementNearbyThreatAndAllyCheckRadius`/`NeededFoodsInDaysThresholdFor*` 的上下文来源。

下游与协同系统（调用方）：

- [MobilePartyAi](../MobilePartyAi) —— 最核心调用者：`Tick` 中读取 `AiCheckInterval` 决定重算节奏，调用 `ShouldPartyCheckInitiativeBehavior` 与 `GetBestInitiativeBehavior` 决定攻击/逃跑，并大量使用 `FleeToNearbyPartyRadius`、`FleeToNearbySettlementRadius`、`GetPatrolRadius`、`SettlementDefendingWaitingPositionRadius`、`SettlementDefendingNearbyPartyCheckRadius` 计算搜索范围。
- [AiMilitaryBehavior](../AiMilitaryBehavior) —— 决定军队是因缺粮去突袭还是围城时，读取 `NeededFoodsInDaysThresholdForRaid` / `NeededFoodsInDaysThresholdForSiege`。
- [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) —— 评估是否应前往围城/补给时读取 `NeededFoodsInDaysThresholdForSiege`。
- [PoliticalStagnationAndBorderIncidentCampaignBehavior](../PoliticalStagnationAndBorderIncidentCampaignBehavior) —— 评估边境定居点附近威胁与盟友时调用 `GetSettlementNearbyThreatAndAllyCheckRadius`。
- [DefaultEncounterModel](../DefaultEncounterModel) —— 计算遭遇位置时复用 `SettlementDefendingWaitingPositionRadius`。
- [PartyBase](../PartyBase) —— `ShouldConsiderAttacking` / `ShouldConsiderAvoiding` 内部通过 `PartyBase.MapFaction` 判断敌我。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述各 AI 行为的基类，是实际驱动调用方。
- [AiBehavior](../AiBehavior) —— `GetBestInitiativeBehavior` 通过 `out` 参数返回的主动行为枚举（`EngageParty`/`FleeToPoint`/`FleeToGate` 等）。
- [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel) —— 本模型的内置默认实现，解释每个抽象成员的具体口径。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.MobilePartyAIModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放松了 `ShouldConsiderAttacking` 或放大了 `GetPatrolRadius`，但真正把决策落地到 `MobileParty.Ai`/`DefaultBehavior` 的是 `MobilePartyAi` 与各类 AI 行为。只替换模型、却让行为按旧假设处理移动目标，会出现“判定通过却行为不推进”或巡逻/守城范围与预测不一致。
- **`GetBestInitiativeBehavior` 的副作用经由 MobilePartyAi 放大**：它是一个 `void`，通过 `out` 参数把最佳主动行为、目标队伍、评分与威胁方向写回给调用方；`MobilePartyAi` 据这些 `out` 值设置 `Ai` 的短期/默认行为。错误地覆盖评分逻辑会悄然改变整支队伍的攻击倾向与逃跑方向，引发意料之外的交战与溃逃。
- **`ShouldConsiderAvoiding` 与 `ShouldConsiderAttacking` 相互制衡**：默认实现里攻击判定要求对方在海上/陆上状态匹配或可攻击当前士气，躲避判定对驻军/民兵有特殊放行。覆盖其中一方而不同步另一方，会让队伍既“该躲又不躲”或“该打却不敢打”。

## 成员说明

### 重算节奏与搜索半径

- **`AiCheckInterval`**（属性，返回 `float`）
  - 用途：AI 周期性重新评估的间隔（秒）。默认实现 `DefaultMobilePartyAIModel` 返回 `0.25f`；`MobilePartyAi.Tick` 用它与随机抖动决定本 tick 是否重新思考主动行为。
  - 副作用：无，纯数值。
  - 调用时机：每支队伍每 tick 由 `MobilePartyAi` 读取，作为重算节奏基准。

- **`FleeToNearbyPartyRadius`**（属性，返回 `float`）
  - 用途：队伍逃跑时搜索“附近友方队伍”来靠拢的半径。默认实现 = `EncounterModel.GetEncounterJoiningRadius * EstimatedMaximumLordPartySpeedExceptPlayer * AiCheckInterval * 1.5f`。
  - 副作用：无。
  - 调用时机：`MobilePartyAi` 在计算“逃向友方队伍”目标点时读取。

- **`FleeToNearbySettlementRadius`**（属性，返回 `float`）
  - 用途：逃跑时搜索“附近定居点”的半径，默认 = `FleeToNearbyPartyRadius * 2f`。
  - 副作用：无。
  - 调用时机：`MobilePartyAi` 在寻找可逃入的定居点时读取。

- **`SettlementDefendingWaitingPositionRadius`**（属性，返回 `float`）
  - 用途：守城方在定居点外等待的环形半径，默认 `3f`（地图单位）。`DefaultEncounterModel` 也复用它（`* 1.25f`）计算遭遇位置。
  - 副作用：无。
  - 调用时机：`MobilePartyAi` 设置守城等待点、`DefaultEncounterModel` 计算遭遇位置时读取。

- **`SettlementDefendingNearbyPartyCheckRadius`**（属性，返回 `float`）
  - 用途：守城时搜索附近敌方队伍的半径，默认 = `SettlementDefendingWaitingPositionRadius * 3f`。
  - 副作用：无。
  - 调用时机：`MobilePartyAi` 在守城行为中定位周边敌人时读取。

- **`GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`**（返回 `float`）
  - 用途：返回该队伍围绕 `patrolPoint` 巡逻的半径。默认实现依据 `mobileParty.TargetSettlement` 的类型取 `HideoutPatrolDistanceAsDays` / `FortificationPatrolDistanceAsDays` / `FortificationPortPatrolDistanceAsDays` / `VillagePatrolDistanceAsDays` 乘以速度与每日小时数；若队伍本身是巡逻队（`IsPatrolParty`）则再乘 `0.5f`。
  - 副作用：无，纯计算。
  - 调用时机：`MobilePartyAi` 在巡逻行为（`PatrolAroundPoint`）中确定巡逻圈大小时调用。

- **`GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)`**（返回 `float`）
  - 用途：返回评估某定居点附近威胁与盟友的搜索半径。默认实现取该定居点的平均队伍速度（港口取海速，否则取陆速）`* 1.3f` 再交给内部巡逻半径公式。
  - 副作用：无。
  - 调用时机：仅由 `PoliticalStagnationAndBorderIncidentCampaignBehavior` 评估边境威胁时调用。

### 巡逻距离常量（按定居点类型）

- **`HideoutPatrolDistanceAsDays`**（属性，返回 `float`）
  - 用途：巢穴（hideout）巡逻距离（以“天”计），默认 `0.5f`；被 `GetPatrolRadius` 内部换算为地图距离。
  - 副作用：无。

- **`FortificationPatrolDistanceAsDays`**（属性，返回 `float`）
  - 用途：要塞（城堡/城镇）巡逻距离（天），默认 `0.5f`。
  - 副作用：无。

- **`FortificationPortPatrolDistanceAsDays`**（属性，返回 `float`）
  - 用途：要塞港口巡逻距离（天），默认 `0f`（即港口不额外外扩巡逻圈）。
  - 副作用：无。

- **`VillagePatrolDistanceAsDays`**（属性，返回 `float`）
  - 用途：村庄巡逻距离（天），默认 `0.25f`。
  - 副作用：无。

### 粮草阈值（驱动突袭/围城）

- **`NeededFoodsInDaysThresholdForRaid`**（属性，返回 `float`）
  - 用途：队伍“缺粮到该天数阈值”时倾向去突袭（raid）以补给，默认 `8f`（天）。
  - 副作用：无。
  - 调用时机：`AiMilitaryBehavior` 决定军队是否转为突袭行为时读取。

- **`NeededFoodsInDaysThresholdForSiege`**（属性，返回 `float`）
  - 用途：缺粮到该阈值时倾向去围城（siege），默认 `12f`（天）。
  - 副作用：无。
  - 调用时机：`AiMilitaryBehavior` 与 `AiVisitSettlementBehavior` 决定是否围城/补给时读取。

### 攻击 / 躲避裁决

- **`ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`**（返回 `bool`）
  - 用途：判断 `party` 是否应考虑攻击 `targetParty`。默认实现要求目标不是应被忽略的主角队伍、已过 `DoNotAttackMainPartyUntil` 冷却、双方海上/陆上状态匹配（或港口特殊情形），且 `MobilePartyHelper.CanPartyAttackWithCurrentMorale` 为 `true`。
  - 副作用：无，纯判定；会读取 `EncounterModel` 与目标士气。
  - 调用时机：`MobilePartyAi` 在主动行为评分（`GetBestInitiativeBehavior` 内部）以及 `DefaultMobilePartyAIModel.CalculateInitiativeScoresForEnemy` 计算攻击分时调用。

- **`ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`**（返回 `bool`）
  - 用途：判断 `party` 是否应考虑躲避 `targetParty`。默认实现：被封锁中的港口围城目标、或对方无法以当前士气攻击（且非主角）时不躲；对方攻击性过低或为木筏态时仅当其为驻军才躲；否则返回 `true`。
  - 副作用：无，纯判定。
  - 调用时机：`DefaultMobilePartyAIModel.CalculateInitiativeScoresForEnemy` 计算躲避分时调用；与 `ShouldConsiderAttacking` 共同决定主动行为评分。

### 主动行为计算

- **`ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`**（返回 `bool`）
  - 用途：判断该队伍本 tick 是否应计算主动（攻击/逃跑）行为。默认实现排除驻军/民兵/匪帮/无领袖的领主队，要求非主角且未正在围城，且若已加入军团则仅军团领袖的直属队才评估。
  - 副作用：无。
  - 调用时机：`MobilePartyAi.Tick` 在重算节奏到达时首先调用它做“是否值得思考”的守卫。

- **`GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`**（返回 `void`）
  - 用途：围绕 `mobileParty` 搜索周边敌对队伍，逐一对每个敌人计算攻击分与躲避分（`CalculateInitiativeScoresForEnemy`），选出最佳主动行为写入 `out` 参数：`bestInitiativeBehavior`（`EngageParty`/`FleeToPoint`/`FleeToGate`/`None`）、`bestInitiativeTargetParty`、评分，以及综合多个威胁方向的 `averageEnemyVec`（用于逃跑朝向）。
  - 副作用：通过 `out` 参数把决策结果交给调用方；`MobilePartyAi` 据此设置 `Ai` 的短期/默认行为与目标点。方法内部会临时清空并复用 `MobilePartyAi.DangerousPartiesAndTheirVecs`。
  - 调用时机：仅由 `MobilePartyAi` 在 `ShouldPartyCheckInitiativeBehavior` 为 `true` 时调用。

## 示例

在评估一支队伍是否应攻击附近敌人时，先用模型做判定，再读取巡逻半径：

```csharp
MobileParty party = MobileParty.MainParty;
MobileParty enemy = nearbyEnemyParty; // 已通过定位器取到的一个敌对队伍
if (party != null && enemy != null &&
    Campaign.Current.Models.MobilePartyAIModel.ShouldConsiderAttacking(party, enemy))
{
    // 模型只负责“该不该”，真正移动指令由 MobilePartyAi 写入
    float patrolRadius = Campaign.Current.Models.MobilePartyAIModel
        .GetPatrolRadius(party, party.Position);
}
```

让 `MobilePartyAi` 的决策核心直接算一次最佳主动行为，并用 `out` 参数接收结果：

```csharp
AiBehavior bestBehavior;
MobileParty targetParty;
float score;
Vec2 averageEnemyVec;
Campaign.Current.Models.MobilePartyAIModel.GetBestInitiativeBehavior(
    someParty,
    out bestBehavior,
    out targetParty,
    out score,
    out averageEnemyVec);
// bestBehavior 为 AiBehavior.EngageParty 表示应攻击 targetParty；
// 为 AiBehavior.FleeToPoint / FleeToGate 表示应逃跑，averageEnemyVec 指向威胁方向
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [MobileParty](../MobileParty) · [MobilePartyAi](../MobilePartyAi) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiVisitSettlementBehavior](../AiVisitSettlementBehavior) · [PoliticalStagnationAndBorderIncidentCampaignBehavior](../PoliticalStagnationAndBorderIncidentCampaignBehavior) · [EncounterModel](../EncounterModel) · [DefaultEncounterModel](../DefaultEncounterModel) · [Settlement](../Settlement) · [PartyBase](../PartyBase) · [AiBehavior](../AiBehavior) · [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)
