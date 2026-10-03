---
title: "BanditDensityModel"
description: "强盗密度的全部可调参数：藏身处数量、驻军规模、藏身处战场的上下限、逃兵上限与海军安全区判定，十二个抽象成员就是整个强盗系统的调参面板。"
---

# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `TaleWorlds.Core.MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs`

## 概述

整个强盗系统的「松紧旋钮」都在这一个抽象类里。它有**十二个成员**：九个整型常量型属性（藏身处的数量与驻军规模、藏身处战场的人数上下限）、一个浮点比例（首战刷兵比例）、两个计算型方法（一个按宗族给逃兵/掠夺者上限、一个按队伍算藏身处战场上下限），以及一个布尔判定（某个位置是否落在海军安全区内）。它不含任何状态，**每次被问都是现算**。

默认实现 `DefaultBanditDensityModel` 把九个常量直接写死（`NumberOfMinimumBanditPartiesInAHideoutToInfestIt => 2`、`NumberOfMaximumBanditPartiesInEachHideout => 3`、`NumberOfMaximumBanditPartiesAroundEachHideout => 3`、`NumberOfMaximumHideoutsAtEachBanditFaction => 9`、`NumberOfInitialHideoutsAtEachBanditFaction => 7`、`NumberOfMinimumBanditTroopsInHideoutMission => 10`、`SpawnPercentageForFirstFightInHideoutMission => 0.8f`），两个人数上限则**跟着玩家进度缩放**：`NumberOfMaximumTroopCountForFirstFightInHideout => MathF.Floor(11f * (2f + Campaign.Current.PlayerProgress))`、`NumberOfMaximumTroopCountForBossFightInHideout => MathF.Floor(1f + 5f * (1f + Campaign.Current.PlayerProgress))`。这意味着**同一套模型在新游戏与通关存档下给出的答案完全不同**，模型不是常量表而是函数。

## 心智模型

把它当成「**一条「问 → 现算 → 回答」的复读机**」，而不是一份可读写的配置。所有成员都是 `abstract` 的 getter 或纯函数，**没有任何 setter**——想改数值只能换模型实例。想局部调参的正确写法是写一个派生类，**用 `BaseModel` 回落默认值**，只覆盖要改的那几个成员；`StoryModeBanditDensityModel` 就是现成范例——它对每个成员都写 `=> ((MBGameModel<BanditDensityModel>)this).BaseModel.XXX`，一个值都不改。

三个值得单独记住的语义。第一，**`NumberOfMaximumBanditPartiesAroundEachHideout` 与 `NumberOfMaximumBanditPartiesInEachHideout` 名字极像但含义不同**：前者是「藏身处**周边**（地图上巡逻的野队）上限」，后者是「藏身处**内部**（驻军队伍）上限」。`BanditSpawnCampaignBehavior` 把两者各自包成 `_numberOfMaxBanditPartiesAroundEachHideout` 与 `_numberOfMaximumBanditPartiesInEachHideout` 两个私有属性，读源码时务必看全名。

第二，**`GetMinimumTroopCountForHideoutMission(party, isAssault)` 与 `GetMaximumTroopCountForHideoutMission(party, isAssault)` 的 `isAssault` 语义相反于直觉**。默认实现里 `GetMinimum...` 是 `!isAssault → 25` / `isAssault → 8`（**强攻反而人更少**），`GetMaximum...` 是 `isAssault ? 15 : 40`（强攻人更少，且还会因为 `SmallUnitTactics`  perk 加成）。也就是说**直接强攻藏身处面对的敌人始终比智取更少**——这是有意设计，不是 bug。

第三，**`IsPositionInsideNavalSafeZone` 默认恒为 `false`**，但它不是死成员：`MobilePartyAi.cs:1327` 与 `:1364` 各调一次，后者还是一个 `while (num2 < 100 && ...IsPositionInsideNavalSafeZone(campaignVec))` 的**最多 100 次重试循环**。让这个判定返回 true 就等于给海上加禁区。

