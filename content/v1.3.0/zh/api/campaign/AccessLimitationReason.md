---
title: "AccessLimitationReason"
description: "「受什么限制」的八个理由值。它不只出现在 NoAccess 分支——官方在 LimitedAccess 分支同样用它说明限制来源；只有 LocationEmpty 是判定完成后的事后降级产物。"
---

# AccessLimitationReason

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum AccessLimitationReason`
**Base:** 无（`System.Int32` 底层枚举，不是 `FlagsAttribute`）
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs`（`:52`，嵌套在 `SettlementAccessModel` 内）

## 概述

`AccessLevel` 决定**能不能进**，`AccessLimitationReason` 说明**是什么限制在起作用**。它有八个值：`None` / `HostileFaction` / `RelationshipWithOwner` / `CrimeRating` / `VillageIsLooted` / `Disguised` / `ClanTier` / `LocationEmpty`。隐式值 0…7，**不是 `Flags`**。

**最反直觉、也最容易搞错的一点：它不是 `NoAccess` 专属的。** 官方在 `LimitedAccess` 分支上同样填它，用来回答「既然进不去全额权限，那卡在哪一步」。`DefaultSettlementAccessModel.CanMainHeroEnterKeepInternal` 的中立派系分支里连着三个 `LimitedAccess` 情形，每一个都带着自己的理由：

| 条件 | `AccessLevel` | `LimitedAccessSolution` | `AccessLimitationReason` |
| --- | --- | --- | --- |
| 玩家已乔装 | `LimitedAccess` | `Disguise` | `Disguised` |
| 有犯罪值 | `LimitedAccess` | `Bribe` | `CrimeRating` |
| `Clan.Tier < 3` | `LimitedAccess` | `Bribe` | `ClanTier` |
| 以上都不满足 | `FullAccess` | — | （不填，默认 `None`） |

所以**只写 `if (AccessLevel == NoAccess) { 读理由 }` 会漏掉整整一半的判定结果**。官方两个读方都是按 `AccessLevel` 分支之后再判理由，而不是把理由当 `NoAccess` 的附属。

## 心智模型

把它当成**「限制的类型标签」**，然后记住三个层次。

**层次一：它是解释，不是裁决。** 改这个枚举**不会**改变能不能进；你必须同时改 `AccessLevel`。反过来，`AccessLevel = FullAccess` 而理由留成 `CrimeRating`，玩家照样进得去——理由只是没被读到而已。

**层次二：它同时服务 `LimitedAccess` 与 `NoAccess` 两种结果。** 这是本页的核心。`LimitedAccess` 时它说明「需要先做 X」；`NoAccess` 时它说明「为什么连 X 都做不到」。所以写代码时**先判 `AccessLevel`，再按该分支的语义读理由**，两套语义不要混用。

**层次三：`LocationEmpty` 是事后降级的产物，不是判定输入。** `CanMainHeroEnterKeepInternal` 的整条 if-else 链跑完之后，还有一段独立代码（`DefaultSettlementAccessModel.cs:136-139`）：

```csharp
if (accessDetails.AccessLevel == AccessLevel.LimitedAccess
    && (accessDetails.LimitedAccessSolution == LimitedAccessSolution.Bribe || accessDetails.LimitedAccessSolution == LimitedAccessSolution.Disguise)
    && settlement.LocationComplex.GetListOfCharactersInLocation("lordshall").IsEmpty<LocationCharacter>()
    && settlement.LocationComplex.GetListOfCharactersInLocation("prison").IsEmpty<LocationCharacter>())
{
    accessDetails.AccessLevel = AccessLevel.NoAccess;
    accessDetails.AccessLimitationReason = AccessLimitationReason.LocationEmpty;
}
```

**它会覆写前面所有分支的结论**——原本是 `LimitedAccess + Bribe`，因为大厅和地牢都空无一人，直接降级为 `NoAccess + LocationEmpty`。**这意味着你在 if-else 链里填的任何理由都可能被这一段清掉。**

**一个真实的契约证据。** `PlayerTownVisitCampaignBehavior.SetLordsHallAccessLimitationReasonText` 在拿到领主大厅的判定后这样写：

```csharp
if (accessLimitationReason == SettlementAccessModel.AccessLimitationReason.HostileFaction)
{
    args.Tooltip = new TextObject("{=h9i9VXLd}You cannot enter an enemy lord's hall.", null);
    return;
}
if (accessLimitationReason != SettlementAccessModel.AccessLimitationReason.LocationEmpty)
{
    Debug.FailedAssert(string.Format("{0} is not a valid no access reason for lord's hall", accessDetails.AccessLimitationReason), ...);
    return;
}
```

