---
title: DefaultMobilePartyAIModel
description: 战役层移动部队 AI 的默认模型实现，定义 AI 决策 tick 间隔、巡逻半径、逃跑搜索半径、攻击/避战门槛与主动行为评分，是 mod 调整 AI 性格的核心扩展点。
---

## 概述

`DefaultMobilePartyAIModel` 是 `MobilePartyAIModel` 接口的默认实现，为战役中所有移动部队（玩家部队、NPC 部队、驻军、匪徒等）提供 AI 决策所需的全部调参常量与判定逻辑。它决定 AI 多久做一次决策（`AiCheckInterval`）、巡逻时围绕目标转多大圈（`GetPatrolRadius`）、逃跑时搜索友军/定居点的半径（`FleeToNearbyPartyRadius` / `FleeToNearbySettlementRadius`）、是否考虑攻击或避战（`ShouldConsiderAttacking` / `ShouldConsiderAvoiding`），以及在多个可选行为中挑选最优主动行为（`GetBestInitiativeBehavior`）。

## 心智模型

**谁创建/持有/调用：** 游戏启动时 `SandBoxManager` 通过 `gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel())` 将其注册到 `Campaign.Current.Models.MobilePartyAIModel`。运行时几乎全部调用来自 `MobilePartyAi`（每个移动部队的 AI 组件），少量来自 `AiMilitaryBehavior` 等战役行为。

**它在 AI 管线中的位置：** `MobilePartyAi` 每帧先读 `AiCheckInterval` 决定本次是否该做决策 tick；若该 tick 触发，先问 `ShouldPartyCheckInitiativeBehavior` 是否值得扫描周围敌人，再调 `GetBestInitiativeBehavior` 从候选行为中挑分最高的一个执行。巡逻、逃跑、定居点防御等子行为则分别读取对应的半径属性。

**常见误用：**
- 把它当普通 new 出来的工具类直接调用——它必须注册到 `Campaign.Current.Models` 才会被 AI 管线读到；mod 替换用 `Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyModel())`。
- 只覆盖 `AiCheckInterval` 就期望 AI 行为大变——tick 频率只影响"多久想一次"，行为选择由 `GetBestInitiativeBehavior` 的评分逻辑决定。
- 在 `GetBestInitiativeBehavior` 里只比战力而忽略 `CalculateStanceScore` 的立场分——默认实现会综合战力比与立场（友好/中立/敌对）打分，只改战力会导致中立派系行为异常。

## 怎么用

**拿到实例：** 通过 `Campaign.Current.Models.MobilePartyAIModel` 访问（运行时始终指向注册的那个实例）。

