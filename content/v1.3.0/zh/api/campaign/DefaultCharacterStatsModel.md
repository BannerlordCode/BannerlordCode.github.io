---
title: "DefaultCharacterStatsModel"
description: "角色属性规则模型：定义兵种等级（Tier）计算公式、最大生命值（含 perk 加成）和负伤阈值，是角色数值体系的核心计算器。"
---
# DefaultCharacterStatsModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**Base:** `CharacterStatsModel`（抽象类，位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`）
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`

## 概述

`DefaultCharacterStatsModel` 是战役层角色数值子系统的默认规则实现，继承自抽象类 `CharacterStatsModel`。它负责三件事：

1. **等级（Tier）计算**：根据 `CharacterObject.Level` 推算兵种等级，公式为 `ceil((level - 5) / 5)`，钳制在 `[0, MaxCharacterTier]` 范围内。英雄（`IsHero`）始终返回 0 级。
2. **最大生命值计算**：以 100 为基准，叠加多个 perk 的加成（Trainer、UnwaveringDefense、ThickHides、WellBuilt、PreventiveMedicine、DoctorsOath、FortitudeTonic、MightyBlow），返回 `ExplainedNumber` 以便 UI 展示详细来源。
3. **负伤阈值**：返回英雄被视为"负伤"的生命值下限，硬编码为 20。

这个模型被招募系统、角色 UI、对话系统和 AI 决策广泛引用，是角色数值的单一事实来源。

## 心智模型

把 `DefaultCharacterStatsModel` 想成角色数值的**公式手册**：

- **谁创建它**：`SandBoxManager` 在 `InitializeGameStarter` 阶段通过 `AddModel<CharacterStatsModel>(new DefaultCharacterStatsModel())` 注册。
- **谁持有它**：`GameModels` 容器解析为 `Campaign.Current.Models.CharacterStatsModel`。
- **谁调用它**：`RecruitmentCampaignBehavior` 用 `GetTier` 决定招募数量；`CharacterObject.MaxHitPoints()` 用 `MaxHitpoints` 暴露最大生命值；`Hero` 用 `WoundedHitPointLimit` 判断负伤状态；`ConversationHelper` 用 `MaxCharacterTier` 做对话分支。
- **怎么改它**：继承并覆盖你关心的成员，在 `SubModule.InitializeGameStarter` 中注册。例如想让角色升级更快，就覆盖 `GetTier` 让公式更宽松。

注意：`MaxHitpoints` 返回 `ExplainedNumber` 而非 `int`。`ExplainedNumber` 是一个可携带"来源说明"的数值结构——当 `includeDescriptions` 为 `true` 时，UI 可以展示每个 perk 贡献了多少生命值。这是 Bannerlord 数值系统的标准模式。

## 主要属性

| Name | Signature | 说明 |
|------|-----------|------|
| `MaxCharacterTier` | `public override int MaxCharacterTier { get; }` | 兵种等级上限，硬编码为 `6`。`GetTier` 的计算结果不会超过此值。 |

## 主要方法

### GetTier
`public override int GetTier(CharacterObject character)`

**用途 / Purpose:** 根据角色等级计算兵种等级（Tier）。公式为 `ceil((level - 5) / 5)`，结果钳制在 `[0, MaxCharacterTier]`。英雄角色（`IsHero == true`）始终返回 0，因为英雄不走兵种等级体系。招募系统用此值决定每次招募多少新兵。

```csharp
// 来自 RecruitmentCampaignBehavior.cs:300 的真实调用方式
int tier = Campaign.Current.Models.CharacterStatsModel.GetTier(character);
int maxCharacterTier = Campaign.Current.Models.CharacterStatsModel.MaxCharacterTier;
int num = (maxCharacterTier - tier) * 2;  // 等级越低，招募越多
```

### MaxHitpoints
`public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)`

**用途 / Purpose:** 计算角色的最大生命值。以 100 为基准，依次叠加以下 perk 加成：Trainer（单手）、UnwaveringDefense（单手）、ThickHides（双手）、WellBuilt（运动）、PreventiveMedicine（医学）、DoctorsOath（医学）、FortitudeTonic（医学）、MightyBlow（运动）。当 `includeDescriptions` 为 `true` 时，返回的 `ExplainedNumber` 会携带每个 perk 的贡献明细供 UI 展示。

```csharp
// 来自 CharacterObject.cs:327 的真实调用方式
public override int MaxHitPoints()
{
    return MathF.Round(Campaign.Current.Models.CharacterStatsModel.MaxHitpoints(this, false).ResultNumber);
}

