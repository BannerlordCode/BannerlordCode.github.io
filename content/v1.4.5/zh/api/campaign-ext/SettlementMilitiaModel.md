---
title: "SettlementMilitiaModel"
description: "把聚落繁荣、炉灶、忠诚度、建筑与政策转换为每日民兵增减与围城后补充的可替换策略模型。"
---
# SettlementMilitiaModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class SettlementMilitiaModel : MBGameModel<SettlementMilitiaModel>`  
**基类:** `MBGameModel<SettlementMilitiaModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMilitiaModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`

## 一句话职责

它回答“这个聚落今天应该长出多少民兵、围城后该补多少、补出来老兵和近战/远程的比例是多少”，并返回带可选解释的数值；它**不**直接往聚落的民兵名册里塞人、不改编制，也不触发任何世界变更。真正的名册变化发生在聚落每日 tick 里——这个模型只负责算出“该变多少”。

## 心智模型

这是聚落每日时钟读取前的规则层。聚落的民兵数值（`Settlement.Militia`，一个 float）在每日 tick 中由 `CalculateMilitiaChange` 返回的每日增减量推动；围城结束、城镇易主或叛乱平息后，由 `MilitiaToSpawnAfterSiege` 与 `CalculateMilitiaSpawnRate` / `CalculateVeteranMilitiaSpawnChance` 决定“一次性补多少、近战还是远程、出不出老兵”。模型本身只是纯查询：把繁荣度、炉灶数、忠诚度、建筑效果、王国政策、总督 Perk 和悬赏任务效果汇总成一个 `ExplainedNumber`。

默认实现（`DefaultSettlementMilitiaModel`）的计算构成是：城堡/城镇基础 +2、村庄基础 +0.5；现有民兵越多“退役”越多（`-militia * 0.025`，软上限）；村庄按炉灶数 `/400` 增长；城镇/城堡按繁荣度 `/1000` 增长，叛乱时还会因低忠诚额外加成；城镇还能从市场军备（武器类商品）和多个政策（如 `Cantons` +1、`Serfdom` -1）得到修正；城堡/城镇进一步叠加建筑（`Militia`、`MilitiaReduction`）、政策、总督 Perk 和悬赏任务效果。注意：模型会读取 `Campaign.Current.Models.SettlementLoyaltyModel` 的叛乱忠诚阈值，所以它是更广的聚落经济规则（繁荣 / 忠诚 / 安全 / 粮食）里的一环，但本身只直接消费其中一部分输入。

使用这个模型，是为了**读取**聚落民兵的增减与补充规则——例如给 UI 显示“本城每天 +X 民兵”的预测，或预览围城后补充的近战/远程比例。如果目标是真正增加、减少或转移民兵部队，应使用聚落每日 tick 和对应的行动/名册 API，而不是在模型回调里自己写 `Settlement.Militia` 或 `Settlement.MilitiaParty`。模型回调必须是只读查询：在 `CalculateMilitiaChange` / `CalculateMilitiaSpawnRate` 内部招募、传送或改编制，会把一个“算数”调用变成每个 tick 都重复执行的副作用，且会与每日 tick 的官方写入打架。`includeDescriptions` 只控制 `ExplainedNumber` 是否记录因素说明，不应改变数值。

### 生命周期与注册

