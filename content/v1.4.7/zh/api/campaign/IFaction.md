---
title: "IFaction"
description: "派系的统一只读契约：Clan、Kingdom 与小型派系组件都实现它，提供首领、旗帜、城镇 / 领主集合、敌对关系与犯罪声望的统一访问面。写「与派系相关」的通用逻辑时的唯一抽象。"
---
# IFaction

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `[SaveableInterface(22001)] public interface IFaction`
**基类：** 无（接口）
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/IFaction.cs`（声明见第 13–14 行）

## 概述

`IFaction` 是战役层对「派系」这一概念的抽象契约。它把 `Clan`（氏族）、`Kingdom`（王国）以及若干小型派系组件统一到同一个只读视图下，让外交、关系、城镇归属、部队登记这些跨派系的逻辑可以只写一份。接口上带着 `[SaveableInterface(22001)]` 标记——这是存档系统为接口分配的编号，意味着**实现 `IFaction` 的类型在读写档时会按接口 ID 解析**，改动实现类型会直接影响旧档的兼容性。

它的成员分四块：身份与展示（`Name`、`StringId`、`Id`、`Banner`、`Color`、`Culture`）、地理与成员（`Settlements`、`Fiefs`、`AliveLords`、`Heroes`、`WarPartyComponents`）、分类判定（`IsClan`、`IsKingdomFaction`、`IsBanditFaction`、`IsMinorFaction`、`IsRebelClan`、`IsOutlaw`、`IsMapFaction`）、以及敌对与声望（`IsAtWarWith`、`GetStanceWith`、`FactionsAtWarWith`、`TributeWallet`、`MainHeroCrimeRating`）。写「这段逻辑对任何派系都成立」的 mod 逻辑时，参数类型就应该写成 `IFaction`，而不是 `Clan`。

## 心智模型

**模组什么时候会伸手去拿 `IFaction`？** 典型场景有三类：外交 UI 要同时展示王国与氏族、城镇 / 村庄归属变化要通知各方、以及声望 / 犯罪值要跨派族读写。这些场景的共性是「我不知道对方是 `Clan` 还是 `Kingdom`，也不想知道」。这时把参数签名写成 `IFaction` 就够了，调用方仍然持有具体的 `Clan` / `Kingdom` 引用，必要时 `is Clan c` 收窄回去。

正确的调用顺序：

1. **先分类再取成员。** `IsClan` / `IsKingdomFaction` / `IsBanditFaction` / `IsMinorFaction` 这组判定决定了你接下来该期待什么。`Kingdom` 有 `AliveLords` 与 `Fiefs`，`Clan` 主要看 `Heroes`；对 `BanditPartyComponent` 调用 `Fiefs` 会得到空集合而不是异常。
2. **集合是只读视图，不是快照。** `Settlements`、`Heroes`、`AliveLords`、`Fiefs`、`WarPartyComponents` 返回 `MBReadOnlyList<T>`，底层仍会被外交与死亡逻辑改动。**不要在遍历它的同时修改世界状态**（例如在遍历 `Heroes` 时让某个英雄死亡或改效忠），那会抛集合修改异常。
3. **敌对关系有两套查询。** `IsAtWarWith(IFaction)` 是即时布尔查询；`FactionsAtWarWith` 是缓存列表，需要在关系变化后由 `UpdateFactionsAtWarWith()` 刷新——这个方法带副作用，只能在确定要重建缓存时调用。
4. **可写成员极少且语义特殊。** `TributeWallet`、`MainHeroCrimeRating`、`NotAttackableByPlayerUntilTime` 有 setter，但这三个都不是通用字段：`TributeWallet` 主要对王国有意义，`MainHeroCrimeRating` / `DailyCrimeRatingChange` 只对「玩家可能接触的派系」有意义（它们是玩家视角的犯罪统计），`NotAttackableByPlayerUntilTime` 是防止玩家立刻攻击该派系的冷却时间。

## 何时使用 / 何时不要使用

- **使用**：编写与派系无关的通用逻辑（外交通用规则、城镇归属通知、声望展示）。
- **使用**：把一堆 `Clan` 与 `Kingdom` 放进同一个列表排序 / 过滤（用 `Name` 排序而不是 `StringId`）。
- **使用**：需要判断「是否对玩家宣战」时，先用 `MapFaction` 归一再比较，避免把派系组件和实际派系混着比。
- **不要**：不要把 `IFaction` 当成 `Clan` 用——`Leader` 对某些实现是 `null`，`AliveLords` 对氏族可能为空。
- **不要**：不要在事件回调里调用 `UpdateFactionsAtWarWith()`。它是缓存重建，不是通知；引擎在外交状态变化后自行维护，mod 手动调用容易造成「读到的列表与实际宣战状态不一致」。
- **不要**：不要实现 `IFaction`。它是引擎内部的存档契约，实现它需要匹配的 `[SaveableInterface]` 编号与完整成员；自定义派系应该走 `MinorFaction` 之类的官方扩展点。

## 成员说明

### 身份与展示

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `TextObject Name` | 本地化名称。UI 一律用它，不要直接用 `StringId` 显示。 |
| `string StringId` | XML 定义里的稳定 ID，用于查表、比对与存档。 |
| `MBGUID Id` | 运行时唯一标识，存档引用依赖它。不要自己构造或复用。 |
| `TextObject InformalName` | 非正式（口语化）名称，用于对话 / 传闻语境。 |
| `string EncyclopediaLink` | 百科条目 key，可交给百科系统跳转。 |
| `TextObject EncyclopediaLinkWithName` | 带显示名的百科链接文本，直接塞进 UI 按钮。 |
| `TextObject EncyclopediaText` | 百科正文描述。 |
| `CultureObject Culture` | 文化对象，决定服饰、名字、话题等。 |
| `Settlement InitialHomeSettlement` | 初始家园定居点；判定「某派系的发源地」时用它。 |
| `uint Color` / `uint Color2` | 主 / 副旗帜色。`Color` 常被 UI 用作派系主题色。 |
| `CharacterObject BasicTroop` | 该派系的基础兵种。计算派系基础战力时的参考值。 |
| `Hero Leader` | 领袖。对 `Kingdom` 是君主；对没有领袖的实现返回 `null`——使用前必须判空。 |
| `Banner Banner` | 旗帜实例，UI 直接渲染。 |

### 地理、成员与部队

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `MBReadOnlyList<Settlement> Settlements` | 归属该派系的所有定居点。遍历前留意：城镇易主发生在外交流程中间态，可能出现短暂的不一致。 |
| `MBReadOnlyList<Town> Fiefs` | 城镇（fief）子集，只有派系拥有主权城镇时非空。 |
| `MBReadOnlyList<Hero> AliveLords` | 存活的领主（王国的封臣）。`Kingdom` 才有意义。 |
| `MBReadOnlyList<Hero> DeadLords` | 已故领主，用于爵位继承链。 |
| `MBReadOnlyList<Hero> Heroes` | 该派系全部英雄（不分死活）。 |
| `MBReadOnlyList<WarPartyComponent> WarPartyComponents` | 登记在该派系名下的战争部队组件；点检与和平状态用。 |

### 分类判定

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `IsBanditFaction` | 强盗派系（森林 / 草原 / 湖泊 / 沙漠海盗）。逻辑分支里最常用的一组开关之一。 |
| `IsMinorFaction` | 小型派系（通常有固定驻地的中立势力）。 |
| `IsKingdomFaction` | 王国家。 |
| `IsRebelClan` | 叛乱氏族。 |
| `IsClan` | 普通氏族。 |
| `IsOutlaw` | 法外之徒。 |
| `IsMapFaction` | 是否是「存在于地图上的派系」（用于过滤仅数据存在的条目）。 |
| `HasNavalNavigationCapability` | 是否具备海军航行能力，决定它的部队能否走水路、AI 是否会派海军。 |
| `IFaction MapFaction` | 对应的地图派系——用于在「派系组件」与「实际派系」之间归一。 |
| `bool IsEliminated` | 是否已被淘汰（灭国 / 解散）。被淘汰的派系不应再参与逻辑。 |

### 外交、声望与统计

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `bool IsAtWarWith(IFaction other)` | 即时查询双方是否处于战争状态。这是安全、无副作用的查询方式。 |
| `StanceLink GetStanceWith(IFaction other)` | 取两派系之间的外交姿态（同盟 / 中立 / 敌对…）。**没有外交记录时返回 `null`**，务必判空。 |
| `MBReadOnlyList<IFaction> FactionsAtWarWith` | 敌对派系列表（缓存）。 |
| `void UpdateFactionsAtWarWith()` | 重建上面那个缓存。带副作用，仅在确认需要时调用，**绝不在事件回调或遍历中调用**。 |
| `int TributeWallet { get; set; }` | 贡金钱包余额。外交行为会加减它。 |
| `float MainHeroCrimeRating { get; set; }` | 玩家主角在该派系的犯罪值。设为 0 可「洗白」关系，是声望类 mod 的常用入口。 |
| `float DailyCrimeRatingChange` | 该派系犯罪值的每日变化率（通常为负）。 |
| `ExplainedNumber DailyCrimeRatingChangeExplained` | 同上的可解释版本（带各项来源明细），UI 应优先用它来展示「为什么在下降」。 |
| `float CurrentTotalStrength` | 派系当前总战力，用于 AI 评估与和平 / 战争判断。 |
| `Settlement FactionMidSettlement` | 该派系的「中心定居点」，寻路与地图标注的参考点。 |
| `float DistanceToClosestNonAllyFortification` | 到最近非盟友要塞的距离，寻路避让用。**每次读取都要遍历敌方要塞，属于重查询**。 |
| `CampaignTime NotAttackableByPlayerUntilTime { get; set; }` | 在该时刻之前玩家无法对该派系发起攻击。外交流程（议和、拒绝条件）会用它设置一个冷却窗口。 |

## 示例

### 示例 1：写一段与派系类型无关的通用逻辑

关键在于参数声明为 `IFaction`，然后用 `Is*` 分类开关决定后续行为，并且对可能为 null 的成员判空。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Library;

// 对任何派系都成立：取它最显眼的标签
static string DescribeFaction(IFaction faction)
{
    if (faction == null) return "";

    if (faction.IsKingdomFaction)
        return faction.Name.ToString();

    if (faction.IsClan || faction.IsRebelClan)
        return faction.Name.ToString();

    if (faction.IsBanditFaction)
        return "Bandit";

    return faction.Name.ToString();
}

// 调用方仍持有具体类型，需要时收窄回去
Clan playerClan = Hero.MainHero.Clan;
string label = DescribeFaction(playerClan);
```

