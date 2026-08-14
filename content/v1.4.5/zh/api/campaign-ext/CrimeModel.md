---
title: "CrimeModel"
description: "战役中玩家在各大势力（家族/王国）的犯罪等级（crime rating）规则模型：等级阈值、判定区间、赎罪成本与每日自然衰减，均由它定义，由 ChangeCrimeRatingAction / PayForCrimeAction / CrimeCampaignBehavior 调用。"
---
# CrimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`  
**Base:** `MBGameModel<CrimeModel>`  
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## 概述

`CrimeModel` 是 Bannerlord 战役里**玩家犯罪等级（player crime rating）**这套规则的抽象入口。每个非强盗家族（`Clan`）和每个王国（`Kingdom`）都通过 `MainHeroCrimeRating` 记录主角在它那里的“案底值”（0 到上限，默认 100）。这个值越高，主角在该势力境内一旦被抓住，要面临的惩罚越重（罚款、影响力、体罚甚至处决）。

`CrimeModel` 本身**只提供规则**：等级上限、什么程度算“轻微/中度/严重”、赎罪要花多少金/影响力、每天自然涨还是自然降。它不持有任何状态、不存档、不直接改 `MainHeroCrimeRating`。真正改存档字段的是 [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction/)，真正驱动每日衰减和审判菜单的是 [CrimeCampaignBehavior](../../campaign-ext/CampaignBehaviorBase/) 与 [PayForCrimeAction](../../campaign-ext/PayForCrimeAction/)。

## 心智模型

把 `CrimeModel` 当成**一张贴在“玩家犯罪”系统上的规则表**，而不是一个会自己跑的逻辑体：

- 它随战役启动由 `SandBoxManager` 通过 `gameStarter.AddModel(new DefaultCrimeModel())` 注册进 `Models` 容器；运行时任何代码都通过 `Campaign.Current.Models.CrimeModel` 拿**同一个**实例来读规则，不要自己 `new`。
- 它位于**战役（Campaign）层**，不参与战斗场景（Mission）。犯罪等级的起因多来自玩家在城镇的破坏/偷窃/巷战（见 [Alley](../Alley/) 与 [AlleyModel](../AlleyModel/)），后果在城镇审判菜单与每日 tick 中结算。
- 它提供给上层的是**纯查询**：传入一个 `IFaction`，返回阈值、判定或成本。它从不修改 `faction.MainHeroCrimeRating`——那属于 `ChangeCrimeRatingAction` 的职责。
- 想改规则（比如让“严重”门槛变成 80、赎罪更便宜）就继承 [DefaultCrimeModel](../DefaultCrimeModel/) 并重写对应成员，再用 `AddModel` 替换；不要去魔改调用方。
- 不要把 `CrimeModel` 当作存档对象去序列化，也不要缓存它的返回值到字段里——因为 mod 可能在加载时替换实现，且 `MainHeroCrimeRating` 本身每晚都会变。

## 如何获取 CrimeModel

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

// 运行时唯一入口：Campaign 的 Models 容器
CrimeModel crime = Campaign.Current.Models.CrimeModel;

