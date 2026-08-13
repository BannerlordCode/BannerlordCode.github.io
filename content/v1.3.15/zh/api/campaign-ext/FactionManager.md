---
title: "FactionManager"
description: "战役中管理派系（王国/氏族/强盗）之间战争、中立等对立姿态（Stance）与氏族关系值的底层协调器，提供姿态查询与引擎内部变更入口，由 Campaign 持有。"
---

# FactionManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FactionManager`
**Base:** 无（独立 Manager，无基类）
**源文件路径：** `TaleWorlds.CampaignSystem/FactionManager.cs`

## 一句话职责

集中记录并回答「任意两个派系当前是交战、中立还是恒定世仇」，以及「两个氏族之间的好感度加权值」——它是整张外交状态表的读写中枢，而不是发起战争的决策入口。

## 心智模型

`FactionManager` 是随战役（Campaign）一起诞生的长期存活对象，由 `Campaign` 在其构造函数里 `new FactionManager()` 并塞进 `Campaign.Current.FactionManager` 这个只读属性里，全程只此一份、没有「实例」「单例字段」之分，开发者永远通过 `Campaign.Current.FactionManager`（或其 `static Instance` 缩写）访问它。它处在 Campaign 层、而非 Mission 层，因此只在地图界面与战役进程里有效，进入一场战斗任务时它依然存在但不会被任务逻辑改。它的全部真相都收在一个可存档字段 `_stances`（`FactionManagerStancesData`，即一堆 `StanceLink`）里：每个 `StanceLink` 记录两派系间的 `StanceType`（War / Neutral / …）。查询方法并不会凭空算外交，而是先看 `DiplomacyModel` 给出的「浅层外交姿态」与「恒定世仇」这类不可改的硬规则，再回落到 `_stances` 里这条具体记录；变更方法（如 `DeclareWar`）则只改这条记录的 `StanceType`，并顺手调用 `IFaction.UpdateFactionsAtWarWith()` 刷新各派系的「我正在和谁交战」缓存。也就是说，它管的是「状态表」，不管「为什么开战」——开战的前因后果（外交决策、宣战信、停战协议）由 `DeclareWarAction` / `MakePeaceAction` 等 Action 与多个 Behavior 负责。

## 何时用 / 何时不要用

**用它来：** 只读地回答外交状态问题——「玩家氏族和 A 王国是不是交战？」「这两个氏族关系多少？」；或在你已经走过完整外交流程、只想做底层姿态修正的引擎扩展里。

**不要直接用它来：** 发起/结束一场战争或改变中立关系作为你模组的主交互。正确做法是调用 `../DeclareWarAction` 与 `../MakePeaceAction`（其 `Apply` 会正确触发决策、通知、协议与行为链）。`FactionManager.DeclareWar` 是个「引擎内部」便捷方法：它只改 `_stances` 里那条记录，并不走外交事件流，且当 `DiplomacyModel.GetShallowDiplomaticStance` 返回一个值（说明有更底层的硬规则在管这对关系）时，它会**静默什么都不做**——你以为宣战成功了，其实没生效。

**不要用它来** 缓存 `StanceLink` 引用跨存档读取：读档后 `_stances` 里的对象会被整个重建，`PreAfterLoad` / `AfterLoad` 还会删掉被消灭派系的姿态、修旧档的世仇标记，旧引用会变成野引用。

## FactionManager 与外交 Action 的分工

模组最常犯的错误就是把「我想让 A 和 B 开战」直接翻译成 `FactionManager.DeclareWar(a, b)`。下面的对照说明为什么绝大多数情况下该用 Action：

| 维度 | `FactionManager.DeclareWar` / `SetNeutral` | `DeclareWarAction` / `MakePeaceAction` |
|------|--------------------------------------------|----------------------------------------|
| 触发的外交事件流 | 无，只改 `_stances` | 走决策、通知、协议与 Behavior 链 |
| 对 `DiplomacyModel` 硬规则的尊重 | 浅层姿态有值时**静默无效** | 在 Action 内部先校验可行性再落地 |
| 是否刷新 `FactionsAtWarWith` 缓存 | 是（副作用之一） | 是（经由 FactionManager 完成） |
| 适合场景 | 引擎内部修正、读档迁移、单元测试 | 玩家/AI 宣战、停战、外交 MOD 主交互 |
| 被消灭派系 / 恒定世仇 | 不拦截，依赖调用方判断 | 通常有前置判断与日志 |