`Campaign.Current.Models` 持有当前实例，访问键是 `SettlementMilitiaModel`。默认实例是 `DefaultSettlementMilitiaModel`，游戏启动器在战役初始化时通过 `IGameStarter.AddModel` 注册它；自定义模型也必须在战役系统开始查询前完成注册。标题界面、模块加载早期或没有活动战役时，`Campaign.Current` 可能为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它——所有读取都应先 null-check。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 提供活动战役和 `Models` 注册表，以及 `Models.SettlementLoyaltyModel` 等兄弟模型。 |
| [`Settlement`](../../campaign/Settlement) | 提供 `Militia`、`IsFortification`/`IsVillage`/`IsTown`/`IsCastle`、`Village.Hearth`、`Town.Prosperity` 等核心输入。 |
| [`Town`](../../campaign/Town) | 提供繁荣度、忠诚度、叛乱状态、总督、市场出售记录与建筑效果。 |
| [`Village`](../../campaign/Village) | 提供炉灶数（`Hearth`）与贸易绑定城镇（`TradeBound`）。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载每日民兵增减、老兵概率与因素说明。 |
| [`SettlementLoyaltyModel`](../SettlementLoyaltyModel) | 默认实现读取其叛乱忠诚阈值来计算低忠诚时的民兵加成。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`Settlement`](../../campaign/Settlement) | 每日 tick 消费 `CalculateMilitiaChange` 的返回值来改写 `Settlement.Militia`。 |
| [`MilitiaPartyComponent`](../MilitiaPartyComponent) | 围城后补充的民兵作为聚落民兵方（`Settlement.MilitiaParty`）存在于世界；模型只算“补多少/比例”，不自行创建该方。 |
| [`SiegeEvent`](../SiegeEvent) | 围城结束/易主时触发对 `MilitiaToSpawnAfterSiege` 与补充比例的查询。 |
| [`SettlementSecurityModel`](../SettlementSecurityModel) | 相邻的聚落规则模型；它管安全度，与民兵同属聚落经济层，替换时不应互相隐式触发写入。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件——返回的 `ExplainedNumber` 是瞬时计算值。真正的民兵数值变化发生在聚落每日 tick（属于存档的聚落状态的一部分）。自定义模型应在相同输入下保持确定性，避免与重放的战役 tick 不一致；所有合法的民兵 roster 变更必须走官方每日 tick / 名册 API，不能放进计算回调。

## 风险与调试顺序

1. **战役尚未存在:** `Campaign.Current` 在标题界面和早期模块加载阶段为空；默认实现内部直接 `Campaign.Current.Models.SettlementLoyaltyModel` 读取，调用方务必先 null-check，否则在菜单/加载早期会 `NullReferenceException`。
2. **在回调里改世界:** 在 `CalculateMilitiaChange` / `CalculateMilitiaSpawnRate` 内写入 `Settlement.Militia` 或 `Settlement.MilitiaParty`、招募单位或转移金币，会破坏每日 tick 的权威写入并制造重复副作用。
3. **无界/负数结果:** 自定义 `CalculateMilitiaChange` 返回极大或负无穷会让民兵数值爆炸或被清零；应保持与默认实现同量级（城堡/城镇 +2 基准、村庄 +0.5 基准、退役项与民兵成反比）。
4. **out 参数未赋值:** `CalculateMilitiaSpawnRate` 的 `meleeTroopRate` / `rangedTroopRate` 是 `out`，自定义实现必须两条都赋值，且两者之和应归一（默认各 0.5），否则补充出的近战/远程比例会失真。
5. **重复消费号码:** 同时调用模型又把返回值再写回或再次叠加，会使增减量重复生效；UI 预览应只读，写入只交给每日 tick。
6. **替换后读自己:** 注册替换模型后，若在回调里再次通过 `Campaign.Current.Models.SettlementMilitiaModel` 查找自己会递归；优先委托 vanilla delegate。

详见 [`崩溃与存档边界`](../../../architecture/crash-boundaries)。