// 来自 CharacterObject.cs:336 的带说明版本
public ExplainedNumber MaxHitPointsExplanation
{
    get { return Campaign.Current.Models.CharacterStatsModel.MaxHitpoints(this, true); }
}
```

### WoundedHitPointLimit
`public override int WoundedHitPointLimit(Hero hero)`

**用途 / Purpose:** 返回英雄被视为"负伤"的生命值下限，硬编码为 20。当英雄当前生命值低于此值时，角色 UI 会显示负伤状态，对话和任务系统也可能据此触发特殊分支。

```csharp
// 来自 Hero.cs:679 的真实调用方式
public int WoundedHitPointLimit
{
    get { return Campaign.Current.Models.CharacterStatsModel.WoundedHitPointLimit(this); }
}
```

## 使用示例

### 示例 1：读取角色等级和最大生命值

```csharp
// 在 CampaignBehaviorBase 或任何战役运行期代码中
CharacterObject character = MobileParty.MainParty.MemberRoster.GetCharacterAtIndex(0);
int tier = Campaign.Current.Models.CharacterStatsModel.GetTier(character);
ExplainedNumber maxHp = Campaign.Current.Models.CharacterStatsModel.MaxHitpoints(character, true);
InformationManager.DisplayMessage(new InformationMessage(
    $"兵种等级：{tier}，最大生命值：{maxHp.ResultNumber:F0}"));
```

### 示例 2：子类化并替换，让角色升级更快

```csharp
public class MyCharacterStatsModel : DefaultCharacterStatsModel
{
    // 把等级公式从 ceil((level-5)/5) 改为 ceil((level-3)/4)，升级更快
    public override int GetTier(CharacterObject character)
    {
        if (character.IsHero) return 0;
        return MathF.Min(MathF.Max(MathF.Ceiling((character.Level - 3f) / 4f), 0), MaxCharacterTier);
    }
}

// 在 SubModule.InitializeGameStarter 中注册
protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyCharacterStatsModel());
}
```

### 示例 3：提高负伤阈值

```csharp
public class MyCharacterStatsModel : DefaultCharacterStatsModel
{
    // 把负伤阈值从 20 提高到 40，让英雄更容易进入负伤状态
    public override int WoundedHitPointLimit(Hero hero) => 40;
}
```

## 依赖关系

- 上游：[SandBoxManager](../SandBoxManager) 在 `InitializeGameStarter` 阶段通过 `AddModel<CharacterStatsModel>` 注册此实例。
- 持有：[GameModels](../GameModels) 通过 `GetGameModel<CharacterStatsModel>()` 解析并暴露为 `Campaign.Current.Models.CharacterStatsModel`。
- 下游：[RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) 调用 `GetTier` 和 `MaxCharacterTier` 决定招募数量；[CharacterObject](../CharacterObject) 调用 `MaxHitpoints` 暴露 `MaxHitPoints` 属性；[Hero](../Hero) 调用 `WoundedHitPointLimit` 暴露负伤阈值。
- 基类：[CharacterStatsModel](../CharacterStatsModel) 定义抽象契约，位于 `ComponentInterfaces` 命名空间。
- 数值模式：[ExplainedNumber](../ExplainedNumber) 是 `MaxHitpoints` 的返回类型，支持携带来源说明。

## 参见

- [本区域目录](../)
- [CharacterStatsModel](../CharacterStatsModel) — 抽象基类，定义角色属性模型的接口契约
- [CharacterObject](../CharacterObject) — 调用 `MaxHitpoints` 暴露最大生命值
- [Hero](../Hero) — 调用 `WoundedHitPointLimit` 暴露负伤阈值
- [ExplainedNumber](../ExplainedNumber) — 数值结构，支持携带来源说明