// 替换实现（在 MBSubModuleBase 的 OnGameInitialization 期间）
// gameStarter.AddModel(new MyCrimeModel());
```

如果某个 `Models` 容器里没有注册 `CrimeModel`（你移除了 `DefaultCrimeModel` 又没补一个），`Campaign.Current.Models.CrimeModel` 会返回 `null`，下游每日 tick 与审判菜单会立刻空引用崩溃——见 [风险](#风险)。

## 主要成员

### 犯罪等级阈值与区间

这些成员定义“案底值”的刻度，是其它判定的基础。

#### `public abstract float DeclareWarCrimeRatingThreshold { get; }`
当玩家对某势力的 `MainHeroCrimeRating` 超过此阈值、且玩家是该势力敌对阵营的领袖时，[ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction/) 会触发 `DeclareWarAction` 直接宣战。默认 `60f`。[CrimeCampaignBehavior](../../campaign-ext/CampaignBehaviorBase/) 在 `OnMakePeace` 中还会用它的 `0.5` 倍（默认 30）作为和平后强制清零的上限。

#### `public abstract float GetMaxCrimeRating()`
案底值被 `Clamp` 的上限。所有通过 `ChangeCrimeRatingAction.Apply` 的增减最终都被限制在 `[0, 此值]`。默认 `100f`。

#### `public abstract float GetMinAcceptableCrimeRating(IFaction faction)`
该势力能容忍、不主动追究的案底下限；低于它则视为“已清白”。默认：对玩家自己所属阵营（`Hero.MainHero.MapFaction`）返回 `20f`，其它势力返回 `30f`。[PayForCrimeAction](../../campaign-ext/PayForCrimeAction/) 拿它作为 `GetCost` 的 `minimumCrimeRating` 参数，即“只需为超过容忍下限的部分买单”。

#### `public abstract float GetCrimeRatingAfterPunishment()`
玩家完成一次赎罪（付费/体罚/影响力）后残留的案底值。默认 `25f`——注意即使“付清”，也只降到 25（仍属“轻微”区间），不会归零。

### 玩家犯罪等级判定

下面三个判定与 `MainHeroCrimeRating` 的区间挂钩，供审判菜单决定允许哪种支付方式（`CanPayCriminalRatingValueWith`）和 UI 文案。

#### `public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction)`
`faction.MainHeroCrimeRating > 0f`。即“玩家在该势力有没有任何案底”。

#### `public abstract bool IsPlayerCrimeRatingMild(IFaction faction)`
`0 < MainHeroCrimeRating <= 30f`。轻微：通常只需付钱或影响力即可了结。

#### `public abstract bool IsPlayerCrimeRatingModerate(IFaction faction)`
`30f < MainHeroCrimeRating <= 65f`。中度：可付钱、影响力（同阵营时）或接受体罚。

#### `public abstract bool IsPlayerCrimeRatingSevere(IFaction faction)`
`MainHeroCrimeRating >= 65f`。严重：同阵营时可付钱/影响力；敌对阵营下只能选择“体罚+付钱”或“处决”（若付不起金）。

> 区间边界（`30` 与 `65`）是 `DefaultCrimeModel` 里的私有常量 `ModerateCrimeRatingThreshold` / `SevereCrimeRatingThreshold`。重写实现时务必保持 `[0, Mild上限]`、`(Mild上限, Severe下限]`、`[Severe下限, Max]` 三段互斥且连续，否则判定会出现空洞或重叠。

### 成本与每日变化

#### `public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)`
计算“把案底清到 `minimumCrimeRating` 以下”要付出的代价。默认实现：`x = max(0, MainHeroCrimeRating - minimumCrimeRating)`，然后
- `Gold`：`(int)(MathF.Pow(x, 1.2f) * 100f)`（第纳尔，向下取整）；
- `Influence`：`MathF.Pow(x, 1.2f)`（家族影响力）；
- 其它标志（`Punishment` / `Execution` / `ExMachina`）：`0f`（那两种是物理惩罚，不计金额）。
`paymentMethod` 是带 `[Flags]` 的枚举，可组合（如 `Gold | Punishment`）。

#### `public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)`
返回该势力对玩家案底值的**每日自然变化量**（正=涨，负=降）。默认实现：玩家拥有的巷子（`Alley`）按 [AlleyModel](../AlleyModel/) 的每日犯罪产出加正分；若案底非 0，再根据“是否自己家族 / 自己王国 / 同王国 / 交战 / 其它”给不同负分（自己家族 −5、自己王国 −5、同王国 −1.25、交战 −0.25、其它 −1，基础），并叠加巧手系 perks（如 `DefaultPerks.Roguery.WhiteLies`）。传 `includeDescriptions: true` 会返回带中文说明的 `ExplainedNumber`，玩家 encyclopaedia/日志用它展示明细。`Clan.DailyCrimeRatingChange` / `Kingdom.DailyCrimeRatingChange` 属性正是直接调它取 `.ResultNumber`。

### 嵌套枚举 `CrimeModel.PaymentMethod : uint`（[Flags]）

| 值 | 含义 |
|----|------|
| `Gold = 1u` | 付第纳尔（调用 [GiveGoldAction](../../campaign-ext/GiveGoldAction/) 扣除主角金币） |
| `Influence = 2u` | 扣主角家族影响力（`ChangeClanInfluenceAction`） |
| `Punishment = 4u` | 体罚：随机使主角负伤或（小概率）死亡 |
| `Execution = 8u` | 处决：直接 `KillCharacterAction.ApplyByMurder` |
| `ExMachina = 0x1000u` | 预留/特殊标志位，默认实现不参与计价 |

可位或组合，例如 `Gold | Punishment` 表示“又付钱又挨打”。

## 典型用法示例

### 示例 1：读取玩家在某势力的案底等级与赎金成本

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Localization;

// 在城镇内或对话中，拿到当前据点所属阵营
IFaction faction = Settlement.CurrentSettlement.MapFaction;
CrimeModel crime = Campaign.Current.Models.CrimeModel;

float rating = faction.MainHeroCrimeRating;
if (crime.IsPlayerCrimeRatingSevere(faction))
{
    float goldFine = PayForCrimeAction.GetClearCrimeCost(faction, CrimeModel.PaymentMethod.Gold);
    InformationManager.DisplayMessage(
        new InformationMessage($"严重案底 {rating:F0}，赎金约 {goldFine:F0} 第纳尔"));
}
else if (crime.DoesPlayerHaveAnyCrimeRating(faction))
{
    ExplainedNumber daily = crime.GetDailyCrimeRatingChange(faction, includeDescriptions: true);
    InformationManager.DisplayMessage(
        new InformationMessage($"每日变化 {daily.ResultNumber:F2}：{daily.GetDetailedExplanation()}"));
}
```

