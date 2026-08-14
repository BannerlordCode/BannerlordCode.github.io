---
title: "Helpers 家族手册"
description: "TaleWorlds.CampaignSystem.Helpers 的战役计算、导航、界面和内容辅助入口。"
weight: 20
---

# Helpers 家族手册

**一句话职责：** `Helpers` 是战役层的静态辅助边界：它把已经存在的 `Hero`、`MobileParty`、`Settlement`、`ItemObject` 或 UI 状态转换成导航、经济、显示和流程决策；它通常不拥有这些对象，也不替代改变世界状态的 `Action`。

## 心智模型

把这个命名空间看成“围绕现有状态的计算与流程工具”，而不是一个可以注册或保存的服务。`AiHelper`、`DistanceHelper`、`NavigationHelper` 和 `SettlementHelper` 读取 `Campaign.Current` 的地图与模型；`HeroHelper`、`PartyBaseHelper`、`ItemHelper` 和 `SkillHelper` 读取传入实体；`InventoryScreenHelper`、`PartyScreenHelper`、`PortStateHelper` 和 `CraftingHelper` 则把 `Game.Current.GameStateManager` 推进到一个界面状态。调用者负责保证战役、地图或 UI 生命周期已经成立。

Helpers 不会替你建立持久化所有权。需要改变英雄、部队、据点、关系或战争状态时，回到 [Actions 家族](../actions/)；需要替换计算公式时，回到 [Models 家族](../models/)；需要在 tick 或事件中安排行为时，回到 [Behaviors 家族](../behaviors/)。不要把 Helper 的返回值当成可以长期保存的实体引用，尤其是地图遭遇、当前据点和 UI State。

## 依赖关系

- **上游：** [Campaign](../../campaign/Campaign)、[MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero)、[Settlement](../../campaign/Settlement)、[ItemObject](../../core/ItemObject) 与 `Game.Current` 提供输入状态。
- **地图计算：** `AiHelper`、`DistanceHelper`、`NavigationHelper` 依赖 `Campaign.Current.Models.PartyNavigationModel`、`MapDistanceModel` 和 `MapSceneWrapper`；没有活动战役时不要调用它们。
- **下游：** [CampaignEvents](../CampaignEvents)、[CampaignBehaviorBase](../CampaignBehaviorBase)、菜单/任务 UI 与 [Save 系统](../../save-system/) 消费结果；Helper 本身不是存档根对象。
- **相邻入口：** [Actions](../actions/)、[Models](../models/)、[MapEvents](../mapevents/) 和 [崩溃边界](../../../architecture/crash-boundaries)。

## 什么时候使用，什么时候不要使用

使用 Helpers 读取官方已经实现的导航、距离、装备比较、技能加成、战役文本和界面流程。不要在每帧 Mission 回调中反复调用需要地图模型或 UI 状态的入口；不要在 `Campaign.Current == null`、`Game.Current == null` 或目标实体已经结束生命周期时调用。`BuildingHelper`、`EquipmentHelper`、`MobilePartyHelper` 等少数入口会改变运行时状态，调用前仍要按它们的业务边界选择对应的 Action、Behavior 或初始化阶段。

## 类型与典型时机

