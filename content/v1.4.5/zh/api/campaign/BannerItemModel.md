---
title: "BannerItemModel"
description: "旗帜物品的规则模型：决定哪些旗帜物品能作为奖励出现、某个英雄能拿哪一档、某面旗能不能被升级。四个抽象成员，唯一实现 DefaultBannerItemModel，把旗分 1/2/3 三档。"
---

# BannerItemModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BannerItemModel : MBGameModel<BannerItemModel>`
**Base:** `MBGameModel<BannerItemModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs`

## 概述

`BannerItemModel` 是**「旗帜物品”这一玩法维度的规则契约**，只有四个抽象成员：

```csharp
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems();
public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero);
public abstract int GetBannerItemLevelForHero(Hero hero);
public abstract bool CanBannerBeUpdated(ItemObject item);
```

它解决的问题是：**游戏里所有 `IsBannerItem` 物品里，哪些能作为奖励掉落？某个具体英雄能拿哪一档？手里这面旗允不允许被换成新的一档？** 这三件事必须由一个可替换的模型统一回答，因为它们同时被 AI 生成、战斗奖励、比武奖励和封臣奖励四条路径使用。

在体系里它承担的是**「旗帜物品的资格与分档规则」**这一环。**它自己不生成任何东西，只回答资格问题。**

唯一实现 `DefaultBannerItemModel` 的规则非常直接：
- `GetPossibleRewardBannerItems()` = `Items.All.WhereQ(i => i.IsBannerItem && i.StringId != "campaign_banner_small")`——**排除 `campaign_banner_small`**（那是地图上显示的小旗图标道具，不是真旗帜）
- `GetBannerItemLevelForHero(hero)`：**家族领袖且是王国统治家族 → 3；家族领袖但不是统治家族 → 2；其余 → 1**
- `GetPossibleRewardBannerItemsForHero(hero)` = 候选集里 `item.Culture == null || item.Culture == hero.Culture` 且 `BannerComponent.BannerLevel == 该英雄档位` 的那些
- `CanBannerBeUpdated(item)` **恒返回 true**

## 心智模型

把它当成**「谁能拿哪面旗」的查询面板**就对了。

- **它只是查询，不写世界状态。** 四个成员全是纯读。真正写 `hero.BannerItem` 的是 [BannerCampaignBehavior](../BannerCampaignBehavior)，它读本模型再决定给不给。
- **「奖励候选集」有五个独立消费者。** 全树 5 处调用 `GetPossibleRewardBannerItems()`：`BannerHelper.cs:11`（随机选一面给英雄）、[BannerCampaignBehavior](../BannerCampaignBehavior) 的 `GetUpgradeBannerForHero`（`BannerCampaignBehavior.cs:96`）、`DefaultBattleRewardModel.cs:378`（战斗奖励）、`DefaultTournamentModel.cs:113`（比武奖励）、`DefaultVassalRewardsModel.cs:34`（封臣奖励）。**改候选集会同时影响这五条路径。**
- **档位是「家族地位」而不是「个人实力」。** `GetBannerItemLevelForHero` 只看 `hero.Clan.Leader == hero` 和 `hero.Clan.Kingdom.RulingClan == hero.Clan` 两个条件。**它完全不看英雄等级、年龄、技能或战绩。** 一个刚成年的家族领袖直接拿 3 档旗。
- **`GetPossibleRewardBannerItemsForHero` 会 NRE，如果候选项没有 `BannerComponent`。** 它的过滤条件里有 `(item.Culture == null || item.Culture == hero.Culture) && (item.ItemComponent as BannerComponent).BannerLevel == bannerItemLevelForHero`——**`as` 转 null 之后直接取 `.BannerLevel` 就崩**。前提是 `GetPossibleRewardBannerItems()` 只返回带 `BannerComponent` 的物品；**自定义模型一旦放进了没有旗帜组件的物品，这条就会炸。**
- **`CanBannerBeUpdated` 默认恒 true，意味着「升级路径永不禁用」。** `BannerCampaignBehavior.cs:70` 每天对每个 AI 英雄调一次它，然后按 10% 概率尝试升级旗档。返回 false 就等于彻底冻结某个物品的旗档。
- **「更新」的真实含义是换物品，不是改属性。** `BannerCampaignBehavior` 拿到 `GetBannerItemLevelForHero(hero)` 后去找 `GetUpgradeBannerForHero`，条件是**同文化 + 同 BannerEffect + 目标档位**（`BannerCampaignBehavior.cs:99`），找到就 `hero.BannerItem = new EquipmentElement(upgradeBannerForHero)`。找不到就回退到 `BannerHelper.GetRandomBannerItemForHero(hero)`。

### 四个成员与五个调用点速查

