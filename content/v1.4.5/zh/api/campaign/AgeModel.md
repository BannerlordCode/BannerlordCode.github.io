---
title: "AgeModel"
description: "集中定义英雄从婴儿到老年的年龄阈值（如成年、中年、老年与年龄上限）并计算角色在城镇、酒馆、村庄等地点可出场年龄区间的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.AgeModel 解析，被 AgingCampaignBehavior、PregnancyCampaignBehavior 以及各城市场景生成行为在运行时读取。"
---

# AgeModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class AgeModel : MBGameModel<AgeModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AgeModel.cs

## 概述

该模型集中提供英雄年龄的“生命阶段阈值”——婴儿 3 岁、儿童 6 岁、少年 14 岁、成年 18 岁、中年 35 岁、老年 55 岁、上限 128 岁——并依据角色的 `Occupation` 与地点附加标签算出其可在某地点刷新的最小/最大年龄。它只做纯查询计算，真正的年龄推进由 [AgingCampaignBehavior](../AgingCampaignBehavior) 在每日结算里完成，受孕、婚配、招募与场景填充等系统则读取这些阈值来裁决资格或决定 NPC 年龄分布。

## 心智模型

AgeModel 是 Campaign 层里集中裁决“年龄阈值”的模型扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例 `DefaultAgeModel` 并缓存，运行时统一用 `Campaign.Current.Models.AgeModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。各城市场景生成行为（如 `CommonTownsfolkCampaignBehavior`、`TavernEmployeesCampaignBehavior`、`CommonVillagersCampaignBehavior`）在填充酒馆、城镇、村庄的 NPC 时调用 `GetAgeLimitForLocation` 决定某个 `CharacterObject` 该落在哪个年龄段；而 `AgingCampaignBehavior`、[PregnancyCampaignBehavior](../PregnancyCampaignBehavior) 与 [MarriageModel](../MarriageModel) 等则读取 `HeroComesOfAge` / `BecomeOldAge` 等属性来驱动生命阶段转换、受孕与婚配资格。要改年龄规则就继承并注册一个替换实现；要“推进年龄”必须走 [AgingCampaignBehavior](../AgingCampaignBehavior) 的每日逻辑，绝不要把模型当成写世界状态的入口或直接给 `Hero.Age` 赋值。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“英雄何时成年 / 老年 / 可出场年龄区间”的规则时，读取 `Campaign.Current.Models.AgeModel` 的属性返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“推进年龄”——它只提供阈值，真正改 `Hero.Age` 的是 [AgingCampaignBehavior](../AgingCampaignBehavior)。不要在 `Mission` 或战场逻辑里取 `Campaign.Current.Models`；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。要替换场景 NPC 的年龄分布时，必须确认调用方（各城市场景生成行为）按新阈值工作，而非只改模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<AgeModel>()` 解析并缓存实例。

下游与协同系统（调用方）：

