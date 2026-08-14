---
title: "Behaviors 优先类型"
description: "CampaignBehaviors 中负责生命周期、外交、劫匪、商队和存档边界的优先类型。"
weight: 10
---

# Behaviors 优先类型

**一句话职责：** 这些 `CampaignBehaviorBase` 实现把事件订阅、每日推进、对话注册和 `SyncData` 存档绑定到战役生命周期；它们不是可以随意从 tick 中 new 出来的工具。

## 心智模型

`CampaignGameStarter` 在战役建立时加入 Behavior，`Campaign` 随后通过 `GetCampaignBehavior<T>()` 暴露已注册实例。实例由战役持有，`RegisterEvents` 负责一次性订阅，`SyncData` 负责把该 Behavior 的持久状态接入存档。`CampaignBehaviorManager` 在保存前收集每个 Behavior 的数据，在加载后恢复它们；因此 Behavior 的字段、SaveableTypeDefiner 和事件顺序是一条完整链路。

本页按功能覆盖第一批优先类型：年龄与角色创建、联盟与宣战、劫匪与商队、旗帜与建筑、战斗恢复和管理器。需要改变世界状态时仍回到 [Actions](../actions/)；需要替换公式时回到 [Models](../models/)；下面的 `TypeDefiner` 只负责保存类型定义，不是业务 Behavior。

## 依赖与使用边界

- **上游：** [Campaign](../../campaign/Campaign)、[CampaignGameStarter](../CampaignGameStarter)、[CampaignEvents](../CampaignEvents) 和 `Campaign.Current`。
- **下游：** [Actions](../actions/)、[Models](../models/)、[CampaignEvents](../CampaignEvents)、对话/任务以及 [Save 系统](../../save-system/)。
- **同级：** [Behaviors family](../behaviors/)、[Actions](../actions/)、[Issues](../issues/)、[Quests](../quests/)。
- **不要做：** 不要在 `RegisterEvents` 之外重复订阅，不要在模块加载阶段假设 `Campaign.Current`，不要删除有存档字段的 Behavior 而不提供兼容迁移。

## 第一批类型与典型时机

| Namespace | Type | Purpose | Timing |
|---|---|---|---|
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AgingCampaignBehavior](../AgingCampaignBehavior) | 处理英雄年龄、成年、成长、死亡和额外生命，并保存未成年英雄与额外生命字典。 | 每日英雄 tick、加载和角色创建结束 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [Alliance](../../campaign/Alliance) | 保存两个王国及联盟结束时间的轻量存档结构。 | 联盟建立、每日过期和存档序列化 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AllianceCampaignBehavior](../AllianceCampaignBehavior) | 维护联盟与 Call-to-War 协议，响应宣战、和平、王国销毁并发布关系变化。 | 每日部落 tick、外交事件和新档注册 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [AllianceCampaignBehaviorTypeDefiner](../AllianceCampaignBehaviorTypeDefiner) | 为 `Alliance` 与 `CallToWarAgreement` 注册结构和容器的保存 ID。 | SaveSystem 构建类型定义时 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BackstoryCampaignBehavior](../BackstoryCampaignBehavior) | 将角色背景和开局叙事选择接入战役行为层。 | 角色创建结束和新战役启动 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior) | 注册劫匪对话，记录玩家与劫匪的友好、付款或敌对交互，并随部队销毁清理。 | 会话启动、遭遇对话和部队销毁 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditInteractionsCampaignBehaviorTypeDefiner](../BanditInteractionsCampaignBehaviorTypeDefiner) | 为劫匪交互枚举和按 `MobileParty` 索引的容器登记存档定义。 | SaveSystem 构建类型定义时 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior) | 按战役地图与据点状态生成和维护劫匪部队。 | 每日地图推进与新档装配 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BannerCampaignBehavior](../BannerCampaignBehavior) | 将旗帜效果、英雄旗帜和相关战役事件接入行为生命周期。 | 旗帜初始化、英雄变化和事件通知 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BattleCampaignBehavior](../BattleCampaignBehavior) | 接收地图战斗结果并驱动战斗后的战役奖励、通知和后续处理。 | MapEvent 结束与战斗结果广播 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [BuildingsCampaignBehavior](../BuildingsCampaignBehavior) | 推进城镇建筑队列并把建筑每日变化接入事件和存档。 | 每日城镇 tick |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CallToWarAgreement](../../campaign/CallToWarAgreement) | 保存呼叫方、被呼叫方、目标敌国和协议到期时间。 | 联盟外交决策与协议到期 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignBattleRecoveryBehavior](../CampaignBattleRecoveryBehavior) | 处理战斗后部队和角色的恢复节奏，避免战斗状态直接跳回稳定状态。 | MapEvent 结束后的恢复阶段 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignBehaviorManager](../CampaignBehaviorManager) | 持有已注册 Behavior，统一注册事件、保存前收集和加载后恢复。 | Campaign 初始化、保存和加载 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignFactionManagerBehaviour](../CampaignFactionManagerBehaviour) | 把阵营管理器的初始化和生命周期接入战役行为集合。 | Campaign 建立与阵营状态恢复 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CampaignWarManagerBehavior](../CampaignWarManagerBehavior) | 维护战争管理器的战役级状态并响应外交与战争事件。 | 宣战、和平、每日外交推进 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravanConversationsCampaignBehavior](../CaravanConversationsCampaignBehavior) | 注册商队遭遇中的对话、交易和离开条件。 | 商队遭遇会话启动时 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravansCampaignBehavior](../CaravansCampaignBehavior) | 生成和管理商队、交易记录、玩家交互以及贸易相关存档容器。 | 每日商队推进、交易事件和加载 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CaravansCampaignBehaviorTypeDefiner](../CaravansCampaignBehaviorTypeDefiner) | 为商队交互、交易日志和交易日志容器登记保存定义。 | SaveSystem 构建类型定义时 |
| TaleWorlds.CampaignSystem.CampaignBehaviors | [CharacterCreationCampaignBehavior](../CharacterCreationCampaignBehavior) | 将创建角色阶段的职业、文化和开局行为接入 Campaign 生命周期。 | 角色创建结束和开局初始化 |

