---
title: "DefaultSettlementLoyaltyModel"
description: "默认城镇忠诚度、税收阈值和叛乱输入的源码驱动实现。"
---
# DefaultSettlementLoyaltyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`  
**Base:** [`SettlementLoyaltyModel`](../SettlementLoyaltyModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`（1.4.5 权威源码；1.3.15 同名实现）

## 一句话职责

`DefaultSettlementLoyaltyModel` 把饥荒、文化、政策、建筑、问题、治安、名人关系、总督 Perk 和忠诚漂移合成为城镇每日忠诚度变化，并提供税收模型与叛乱行为共用的阈值。它只计算，不写 `Town.Loyalty`。

## 心智模型

`SandBoxManager` 在启动阶段注册该实现，`GameModels` 随后把它暴露为 `Campaign.Current.Models.SettlementLoyaltyModel`。`Town.LoyaltyChange` 和 `LoyaltyChangeExplanation` 会调用 `CalculateLoyaltyChange`；`Town.DailyTick` 再把结果写回保存的 `Town.Loyalty`。繁荣、民兵、税收和叛乱代码还会直接读取本类的阈值，因此它不是只影响一个数值的局部公式。

计算顺序是可解释的加法：先建立空的 `ExplainedNumber`，再依次加入食物库存、总督/所有者文化、政策、建筑项目、问题、治安、名人关系、Perk 和向 `LoyaltyDriftMedium` 回归的漂移。`includeDescriptions` 只控制解释项是否保留，不改变公式本身。

使用该类是为了改变 Model 的回答；要改变所有权、开启叛乱或写入忠诚状态，应回到 [`Actions`](../actions) 与 Behavior，而不是把副作用塞进计算函数。

## 依赖

| 类型/流程 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) / [`GameModels`](../GameModels) | 持有并按抽象类型提供已注册模型。 |
| [`Town`](../../campaign/Town) | 提供忠诚、治安、食物、文化、总督、建筑和名人关系输入，并暴露 `LoyaltyChange`。 |
| [`SettlementProsperityModel`](../SettlementProsperityModel) | 使用高/低忠诚阈值和效果影响繁荣。 |
| [`Models 家族手册`](../models/) | 民兵模型在此工作树中尚未有可用叶页；通过家族索引追踪 `MilitiaBoostPercentage` 的消费者。 |
| `DefaultSettlementTaxModel` / `RebellionsCampaignBehavior` | 读取税收阈值、叛乱起始阈值和反叛后的忠诚加成。 |

## 默认契约

| 成员 | 1.4.5 默认值 | 消费者含义 |
| --- | ---: | --- |
| `MaximumLoyaltyInSettlement` | `100` | 高忠诚映射的上界。 |
| `LoyaltyDriftMedium` | `50` | 漂移目标，公式为 `-0.1 * (loyalty - 50)`。 |
| `SettlementLoyaltyChangeDueToSecurityThreshold` | `50` | 治安高低对忠诚影响的分界。 |
| `HighSecurityLoyaltyEffect` / `LowSecurityLoyaltyEffect` | `1f` / `-2f` | 治安映射到每日忠诚变化的端点。 |
| `HighLoyaltyProsperityEffect` / `LowLoyaltyProsperityEffect` | `0.5f` / `-1` | 繁荣模型的高/低忠诚效果。 |
| `ThresholdForTaxBoost` | `75` | 税收高忠诚加成的起点。 |
| `ThresholdForTaxCorruption` / `ThresholdForHigherTaxCorruption` | `50` / `25` | 税收腐败区间的两个边界。 |
| `ThresholdForProsperityBoost` / `ThresholdForProsperityPenalty` | `75` / `25` | 繁荣模型读取的忠诚边界。 |
| `RebellionStartLoyaltyThreshold` / `RebelliousStateStartLoyaltyThreshold` | `15` / `25` | 叛乱启动与反叛状态判断的阈值。 |
| `LoyaltyBoostAfterRebellionStartValue` | `5` | 反叛开始后行为使用的忠诚加成。 |
| `AdditionalStarvationPenaltyStartDay` / `AdditionalStarvationLoyaltyEffect` | `14` / `-1` | 连续饥饿超过 14 天时的额外惩罚。 |
| `MilitiaBoostPercentage` | `200` | 反叛城镇低忠诚对民兵增长的百分比加成。 |

文化效果默认是同文化总督 `1f`、异文化总督 `-1f`、所有者文化不同 `-3f`；名人关系阈值为 `75f`，每日所有者支持加成为 `1`。

三个公开方法的职责也不同：`CalculateLoyaltyChange(Town, bool)` 返回每日变化；`CalculateGoldGainDueToHighLoyalty` 把忠诚高于 `75` 的税收因子加入传入的 `ExplainedNumber`；`CalculateGoldCutDueToLowLoyalty` 在 `25` 到 `50` 区间映射低忠诚税收腐败因子。后二者都不直接发放或扣除金币。

## 真实获取与替换

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

Campaign campaign = Campaign.Current;
SettlementLoyaltyModel model = campaign.Models.SettlementLoyaltyModel;
Town town = Town.AllTowns.FirstOrDefault();
if (town != null)
{
    ExplainedNumber loyalty = model.CalculateLoyaltyChange(town, includeDescriptions: true);
    ExplainedNumber tax = new ExplainedNumber(0f, includeDescriptions: true);
    model.CalculateGoldGainDueToHighLoyalty(town, ref tax);
}
```

替换应在战役启动阶段进行，并保留抽象契约：

```csharp
public sealed class ModSettlementLoyaltyModel : DefaultSettlementLoyaltyModel
{
    public override int RebelliousStateStartLoyaltyThreshold => 30;
}

public override void InitializeGameStarter(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new ModSettlementLoyaltyModel());
}
```

不要在替换实现中从 `Campaign.Current.Models.SettlementLoyaltyModel` 读取自己需要的默认值；注册完成后该属性可能已经指向替换实例，会形成递归或丢失 vanilla fallback。需要保留原公式时，继承默认类并调用 `base.CalculateLoyaltyChange`。

## 风险与版本边界

- `CalculateLoyaltyChange` 可能被 UI 预览、每日 tick 和其他 Model 重复调用，必须没有世界变更副作用。
- 修改叛乱、税收或民兵阈值时，必须同时回归繁荣、民兵、税收和叛乱消费方。
- `ExplainedNumber` 是预测值；`Town.DailyTick` 才负责写入保存状态，不能把计算结果当作 setter。
- 本页公式和数值以 1.4.5 `Bannerlord.Source/bin` 为准；部署到 1.3.15 前仍应复核目标 DLL。

## 怎么用

### 怎么拿到它

**源文件：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSettlementLoyaltyModel.cs`（全文 296 行）。
**抽象契约：** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SettlementLoyaltyModel.cs`（全文 59 行）。
**入口：** `Campaign.Current.Models.SettlementLoyaltyModel`。

**这是本批里抽象成员最多的一个：接口 27 个 abstract（`SettlementLoyaltyModel.cs:8`-`:58`），实现全部 override。** 其中 **23 个是裸常量**、1 个返回 `ExplainedNumber`、2 个是 `void` + `ref`。

**常量段的行号是连续的 `:46`-`:90`，一眼就能看出它是「一张阈值表」。**

### 典型用法

**23 个常量里最需要分组的是三个同值族，它们看起来像重复其实是不同语义的三个门槛：**

| 常量 | 值 | 行号 |
| --- | --- | --- |
| `ThresholdForTaxBoost` | `75` | `:50` |
| `ThresholdForTaxCorruption` | `50` | `:52` |
| `ThresholdForHigherTaxCorruption` | `25` | `:54` |
| `ThresholdForProsperityBoost` | `75` | `:56` |
| `ThresholdForProsperityPenalty` | `25` | `:58` |
| `RebellionStartLoyaltyThreshold` | `15` | `:64` |
| `RebelliousStateStartLoyaltyThreshold` | `25` | `:66` |

**`75 / 50 / 25` 各出现两次，但两组的含义不同**：`ThresholdForTax*` 属税收、`ThresholdForProsperity*` 属繁荣，**它们只是碰巧选了同一批数字**。**改一个不会带动另一个。**

**两个 `void` 方法是本页最反直觉的形状。** `CalculateGoldGainDueToHighLoyalty`（`:97`）与 `CalculateGoldCutDueToLowLoyalty`（`:103`）都返回 `void`，**通过 `ref ExplainedNumber explainedNumber` 往调用方的对象里 `AddFactor`**（`:100` / `:106`）。

**所以它们必须先有一个 `ExplainedNumber` 才能调，而且调完要读你自己的那个对象**——这与同类型的 `CalculateLoyaltyChange`（`:92`）返回新对象的风格完全不同。

**两个 gold 方法是乘法因子，不是加法增量。** `MBMath.Map(town.Loyalty, ThresholdForTaxBoost, 100f, 0f, 0.2f)`（`:99`）——把忠诚度从 75 映射到 100 得到 0 到 0.2 的**因子**；`:105` 则是从 25 到 50 映射到 `-0.5` 到 `0`。**两者都是 `AddFactor`，不是 `Add`。**

真实调用方是税收模型：`DefaultSettlementTaxModel.cs:132` 调 gain、`:136` 调 cut。**也就是说忠诚度这个模型不自己算钱，它给税收模型提供两个修正因子。**

`CalculateLoyaltyChange`（`:92`）一行转发到 `CalculateLoyaltyChangeInternal`（`:109`），后者**串了十一个 `GetSettlementLoyaltyChangeDueTo*`**（`:112`-`:121`）——粮食、总督文化、所有者文化、政策、项目、问题、安全、名人人际、总督 Perk、忠诚漂移。**它们全是 `private void ... (Town, ref ExplainedNumber)`，共用同一个累加器，顺序即优先级。**

想看出忠诚度在哪个区间，就把两个因子与总变化并排打出来：

```csharp
public static void DumpLoyalty(Town town)
{
    SettlementLoyaltyModel model = Campaign.Current.Models.SettlementLoyaltyModel;
    ExplainedNumber change = model.CalculateLoyaltyChange(town, includeDescriptions: true);
    ExplainedNumber gold = new ExplainedNumber(100f, includeDescriptions: true);
    model.CalculateGoldGainDueToHighLoyalty(town, ref gold);
    model.CalculateGoldCutDueToLowLoyalty(town, ref gold);
    Debug.Print(town.Settlement.Name + " loyalty=" + town.Loyalty + " change=" + change.ResultNumber, 0);
    Debug.Print("loyaltyBands: tax " + model.ThresholdForHigherTaxCorruption + "/" + model.ThresholdForTaxCorruption + "/" + model.ThresholdForTaxBoost, 0);
    Debug.Print("rebellion at " + model.RebellionStartLoyaltyThreshold + " max=" + model.MaximumLoyaltyInSettlement + " drift=" + model.LoyaltyDriftMedium, 0);
    Debug.Print("goldFactor=" + gold.ResultNumber + " lines=" + gold.Lines.Count, 0);
}
```

**上例第三行那三个阈值各自独立，其中 `RebellionStartLoyaltyThreshold`（15）低于 `RebelliousStateStartLoyaltyThreshold`（25）——顺序反了看代码会以为写错了，其实 15 是「开始叛乱」、25 是「进入叛乱状态」，是两个阶段。**

**而 `MaximumLoyaltyInSettlement => 100`（`:78`）是本模型唯一一个「上限」概念，但它只被消费方用来钳位——这个类自己不钳。**

**两个入口属性都在 `Town` 上：** `Town.LoyaltyChange`（`Town.cs:140`）调 `CalculateLoyaltyChange(this)` 吃默认 `includeDescriptions: false`，而 `Town.LoyaltyChangeExplanation`（`Town.cs:142`）显式传 `true`。**同一个计算，两个属性，差别只有明细。**

**而两个叛乱阈值各自有真实消费方，这也解释了它们为什么不是同一个数：** `RebellionsCampaignBehavior.cs:189` 用 `RebellionStartLoyaltyThreshold`（15）判「是否触发叛乱」，`:124` 用 `RebelliousStateStartLoyaltyThreshold`（25）写回 `settlement.Town.InRebelliousState`。**一个决定「发起」，一个决定「状态位」——所以 15 < 25 是对的，反过来就永远进不了叛乱状态。** `CampaignUIHelper.cs:497` 也是拿 15 做 UI 警告。

### 最容易踩的坑

- `CalculateGoldGainDueToHighLoyalty` / `CalculateGoldCutDueToLowLoyalty` 是 `void` + `ref ExplainedNumber`，返回 `void` 不代表没有输出；它们写入调用方传入的那个 `ExplainedNumber`。新建对象忘了传引用、或调完不读 `ResultNumber`，都会得到「忠诚度影响税收」完全没生效的假象。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Models 家族](../models/)
- [接口契约：SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [相关：SettlementSecurityModel](../SettlementSecurityModel) · [SettlementProsperityModel](../SettlementProsperityModel)
- [变更边界：Actions](../actions)