### 示例 2：外交关系查询与罪犯罪望

`GetStanceWith` 在没有外交记录时返回 `null`，必须先判空再取关系值。

<!-- xml-id-unverifiable: v1.4.7 -->
> ⚠️ 不可验证：本页全部字符串 id（下方代码示例中的）在 v1.4.7 源码树均无法核对——该版本未随附 XML 语料。
```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.ObjectSystem;

IFaction playerFaction = Hero.MainHero.Clan;

// FactionManager 没有按 StringId 查的便捷方法；派系实现都是 MBObjectBase，
// 所以走 MBObjectManager 的 StringId 查找，或遍历 Clan.All / Kingdom.All
IFaction target = MBObjectManager.Instance.GetObject<Clan>("empire");

if (playerFaction != null && target != null)
{
    // 无副作用的即时查询
    bool atWar = playerFaction.IsAtWarWith(target);

    // 可能为 null：没有外交记录时 GetStanceWith 返回 null
    StanceLink stance = playerFaction.GetStanceWith(target);
    if (stance != null && stance.StanceType == StanceType.War)
    {
        // 读取可解释的犯罪值变化明细，而不是直接读 DailyCrimeRatingChange
        ExplainedNumber explained = target.DailyCrimeRatingChangeExplained;
    }

    // 可写成员：清零犯罪值（洗白关系）
    target.MainHeroCrimeRating = 0f;
}
```

