---
title: "StoryModeBannerItemModel"
description: "控制主线龙旗作为战利品出现：教学期不产出、教学后从奖励池剔除所有 dragon_banner 部件，并禁止玩家更新它们。"
---
# StoryModeBannerItemModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeBannerItemModel : BannerItemModel`
**Base:** `BannerItemModel`（继承自 `MBGameModel<BannerItemModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBannerItemModel.cs`

## 概述

龙旗（dragon banner）是主线第一阶段的核心收集物，由四件物品拼成：`dragon_banner`、`dragon_banner_center`、`dragon_banner_dragonhead`、`dragon_banner_handle`。这个模型做的是「防止它们从别的渠道漏进玩家背包」：教学阶段还没结束时奖励池直接返回空列表；教学结束后把所有龙旗部件从奖励候选里过滤掉；同时封死 `CanBannerBeUpdated`，玩家无法拿龙旗去旗匠处重铸或升级。它是一个纯粹的白名单式过滤器，不改变任何其它旗的行为。

## 心智模型

注册方式是 `campaignGameStarter.AddModel<BannerItemModel>(new StoryModeBannerItemModel())`，位于 [CampaignGameStarter](../../campaign/CampaignGameStarter) 的模型装配阶段。它被两条完全不同的路径消费：

- **战利品生成**：`GetPossibleRewardBannerItems()` 在玩家打赢一场有敌方英雄的地图事件后被问，返回候选物品集合。教学未完成时返回 `new List<ItemObject>()`——注意是空列表而不是 `null`，调用方不需要判空。
- **旗编辑器校验**：`CanBannerBeUpdated(ItemObject)` 在玩家进入旗编辑界面保存时被问，返回 false 就禁用更新按钮。

过滤条件是一个私有谓词 `IsItemDragonBanner(ItemObject item)`，用 `item.StringId` 与四个硬编码字符串逐一比较。这四个 id 也是 [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) 读档迁移时检查的那批 id——同一批常量散落在两个文件里，没有共享常量类。

**顺序为什么重要**：`GetPossibleRewardBannerItems()` 里 StoryMode 先调用 `base.BaseModel.GetPossibleRewardBannerItems()` 再 `.WhereQ(...)` 过滤。所以链上任何下游模型先注入的新物品也会被一并过滤掉，这是有意的。反过来，如果你把过滤条件放宽，必须保证仍在 StoryMode 之后注册，否则你拿到的还是已经被剔过的集合。

**常见误用与坑**

- **不要按物品名匹配。** 过滤完全依赖 `StringId`。mod 若替换了龙旗物品的 StringId，剧情保护立刻失效。
- **`GetPossibleRewardBannerItemsForHero(Hero hero)` 不过滤教学状态。** 它只做龙旗过滤，不检查 `TutorialPhase`。教学期调用它仍会返回非空结果——与无参重载的行为不一致。
- **改 `GetBannerItemLevelForHero` 无效于防漏。** 它只是透传，控制的是等级取值，跟龙旗没关系。
- **教学期空列表 ≠ 没有战利品。** 调用方通常只是「没有可选旗」，其它金币/俘虏/装备战利品照给。

## 怎么用

### 怎么拿到它

`public class StoryModeBannerItemModel : BannerItemModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBannerItemModel.cs:11`，全文 47 行，四个 override 加一个私有谓词。

注册点：`campaignGameStarter.AddModel<BannerItemModel>(new StoryModeBannerItemModel())`（`StoryModeSubModule.cs:103`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.BannerItemModel`。

核心是私有 `IsItemDragonBanner(ItemObject item)`（`:30`），它按 `StringId` 硬比四个值：`"dragon_banner"`、`"dragon_banner_center"`、`"dragon_banner_dragonhead"`、`"dragon_banner_handle"`（`:32`）。**四个 id 与 [MainStoryLine](../MainStoryLine) 的四个 `public const string` 完全一致**（`MainStoryLine.cs:279`–`:288`）。

四个 override 的分工：

| 方法 | 声明行 | 处理 |
| --- | --- | --- |
| `GetPossibleRewardBannerItems()` | `:14` | 教学未完成 → 返空表（`:16`→`:18`）；否则 `WhereQ` 滤掉龙旗四件（`:20`） |
| `CanBannerBeUpdated(ItemObject item)` | `:24` | 龙旗直接 false，否则 `&&` 基类结果（`:26`） |
| `GetPossibleRewardBannerItemsForHero(Hero hero)` | `:36` | `WhereQ` 滤掉龙旗四件（`:38`） |
| `GetBannerItemLevelForHero(Hero hero)` | `:42` | 纯透传（`:44`） |

`WhereQ` 是 `TaleWorlds.LinQuick` 的扩展（`:7`）。注意 `GetPossibleRewardBannerItemsForHero`（`:36`）**没有教学分支**——教学期它照样返回列表，只是把龙旗滤掉。

### 典型用法

```csharp
// 运行期读
BannerItemModel banners = Campaign.Current.Models.BannerItemModel;