**`HostileFaction` 与 `LocationEmpty` 是大厅路径上仅有的两个合法 `NoAccess` 理由**，其它值会触发断言。这条断言把「哪些理由能配 `NoAccess`」从约定变成了硬约束。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `None`（隐式值 0） | 没有限制。**它是 `default(AccessDetails)` 的默认值**，所以忘记赋值就是它。`CanMainHeroEnterVillage` 刻意以 `NoAccess + None` 初始化，再按条件覆写——那条路径上 `None` 会短暂出现在 `NoAccess` 组合里。 |
| `HostileFaction` | `HostileFaction`（隐式值 1） | 敌对派系。**它有两个不同的搭配**：在 `CanMainHeroEnterVillage` 之外的城镇/城堡路径上是 `NoAccess + ByRequest + HostileFaction`（`:392`）；在城镇路径上则是 `LimitedAccess + Disguise + HostileFaction`（`:447`）。**同一个理由值配两种准入结果，所以它不能单独告诉你能不能进。** `PlayerTownVisitCampaignBehavior` 为它准备了敌对文案。 |
| `RelationshipWithOwner` | `RelationshipWithOwner`（隐式值 2） | 与聚落拥有者关系不足。在 `DefaultSettlementAccessModel.cs:362` 与 `:382` 两处产出。**与 `ClanTier` 的分工**：这一条看个人声望/关系，那一条看家族等级。 |
| `CrimeRating` | `CrimeRating`（隐式值 3） | 犯罪值造成的限制。三处产出：`:104`（中立 + 有犯罪值 → `LimitedAccess + Bribe`）、`:376`、`:437`（城镇 + `IsPlayerCrimeRatingModerate` 或 `IsPlayerCrimeRatingSevere` → `LimitedAccess + Disguise`）。**注意判定 API 有两个**：`CrimeModel.DoesPlayerHaveAnyCrimeRating(IFaction)` 与 `CrimeModel.IsPlayerCrimeRatingModerate/IsPlayerCrimeRatingSevere(IFaction)`。 |
| `VillageIsLooted` | `VillageIsLooted`（隐式值 4） | 村庄正在被洗劫。在 `CanMainHeroEnterVillage`（`:326`）里是**后置覆写**：先算完 `FullAccess`，再判 `settlement.Village.VillageState == Village.VillageStates.Looted` 就改成 `NoAccess + VillageIsLooted`。**这是唯一描述临时状态的成员**——洗劫结束后同一次判定会给出不同结果，别把它缓存成永久状态。`Village.VillageStates` 是嵌套枚举，五个值 `Normal` / `BeingRaided` / `ForcedForVolunteers` / `ForcedForSupplies` / `Looted`。 |
| `Disguised` | `Disguised`（隐式值 5） | **当前处于乔装状态，这是「限制来源」而不是「拒绝理由」。** 在 `:95` 与 `:131` 两处，它总是与 `AccessLevel = LimitedAccess` + `LimitedAccessSolution = Disguise` 同时出现——意思正是「正因为你在乔装，所以只给有限权限」。**不要把它理解成「因为乔装所以不让进」。** |
| `ClanTier` | `ClanTier`（隐式值 6） | 家族等级不足。在 `:113` 与 `mainHero.Clan.Tier < 3` 联判，产出 `LimitedAccess + Bribe + ClanTier`。 |
| `LocationEmpty` | `LocationEmpty`（隐式值 7） | 地点里没有 NPC，所以「付钱/乔装也没人接待」。**它是唯一由事后降级代码产出的值**（`:137`），会覆写前面所有分支。它也是 `PlayerTownVisitCampaignBehavior` 断言认可的另一个合法 `NoAccess` 理由。 |

## 真实示例

按 `AccessLevel` 分层读理由（两个分支语义不同，照抄官方的分支形状）：