第四点：**`GetMaxSupportedNumberOfLootersForClan(Clan clan)` 按 `StringId` 分流**。默认实现缓存了 `Clan.FindFirst(x => x.StringId == "deserters")` 作为 `_deserterClan`：逃兵宗族给 50，`"looters"` 且逃兵存在时给 `270 - DeserterClan.WarPartyComponents.Count`，其余给 270。**这个缓存是私有字段且不判空**（`Clan.FindFirst` 返回 null 时 `_deserterClan` 保持 null，下一次访问会重查）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int ... { get; }` | 一个藏身处要被多少支强盗队「驻扎」才算被 infest（污染）。默认 2。`BanditSpawnCampaignBehavior` 把它包成同名私有属性，是藏身处状态机判定 `IsInfested` 的阈值。 |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int ... { get; }` | 藏身处**内部**驻军队伍上限（默认 3）。与下一项名字极像但语义不同，混读极易出错。 |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int ... { get; }` | 藏身处**周边**（地图上流动的野队）上限，默认 3。`BanditSpawnCampaignBehavior` 把它包成 `_numberOfMaxBanditPartiesAroundEachHideout`。 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int ... { get; }` | 每个强盗宗族最多能拥有多少个藏身处，默认 9。`NumberOfInitialHideoutsAtEachBanditFaction`（默认 7）是其子集——新开局造 7 个、之后最多长到 9 个。 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int ... { get; }` | 新开局每个强盗宗族初始生成多少个藏身处，默认 7。**必须 ≤ `NumberOfMaximumHideoutsAtEachBanditFaction`**，实现方不校验，越界不会报错。 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int ... { get; }` | 藏身处 mission 的最低守军人数（默认 10），`HideoutCampaignBehavior.cs:608` 读它。**与 `GetMinimumTroopCountForHideoutMission` 是两回事**：前者是守军下限，后者是「刷多少敌人进场」的下限。 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int ... { get; }` | 藏身处首战的人数上限，默认 `MathF.Floor(11f * (2f + Campaign.Current.PlayerProgress))`。**随玩家进度变化**，不是常量。 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int ... { get; }` | 藏身处 Boss 战的人数上限，默认 `MathF.Floor(1f + 5f * (1f + Campaign.Current.PlayerProgress))`。`HideoutCampaignBehavior.cs:609` 把它与上一项**相加**作为「藏身处总人数上限」。 |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float ... { get; }` | 首战刷兵比例，默认 0.8。`MapEventHelper.cs:150` 的原式是 `MathF.Min(MathF.Floor(num * 这个比例), NumberOfMaximumTroopCountForFirstFightInHideout)`——**先按比例缩放再截断，最后被上限夹住**。 |
| `GetMaxSupportedNumberOfLootersForClan` | `public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | 按宗族给「逃兵 / 掠夺者」数量上限。默认实现按 `Clan.StringId` 分三档：逃兵 50、`"looters"` 给 `270 - 逃兵宗族 WarPartyComponents 数`、其余 270。**私有缓存的 `_deserterClan` 只查一次**，读-改-写序列里注意它会过期。 |
| `GetMinimumTroopCountForHideoutMission` | `public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 藏身处 mission 里「最少刷多少敌人进场」。默认 `!isAssault → 25`、`isAssault → 8`，即**强攻时敌人更少**。`party` 参数在默认实现里没被用，但签名要求传入，自定义实现可用它做队伍规模相关计算。 |
| `GetMaximumTroopCountForHideoutMission` | `public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 藏身处 mission 里「最多刷多少敌人进场」。默认 `isAssault ? 15 : 40`，并因 `party.HasPerk(DefaultPerks.Tactics.SmallUnitTactics)` 再加该 perk 的 `PrimaryBonus`。**这是唯一读队伍 perk 的成员**。 |
| `IsPositionInsideNavalSafeZone` | `public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | 判定某个地图坐标是否在「海军安全区」内。默认实现**恒返回 false**。但它不是死代码：`MobilePartyAi.cs:1327` 与 `:1364` 会调，其中 `:1364` 处在 `while (num2 < 100 && ...)` 的重试循环里——返回 true 会让 AI 最多重试 100 次才放弃该位置。 |

## 真实示例

读全部「不随进度变」的常量，组装成一个可显示的调参摘要：

```csharp
BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;