| 成员 | 调用点 | 决定什么 |
| --- | --- | --- |
| `GetPossibleRewardBannerItems()` | `BannerHelper.cs:11` / `BannerCampaignBehavior.cs:96` / `DefaultBattleRewardModel.cs:378` / `DefaultTournamentModel.cs:113` / `DefaultVassalRewardsModel.cs:34` | 全局候选集（排除 `campaign_banner_small`） |
| `GetPossibleRewardBannerItemsForHero(hero)` | `BannerHelper.cs:11` | 按文化 + 档位过滤后的候选集 |
| `GetBannerItemLevelForHero(hero)` | `BannerCampaignBehavior.cs:73` | 该英雄应处的旗档（1 / 2 / 3） |
| `CanBannerBeUpdated(item)` | `BannerCampaignBehavior.cs:70` | 这面旗允许被换掉吗 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetPossibleRewardBannerItems()` | `public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItems()` | **全局候选集**，默认实现是 `Items.All.WhereQ(i => i.IsBannerItem && i.StringId != "campaign_banner_small")`。**五个消费者共享它**：随机发旗的 `BannerHelper.cs:11`、找升级目标的 [BannerCampaignBehavior](../BannerCampaignBehavior) 的 `BannerCampaignBehavior.cs:96`、战斗奖励 `DefaultBattleRewardModel.cs:378`、比武奖励 `DefaultTournamentModel.cs:113`、封臣奖励 `DefaultVassalRewardsModel.cs:34`。**返回的是 `IEnumerable` 惰性序列，每次枚举都会重跑一遍过滤。** |
| `GetPossibleRewardBannerItemsForHero(Hero hero)` | `public abstract IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)` | **按英雄过滤的候选集**，也是 `BannerHelper.GetRandomBannerItemForHero` 唯一用到的成员（`BannerHelper.cs:11`）。默认实现先取全量候选，再按 `(item.Culture == null || item.Culture == hero.Culture) && (item.ItemComponent as BannerComponent).BannerLevel == 档位` 过滤。**`as` 转 null 后直接取 `.BannerLevel` 是崩溃点**——候选集里混入没有 `BannerComponent` 的物品就会炸。 |
| `GetBannerItemLevelForHero(Hero hero)` | `public abstract int GetBannerItemLevelForHero(Hero hero)` | 该英雄应处的旗档。**它只看家族地位，完全不看英雄强度**：`hero.Clan.Leader == hero` 且 `hero.MapFaction.IsKingdomFaction && hero.Clan.Kingdom.RulingClan == hero.Clan` → 3；只是家族领袖 → 2；其余 → 1。唯一调用点是 `BannerCampaignBehavior.cs:73`，**`hero.Clan` 为 null 直接 NRE**。 |
| `CanBannerBeUpdated(ItemObject item)` | `public abstract bool CanBannerBeUpdated(ItemObject item)` | 这面旗**允不允许被换成新的一档**。**默认实现恒返回 `true`**，等于升级路径永不禁用。唯一调用点是 `BannerCampaignBehavior.cs:70`——它对每个非玩家家族的 AI 英雄每日调用，命中后按 10% 概率（`BannerItemUpdateChance`）尝试升级。**返回 false 就彻底冻结某个物品的旗档。** |

## 真实示例

读全量候选集并检查某面旗是否具备 `BannerComponent`（这正是默认实现会崩的地方）：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static List<ItemObject> SafeBannerCandidates()
{
    List<ItemObject> result = new List<ItemObject>();
    if (Campaign.Current == null)
    {
        return result;
    }

    BannerItemModel model = Campaign.Current.Models.BannerItemModel;
    foreach (ItemObject item in model.GetPossibleRewardBannerItems())
    {
        if (item.ItemComponent is BannerComponent)
        {
            result.Add(item);
        }
    }

    return result;
}
```

判断某个英雄应处的旗档（复刻 `DefaultBannerItemModel` 的规则）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static int ExpectedBannerLevel(Hero hero)
{
    if (hero == null || Campaign.Current == null || hero.Clan == null)
    {
        return 0;
    }

    return Campaign.Current.Models.BannerItemModel.GetBannerItemLevelForHero(hero);
}
```

给一个英雄随机发一面合乎其档位的旗（走 `Helpers` 的真实入口）：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem;

public static void GrantBanner(Hero target)
{
    if (target == null || Campaign.Current == null)
    {
        return;
    }

    ItemObject banner = BannerHelper.GetRandomBannerItemForHero(target);
    if (banner != null)
    {
        target.BannerItem = new EquipmentElement(banner);
        Debug.Print("granted " + banner.StringId + " to " + target.Name.ToString(), 0);
    }
}
```

写一个自己的模型：只允许文化中立旗，且锁死某几面旗不许升级：

