---
title: "BannerHelper：MountAndBlade 计算中的 Banner 效果"
description: "BannerHelper 在 v1.4.5 中把匹配的 BannerComponent 效果加入实时 FactoredNumber，供战斗与 Agent 属性计算使用。"
---
# BannerHelper

**命名空间：** `MBHelpers`  
**模块：** `TaleWorlds.MountAndBlade`  
**类型：** `public static class BannerHelper`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.MountAndBlade/MBHelpers/BannerHelper.cs`

## 一句话职责

`BannerHelper` 是 MountAndBlade 层的计算适配器：它接收请求的 [BannerEffect](../../core-extra/BannerEffect)，检查实时 [BannerComponent](../../core-extra/BannerComponent)，再把组件当前等级的 bonus 加入已有的 [FactoredNumber](../../mission-ext/FactoredNumber)。

## 心智模型

这是窄职责的计算辅助类，不是 Banner 所有者，也不是战斗 Model。调用方已经拥有计算过程，并从 `MissionGameModels.Current.BattleBannerBearersModel` 取得活动 Banner；Helper 只判断组件是否匹配请求的效果，然后通过 `ref` 修改传入的 `FactoredNumber`。

Campaign `Helpers` 命名空间中还有另一个 `BannerHelper`。[Campaign 页面](../../system/BannerHelper)负责英雄 Banner 物品选择与 `ExplainedNumber` 贡献；本页只处理 MountAndBlade 的 `FactoredNumber`，用于伤害、士气、移动或武器属性计算。不要用任一 Helper 装备 Banner、选择队伍 Banner，或替换拥有外围计算的 Model。

## 何时使用，何时不要使用

- 当实时属性或伤害计算已经有 `BannerComponent` 与 `FactoredNumber` 时，在该计算内部使用 `AddBannerBonusForBanner`。
- 从 [DefaultBannerEffects](../../core-extra/DefaultBannerEffects) 传入具体请求效果，例如 `IncreasedMeleeDamage` 或 `IncreasedMountMovementSpeed`，不要根据物品名称猜效果。
- 不要传入空效果，也不要把无关计算中的组件传进来；请求效果和组件都必须是有意义的运行时对象。
- 不要用它修改 `BannerComponent.BannerLevel`、分配装备或保存 bonus。Banner 数据与计算结果分别由各自所有者管理。

## 依赖关系图

```text
Formation / Agent 属性或伤害 Model
                |
                v
MissionGameModels.Current.BattleBannerBearersModel
                |
                v
       BannerComponent + 请求的 BannerEffect
                |
                v
          MBHelpers.BannerHelper
                |
                v
        FactoredNumber.ResultNumber
```

- 调用方提供活动组件和请求效果。常见调用方包括 `CustomAgentApplyDamageModel`、`CustomBattleAgentStatCalculateModel`、`CustomBattleMoraleModel` 以及 Sandbox 对应 Model。
- `BannerComponent.GetBannerEffectBonus()` 通过 [BannerEffect](../../core-extra/BannerEffect) 读取组件的 `BannerLevel`。Helper 不自行计算 Banner 等级。
- `EffectIncrementType.Add` 与 `EffectIncrementType.AddFactor` 是两条算术分支；[FactoredNumber](../../mission-ext/FactoredNumber) 负责 base、factor 和最终限制。
- 本页不是 Campaign 奖励路径。英雄物品选择与 Campaign Model 所有权见 [Campaign BannerHelper](../../system/BannerHelper)。

## 公开契约

### `AddBannerBonusForBanner`

`AddBannerBonusForBanner(BannerEffect bannerEffect, BannerComponent bannerComponent, ref FactoredNumber bonuses)` 的源码行为分三步：

1. 当 `bannerComponent` 为空，或它实际携带的 `BannerEffect` 不是请求的 `bannerEffect` 时，直接不改变 `bonuses`。
2. 通过 `GetBannerEffectBonus()` 读取匹配组件的 bonus；该方法使用组件的 Banner 等级。
3. 当 `EffectIncrementType.Add` 时调用 `FactoredNumber.Add`；当 `EffectIncrementType.AddFactor` 时调用 `FactoredNumber.AddFactor`。

`FactoredNumber.Add` 修改 base number；`AddFactor` 累加 factor，最终参与 `BaseNumber + BaseNumber * sumOfFactors`。MountAndBlade Helper 不记录解释标签，这一点不同于把贡献写入 `ExplainedNumber` 的 Campaign Helper。

## 真实调用链：伤害放大

`CustomAgentApplyDamageModel.ApplyDamageAmplifications` 从战斗 Banner Model 取得攻击方队伍的活动 Banner，从 `baseDamage` 创建累加器，再对匹配的默认效果调用 Helper：

```csharp
Formation attackerFormation = attackInformation.AttackerFormation;
BannerComponent activeBanner =
    MissionGameModels.Current.BattleBannerBearersModel.GetActiveBanner(attackerFormation);