```csharp
SettlementAccessModel.AccessDetails details;
Campaign.Current.Models.SettlementAccessModel.CanMainHeroEnterLordsHall(settlement, out details);

TextObject tooltip;
if (details.AccessLevel == SettlementAccessModel.AccessLevel.FullAccess)
{
    tooltip = new TextObject("{=myOpen}The hall is open to you.", null);
}
else if (details.AccessLevel == SettlementAccessModel.AccessLevel.LimitedAccess)
{
    // LimitedAccess 分支：理由说明「需要先做哪一步」
    switch (details.AccessLimitationReason)
    {
        case SettlementAccessModel.AccessLimitationReason.Disguised:
            tooltip = new TextObject("{=myNeedDisguise}You will have to enter in disguise.", null);
            break;
        case SettlementAccessModel.AccessLimitationReason.CrimeRating:
            tooltip = new TextObject("{=myNeedBribe}Your reputation here means you will have to pay your way in.", null);
            break;
        case SettlementAccessModel.AccessLimitationReason.ClanTier:
            tooltip = new TextObject("{=myClanTooLow}Your clan is not yet important enough here.", null);
            break;
        default:
            tooltip = new TextObject("{=myLimitedGeneric}You will not be received openly.", null);
            break;
    }
}
else
{
    // NoAccess 分支：理由只解释为什么
    if (details.AccessLimitationReason == SettlementAccessModel.AccessLimitationReason.HostileFaction)
    {
        tooltip = new TextObject("{=h9i9VXLd}You cannot enter an enemy lord's hall.", null);
    }
    else if (details.AccessLimitationReason == SettlementAccessModel.AccessLimitationReason.LocationEmpty)
    {
        tooltip = new TextObject("{=cojKmfSk}There is no one inside.", null);
    }
    else
    {
        tooltip = new TextObject("{=myBlockedGeneric}You cannot enter here.", null);
    }
}

Debug.Print(tooltip.ToString(), 0);
```

两个文案 `{=h9i9VXLd}` 与 `{=cojKmfSk}` 是逐字照抄 `PlayerTownVisitCampaignBehavior.SetLordsHallAccessLimitationReasonText` 的官方 key——它们在语言文件里已有条目。

自定义准入时，理由要与 `AccessLevel` 成套填写（照抄 `DefaultSettlementAccessModel.CanMainHeroEnterKeepInternal` 的中立分支）：

```csharp
public override void CanMainHeroEnterDungeon(Settlement settlement, out AccessDetails accessDetails)
{
    accessDetails = default(AccessDetails);

    if (Campaign.Current.Models.CrimeModel.DoesPlayerHaveAnyCrimeRating(settlement.MapFaction))
    {
        accessDetails.AccessLevel = AccessLevel.LimitedAccess;
        accessDetails.AccessMethod = AccessMethod.Direct;
        accessDetails.LimitedAccessSolution = LimitedAccessSolution.Bribe;
        accessDetails.AccessLimitationReason = AccessLimitationReason.CrimeRating;
        return;
    }

    if (Hero.MainHero.Clan.Tier < 3)
    {
        accessDetails.AccessLevel = AccessLevel.LimitedAccess;
        accessDetails.AccessMethod = AccessMethod.Direct;
        accessDetails.LimitedAccessSolution = LimitedAccessSolution.Bribe;
        accessDetails.AccessLimitationReason = AccessLimitationReason.ClanTier;
        return;
    }

    accessDetails.AccessLevel = AccessLevel.FullAccess;
    accessDetails.AccessMethod = AccessMethod.Direct;
}
```

`Campaign.Current.Models.CrimeModel.DoesPlayerHaveAnyCrimeRating(settlement.MapFaction)` 与 `Hero.MainHero.Clan.Tier` 都是 `DefaultSettlementAccessModel.cs:98` / `:110` 原文所用的调用形状。

## 风险与边界