## 真实获取与注册路径

在战役已经建立后，从 `Campaign.Current` 获取接口或 Behavior；不要自行 `new` 官方实例，也不要在 `RegisterEvents` 中反复调用注册逻辑。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

IAllianceCampaignBehavior alliances =
    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();
Kingdom firstKingdom = Kingdom.All.FirstOrDefault();
Kingdom secondKingdom = Kingdom.All.Skip(1).FirstOrDefault();
if (alliances != null && firstKingdom != null && secondKingdom != null)
{
    bool hasAlliance = alliances.IsAllyWithKingdom(firstKingdom, secondKingdom);
}
```

`GetCampaignBehavior<T>()` 返回的是已经由战役装配的实例；接口的具体成员和空值条件必须以对应源码为准。自己的 Behavior 应由 `CampaignGameStarter.AddBehavior` 注册，并在 `SyncData(IDataStore)` 中同步自有状态，而不是把状态挂在静态字段上。

## 崩溃与坏档边界

- `CampaignBehaviorManager` 的列表顺序、事件注册和保存恢复是耦合的。重复加入同一个 Behavior 会重复奖励、重复对话或重复事件反应。
- `Alliance`、`CallToWarAgreement`、劫匪交互和商队交易日志都依赖 `SaveableTypeDefiner` 的稳定 ID；改动字段顺序或 ID 会使旧档无法正确读取。
- `AgingCampaignBehavior`、`BuildingsCampaignBehavior` 和 `CaravansCampaignBehavior` 在每日 tick 中工作，不能从 UI 回调中手动重放每日推进。
- 行为的事件回调可能收到已销毁部队、已结束遭遇或为空的当前战役；回调内必须按源代码的生命周期检查处理。

## 导航

- **Parent:** [Behaviors family](../behaviors/)
- **Sibling:** [Actions](../actions/)、[Models](../models/)、[Issues](../issues/)、[Quests](../quests/)
- **Related:** [CampaignBehaviorBase](../CampaignBehaviorBase)、[CampaignEvents](../CampaignEvents)、[CampaignGameStarter](../CampaignGameStarter)
- **Risk guide:** [Crash boundaries](../../../architecture/crash-boundaries)