- [Hero](../Hero) —— `Hero.IsChild` 属性直接读取 `HeroComesOfAge` 判定未成年；`Hero.Age` 是年龄推进的真实状态，由 [AgingCampaignBehavior](../AgingCampaignBehavior) 写入。
- [Clan](../Clan) —— [CompanionsCampaignBehavior](../CompanionsCampaignBehavior) 创建随从英雄时以 `HeroComesOfAge + 5 + RandomInt(12)` 等作为出生年龄，结果英雄归属某个 `Clan`。
- [CharacterObject](../CharacterObject) —— `GetAgeLimitForLocation(CharacterObject, ...)` 的参数类型，按 `Occupation` 决定可出场年龄区间。
- [LocationComplex](../LocationComplex) —— 在判定地点角色是否成年（`Age >= HeroComesOfAge`）以决定其能否进入某些位置时读取本模型。
- [AgingCampaignBehavior](../AgingCampaignBehavior) —— 每日推进年龄、触发生命阶段转换（越过 `BecomeChildAge` / `BecomeTeenagerAge` / `HeroComesOfAge` / `BecomeOldAge`）与老年死亡，大量读取本模型阈值。
- [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) —— 读取 `HeroComesOfAge` 判断女性英雄是否进入可受孕年龄。
- [HeroSpawnCampaignBehavior](../HeroSpawnCampaignBehavior) —— 读取 `HeroComesOfAge` 决定贵族/要人的初始与可行动年龄。
- [EducationCampaignBehavior](../EducationCampaignBehavior) —— 读取 `HeroComesOfAge` 判定子女是否仍处受教育阶段。
- [CompanionsCampaignBehavior](../CompanionsCampaignBehavior) —— 创建随从/特殊英雄时以 `HeroComesOfAge` 或 `HeroComesOfAge + 5 + RandomInt(12)` 作为出生年龄。
- [DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) —— 读取 `BecomeOldAge` / `MaxAge` 计算老年死亡概率曲线。
- [MarriageModel](../MarriageModel) —— `NpcCoupleMarriageChance` 读取 `HeroComesOfAge` 计算年龄因子。
- [PregnancyModel](../PregnancyModel) —— 同属家庭生命周期模型簇，常与本模型一起被派生替换。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述各行为均继承自它，是实际驱动调用方。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.AgeModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改了阈值，但真正推进 `Hero.Age` 的是 [AgingCampaignBehavior](../AgingCampaignBehavior)，场景 NPC 年龄分布则由各城市场景生成行为按 `GetAgeLimitForLocation` 填充——只替换模型、却让这些调用方按旧假设处理年龄，会出现“模型改了但角色年龄不变”或场景年龄段与预测不一致。
- **`GetAgeLimitForLocation` 依赖 `additionalTags` 的隐含约定**：调用方传入的标签字符串（如 `"Child"`、`"Teenager"`、`"TavernVisitor"`、`"Dancer"`、`"Beggar"`）必须与默认实现里 `switch` 的分支标签严格一致，否则会落到 `default` 分支（最小成年、最大 70），导致场景 NPC 年龄区间出乎意料。派生类若改了分支标签而调用方仍传旧标签，会静默拿到错误区间。
- **阈值被多处分散读取**：不只行为，连 `Hero.IsChild`、`CharacterData`、对话标签（如 `OldTag`）与多个 VM 都直接读 `HeroComesOfAge` / `BecomeOldAge`。只替换模型而不考虑这些分散读取点，会出现“模型改了但界面/对话仍按旧年龄”的不一致——它们并不经过你的派生方法。

## 成员说明

### 生命阶段阈值（属性）

- **`BecomeInfantAge`**（属性，返回 `int`）
  - 用途：成为婴儿的起始年龄，默认实现返回 `3`。`AgingCampaignBehavior` 用它界定婴儿期下限，低于此年龄的角色被视为婴儿。
  - 副作用：无，纯查询。
  - 调用时机：生命阶段判定内部读取；`GauntletEducationScreen` 用它判断是否仍处于婴儿期。

- **`BecomeChildAge`**（属性，返回 `int`）
  - 用途：成为儿童的起始年龄，默认实现返回 `6`。`AgingCampaignBehavior` 在年龄越过该值时触发“儿童”阶段相关逻辑（如教育行为、招募判定）。
  - 副作用：无，纯查询。
  - 调用时机：[AgingCampaignBehavior](../AgingCampaignBehavior) 年龄推进时读取；`CommonVillagersCampaignBehavior` 用它划定“儿童”场景角色区间。

- **`BecomeTeenagerAge`**（属性，返回 `int`）
  - 用途：成为少年的起始年龄，默认实现返回 `14`。用于区分少年与儿童，影响场景填充、装备选择。
  - 副作用：无，纯查询。
  - 调用时机：[AgingCampaignBehavior](../AgingCampaignBehavior) 与 `CommonVillagersCampaignBehavior` 读取；[DefaultEquipmentSelectionModel](../DefaultEquipmentSelectionModel) 用它判断英雄是否尚未进入少年（装备更轻的甲胄）。

- **`HeroComesOfAge`**（属性，返回 `int`）
  - 用途：英雄成年的年龄，默认实现返回 `18`。这是被读取得最频繁的一条阈值——界定“成年”，几乎贯穿所有涉及英雄资格的系统。
  - 副作用：无，纯查询。
  - 调用时机：`Hero.IsChild`、`[PregnancyCampaignBehavior](../PregnancyCampaignBehavior)`、`[MarriageModel](../MarriageModel)`、`[HeroSpawnCampaignBehavior](../HeroSpawnCampaignBehavior)`、`[EducationCampaignBehavior](../EducationCampaignBehavior)`、`[LocationComplex](../LocationComplex)`、各招募/求婚/对话判定与大量 VM 都读取它。