- **它不只出现在 `NoAccess`。** `Disguised` / `CrimeRating` / `ClanTier` / `HostileFaction` 全都与 `LimitedAccess` 同时产出。只写 `if (AccessLevel == NoAccess)` 读理由会漏掉一半判定。
- **`Disguised` 是限制来源，不是拒绝。** 它总与 `LimitedAccess + Disguise` 成对，意思是「你在乔装，所以只给有限权限」。把它当成「因为乔装被拒」是彻底的反向理解。
- **`HostileFaction` 配两种准入结果。** `:392` 是 `NoAccess + ByRequest`，`:447` 是 `LimitedAccess + Disguise`。**理由相同、结果不同**——这直接证明不能从理由反推准入。
- **`LocationEmpty` 会覆写前面的一切。** 判定链跑完后有一段独立的降级代码（`:136-139`），条件是「当前是 `LimitedAccess` 且方案是 Bribe 或 Disguise 且 `lordshall` 与 `prison` 两个 Location 都空」，然后把 `AccessLevel` 改写成 `NoAccess`、理由改写成 `LocationEmpty`。**你在 if-else 链里填的理由可能根本不会被读到。**
- **降级条件依赖两个硬编码的 Location id**：`"lordshall"` 与 `"prison"`，通过 `settlement.LocationComplex.GetListOfCharactersInLocation(...)` 查询。**改名或删除这两个 Location 会让降级逻辑永久失效**，且不报错。
- **合法的 `NoAccess` 理由有断言。** `PlayerTownVisitCampaignBehavior` 对大厅路径断言只有 `HostileFaction` 与 `LocationEmpty` 合法，`Debug.FailedAssert("{0} is not a valid no access reason for lord's hall")`。你若在自定义模型里给大厅路径配了 `CrimeRating + NoAccess`，会打到这条断言。
- **改理由不改变结果。** 只设 `AccessLimitationReason` 不会拒绝任何人；必须同时改 `AccessLevel`。
- **忘记赋值 = `None`。** `default(AccessDetails)` 让六个字段全为 0，而 0 就是 `None`。
- **不是 `Flags`。** 没有 `[Flags]`，按位或无意义且不报错。
- **隐式值绑定声明顺序。** 八个成员都没有显式数值，0…7 完全靠声明顺序。
- **嵌套类型。** 完整名 `SettlementAccessModel.AccessLimitationReason`。[AccessDetails](../AccessDetails) 的第三个字段类型就是它。
- **两个读方，不是三个也不是一个。** `EncounterGameMenuBehavior` 在 `:2188` / `:2196` / `:2207` / `:2282` / `:2302` / `:2584` 各判一个具体理由；`PlayerTownVisitCampaignBehavior.SetLordsHallAccessLimitationReasonText`（`:639-654`）判 `HostileFaction` 与 `LocationEmpty` 两个。**理由 → 文案的映射由这两个类共同决定**，没有单一权威来源。

## 怎么用

### 怎么拿到它

它没有静态入口，**只能从 `AccessDetails` 的第三个字段读出来**，而 `AccessDetails` 只由模型用 `out` 参数交给你。入口是 `Campaign.Current.Models.SettlementAccessModel`（`Campaign.Models` 声明在 `TaleWorlds.CampaignSystem/Campaign.cs:529`，`SettlementAccessModel` 属性在 `TaleWorlds.CampaignSystem/GameModels.cs:479`，由 `GameModels.cs:721` 的 `base.GetGameModel<SettlementAccessModel>()` 填充）。官方实现在 `TaleWorlds.CampaignSystem/SandBoxManager.cs:275` 注册。mod 要自己产出理由，就在 `InitializeGameStarter` 里覆盖模型；`SandBox/SandBoxSubModule.cs:28` 是那个生命周期回调的声明处。

### 典型用法

因为引擎那道守卫不生效（见下），**兜底分支必须自己写**：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Localization;