| Namespace | Type | Purpose | Timing |
|---|---|---|---|
| Helpers | [AIDifficulty](../AIDifficulty) | 为棋盘游戏 AI 选择 Easy、Normal 或 Hard 难度；它是配置值，不是战役难度总开关。 | 棋盘游戏建立对局时 |
| Helpers | [AiHelper](../AiHelper) | 根据两个移动部队或部队到据点的关系，选择陆路/海路能力并计算调整后的距离。 | 地图寻路或 AI 目标评估时 |
| Helpers | [AlleyHelper](../AlleyHelper) | 打开管理巷道的界面，并构造可加入巷道的家族成员选择。 | 巷道管理菜单确认后 |
| Helpers | [BannerHelper](../BannerHelper) | 为英雄选择旗帜物品，并把旗帜效果加入解释数值。 | 英雄装备/旗帜加成计算时 |
| Helpers | [BarterHelper](../BarterHelper) | 按双方阵营价值和履约比例，计算自动平衡交易时应加入或移除的 Barterable。 | 交易报价正在计算时 |
| Helpers | [BoardGameHelper](../BoardGameHelper) | 承载棋盘游戏的 AI 难度和 Win/Loss/Draw 状态枚举。 | 棋盘游戏状态机中 |
| Helpers | [BoardGameState](../BoardGameState) | 表示棋盘游戏尚未结束、胜利、失败或和棋。 | 棋盘游戏结算时 |
| Helpers | [BuildingHelper](../BuildingHelper) | 读取建筑进度、层级和完成时间，并执行城镇建筑队列的官方切换入口。 | 城镇建筑推进或管理界面 |
| Helpers | [CaravanHelper](../CaravanHelper) | 按文化、精英标志和陆/海类型选择商队模板。 | 创建或恢复商队时 |
| Helpers | [CharacterHelper](../CharacterHelper) | 提供角色死亡通知、身体/姿态/面部待机等表现层辅助。 | 角色显示或死亡通知生成时 |
| Helpers | [CraftingHelper](../CraftingHelper) | 选择可锻造英雄、切换当前锻造模板并打开锻造状态。 | 进入锻造界面时 |
| Helpers | [DialogHelper](../DialogHelper) | 将对话变量绑定到游戏文本 ID，供对话文本系统解析。 | 对话内容装载或初始化时 |
| Helpers | [DiplomacyHelper](../DiplomacyHelper) | 查询战争起因、同阵营存活状态、俘虏归属和联盟关系。 | 外交条件或行为决策前 |
| Helpers | [DistanceHelper](../DistanceHelper) | 按导航能力计算据点、部队和地图点之间的可达距离及陆海比例。 | 地图范围、追击和 AI 评估时 |
| Helpers | [EmbarkDisembarkData](../EmbarkDisembarkData) | 保存一次陆海转换的有效性、边缘点和死区方向；它是 `NavigationHelper` 的结果值。 | 每次陆海转换 tick 内 |
| Helpers | [EquipmentHelper](../EquipmentHelper) | 把一个 `Equipment` 的装备元素分配给英雄。 | 英雄装备初始化或替换时 |
| Helpers | [FactionHelper](../FactionHelper) | 计算阵营潜在实力、敌对王国、立场、权力比和授予封地条件。 | 王国决策和外交 UI 读取时 |
| Helpers | [HeroHelper](../HeroHelper) | 查询英雄最后出现地点、最近据点、指挥关系、称谓和玩家阵营排序。 | 英雄列表、百科或决策 UI |
| Helpers | [IncidentHelper](../IncidentHelper) | 用 `MobileParty.MainParty` 的带种子随机数从列表稳定选择元素。 | 需要可复现的事件抽样时 |
| Helpers | [InventoryCategoryType](../InventoryCategoryType) | 指定库存筛选分类，如护甲、武器、盾牌和货物。 | 库存状态初始化时 |
| Helpers | [InventoryItemType](../InventoryItemType) | 以 flags 表示物品类型，供库存过滤器组合匹配。 | 库存物品分类时 |
| Helpers | [InventoryMode](../InventoryMode) | 表示普通、交易、战利品、仓库和储藏室库存界面模式。 | 创建 `InventoryState` 时 |
| Helpers | [InventoryScreenHelper](../InventoryScreenHelper) | 创建库存/交易/战利品界面，设置 `InventoryLogic`、监听器并压入游戏状态。 | 主队进入库存流程时 |
| Helpers | [ItemHelper](../ItemHelper) | 比较武器用途并生成武器伤害文本和物品数量文本。 | 物品比较、装备或提示生成时 |
| Helpers | [MapEventHelper](../MapEventHelper) | 读取遭遇劫掠/撤退上下文，识别海上劫掠并处理遭遇对话收尾。 | `MapEvent` 活跃期间 |
| Helpers | [MenuHelper](../MenuHelper) | 为战役菜单设置可用状态、问题/任务数据和遭遇条件/后果。 | GameMenu 条件和回调阶段 |
| Helpers | [MiscHelper](../MiscHelper) | 提供受控 XML 读取和战役 ID 生成等杂项入口。 | 内容装载或创建战役标识时 |
| Helpers | [MobilePartyHelper](../MobilePartyHelper) | 创建/生成领主部队、选择强力部队并分配共享经验。 | 部队初始化和战役奖励阶段 |
| Helpers | [NavigationHelper](../NavigationHelper) | 通过地图场景和 PartyNavigationModel 判断地形、寻找可达点并计算陆海转换。 | 地图移动 tick 或寻路前 |
| Helpers | [PartyBaseHelper](../PartyBaseHelper) | 排序名册、格式化部队规模、查找部队队长并输出名册摘要。 | 部队/库存 UI 展示时 |
| Helpers | [PartyScreenHelper](../PartyScreenHelper) | 按作弊、管理、赎金、战利品等模式创建和关闭 PartyScreen。 | 主队进入部队管理界面时 |
| Helpers | [PartyScreenMode](../PartyScreenMode) | 表示 PartyScreen 当前的管理、战利品、赎金等业务模式。 | PartyScreen 状态转换时 |
| Helpers | [PerkHelper](../PerkHelper) | 清理英雄技能 Perk 并把角色、队长、部队或城镇 Perk 加成写入解释数值。 | Model 计算派生值时 |
| Helpers | [PersuasionHelper](../PersuasionHelper) | 把说服选项结果转换为玩家可见的成功反馈和默认反应。 | 说服选项结算后 |
| Helpers | [PortStateHelper](../PortStateHelper) | 以交易、掠夺、故事模式或舰队管理模式打开港口状态。 | 港口交互菜单确认后 |
| Helpers | [QuestHelper](../QuestHelper) | 检查任务替代方案的金币、兵力和技能条件，并处理通用胁迫后果。 | Quest 条件与结算时 |
| Helpers | [SettlementHelper](../SettlementHelper) | 按导航能力和过滤条件寻找最近城镇、村庄、藏身处或据点。 | 地图任务、移动和生成时 |
| Helpers | [ShipHelper](../ShipHelper) | 从船只来源或部队生成旗帜，并按玩家部队顺序取得海战船只。 | 海战编组和视觉生成时 |
| Helpers | [SkillHelper](../SkillHelper) | 把技能等级、角色、部队或城镇的 SkillEffect 加入解释数值。 | 角色/部队/城镇 Model 计算时 |
| Helpers | [StringHelpers](../StringHelpers) | 把角色、据点和效果数据填入 `TextObject` 变量，并执行名称格式转换。 | 文本模板渲染前 |
| Helpers | [TeleportationHelper](../TeleportationHelper) | 计算被传送英雄到达目标还需多少小时。 | 传送进度和地图提示时 |
| Helpers | [TooltipHelper](../TooltipHelper) | 构造遭遇和围城派兵力量上下文的提示属性。 | 地图提示显示时 |
| Helpers | [TownHelpers](../TownHelpers) | 查询城镇可会面英雄，并计算装备价格偏差等城镇显示数据。 | 城镇菜单和交易 UI |