// 教学未完成：候选表为空
IEnumerable<ItemObject> rewards = banners.GetPossibleRewardBannerItems();
Debug.Print("候选旗数量=" + rewards.Count());

// 教学完成后：枚举候选，龙旗四件已被剔除
foreach (ItemObject item in banners.GetPossibleRewardBannerItems())
{
    Debug.Print(item.StringId + " 等级=" + banners.GetBannerItemLevelForHero(Hero.MainHero));
}

// 龙旗不可升级：CanBannerBeUpdated 恒 false
ItemObject dragon = Game.Current.ObjectManager.GetObject<ItemObject>("dragon_banner");
Debug.Print("龙旗可升级=" + banners.CanBannerBeUpdated(dragon));

// 指定英雄的候选旗（无教学分支）
Debug.Print("兄长候选旗数=" + banners.GetPossibleRewardBannerItemsForHero(StoryModeHeroes.ElderBrother).Count());
```

### 最容易踩的坑

它是按 **`ItemObject.StringId` 硬比**来识别龙旗的（`:32`），不是按物品类型或是否在主线旗物品栏里。你复制一个 `dragon_banner` 出来、改了 `StringId`，它就不再被过滤——于是龙旗会出现在王国旗赏赐的候选池里，而它的 `BannerEffect` 是三档全零、`IncrementType` 为 `Invalid` 的空效果（[StoryModeBannerEffects](../StoryModeBannerEffects)），玩家拿到的是一个什么都不加的旗。反过来，mod 若把某个正常旗物品的 `StringId` 改成这四个之一，它会被无声地从候选池里剔除，没有任何报错。

## 主要成员

- `GetPossibleRewardBannerItems()`
  返回 `IEnumerable<ItemObject>`：全体候选旗物品。教学未完成返回空表；否则取基类结果后剔除四个龙旗 id。**MapEvent 结算后调用**，不要手动调。
- `GetPossibleRewardBannerItemsForHero(Hero hero)`
  针对特定英雄的候选旗。**不做教学期判断**，只剔除龙旗。用于按英雄定制旗的路径。
- `CanBannerBeUpdated(ItemObject item)`
  返回该物品能否被旗匠更新/升级。龙旗一律 false，其它物品交基类决定。**旗编辑器保存前调用**。
- `IsItemDragonBanner(ItemObject item)`（private）
  四个 StringId 的相等判断。不要从外部调用，也不要复制这份列表到别处——改这里不会更新 `MainStorylineCampaignBehavior` 里的读档迁移逻辑。

## 使用示例

```csharp
// 场景：mod 想让龙旗可以在旗匠处被重铸（放宽限制）
// 做法不是改 StoryMode，而是叠一层并只对龙旗放开
public class MyBannerItemModel : BannerItemModel
{
    public override bool CanBannerBeUpdated(ItemObject item)
    {
        bool isDragonBanner = item.StringId == "dragon_banner"
            || item.StringId == "dragon_banner_center"
            || item.StringId == "dragon_banner_dragonhead"
            || item.StringId == "dragon_banner_handle";
        if (isDragonBanner)
        {
            return true;   // 直接放行，跳过 StoryMode 的禁止
        }
        return base.BaseModel.CanBannerBeUpdated(item);
    }

    public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()
    {
        // 注意：这里拿到的是 StoryMode 过滤后的集合，龙旗已经不在里面
        return base.BaseModel.GetPossibleRewardBannerItems();
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<BannerItemModel>(new MyBannerItemModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **与主线收集进度耦合**：龙旗的正常获取路径是第一阶段任务（`IstianasBannerPieceQuest` / `ArzagosBannerPieceQuest`），不走战利品随机。若你让龙旗能随机掉落，会出现「四件齐全却从未触发拼旗」的孤儿状态，进而卡住 `MainStorylineCampaignBehavior` 的读档迁移分支。
- **`GetPossibleRewardBannerItems` 的空表不等于「战斗无奖励」**：调用方对空集合的处理各家不同，自己过滤要小心。
- **多 mod 叠加时过滤不可绕过**：只要有一层返回空表，最终就是空。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<BannerItemModel>` 的调用位置
- [MBGameModel](../../core-extra/MBGameModel) — `BaseModel` 链的来源，透传落到哪一层由此决定
- [MainStorylineCampaignBehavior](../MainStorylineCampaignBehavior) — 读档迁移时同样按这四个 StringId 检查玩家背包里的龙旗部件
- [FirstPhaseCampaignBehavior](../FirstPhaseCampaignBehavior) — 收集龙旗碎片的主线任务链在此启动
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