## 成员契约

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege(Town town)` | 返回围城结束/易主后一次性补充的民兵数量。默认实现返回 `2 * (45 + RandomInt(10))`，即 90–109。 | 在攻城结算、城镇易主或叛乱平息时由官方逻辑查询；纯查询，不应在此创建部队。 |
| `CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)` | 返回该聚落**每日**民兵增减的 `ExplainedNumber`（基础值 + 退役 + 炉灶/繁荣 + 政策/建筑/Perk/悬赏的逐项叠加）。 | 聚落每日 tick 用来改写 `Settlement.Militia`；也供 UI 预览“每日 +X”。`includeDescriptions` 仅控制因素说明文本，不改变数值。 |
| `CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | 返回补充民兵是“老兵”的概率加成 `ExplainedNumber`：总督 Perk（CitizenMilitia / Drills / SevenVeterans）、巴坦文化特性、建筑 `MilitiaVeterancyChance`、`LandGrantsForVeteran` 政策 +10%。 | 围城后补充民兵时查询；纯查询。 |
| `CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | 通过 `out` 参数给出近战/远程补充比例。默认实现 `melee = 0.5`、`ranged = 0.5`。 | 围城后决定补出来的是近战还是远程；必须用 `out` 接收两个比值，返回值无意义。 |

默认实现可观察的因素（以 `CalculateMilitiaChange` 为例）：城堡/城镇基础 +2、村庄基础 +0.5；现有民兵越多退役越多；村庄按炉灶 `/400` 增长；城镇/城堡按繁荣度 `/1000` 增长，叛乱时低忠诚额外加成；城镇受市场军备、政策（`Cantons`+1、`Serfdom`-1）与文化特性影响；城堡/城镇额外叠加建筑、政策、总督 Perk 与悬赏任务。替换模型时建议保留这些项的量级与符号。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，与每日 tick 读取和 UI 预览一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public void PreviewMilitiaGrowth(Settlement settlement)
{
    if (Campaign.Current == null || settlement == null)
    {
        return;
    }

    // 每日民兵增减（带因素说明，适合 UI 显示"本城每天 +X 民兵"）
    ExplainedNumber daily = Campaign.Current.Models.SettlementMilitiaModel
        .CalculateMilitiaChange(settlement, includeDescriptions: true);

    // 围城后补充的近战/远程比例（out 参数，返回值无意义）
    Campaign.Current.Models.SettlementMilitiaModel
        .CalculateMilitiaSpawnRate(settlement, out float melee, out float ranged);

    // 围城后补充老兵的概率加成
    ExplainedNumber veteran = Campaign.Current.Models.SettlementMilitiaModel
        .CalculateVeteranMilitiaSpawnChance(settlement);

    // 围城结束/易主时一次性补充量
    if (settlement.IsFortification && settlement.Town != null)
    {
        int toSpawn = Campaign.Current.Models.SettlementMilitiaModel
            .MilitiaToSpawnAfterSiege(settlement.Town);
    }
}
```

这段结果适合调试或 UI 预览；不要自己再把 `daily` 写回 `Settlement.Militia`——那是每日 tick 的职责。

## 替换模型时的安全做法

如果只想增加一个有限修正，保留原模型作为 delegate，避免在回调里再次查找自己造成递归：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public sealed class ModSettlementMilitiaModel : SettlementMilitiaModel
{
    private readonly SettlementMilitiaModel _vanilla;

    public ModSettlementMilitiaModel(SettlementMilitiaModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override int MilitiaToSpawnAfterSiege(Town town)
        => _vanilla.MilitiaToSpawnAfterSiege(town);

    public override ExplainedNumber CalculateMilitiaChange(
        Settlement settlement, bool includeDescriptions = false)
    {
        ExplainedNumber result = _vanilla.CalculateMilitiaChange(settlement, includeDescriptions);
        result.Add(0.5f, new TextObject("Mod: garrison drill"));
        return result;
    }

    public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)
        => _vanilla.CalculateVeteranMilitiaSpawnChance(settlement);

    public override void CalculateMilitiaSpawnRate(
        Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)
    {
        _vanilla.CalculateMilitiaSpawnRate(settlement, out meleeTroopRate, out rangedTroopRate);
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `Campaign.Current.Models.SettlementMilitiaModel` 查找自己，否则会递归。

## 版本与导航

v1.3.15 与 v1.4.5 的接口与默认实现结构一致：`MilitiaToSpawnAfterSiege`、`CalculateMilitiaChange`、`CalculateVeteranMilitiaSpawnChance`、`CalculateMilitiaSpawnRate` 四个抽象成员均存在。跨版本替换应委托当前版本的 vanilla model，而不是仅把旧公式复制到新版本（政策、Perk 与文化特性集合会随版本变化）。

- [队伍模型目录](../models/)
- [父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ SettlementLoyaltyModel](../SettlementLoyaltyModel)
- [↔ SettlementSecurityModel](../SettlementSecurityModel)
- [ExplainedNumber](../ExplainedNumber)
- [SiegeEvent](../SiegeEvent)
- [MilitiaPartyComponent](../MilitiaPartyComponent)
- [Campaign](../../campaign/Campaign)
- [Settlement](../../campaign/Settlement)
- [Town](../../campaign/Town)
- [Village](../../campaign/Village)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