public static class LordsHallTooltip
{
    public static TextObject Build(Settlement settlement)
    {
        SettlementAccessModel.AccessDetails details;
        Campaign.Current.Models.SettlementAccessModel.CanMainHeroEnterLordsHall(settlement, out details);

        if (details.AccessLevel == SettlementAccessModel.AccessLevel.FullAccess)
        {
            return new TextObject("{=myOpen}The hall is open to you.", null);
        }

        if (details.AccessLevel == SettlementAccessModel.AccessLevel.LimitedAccess)
        {
            return details.AccessLimitationReason == SettlementAccessModel.AccessLimitationReason.Disguised
                ? new TextObject("{=myNeedDisguise}You will have to enter in disguise.", null)
                : new TextObject("{=myLimitedGeneric}You will not be received openly.", null);
        }

        // NoAccess：官方只承认两种理由，其余走 default。
        switch (details.AccessLimitationReason)
        {
            case SettlementAccessModel.AccessLimitationReason.HostileFaction:
                return new TextObject("{=h9i9VXLd}You cannot enter an enemy lord's hall.", null);

            case SettlementAccessModel.AccessLimitationReason.LocationEmpty:
                return new TextObject("{=myNobodyHome}There is nobody here to receive you.", null);

            default:
                // 官方在同样的位置调 Debug.FailedAssert 然后 return，tooltip 留空。
                // 1.3.0 里那次调用是空实现，所以这里必须自己给一句能看的文案。
                return new TextObject("{=myNoEntry}You cannot enter the lord's hall.", null);
        }
    }
}
```

签名核对：`CanMainHeroEnterLordsHall(Settlement settlement, out AccessDetails accessDetails)`，两参数、无返回值（`TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementAccessModel.cs:15`）。`TextObject(string value, Dictionary<string, object> attributes = null)` 在 `TaleWorlds.Localization/TextObject.cs:78`，命名空间 `TaleWorlds.Localization`。

### 最容易踩的坑

**以为那句 `Debug.FailedAssert` 会帮你抓出非法组合。它在 1.3.0 里什么都不做。**

`PlayerTownVisitCampaignBehavior.cs:648` 那句断言看起来是硬约束，实际是双重失效的：

```
TaleWorlds.Engine/MBDebug.cs:107   [Conditional("_RGL_KEEP_ASSERTS")]
TaleWorlds.Engine/MBDebug.cs:108   public static void FailedAssert(string message, ...)
TaleWorlds.Engine/MBDebug.cs:109   {
TaleWorlds.Engine/MBDebug.cs:110   }
```

第一，`[Conditional("_RGL_KEEP_ASSERTS")]` 挂在方法上——**没定义这个编译符号时，整个调用在编译期就被剥掉，调用点连参数求值都不会发生**。第二，就算定义了，方法体是空的，`MBDebug` 在 `TaleWorlds.Engine/MBDebug.cs:11`，全树只有这一个 `FailedAssert` 重载，没有别的实现。

后果：合法理由集合并没有被强制。`SetLordsHallAccessLimitationReasonText` 遇到 `HostileFaction` 与 `LocationEmpty` 之外的 `NoAccess` 理由时，只是走到 `:648` 打完一句字，然后 `return`——**tooltip 从头到尾没被赋值**。表现是玩家点了「进入领主大厅」，菜单项要么不出现，要么出现但说明文字是空的，**没有异常、没有日志、没有断点**。你在自己模型里新增一个理由值时踩的就是这个坑；同一个表现也可能来自官方模型本身产出了第三种 `NoAccess` 理由，所以排查时先打印 `AccessLimitationReason` 的实际值，而不是先怀疑自己的 `switch`。

## 跨版本提示

`AccessLimitationReason` 在 `bannerlord-1.3.0/` 里的成员是这八个。后续版本（`1.3.15` / `1.4.6` / `1.4.7` / `1.5.3`）**在这个枚举上继续追加了成员**，细分理由随之变多——两个读方里的分支数量也随之增长。

追加成员不构成编译破坏，但你必须意识到两件事：

**第一，别把 `switch` 写成不完备的。** 上面的示例用了带 `default:` 的 `switch`，这是对的；如果你写成 `switch` 加 `default: throw`，新版本加成员后你的代码会在运行期抛。官方自己用的是 `if / else if` 链加兜底，这也是更稳的形状。

**第二，前八个成员的名字与顺序自 1.3.0 起没有重排**，所以任何硬编码数值比较还能活——但这跟 `AccessLevel` 那个 `!= 2` 一样，是依赖实现的脆弱写法，不要照抄。

对 mod 作者的实际含义：**覆盖 `SettlementAccessModel` 的代码跨版本基本稳定**；真正需要盯的是你依赖的那个具体理由值是否还在，以及两个读方的文案映射是否变化。

## 依赖关系

- 宿主类型：[SettlementAccessModel](../SettlementAccessModel) 是嵌套它的抽象模型类，判定结果经 `out AccessDetails` 交出
- 承载结构：[AccessDetails](../AccessDetails) 的第三个字段
- 必须联读：[AccessLevel](../AccessLevel) 决定这个理由在哪套语义下被读（`LimitedAccess` 语义与 `NoAccess` 语义不同）；`LimitedAccessSolution` 说明先做什么；[AccessMethod](../AccessMethod) 说明走哪条通道
- 判定 API 来源：`Campaign.Current.Models.CrimeModel.DoesPlayerHaveAnyCrimeRating(IFaction)` / `IsPlayerCrimeRatingModerate` / `IsPlayerCrimeRatingSevere`，以及 `Hero.MainHero.Clan.Tier`
- 默认实现：[DefaultSettlementAccessModel](../DefaultSettlementAccessModel) 是全部八个值的产出地——`:95`/`:131`（Disguised）、`:104`/`:376`/`:437`（CrimeRating）、`:113`（ClanTier）、`:137`（LocationEmpty，降级）、`:326`（VillageIsLooted）、`:362`/`:382`（RelationshipWithOwner）、`:392`/`:447`（HostileFaction）、`:313`（None）
- 消费方：[EncounterGameMenuBehavior](../EncounterGameMenuBehavior)（六处）与 `PlayerTownVisitCampaignBehavior.SetLordsHallAccessLimitationReasonText`（两处 + 一条断言）
- 桶首页：[campaign API 分区](../)