Debug.Print("infest threshold      = " + model.NumberOfMinimumBanditPartiesInAHideoutToInfestIt, 0);
Debug.Print("parties inside        = " + model.NumberOfMaximumBanditPartiesInEachHideout, 0);
Debug.Print("parties around        = " + model.NumberOfMaximumBanditPartiesAroundEachHideout, 0);
Debug.Print("hideouts per faction  = " + model.NumberOfInitialHideoutsAtEachBanditFaction
    + " / max " + model.NumberOfMaximumHideoutsAtEachBanditFaction, 0);
```

复刻 `HideoutCampaignBehavior.cs:609` 的「首战 + Boss 相加」算法：

```csharp
int firstFightCap = Campaign.Current.Models.BanditDensityModel.NumberOfMaximumTroopCountForFirstFightInHideout;
int bossFightCap = Campaign.Current.Models.BanditDensityModel.NumberOfMaximumTroopCountForBossFightInHideout;

Debug.Print("hideout total cap = " + (firstFightCap + bossFightCap), 0);
```

复刻首战刷兵的两段夹取（先按比例缩放取整，再被上限夹住）：

```csharp
BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;

int scaled = (int)MathF.Floor(40f * model.SpawnPercentageForFirstFightInHideoutMission);
int firstPhaseTroopCount = MathF.Min(
    scaled,
    model.NumberOfMaximumTroopCountForFirstFightInHideout);

Debug.Print("first phase troops = " + firstPhaseTroopCount, 0);
```

藏身处战场的上下限区间（注意强攻时上下限都更小）：

```csharp
public static void PrintHideoutWindow(MobileParty attacker, bool isAssault)
{
    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;

    int minimum = model.GetMinimumTroopCountForHideoutMission(attacker, isAssault);
    int maximum = model.GetMaximumTroopCountForHideoutMission(attacker, isAssault);

    Debug.Print((isAssault ? "assault" : "infiltration")
        + " window = " + minimum + ".." + maximum, 0);
}
```

按宗族查逃兵/掠夺者上限，并顺便展示默认实现里那个只查一次的缓存：

```csharp
Clan looters = Clan.FindFirst(x => x.StringId == "looters");

if (looters != null)
{
    int cap = Campaign.Current.Models.BanditDensityModel.GetMaxSupportedNumberOfLootersForClan(looters);
    Debug.Print("looters cap = " + cap, 0);
}
```

派生一个只放宽藏身处规模的模型，其余全部回落 `BaseModel`（`AddModel<BanditDensityModel>` 会自动注入 `BaseModel`）：

```csharp
public class MyLooterHeavyBanditModel : BanditDensityModel
{
    public override int NumberOfMaximumBanditPartiesInEachHideout => 6;

    public override int NumberOfMaximumBanditPartiesAroundEachHideout => 8;

    public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
    {
        int baseValue = this.BaseModel.GetMaximumTroopCountForHideoutMission(party, isAssault);
        return baseValue + 20;
    }

    // 其余九个成员一个都没覆盖 —— 但它们是 abstract，必须显式转发
    public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt =>
        this.BaseModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt;

    public override int NumberOfMaximumHideoutsAtEachBanditFaction =>
        this.BaseModel.NumberOfMaximumHideoutsAtEachBanditFaction;

    public override int NumberOfInitialHideoutsAtEachBanditFaction =>
        this.BaseModel.NumberOfInitialHideoutsAtEachBanditFaction;

    public override int NumberOfMinimumBanditTroopsInHideoutMission =>
        this.BaseModel.NumberOfMinimumBanditTroopsInHideoutMission;

    public override int NumberOfMaximumTroopCountForFirstFightInHideout =>
        this.BaseModel.NumberOfMaximumTroopCountForFirstFightInHideout;

    public override int NumberOfMaximumTroopCountForBossFightInHideout =>
        this.BaseModel.NumberOfMaximumTroopCountForBossFightInHideout;

    public override float SpawnPercentageForFirstFightInHideoutMission =>
        this.BaseModel.SpawnPercentageForFirstFightInHideoutMission;

    public override int GetMaxSupportedNumberOfLootersForClan(Clan clan) =>
        this.BaseModel.GetMaxSupportedNumberOfLootersForClan(clan);

