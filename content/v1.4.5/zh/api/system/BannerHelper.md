---
title: "BannerHelper"
description: "选择英雄 Banner 物品，并把匹配的 BannerEffect 加入 ExplainedNumber 的 Campaign 辅助。"
---
# BannerHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class BannerHelper`  
**基类：** `System.Object`  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/BannerHelper.cs`

## 一句话职责

`BannerHelper` 把实时 [Hero](../../campaign/Hero) 连接到当前 [BannerItemModel](../../campaign/BannerItemModel)，并把匹配的 [BannerEffect](../../core-extra/BannerEffect) 从 [BannerComponent](../../core-extra/BannerComponent) 加入 [ExplainedNumber](../../campaign/ExplainedNumber)。

## 心智模型

这是一个边界很窄的计算辅助，不拥有 Banner 装备或战斗属性。

- `GetRandomBannerItemForHero` 向 `Campaign.Current.Models.BannerItemModel` 请求特定 Hero 可获得的物品，再随机选择一个。它返回 [ItemObject](../../core-extra/ItemObject)，由调用方决定是否写入 `Hero.BannerItem`、作为战利品发放或丢弃。
- `AddBannerBonusForBanner` 把实时 `BannerComponent` 适配到已有的 `ExplainedNumber`。当组件为空，或组件的 `BannerEffect` 不是请求的效果时，它什么也不做。
- 私有效果分支区分 `EffectIncrementType.Add` 和 `EffectIncrementType.AddFactor`。helper 会把效果名记录为解释来源，但不创建 stat 计算，也不拥有结果。

## 什么时候使用，什么时候不要使用

- **适合：** Campaign Banner 奖励/升级流程需要当前 `BannerItemModel` 为英雄选择兼容物品时使用。
- **适合：** 战斗或属性 Model 已有实时 Banner 组件和 `ExplainedNumber`，需要把 Banner 效果加入该计算时使用。
- **不要：** 绕过 `BannerCampaignBehavior` 的资格和生命周期检查，直接把结果写入 `Hero.BannerItem`。
- **不要：** 用它替代 `BannerItemModel`、`BannerComponent` 或拥有 `ExplainedNumber` 的上层计算 Model。
- **不要臆断：** 非空 Banner 物品会自动应用所有效果；组件实际的 `BannerEffect` 必须与请求效果相等。

## 依赖关系

- 奖励选择：[Campaign](../../campaign/Campaign)、[BannerItemModel](../../campaign/BannerItemModel)、[Hero](../../campaign/Hero) 和 [ItemObject](../../core-extra/ItemObject)。
- 效果数据：[BannerComponent](../../core-extra/BannerComponent)、[BannerEffect](../../core-extra/BannerEffect)、`EffectIncrementType` 和 `GetBannerEffectBonus()`。
- 计算目标：[ExplainedNumber](../../campaign/ExplainedNumber)，由它的拥有者决定何时消费最终属性值。
- 调用方：`BannerCampaignBehavior` 把选择结果分配给 Hero；SandBox 的伤害、属性和士气 Model 把实时 Banner 组件传给 `AddBannerBonusForBanner`。

## 公开成员

### GetRandomBannerItemForHero

`GetRandomBannerItemForHero(Hero hero)` 调用 `Campaign.Current.Models.BannerItemModel.GetPossibleRewardBannerItemsForHero(hero)`，再从 Model 提供的集合中选择物品。它不会装备物品、加入库存，也不会发布奖励事件。

```csharp
Hero hero = Hero.MainHero;
if (Campaign.Current != null && hero != null)
{
    ItemObject bannerItem = BannerHelper.GetRandomBannerItemForHero(hero);
    if (bannerItem != null)
    {
        hero.BannerItem = new EquipmentElement(bannerItem);
    }
}
```

这里把分配动作单独写出，是因为 v1.4.5 的 `BannerCampaignBehavior` 才拥有 Hero 何时获得或升级 Banner 的资格判断。

### AddBannerBonusForBanner

`AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref ExplainedNumber bonuses)` 先检查 `bannerComponent` 非空，并确认它的 `BannerEffect` 是请求的效果；之后读取组件的 bonus，按加法值或加法系数写入，并保留效果名作为解释来源。

```csharp
if (activeBanner != null && activeBanner.BannerEffect != null)
{
    BannerHelper.AddBannerBonusForBanner(
        activeBanner.BannerEffect,
        activeBanner,
        ref bonuses);
}
```

这里的 `activeBanner` 是战斗/属性 Model 已选出的组件，`bonuses` 是该 Model 已拥有的 `ExplainedNumber`；两者都不是 helper 创建或拥有的对象。

## 真实示例

下面组合了游戏实际使用的两个边界：Campaign behavior 为玩家 Hero 选择物品，属性计算则把 Hero 当前 Banner 效果加入已有的解释数字。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public static class BannerInspection
{
    public static ItemObject SelectPlayerBanner()
    {
        if (Campaign.Current == null || Hero.MainHero == null)
        {
            return null;
        }

        return BannerHelper.GetRandomBannerItemForHero(Hero.MainHero);
    }

    public static void AddActiveBannerEffect(BannerComponent activeBanner, ref ExplainedNumber bonuses)
    {
        if (activeBanner?.BannerEffect != null)
        {
            BannerHelper.AddBannerBonusForBanner(activeBanner.BannerEffect, activeBanner, ref bonuses);
        }
    }
}
```

`SelectPlayerBanner` 只返回候选；behavior 在改变 Hero 之前仍需执行原 Campaign 流程中的资格、随机 tick 和装备写入检查。

## 风险与存档边界

- **Campaign 阶段：** `GetRandomBannerItemForHero` 会读取 `Campaign.Current.Models`，应在 Campaign Model 和 Hero 对象图已初始化后调用。
- **Model 可替换：** Banner 候选和等级来自当前 `BannerItemModel`；不要复制候选列表，也不要假定默认 Model 的文化规则永远不变。
- **效果匹配：** 效果不匹配的组件会被有意忽略；传入另一个请求效果不能强行制造 bonus。
- **计算所有权：** `AddBannerBonusForBanner` 通过引用修改传入的 `ExplainedNumber`，不是修改保存的 Hero 或 Banner 对象；只能在拥有这个数字的计算中调用。
- **存档边界：** `Hero.BannerItem` 和 BannerComponent 属于 Campaign/Core 对象图；不要保存临时 `ExplainedNumber`，也不要跨 Campaign 卸载/加载缓存 Model 结果。

## 版本注记

本页按 v1.4.5 `Helpers/BannerHelper.cs` 编写。私有效果分支只处理 `Add` 和 `AddFactor`；效果资格、Banner 等级和奖励时机仍由 `BannerItemModel`、`BannerCampaignBehavior` 及调用属性 Model 负责。

## 导航

- [↑ API 系统索引](../)
- [相关：Hero](../../campaign/Hero)
- [相关：Campaign](../../campaign/Campaign)
- [相关：BannerItemModel](../../campaign/BannerItemModel)
- [相关：BannerComponent](../../core-extra/BannerComponent)
- [相关：BannerEffect](../../core-extra/BannerEffect)
- [相关：ItemObject](../../core-extra/ItemObject)
- [相关：ExplainedNumber](../../campaign/ExplainedNumber)