结论：**把 `FactionManager` 当成「外交状态表」，把 `*Action` 当成「改变外交的动词」。** 读状态用前者，发起改变用后者；只有在你明确要绕过外交流程做底层修正（例如实现自定义宣战规则、修复脏数据）时，才直接调 `FactionManager` 的变更方法，并务必随后用 `IsAtWarAgainstFaction` 验证生效。

## 依赖

- 上游持有者：[Campaign](../../campaign/Campaign)（`Campaign.Current.FactionManager` 是唯一入口；构造与 `AfterLoad` 都由它驱动）
- 数据载体：[FactionManagerStancesData](../../campaign/FactionManagerStancesData)（`_stances`，存档字段）与 [StanceLink](../StanceLink)（每条对立记录）、[StanceType](../../campaign/StanceType)（War / Neutral 枚举）
- 硬规则来源：`Campaign.Current.Models.DiplomacyModel`（注：本版本未单列页，逻辑在 `Campaign.Current.Models.DiplomacyModel`）——`IsAtConstantWar`、`GetShallowDiplomaticStance` 决定查询与变更能否生效
- 同级协调器：[KingdomManager](../KingdomManager)（王国创建/解散时影响派系集合）
- 正确的战争入口：[DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction)
- 派系类型本身：[Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [Hero](../../campaign/Hero)
- 写作契约：[doc-contract](../../../architecture/doc-contract)

## 风险

- **错误阶段变更**：在存档读取（`PreAfterLoad` / `AfterLoad`）尚未跑完时就改姿态，会和随后基于 `IsEliminated` 的清理逻辑冲突，可能留下指向已消灭派系的脏 `StanceLink`。
- **静默无效**：`DeclareWar` / `SetNeutral` 在 `GetShallowDiplomaticStance` 有值（即这对关系由外交硬规则统管）时直接 return，不抛异常——务必先用 `IsAtWarAgainstFaction` 校验结果。
- **缓存不一致**：变更姿态会调用 `IFaction.UpdateFactionsAtWarWith()` 刷新各方「交战列表」。若你绕开 `FactionManager` 直接改 `_stances` 字段，这些缓存不会更新，地图 AI 与 Settlement 判定会用到过期数据。
- **存档一致性**：`_stances` 是 `[SaveableField(20)]`，手动增删 `StanceLink` 必须走 `FactionManager` 内部路径；自行向集合塞不合规对象会导致序列化失败或读档崩溃。
- **性能**：`GetRelationBetweenClans` 每次都遍历两边 `AliveLords` 并调用 `GetBaseHeroRelation`，在大循环（每 tick 对所有氏族两两计算）里开销显著，应缓存结果而非反复调用。
- **跨层误用**：它是 Campaign 层对象，在 Mission 逻辑里读取虽然不崩，但姿态在任务内不会改变，别据此做实时战斗判断。

## 姿态数据模型

理解成员前先看清「真相」存在哪里。`FactionManager` 自己几乎不存状态，全部外交姿态收在 `_stances`（`FactionManagerStancesData`）里，它是一组 `StanceLink` 的容器；每条 `StanceLink` 持有 `Faction1`、`Faction2` 与 `StanceType`（`../../campaign/StanceType`，War / Neutral / …）。关键行为是**惰性创建**：当你查询一对从未记录过的派系时，`GetStanceLinkInternal` 会现场 new 一条 `StanceLink`，其初始 `StanceType` 由 `DiplomacyModel.GetDefaultDiplomaticStance` 决定（命中默认战争则返回 War，否则 Neutral），然后写回 `_stances`。这意味着：

- 查询本身可能**产生持久写入**（新建一条 StanceLink），不是纯只读——这是该类的隐性副作用，模组在「只读探测」大量派系对时要心里有数。
- `DiplomacyModel` 的三类硬规则优先级高于 `_stances`：`IsAtConstantWar`（恒定世仇，永远交战）、`GetShallowDiplomaticStance`（浅层外交姿态，存在则引擎不允许 `FactionManager` 再改）、以及默认姿态（决定新建记录的初值）。所以 `FactionManager` 是「硬规则之下的可变层」，不是外交的唯一裁决者。

## 主要成员

### 获取与生命周期

- **`static FactionManager Instance`** — `Campaign.Current.FactionManager` 的缩写。**用途**：任何能拿到 `Campaign` 的上下文里取管理器。**何时调用**：需要查询/变更姿态时，优先在 Campaign tick、地图事件、外交回调中读取。

- **`void PreAfterLoad()`（internal）** — 读档后、正式进入战役前清理：旧版本档中删除被消灭派系的姿态、按 `DiplomacyModel` 修世仇标记。**副作用**：会 `RemoveStance` 并改动 `_stances`。**何时调用**：仅引擎在读档流程里调，模组不要手动调。

- **`void AfterLoad()`（internal）** — 更老版本（< v1.2.9.35637）档的迁移：把「世仇但记录不是 War」的姿态补成 `StanceType.War`。**何时调用**：引擎读档流程，模组勿调。

### 战争与和平查询（模组主用）

- **`static bool IsAtWarAgainstFaction(IFaction a, IFaction b)`** — 判断两派系是否处于交战。**逻辑**：任一为 null / 同一派系 / 已消灭 → `false`；否则先看 `DiplomacyModel.IsAtConstantWar`，再看浅层姿态，最后回落 `_stances` 记录的 `IsAtWar`。**何时调用**：每次需要判断敌我（如自定义袭击逻辑、UI 着色、外交条件）时调用，结果即时可信。

- **`static bool IsAtConstantWarAgainstFaction(IFaction a, IFaction b)`** — 是否为「恒定世仇」（如某些文化/派系固定的不死不休）。**何时调用**：需要区分「临时宣战」与「系统级世仇」时。

- **`static bool IsNeutralWithFaction(IFaction a, IFaction b)`** — 是否中立。**注意**：恒定世仇返回 `false`；强盗对非强盗且一方无存活领主的特殊组合也返回 `false`。**何时调用**：停战/结盟前置判断。

### 姿态变更（引擎内部，慎用）

- **`static void DeclareWar(IFaction a, IFaction b)`** — 把两者姿态设为 `War`。**副作用**：若原姿态含 War 或新设为 War，调用双方 `UpdateFactionsAtWarWith()`。**坑**：同派系或浅层姿态有值时静默无效。**何时调用**：仅在你确有把握绕开外交流程、做底层修正时；常规宣战用 `../DeclareWarAction`。

- **`static void SetNeutral(IFaction a, IFaction b)`** — 把姿态设为 `Neutral`，若原为 War 同样刷新交战缓存。**何时调用**：同上，用 `../MakePeaceAction` 才是正道。

- **`void RemoveFactionsFromCampaignWars(IFaction f)`（internal）** — 当 `f` 是地图派系且被移出战役时，删除它参与的所有 `StanceLink` 并刷新相关方缓存。**何时调用**：引擎在派系解散/被消灭时调。

### 氏族关系计算

- **`static int GetRelationBetweenClans(Clan c1, Clan c2)`** — 返回两氏族间加权好感度整数。**算法**：遍历两边都已成年（`AgeModel.HeroComesOfAge`）的存活领主，按权重（氏族领袖 +0.2、配偶 +0.05，双方领袖相乘 20×）累加各自 `GetBaseHeroRelation`，再求加权平均；若一方是无人存活的强盗氏族而另一方不是，直接返回 `-10`。**何时调用**：展示氏族关系、决定是否结好/敌视时；注意它每次现算、无缓存。

## 选哪个查询入口

`FactionManager` 的查询方法参数类型不同，选错会编译不过或语义不对：

- **`IsAtWarAgainstFaction` / `IsAtConstantWarAgainstFaction` / `IsNeutralWithFaction`**：参数是 `IFaction`，因此对 `Kingdom`（王国）和 `Clan`（氏族，包括玩家氏族）都适用。判断「玩家势力与某王国是否交战」「两个氏族是否中立」都用这三个。
- **`GetRelationBetweenClans`**：参数严格是 `Clan`，不能直接传 `Kingdom`。它算的是**氏族层面**的好感度（基于双方存活领主），并不等同于派系外交姿态；外交姿态请用品类一的查询，关系值请用这一类。

简记：姿态（War/Neutral/世仇）看 `IFaction` 三兄弟，好感度看 `GetRelationBetweenClans`。

## 最小真实示例

读取玩家与某王国的交战状态，并在确实未交战时走正规宣战流程（而不是直接戳 `FactionManager`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

IFaction playerFaction = Clan.PlayerClan;
IFaction targetKingdom = Kingdom.All[0];

// 查询：两派系当前是否交战（读 FactionManager 的真相表）
bool atWar = FactionManager.IsAtWarAgainstFaction(playerFaction, targetKingdom);

// 仅在尚未交战、且不是恒定世仇时，走正规外交动作宣战
if (!atWar && !FactionManager.IsAtConstantWarAgainstFaction(playerFaction, targetKingdom))
{
    DeclareWarAction.ApplyByPlayer(playerFaction, targetKingdom);
}
```

读取两个氏族的关系值（例如评估是否应提议结盟），注意它即时计算：

```csharp
Clan a = Clan.PlayerClan;
Clan b = someOtherClan;

int relation = FactionManager.GetRelationBetweenClans(a, b);
if (relation < -10)
{
    // 仇恨较深，自定义UI标红或拦截某项交互
    InformPlayerOfHatred(b);
}
```

结合查询结果与派系自带的交战缓存，列出玩家当前所有交战对象（`FactionsAtWarWith` 就是姿态变更时由 `UpdateFactionsAtWarWith()` 刷新的那个列表）：

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

IFaction playerMapFaction = Clan.PlayerClan.MapFaction;

List<IFaction> enemies = new List<IFaction>();
foreach (IFaction other in playerMapFaction.FactionsAtWarWith)
{
    // 用 FactionManager 再次确认（缓存与真相一致时二者等价）
    if (FactionManager.IsAtWarAgainstFaction(playerMapFaction, other))
    {
        enemies.Add(other);
    }
}
// enemies 即为玩家地图派系当前所有交战方，可用于自定义战争面板
```

## 调试与常见陷阱

- **「我调了 DeclareWar 但没开战」**：九成是 `DiplomacyModel.GetShallowDiplomaticStance` 对这对关系返回了值（硬规则统管），或两派系之一已 `IsEliminated`，方法静默 return。先 `IsAtWarAgainstFaction` 复读，再检查 `DiplomacyModel` 的浅层/恒定规则。
- **UI 显示交战但逻辑说中立（或反之）**：多半是某处绕开 `FactionManager` 直接改了 `_stances`，导致 `FactionsAtWarWith` 缓存与 `_stances` 真相脱节。始终通过 `FactionManager` 变更，让它负责刷新缓存。
- **读档后引用失效崩溃**：不要把 `StanceLink` 存成字段跨场景用；读档会重建 `_stances`，旧对象失效。每次需要时重新查询。
- **卡顿**：在 `DailyTick` / `MapEvent` 里对全部氏族两两调用 `GetRelationBetweenClans` 会指数级放大领主遍历开销。按需调用并缓存结果，不要每帧重算。
- **判定错乱**：`IsNeutralWithFaction` 在恒定世仇下返回 `false`，别把它当成「非交战即中立」——交战、世仇、中立三者要分别用对应查询方法区分。

## 导航

- ↑ [父级：campaign-ext 模块索引](../)
- ↔ [同级：KingdomManager](../KingdomManager)
- 相关类型：[StanceLink](../StanceLink) · [DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction)
- 上游：[Campaign](../../campaign/Campaign) · 数据：[FactionManagerStancesData](../../campaign/FactionManagerStancesData) · [StanceType](../../campaign/StanceType)
- 派系：[Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [Hero](../../campaign/Hero)
- 契约：[文档契约](../../../architecture/doc-contract)