```csharp
using System.Collections.Generic;
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public class CultureFreeBannerItemModel : BannerItemModel
{
    private readonly HashSet<string> _frozen = new HashSet<string> { "battania_morrigan_banner" };

    public override IEnumerable<ItemObject> GetPossibleRewardBannerItems()
    {
        return Items.All.Where(item => item.IsBannerItem
            && item.StringId != "campaign_banner_small"
            && item.Culture == null);
    }

    public override IEnumerable<ItemObject> GetPossibleRewardBannerItemsForHero(Hero hero)
    {
        return GetPossibleRewardBannerItems();
    }

    public override int GetBannerItemLevelForHero(Hero hero)
    {
        return 1;
    }

    public override bool CanBannerBeUpdated(ItemObject item)
    {
        return item != null && !_frozen.Contains(item.StringId);
    }
}
```

## 风险与边界

- **`GetPossibleRewardBannerItemsForHero` 在候选集含无组件物品时会 NRE。** 默认实现用 `(item.ItemComponent as BannerComponent).BannerLevel`，`as` 返回 null 后取属性直接崩。**自定义模型的候选集必须保证每项都带 `BannerComponent`。**
- **`GetBannerItemLevelForHero` 会因 `hero.Clan == null` NRE。** 默认实现第一句就读 `hero.Clan.Leader`。调用前必须确认英雄有家族。
- **`GetPossibleRewardBannerItems()` 返回惰性 `IEnumerable`。** 每次枚举重跑一遍 `Items.All` 的过滤。**在热路径里多次枚举它会重复付出全表扫描的代价**——先 `.ToList()` 再用。
- **`CanBannerBeUpdated` 默认恒 true。** 意味着 `BannerCampaignBehavior` 会每天尝试给所有 AI 英雄换旗，只是概率 10%。想冻结某面旗必须自己实现。
- **档位只反映家族地位。** 不看等级、年龄、技能、战绩。给 mod 写「按军功升级旗帜」需要自己覆写 `GetBannerItemLevelForHero`，并同步覆写 `GetPossibleRewardBannerItemsForHero`，否则两边档位对不上。
- **升级条件里含 `BannerEffect` 相等。** 这是 `BannerCampaignBehavior.cs:99` 的逻辑，不是本模型的：它要求 `possibleRewardBannerItem.Culture == item.Culture` 且 `bannerComponent.BannerEffect == ((BannerComponent)item.ItemComponent).BannerEffect`。**改了本模型的候选集而不同步这个条件，会让升级永远找不到目标并回退到随机。**
- **候选集排除 `campaign_banner_small` 是硬编码的。** 那是地图旗帜图标道具，混进奖励池会导致玩家拿到一面小旗图标。
- **返回 `IEnumerable` 的成员都不缓存。** 每次调用重新过滤。`BannerCampaignBehavior.cs:96` 在循环里枚举它，节点多时是明显的重复开销。
- **抽象类，四个成员全要实现。** 唯一实现 `DefaultBannerItemModel` 可被继承，mod 派生类不会破坏编译。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BannerItemModel.cs` 是 15 行原始源码（四个抽象成员 + 类声明 + 三条 using）。跨版本比对时盯四点：四个成员是否增删、`campaign_banner_small` 这个排除项是否还在、档位规则是否仍是「家族领袖 + 王国统治家族 = 3」这一套、以及 `CanBannerBeUpdated` 是否仍然恒返回 true（它是唯一能真正关闭升级路径的开关）。

## 依赖关系

- 唯一实现：`DefaultBannerItemModel`（`TaleWorlds.CampaignSystem.GameComponents/DefaultBannerItemModel.cs`），另有两个公开常量 `BannerLevel1 = 1` / `BannerLevel2 = 2` / `BannerLevel3 = 3`
- 读取入口：[Campaign](../Campaign) 的 `Models.BannerItemModel`
- 随机发旗：`BannerHelper.GetRandomBannerItemForHero`（`Helpers/BannerHelper.cs:9-12`）内部 `GetRandomElementInefficiently()` 从 `GetPossibleRewardBannerItemsForHero` 的结果里随机取一个——**返回 null 是正常结果**，调用方一律判空
- 旗档写入方：[BannerCampaignBehavior](../BannerCampaignBehavior) 每天读 `CanBannerBeUpdated` 与 `GetBannerItemLevelForHero`，然后写 `hero.BannerItem`
- 奖励侧消费者：`DefaultBattleRewardModel`、`DefaultTournamentModel`、`DefaultVassalRewardsModel` 三个模型都从 `GetPossibleRewardBannerItems()` 取候选
- 物品侧：[ItemObject](../../core-extra/ItemObject) 的 `IsBannerItem` / `Culture` / `StringId` 与它挂的 [BannerComponent](../../core-extra/BannerComponent)（提供 `BannerLevel` 与 `BannerEffect`）是判定的原始数据
- 桶首页：[campaign API 分区](../)