- **`MiddleAdultHoodAge`**（属性，返回 `int`）
  - 用途：中年的起始年龄，默认实现返回 `35`。用于判定领主是否“足够成熟”。
  - 副作用：无，纯查询。
  - 调用时机：`BackstoryCampaignBehavior` 用它给年轻领主追加背景故事；`HeroHelper` 读取它处理英雄形象/称号。

- **`BecomeOldAge`**（属性，返回 `int`）
  - 用途：进入老年的年龄，默认实现返回 `55`。老年后英雄进入死亡概率上升区间。
  - 副作用：无，纯查询。
  - 调用时机：[DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) 用它作为死亡概率曲线的起点；`OldTag` 对话标签用它判定是否显示“年迈”；[AgingCampaignBehavior](../AgingCampaignBehavior) 的老年死亡判定、`CharacterBornLogEntry` 的历史保留时长也读取它。

- **`MaxAge`**（属性，返回 `int`）
  - 用途：年龄上限，默认实现返回 `128`。作为死亡概率曲线终点与年龄设置的硬边界。
  - 副作用：无，纯查询。
  - 调用时机：[DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) 用它计算 `MaxAge - 1` 作为曲线终点；`CampaignCheats` 的年龄设置受其约束（超出即报错）。

### 地点年龄区间

- **`GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")`**
  - 用途：依据 `character.Occupation` 与 `additionalTags` 通过 `out` 参数回填该角色在某地点可出场的最小/最大年龄。默认实现对 `TavernWench`(20–28)、`Townsfolk`(按标签 20–60 / 20–40 / 50–70 / 30–45 / 20–28 / 60–90 / 6–14 / 14–18 / 30–80 等多分支)、`Villager`、`TavernGameHost`(30–40)、`Musician`(20–40)、`ArenaMaster`(30–60)、`ShopWorker`(18–50)、`Tavernkeeper`(40–80)、`RansomBroker`(30–60)、各类工匠(30–80) 等职业分别给出区间；未匹配职业或未传标签走 `default`（最小成年、最大 70），`AlleyGangMember` 标签为 30–40。
  - 副作用：仅写入两个 `out` 参数，不改动任何世界状态。
  - 调用时机：各城市场景生成行为（`TavernEmployeesCampaignBehavior`、`CommonTownsfolkCampaignBehavior`、`CommonVillagersCampaignBehavior`、`TownMerchantsCampaignBehavior`、`BarberCampaignBehavior`、`ArenaMasterCampaignBehavior`、`AlleyCampaignBehavior`、`NotableHelperCharacterCampaignBehavior`、`WorkshopsCharactersCampaignBehavior` 等）在填充场景 NPC 时调用；`Mission` 层的 `HideoutAmbushMissionController` 与 `PrisonBreakCampaignBehavior` 也调用它决定潜行角色年龄。

## 示例

判定一名英雄是否已成年（读取属性，而非创建模型实例）：

```csharp
Hero hero = Hero.MainHero;
bool isAdult = hero.Age >= (float)Campaign.Current.Models.AgeModel.HeroComesOfAge;
// 此处只读属性，绝不要通过模型去写 hero.Age
```

为某职业场景角色计算其在酒馆访客标签下的可出场年龄区间：

```csharp
Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(
    characterObject, out int minimumAge, out int maximumAge, "TavernVisitor");
// minimumAge / maximumAge 即为该角色在对应地点可刷新的年龄区间
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [Clan](../Clan) · [CharacterObject](../CharacterObject) · [LocationComplex](../LocationComplex) · [AgingCampaignBehavior](../AgingCampaignBehavior) · [PregnancyCampaignBehavior](../PregnancyCampaignBehavior) · [HeroSpawnCampaignBehavior](../HeroSpawnCampaignBehavior) · [EducationCampaignBehavior](../EducationCampaignBehavior) · [CompanionsCampaignBehavior](../CompanionsCampaignBehavior) · [DefaultHeroDeathProbabilityCalculationModel](../DefaultHeroDeathProbabilityCalculationModel) · [MarriageModel](../MarriageModel) · [PregnancyModel](../PregnancyModel) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultAgeModel](../DefaultAgeModel)