### 示例 3：遍历成员，但不在遍历中改世界

`Heroes` / `Settlements` 是活视图。安全做法是先取出再遍历，或收集到自己的列表。

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

List<string> names = new List<string>();
foreach (Settlement settlement in playerFaction.Settlements)
{
    // 只读，不改世界
    names.Add(settlement.Name.ToString());
}

// 需要在遍历中触发世界变更时，先复制出来
List<Hero> snapshot = new List<Hero>(kingdom.AliveLords);
foreach (Hero lord in snapshot)
{
    ApplyYourEffectTo(lord);
}
```

## 风险与边界

- **集合被就地修改**：`Settlements`、`Heroes`、`AliveLords`、`Fiefs`、`WarPartyComponents` 都是实时视图。在这些集合的遍历中让英雄死亡、城镇易主、部队解散，会抛 `InvalidOperationException`。需要边遍历边改世界时，先复制到自己的 `List<T>`。
- **`Leader` 可能为 null**：`BanditPartyComponent`、部分 `MinorFaction` 没有 `Hero` 领袖。直接 `faction.Leader.HeroAge` 就会 NRE。
- **`GetStanceWith` 返回 null**：没有外交记录的派系对之间拿不到 `StanceLink`。这是最常被忽略的空引用源。
- **`UpdateFactionsAtWarWith()` 的副作用**：它重建 `FactionsAtWarWith` 缓存。在事件回调或列表遍历中调用会让缓存与你正在使用的视图脱节，导致「刚宣战却读不到敌对方」这种诡异 bug。
- **存档契约**：`[SaveableInterface(22001)]` 意味着接口 ID 参与存档解析。实现 `IFaction` 的类型被移除或改 ID 会让旧档在加载时把对象解析成 null。
- **`MainHeroCrimeRating` 的玩家中心语义**：接口把这个属性放在所有派系上，但它是「玩家主角 vs 该派系」的犯罪统计。对敌方派系反复读写它会引发外交 AI 的评分变化，而不是真正的通缉逻辑。
- **遍历时机的单线程假设**：所有实现都在主游戏线程上更新。联机同步回调里读取这些列表前必须转投主线程。
- **`DistanceToClosestNonAllyFortification` 的成本**：每次读取都要遍历敌方要塞，属于重查询，不要放在每帧的绘制路径里。

## 依赖关系

- 上游 / 实现者：
  - [Campaign](../Campaign) 通过 `FactionManager` 持有全部 `IFaction` 实现。
  - `Clan` 与 `Kingdom` 是最主要的两个实现类型；`BanditPartyComponent` 与各类 `MinorFaction` 是次要实现。
- 相互 / 下游：
  - [CampaignEvents](../CampaignEvents) 广播派系相关事件（`OnClanCreatedEvent`、`KingdomCreatedEvent`、`OnClanChangedKingdomEvent`、`OnClanDefectedEvent`、`KingdomDestroyedEvent`、`WarDeclared`、`OnAllianceStartedEvent`），是响应 `IFaction` 状态变化的正确入口。
  - [CampaignBehaviorBase](../CampaignBehaviorBase) 派生的外交类 Behavior（如联盟、和平）在内部按 `IFaction` 编程。
  - [Mission](../../mission/Mission) 处理任务内的敌对关系；地图派系与任务队伍通过 `MobileParty.MapFaction` 衔接。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [Mission](../../mission/Mission)