**源树路径：** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`（类声明在 :15）。

**注册入口：** `TaleWorlds.CampaignSystem/SandBoxManager.cs:347` — `gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel());`

**典型用法：**
- 调参型 mod：继承 `MobilePartyAIModel`，只 override 几个常量属性（如把 `AiCheckInterval` 从 0.25 改成 0.1 让 AI 更激进），再 `ReplaceModel` 注册。
- 决策型 mod：override `ShouldConsiderAttacking` / `ShouldConsiderAvoiding` / `GetBestInitiativeBehavior`，改变 AI 的进攻性与行为选择。
- 读当前值做显示：`Campaign.Current.Models.MobilePartyAIModel.AiCheckInterval` 等属性都是只读 `get`，可直接读。

**坑：**
- `FleeToNearbyPartyRadius` 不是常量——它动态依赖 `EncounterModel.GetEncounterJoiningRadius`、`EstimatedMaximumLordPartySpeedExceptPlayer` 和 `AiCheckInterval`，改 `AiCheckInterval` 会连带影响逃跑搜索范围。
- `GetPatrolRadius` 对巡逻队（patrol party）返回值减半，自定义时别忘了这个分支。

## 关键成员

**属性（调参常量）：**

- `AiCheckInterval`（:20）— AI 决策 tick 间隔（战役小时）。返回 0.25f，即每 0.25 战役小时做一次决策；值越小 AI 反应越快。
- `FleeToNearbyPartyRadius`（:28）— 逃跑时搜索友军部队的半径。动态计算：`EncounterModel.GetEncounterJoiningRadius × EstimatedMaximumLordPartySpeedExceptPlayer × AiCheckInterval × 1.5f`。
- `FleeToNearbySettlementRadius`（:36）— 逃跑时搜索定居点的半径。返回 `FleeToNearbyPartyRadius × 2f`。
- `HideoutPatrolDistanceAsDays`（:44）— 围绕藏身处目标的巡逻半径（以旅行天数计）。返回 0.5f。
- `FortificationPatrolDistanceAsDays`（:52）— 围绕防御工事目标的巡逻半径（以旅行天数计）。返回 0.3f。
- `VillagePatrolDistanceAsDays`（:60）— 围绕村庄目标的巡逻半径（以旅行天数计）。返回 0.25f。
- `SettlementDefendingNearbyPartyCheckRadius`（:86）— 定居点防御时搜索附近部队的半径。返回 `SettlementDefendingWaitingPositionRadius × 3f`。
- `SettlementDefendingWaitingPositionRadius`（:94）— 定居点防御定位的基础半径。返回 3f。
- `NeededFoodsInDaysThresholdForMilitaryAction`（:102）— 部队执行军事行动前必须拥有的最少食物天数。返回 12f。

**方法（决策逻辑）：**

- `ShouldConsiderAttacking(party, targetParty)`（:68）— 攻击考虑门槛：检查士气、主队忽略标记、海/陆兼容性、港口能力等，返回是否允许把该目标列入攻击候选。
- `ShouldConsiderAvoiding(party, targetParty)`（:110）— 避战考虑门槛：检查围攻/封锁状态、目标攻击性、驻军状态、海/陆兼容性，返回是否允许把该目标列入逃跑候选。
- `GetPatrolRadius(mobileParty, patrolPoint)`（:128）— 根据目标定居点类型（藏身处/防御工事/村庄）× 天数 × 速度计算巡逻半径；巡逻队（patrol party）返回值减半。
- `ShouldPartyCheckInitiativeBehavior(mobileParty)`（:148）— 主动行为检查门槛：排除无领袖的驻军/民兵/匪徒、被围攻的主队、已附属于军团的部队，返回是否值得扫描周围敌人。
- `GetBestInitiativeBehavior(mobileParty, out bestInitiativeBehavior, out bestInitiativeTargetParty, out bestInitiativeBehaviorScore, out averageEnemyVec)`（:158）— 核心 AI 决策：扫描附近部队，计算战力比与立场分（`CalculateStanceScore`），最终从 `FleeToPoint` / `EngageParty` 等行为中挑分最高者输出。

**私有辅助：** `IsEnemy`（:505）、`CalculateInitiativeScoresForEnemy`（:511）、`GetInitiativeDistanceForAttack`（:575）、`CalculateStanceScore`（:613）。

## 真实示例

```csharp
// 1. AI tick 间隔读取并加随机化（MobilePartyAi.cs:289）
float num = Campaign.Current.Models.MobilePartyAIModel.AiCheckInterval * (0.6f + 0.1f * MBRandom.RandomFloat);

// 2. 主动行为检查门槛（MobilePartyAi.cs:465）
if (Campaign.Current.GameStarted && Campaign.Current.Models.MobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(this._mobileParty))

// 3. 核心 AI 决策调用（MobilePartyAi.cs:470）
Campaign.Current.Models.MobilePartyAIModel.GetBestInitiativeBehavior(this._mobileParty, out aiBehavior, out mobileParty2, out num, out avarageEnemyVec);

// 4. 巡逻半径（MobilePartyAi.cs:1294）
float patrolRadius = Campaign.Current.Models.MobilePartyAIModel.GetPatrolRadius(this._mobileParty, patrolTargetPoint);

// 5. 军事行动食物门槛（AiMilitaryBehavior.cs:156）
float neededFoodsInDaysThresholdForMilitaryAction = Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForMilitaryAction;

// 6. 模型注册（SandBoxManager.cs:347）
gameStarter.AddModel<MobilePartyAIModel>(new DefaultMobilePartyAIModel());
```

## 参见

- [MobilePartyAIModel](../MobilePartyAIModel) — 基类接口，定义本实现必须提供的全部成员
- [MobilePartyAi](../MobilePartyAi) — 主要调用方，每个移动部队的 AI 组件
- [EncounterModel](../EncounterModel) — `FleeToNearbyPartyRadius` 的动态依赖来源
- [AiMilitaryBehavior](../AiMilitaryBehavior) — 读取食物门槛的战役行为
- [AiBehavior](../AiBehavior) — `GetBestInitiativeBehavior` 输出的行为类型枚举

## 导航

- 父级索引：[../](../)