### 示例 2：替换实现以放宽犯罪惩罚（SubModule 钩子）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;

// 自己的实现：提高严重门槛、抬高上限
public class MyCrimeModel : DefaultCrimeModel
{
    public override float DeclareWarCrimeRatingThreshold => 80f;
    public override float GetMaxCrimeRating() => 120f;
    public override float GetCrimeRatingAfterPunishment() => 10f;
}

// 在 MBSubModuleBase.OnGameInitialization(gameStarter) 中注册，
// 必须覆盖（不能只 AddModel 而不移除默认的，否则两个都留着会按注册顺序取最后一个）：
gameStarter.AddModel(new MyCrimeModel());
```

> 实际替换时推荐在 `OnGameInitialization` 早期 `AddModel`，并确保 `DefaultCrimeModel` 已被你的实现取代；注册时机晚于 `SandBoxManager` 的 `AddModel(new DefaultCrimeModel())` 则你的实例会覆盖它。

## 依赖图

- 上游（谁创建/持有它）：[Campaign](../../campaign/Campaign/) → `Models` 容器（`GameModels.CrimeModel`）→ 由 [SandBoxManager](../SandBoxManager/) 在初始化时 `AddModel(new DefaultCrimeModel())` 注入；默认实现见 [DefaultCrimeModel](../DefaultCrimeModel/)。
- 下游（谁读它）：
  - [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction/) —— 改案底时调 `GetMaxCrimeRating()` 做 `Clamp`，并在超过 `DeclareWarCrimeRatingThreshold` 时宣战；
  - [PayForCrimeAction](../../campaign-ext/PayForCrimeAction/) —— 调 `GetCost` / `GetMinAcceptableCrimeRating` / `GetCrimeRatingAfterPunishment`；
  - CrimeCampaignBehavior（在 [CampaignBehaviorBase](../CampaignBehaviorBase/) 桶）—— 每日 tick 经 `Clan`/`Kingdom` 的 `DailyCrimeRatingChange` 调 `GetDailyCrimeRatingChange`，并在 `OnMakePeace`/`HeroKilled` 触发清零。
- 关联类型：[Clan](../../campaign/Clan/) 与 [Kingdom](../../campaign/Kingdom/) 持有 `MainHeroCrimeRating` 并暴露 `DailyCrimeRatingChange`；[Settlement](../../campaign/Settlement/) 决定审判菜单与支付对象；[Alley](../Alley/)、[AlleyModel](../AlleyModel/) 提供每日正变化的来源；[Hero](../../campaign/Hero/) 是犯罪主体。
- 存档点：`MainHeroCrimeRating` 随 `Clan`/`Kingdom` 一起进档；模型本身是规则、不在存档里。

## 风险

- **模型未注册 → 空引用崩溃**：`CrimeModel` 必须在 `Models` 中至少有一个实现。若你移除 `DefaultCrimeModel` 又没补实现，`Campaign.Current.Models.CrimeModel` 为 `null`，[CrimeCampaignBehavior](../../campaign-ext/CampaignBehaviorBase/) 的每日 tick（`Clan.NonBanditFactions` / `Kingdom.All` 遍历）以及城镇审判菜单会立即 `NullReferenceException`。替换实现时务必保证“有且仅有一个” `CrimeModel` 被 `AddModel`。
- **直接改 `MainHeroCrimeRating` 绕过规则**：不要写 `faction.MainHeroCrimeRating = 0f` 来“洗案底”。这样跳过了 `GetMaxCrimeRating()` 的 `Clamp`、跳过了超过 `DeclareWarCrimeRatingThreshold` 时的自动宣战，也不会发出 `OnCrimeRatingChanged` 事件（其它系统靠它刷新 UI/日志）。一律走 [ChangeCrimeRatingAction](../../campaign-ext/ChangeCrimeRatingAction/)`\.Apply`。
- **手动算赎金而非用 `GetClearCrimeCost`**：成本公式（`x^1.2 * 100` 等）写在 `DefaultCrimeModel` 里，自己重算容易与正式支付脱节，导致“显示能付却付不动”或反之。需要成本时用 `PayForCrimeAction.GetClearCrimeCost(faction, paymentMethod)`。
- **重写 `GetDailyCrimeRatingChange` 要够快**：该方法在每次每日 tick 中对**每一个**非强盗家族和**每一个**王国各调用一次。在默认实现里遍历该势力所有城镇巷子（`Settlements.Where(IsTown).Alleys`）已不算轻；自定义实现若再叠加复杂查询，会显著拖慢每日结算。
- **重写判定区间要连续互斥**：`Mild/Moderate/Severe` 三段边界（默认 30、65）必须无缝衔接，否则 UI 与 `CanPayCriminalRatingValueWith` 会出现既判不出等级、又允许不了支付方式的死区。
- **版本时序差异**：案底值的清零时机依赖事件——`HeroKilled`（主角死亡时把所有势力的案底清零）、`MakePeace`（和平后把超过阈值一半的部分清零）。若你的 mod 监听这些事件并对案底做假设，需与 [CrimeCampaignBehavior](../../campaign-ext/CampaignBehaviorBase/) 的顺序协调。

## 跨版本提示

- v1.3.0 / v1.3.15：抽象成员集合与 v1.4.5 一致（`CrimeModel` 接口在此区间稳定），获取路径均为 `Campaign.Current.Models.CrimeModel`，默认实现均为 `DefaultCrimeModel`。
- v1.4.5：新增了 `Alley`（巷子）相关逻辑——`GetDailyCrimeRatingChange` 会统计玩家拥有的城镇巷子并通过 [AlleyModel](../AlleyModel/) 加计每日犯罪产出；早期版本没有这条正变化来源。写跨版本 mod 时，对“案底为何每天上涨”的解释要考虑该差异。

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[DefaultCrimeModel](../DefaultCrimeModel/) · [AlleyModel](../AlleyModel/) · [PayForCrimeAction](../PayForCrimeAction/) · [GiveGoldAction](../GiveGoldAction/) · [ChangeCrimeRatingAction](../ChangeCrimeRatingAction/) · [CampaignBehaviorBase](../CampaignBehaviorBase/) · [SandBoxManager](../SandBoxManager/) · [MBObjectManager](../MBObjectManager/)
- 相关类：[Clan](../../campaign/Clan/) · [Kingdom](../../campaign/Kingdom/) · [Settlement](../../campaign/Settlement/) · [Hero](../../campaign/Hero/) · [Alley](../Alley/)