FactoredNumber bonuses = new FactoredNumber(baseDamage);

if (activeBanner != null && attackInformation.AttackerWeapon.CurrentUsageItem.IsMeleeWeapon)
{
    BannerHelper.AddBannerBonusForBanner(
        DefaultBannerEffects.IncreasedMeleeDamage,
        activeBanner,
        ref bonuses);
}

return bonuses.ResultNumber;
```

源码还会在武器或碰撞条件满足时使用 `IncreasedMeleeDamageAgainstMountedTroops`、`IncreasedRangedDamage` 和冲锋效果。Helper 不选择这些条件，也不返回最终伤害；两者都由外围 Model 负责。

## 生命周期、变更与存档边界

- 只有在 `MissionGameModels.Current` 与活动战斗 Banner Model 能提供实时组件后才调用；它不是战役启动服务。
- `bannerComponent.BannerEffect == bannerEffect` 是效果身份/选择保护。Banner 非空但携带其他效果时会被刻意忽略。
- `FactoredNumber` 是局部值类型累加器。通过 `ref` 修改的是当前计算，不是已保存的 Hero、Formation 或 BannerComponent。
- 效果数值来自组件等级与效果配置的等级 bonus。调用方不要再次应用同一 factor。
- 调用方应在计算边界读取或返回 `bonuses.ResultNumber`；把累加器留到计算外不会保存战役 bonus。

## 风险

- 传入空 `BannerEffect` 时，如果组件也匹配空效果并进入分支，读取增量类型可能失败；应使用所有者提供的已注册具体效果。
- Banner 效果尚未反序列化或初始化时传入组件，可能得到无效 bonus。Banner 对象属于 Core 对象注册生命周期。
- 从 UI 刷新、存档回调或后台线程调用，会在错误生命周期读取/修改实时战斗状态。
- `Add` 与 `AddFactor` 不可互换。把 `0.15f` factor 当作加法 `0.15`，或再次把 factor 乘一遍，都会改变结果。
- Helper 不负责限制或解释结果；外围 `FactoredNumber` 计算拥有限制与最终消费点。
- 不要把 `FactoredNumber`、活动 `BannerComponent` 或 `MissionGameModels` 序列化为自定义存档状态；它们是 Model 计算的临时输入。

## 版本注记

本页依据 v1.4.5 `MBHelpers/BannerHelper.cs`。实现只有一个公开方法，只支持 `EffectIncrementType.Add` 与 `EffectIncrementType.AddFactor`；装备所有权、效果注册、Banner 选择和伤害条件都不属于此 Helper。

## 导航

- [↑ Campaign 扩展索引](../)
- [↔ Campaign BannerHelper](../../system/BannerHelper)
- [相关：BannerComponent](../../core-extra/BannerComponent)
- [相关：BannerEffect](../../core-extra/BannerEffect)
- [相关：DefaultBannerEffects](../../core-extra/DefaultBannerEffects)
- [相关：EffectIncrementType](../../core-extra/EffectIncrementType)
- [相关：FactoredNumber](../../mission-ext/FactoredNumber)
- [相关：BattleBannerBearersModel](../../mission-ext/BattleBannerBearersModel)
- [English page](../../../../en/api/campaign-ext/BannerHelper)