## 真实调用路径

### 地图查询必须从活动主队开始

`SettlementHelper` 和 `NavigationHelper` 的参数不是服务占位符，而是来自当前战役的真实对象。`MobileParty.NavigationType.All` 在 v1.3.15/v1.4.5 中表示陆海皆可的能力；返回的城镇可能为 `null`，调用方必须保留这个分支。

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

MobileParty party = MobileParty.MainParty;
Town nearestTown = SettlementHelper.FindNearestTownToMobileParty(
    party,
    MobileParty.NavigationType.All);

if (nearestTown != null)
{
    CampaignVec2 point = NavigationHelper.FindPointAroundPosition(
        nearestTown.Settlement.GatePosition,
        MobileParty.NavigationType.Default,
        maxDistance: 5f,
        requirePath: true);
}
```

### 文本、事件抽样和城镇会面

`IncidentHelper` 明确使用 `MobileParty.MainParty` 的 seeded random，因此同一个存档和 seed 才能复现选择；它不是密码学随机数。城镇会面则必须从主队当前据点取得 `Settlement`，不能把已经结束的 `MapEvent` 当作长期缓存。

```csharp
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem;

Settlement settlement = MobileParty.MainParty.CurrentSettlement;
if (settlement != null && settlement.IsTown)
{
    var heroes = TownHelpers.GetHeroesToMeetInTown(settlement);
    Hero selected = IncidentHelper.GetSeededRandomElement(
        heroes.ToList(),
        seed: 42L);
}
```

## 崩溃、存档和线程边界

- 地图 Helper 依赖 `Campaign.Current`、地图场景和 Models；在标题界面、模块加载早期或战役已结束时调用可能得到空引用或无效 `CampaignVec2`。
- `InventoryScreenHelper`、`PartyScreenHelper`、`PortStateHelper` 和 `CraftingHelper` 会创建或压入 `GameState`。不要从后台线程或每帧回调反复压入状态；关闭流程要让官方 state manager 完成收尾。
- `BuildingHelper`、`EquipmentHelper`、`MobilePartyHelper` 和 Perk/Skill 入口可能影响运行时状态或派生缓存。需要跨存档的状态必须由拥有它的 Behavior/Saveable 类型保存，不能保存 Helper 本身。
- `MapEventHelper` 的结果只在遭遇生命周期内有意义；事件结束后应保存稳定的 `Hero`、`MobileParty` 或 `Settlement` 标识，而不是继续持有瞬态引用。
- 直接用 Helper 结果绕过 [Actions](../actions/) 去写英雄、部队或据点字段，会跳过事件、缓存和关系同步；这类错误通常表现为 UI 不刷新、旧档状态不一致或后续 tick 崩溃。

## 导航与相邻页面

- **Parent:** [campaign-ext API](../)
- **Sibling families:** [Actions](../actions/)、[Models](../models/)、[Behaviors](../behaviors/)、[MapEvents](../mapevents/)
- **Upstream entities:** [Campaign](../../campaign/Campaign)、[MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero)、[Settlement](../../campaign/Settlement)
- **Risk guide:** [Crash boundaries](../../../architecture/crash-boundaries)
- **Module map:** [campaign-ext overview](../)