    public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault) =>
        this.BaseModel.GetMinimumTroopCountForHideoutMission(party, isAssault);

    public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position) =>
        this.BaseModel.IsPositionInsideNavalSafeZone(position);
}
```

## 风险与边界

- **十二个成员全是 `abstract`，派生类必须全实现。** 漏一个编译不过——包括 `IsPositionInsideNavalSafeZone` 这个默认恒 false 的。
- **没有 setter。** 所有成员都是只读 getter 或纯函数，想运行时调参只能换掉整个模型实例。
- **两个「人数上限」随 `Campaign.Current.PlayerProgress` 缩放。** 缓存结果到自己的字段里是错的——进度会变。
- **两个名字极像的成员别读混。** `NumberOfMaximumBanditPartiesInEachHideout`（藏身处**内部**）vs `NumberOfMaximumBanditPartiesAroundEachHideout`（藏身处**周边**）。
- **强攻藏身处敌人更少。** `GetMinimum` 给 8 vs 智取 25，`GetMaximum` 给 15 vs 40。拿「智取很难」的经验去估强攻会严重误判。
- **`NumberOfInitialHideoutsAtEachBanditFaction` 可能超过上限而不报错。** 实现方不校验二者关系。
- **默认实现的 `_deserterClan` 是懒缓存且不判空。** 它按 `StringId == "deserters"` 查一次；mod 在运行期改宗族名会让这个缓存指向错误对象或不存在的对象。
- **`GetMaxSupportedNumberOfLootersForClan` 硬编码了两个 StringId。** `"deserters"` 与 `"looters"` 拼错就走默认 270 档。
- **`GetMaximumTroopCountForHideoutMission` 依赖一个具体 perk。** 默认实现读 `DefaultPerks.Tactics.SmallUnitTactics` 的 `PrimaryBonus`；换掉这个 perk 的实现会连带改变藏身处规模。
- **`IsPositionInsideNavalSafeZone` 为 true 时会让 AI 多转 100 圈。** `MobilePartyAi.cs:1364` 的 `while (num2 < 100 && ...)` 是硬上限，不会死循环，但会产生明显卡顿。
- **`BaseModel` 只有走 `CampaignGameStarter.AddModel<BanditDensityModel>` 才有值。** 直接 `new` 出来的实例访问 `BaseModel` 会 NRE。
- **不参与存档。** 模型是只读算法，读档时重新从代码取。

## 依赖关系

- 泛型基类：[MBGameModel](../../core-extra/MBGameModel) 的 `BaseModel` + `Initialize` 是「派生类只覆盖要改的成员」这套写法的机制来源
- 默认实现：`DefaultBanditDensityModel`（`TaleWorlds.CampaignSystem.GameComponents`）给出九个常量的取值、两处随进度缩放的公式、以及按 `StringId` 分流与 perk 加成的两个计算方法
- 换壳范例：`StoryModeBanditDensityModel` 逐成员转发 `BaseModel`、一个值都不改，是「派生但不改」的教科书写法
- 主要消费者：`CampaignBehaviors.BanditSpawnCampaignBehavior`（藏身处生成与 infest 判定）、`CampaignBehaviors.HideoutCampaignBehavior`（藏身处战场人数，`562 / 566 / 608 / 609` 四处）、`CampaignBehaviors.DesertersCampaignBehavior`（`107 / 165` 两处查逃兵上限）、`Helpers.MapEventHelper.cs:150`（首战刷兵比例与上限）
- 海军判定：`Party.MobilePartyAi.cs:1327` 与 `:1364` 是 `IsPositionInsideNavalSafeZone` 在 1.4.5 的全部调用点，后者带 100 次重试上限
- 队伍输入：`MobileParty` 作为参数传入两个 `...TroopCountForHideoutMission` 方法，`HasPerk` 与 perk 加成是规模计算的一部分
- 宗族输入：`Clan.StringId == "deserters"` / `"looters"` 是 `GetMaxSupportedNumberOfLootersForClan` 的分流依据
- 同族模型：[AgeModel](AgeModel) 与本类同在 `ComponentInterfaces` 命名区、同为 `MBGameModel<T>` 范式，可对照阅读
- 桶首页：[campaign-ext API 分区](../)
