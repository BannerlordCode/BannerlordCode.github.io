---
title: "NotableSpawnModel"
description: "决定每个定居点应当维持多少名各职业要人（Hero）的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.NotableSpawnModel 解析，被要人生成行为在战役开始与每日结算时读取。"
---

# NotableSpawnModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class NotableSpawnModel : MBGameModel<NotableSpawnModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/NotableSpawnModel.cs

## 概述

该模型只回答一个问题：给定某个定居点与某种要人职业（`Occupation`），这个定居点“应当拥有”几名该职业的要人。默认实现（`DefaultNotableSpawnModel`）按城镇 / 村庄分别硬编码了商人、帮派头目、工匠、乡绅、村长的目标数量；真正的要人创建、死亡与替换由 `NotablesCampaignBehavior` 与 `HeroCreator` 执行，模型本身不持任何世界状态、不参与存档。

## 心智模型

NotableSpawnModel 是一个只做查表的纯规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例并持有，运行时统一用 `Campaign.Current.Models.NotableSpawnModel` 取得，它既不参与存档序列化，也不会在每个 tick 被重新构造。`NotablesCampaignBehavior` 在战役开始时（`SpawnNotablesAtGameStart`）按模型返回的每个职业目标数量调用 `HeroCreator.CreateNotable` 预填要人；在每日维护时，`SettlementHelper.SpawnNotablesIfNeeded` 也用同一模型算出“实际人数 / 目标人数”的缺口，再按概率决定是否补 spawn 一名新要人。要改规则就继承并注册一个替换实现，要读目标数量就走模型，绝不要自己维护一份要人配额常量——否则生成行为与你的预期会脱节。

## 何时使用 / 何时不要使用

- **使用**：需要在 UI 或平衡逻辑里展示 / 校验“某定居点应有几名某职业要人”，或要自定义要人生成密度时，读取 `Campaign.Current.Models.NotableSpawnModel.GetTargetNotableCountForSettlement` 的返回值，或提供派生类覆盖该方法并通过子模块注册替换默认实现。
- **不要使用**：不要直接调用 `HeroCreator.CreateNotable` 来“按我的想法塞要人”却不经过模型——真正的配额与补 spawn 概率由模型 + `NotablesCampaignBehavior` 协同决定，绕过模型会导致某些定居点要人无限膨胀或永远缺员。也不要给模型加可变字段指望它随存档恢复：模型无状态、不含 `[SaveableField]`。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<NotableSpawnModel>()` 解析并缓存实例。
- [Occupation](../Occupation) —— 查询参数之一（枚举），标识要人职业。

下游与协同系统：

- [NotablesCampaignBehavior](../NotablesCampaignBehavior) —— 核心调用方：`SpawnNotablesAtGameStart` 在战役开始按目标数量预填要人，每日维护时据缺口补 spawn。
- [HeroCreator](../HeroCreator) —— `CreateNotable(Occupation, Settlement)` 实际创建要人 `Hero`，由上述行为在拿到模型配额后调用。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 被查询的定居点对象；`Settlement.Notables` 提供当前实际要人列表以计算缺口。
- [Hero](../Hero) —— 模型所“计数”的对象类型（要人即 `Hero` 且 `IsNotable`）。
- [NotablePowerModel](../NotablePowerModel) —— 同属要人规则簇的兄弟模型，决定要人何时因权势过低而消失（`NotablesCampaignBehavior` 同时读取两者）。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `NotablesCampaignBehavior` 的基类，是实际驱动要人生成 / 维护的调用者。

> 注：`SettlementHelper.SpawnNotablesIfNeeded`（`TaleWorlds.CampaignSystem.Helpers`）是按模型缺口与概率触发补 spawn 的静态辅助方法，无独立页面，此处不链。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.NotableSpawnModel` 在每次新战役 / 读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧配额。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission / 战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改生成行为**：派生类改变了目标数量，但真正创建 / 删除要人的是 `NotablesCampaignBehavior`（战役开始预填、每日补 spawn）与 `HeroCreator`。只替换模型、却让行为按旧假设处理 `Settlement.Notables`，会出现“模型说应有 3 个但行为只认 2 个”或反过来的人数不一致。

## 成员说明

### 目标要人数量查询

- **`int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`**
  - 用途：返回该定居点应维持的、指定职业要人的目标数量。默认实现（`DefaultNotableSpawnModel`）为城镇（商人 `Merchant` → 2 / 帮派头目 `GangLeader` → 2 / 工匠 `Artisan` → 1）与村庄（乡绅 `RuralNotable` → 2 / 村长 `Headman` → 1）分别硬编码，其余定居点类型或其余职业组合一律返回 `0`。
  - 副作用：无，纯计算（仅做 `settlement.IsTown` / `settlement.IsVillage` 分支与 `Occupation` 枚举匹配），不读写任何世界状态。
  - 调用时机：`NotablesCampaignBehavior.SpawnNotablesAtGameStart` 在战役开始遍历 `Settlement.All` 时，对每个城镇 / 村庄按各职业目标数循环调用以决定预填数量；`SettlementHelper.SpawnNotablesIfNeeded` 在每日维护时累加各职业目标数（`num2`）并与 `Settlement.Notables` 当前人数比较，得出缺口后再按概率补 spawn。教程阶段行为 `TutorialPhaseCampaignBehavior` 也会以村民职业（枚举值 `22`）查询目标数量。

## 示例

查询某城镇应为“工匠”预留的目标要人数量：

```csharp
Settlement town = Settlement.All.GetRandomElement();
int artisansWanted = Campaign.Current.Models.NotableSpawnModel
    .GetTargetNotableCountForSettlement(town, Occupation.Artisan);
```

检查某村庄是否还缺乡绅，并据此判断是否可能补 spawn（逻辑参考 `SettlementHelper.SpawnNotablesIfNeeded`）：

```csharp
Settlement village = Settlement.All.GetRandomElement();
int ruralNotableTarget = Campaign.Current.Models.NotableSpawnModel
    .GetTargetNotableCountForSettlement(village, Occupation.RuralNotable);
int ruralNotableActual = village.Notables.Count(n => n.CharacterObject.Occupation == Occupation.RuralNotable);
bool needsMore = ruralNotableActual < ruralNotableTarget;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [NotablesCampaignBehavior](../NotablesCampaignBehavior) · [HeroCreator](../HeroCreator) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Hero](../Hero) · [Occupation](../Occupation) · [NotablePowerModel](../NotablePowerModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)
