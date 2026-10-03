---
title: "ActionNotes"
description: "角色特质经验变动与日志条目的原因标签：28 个值，全部是「因为什么」而不改变任何数值。它只影响 CharacterInsultedLogEntry 与 PlayerReputationChangesLogEntry 的文案分支。"
---

# ActionNotes

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ActionNotes`
**Base:** 无（`System.Int32` 底层枚举，不是 `FlagsAttribute`）
**File:** `TaleWorlds.CampaignSystem/ActionNotes.cs`（全文 66 行，28 个成员）

## 概述

`ActionNotes` 是一个**纯原因标签**。它不改变任何游戏数值、不触发任何规则分支——**它的全部作用是决定日志条目的文案**。

全树消费它的地方只有两个类：`CharacterInsultedLogEntry` 与 `PlayerReputationChangesLogEntry`。前者持有一个 `private readonly ActionNotes _gameActionNote;`（`:229`），构造器 `public CharacterInsultedLogEntry(Hero insultee, Hero insulter, CharacterObject overWhat, ActionNotes note)` 接收它，然后在 `:116` 与 `:166-199` 用一个大 `switch` 把 12 个「争吵类」值映射到不同的日志文本；后者持有 `private readonly ActionNotes _note;`（`:107`），在 `:70` / `:76` / `:83` 用它挑选文案。

**所以它是「日志层的语义标签」，不是「规则层的输入」。** 28 个值里有 12 个是争吵类（`NoQuarrel` 除外，实际被 switch 处理的是 `CourtshipQuarrel` 到 `LandCheatingQuarrel` 那批），剩下的是任务成败、战斗英勇、部队补给、劫掠村庄、献祭士兵、释放 NPC、攻城余波等一次性事件。

生产它的是 [TraitLevelingHelper](../TraitLevelingHelper)，那才是真正改数值的地方。**但它不给你选标签的自由**——它的公开 API 是一组按场景命名的静态方法（`OnVillageRaided()`、`OnPartyTreatedWell()`、`OnPartyStarved()`、`OnHostileAction(int)`、`OnTroopsSacrificed()`、`OnLordFreed(Hero)`、`OnPersuasionDefection(Hero)`、`OnIncidentResolved(TraitObject, int)` 等），**每一个内部都调私有的 `private static void AddPlayerTraitXPAndLogEntry(TraitObject trait, int xpValue, ActionNotes context, Hero referenceHero)`，并把 `context` 写死。**

所以「选择一个 `ActionNotes`」只有一条路：**自己构造日志条目**——`new CharacterInsultedLogEntry(insultee, insulter, overWhat, note)` 或 `new PlayerReputationChangesLogEntry(trait, referenceHero, note)`。经由 `TraitLevelingHelper` 拿到的标签永远是它预设的那一个。

## 心智模型

把它当成**「日志的分类键」**，三条定位规则：

**第一，它不参与任何计算。** 你用 `ActionNotes.LandCheatingQuarrel` 还是 `ActionNotes.VillageRaid` 去构造一条 `PlayerReputationChangesLogEntry`，特质等级一点都不会变——差别只在事后生成的日志长什么样。想改数值就得自己调 `Hero.MainHero.SetTraitLevel(...)` 或走 `TraitLevelingHelper` 的场景方法。

**第二，两条传递路径，权限完全不同。** 经由日志条目构造器：`new CharacterInsultedLogEntry(hero, hero2, characterObject, ActionNotes.VengeanceQuarrel)`（`BackstoryCampaignBehavior.cs:53` / `:67`）与 `new PlayerReputationChangesLogEntry(trait, referenceHero, note)`（`:53`）——**这条路上标签由你传**，但只落日志、不改数值。经由 `TraitLevelingHelper` 的场景方法——**它同时改数值与写日志，但标签是它写死的**，你选不了。

**第四，`DefaultNote` 是兜底，不是默认值。** `TraitLevelingHelper.cs:140` 的 `public static void OnIncidentResolved(TraitObject trait, int xpValue)` 内部走 `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry(trait, xpValue, ActionNotes.DefaultNote, Hero.MainHero);` —— 这是全树唯一显式产出 `DefaultNote` 的地方。而**枚举的隐式 0 就是 `DefaultNote`**，所以忘记传值也会得到它。`PlayerReputationChangesLogEntry` 的分支只判 `QuestSuccess` / `QuestBetrayal` / `PartyTakenCareOf`，**其余一律落到通用文案**，包括 `DefaultNote`。

**什么时候该用它、什么时候不该用。** 该用：你自己构造 `CharacterInsultedLogEntry` 或 `PlayerReputationChangesLogEntry` 时，要让日志文案带上正确的原因。不该用：拿它当开关——`if (note == ActionNotes.BattleValor)` 里的唯一效果就是「改变日志文字」。

## 关键成员

28 个成员，按官方 `CharacterInsultedLogEntry` 的 `switch`（`:166-199`）能确认被单独文案处理的是哪几个：

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `DefaultNote` | `DefaultNote`（隐式值 0） | 无特殊原因的兜底标签。隐式 0，所以忘记传值就是它。`TraitLevelingHelper.cs:142` 是唯一显式产出点，`PlayerReputationChangesLogEntry` 对它没有专门分支，走通用文案。 |
| `NoQuarrel` | `NoQuarrel`（隐式值 1） | 「不是争吵」。**它不出现在 `CharacterInsultedLogEntry` 的 `switch` 分支里**（`:166-199` 处理的是从 `CourtshipQuarrel` 开始的那批），所以传给日志条目会落到 `default` 分支。 |
| `CourtshipQuarrel` | `CourtshipQuarrel`（隐式值 2） | 因求爱被拒而争吵。`CharacterInsultedLogEntry.cs:166` 有专属文案分支。`BackstoryCampaignBehavior` 用 `ValorStrategyQuarrel` 与 `VengeanceQuarrel`，不用这个。 |
| `FiefQuarrel` | `FiefQuarrel`（隐式值 3） | 因封地争执。`:169` 专属分支。 |
| `ValorStrategyQuarrel` | `ValorStrategyQuarrel`（隐式值 4） | 因勇武策略分歧。`:172` 专属分支；`BackstoryCampaignBehavior.cs:31` 是它唯一的生产点。 |
| `ResponsibilityStrategyQuarrel` | `ResponsibilityStrategyQuarrel`（隐式值 5） | 因责任心策略分歧。`:175` 专属分支。 |
| `CalculatingStrategyQuarrel` | `CalculatingStrategyQuarrel`（隐式值 6） | 因算计策略分歧。`:178` 专属分支。 |
| `VengeanceQuarrel` | `VengeanceQuarrel`（隐式值 7） | 因复仇而争吵。`:181` 专属分支；`BackstoryCampaignBehavior.cs:53` / `:67` 是生产点。 |
| `DishonestBusinessQuarrel` | `DishonestBusinessQuarrel`（隐式值 8） | 因生意不诚实。`:184` 专属分支。 |
| `RuthlessBusinessQuarrel` | `RuthlessBusinessQuarrel`（隐式值 9） | 因生意太狠。`:187` 专属分支。 |
| `CorruptGangLeaderQuarrel` | `CorruptGangLeaderQuarrel`（隐式值 10） | 因帮派头目腐败。`:190` 专属分支。 |
| `CompetingGangLeaderQuarrel` | `CompetingGangLeaderQuarrel`（隐式值 11） | 因帮派头目竞争。`:193` 专属分支。 |
| `TroublemakerQuarrel` | `TroublemakerQuarrel`（隐式值 12） | 因惹是生非者。`:196` 专属分支。 |
| `ExtortingQuarrel` | `ExtortingQuarrel`（隐式值 13） | 因勒索。`:199` 专属分支——**这是 `switch` 的最后一个显式 case**，其余值都落 `default`。 |
| `HereticQuarrel` | `HereticQuarrel`（隐式值 14） | 因异端指控。**不在 switch 的专属分支里**，走默认文案。 |
| `LandCheatingQuarrel` | `LandCheatingQuarrel`（隐式值 15） | 因土地侵占。**同样不在专属分支里**。 |
| `QuestBetrayal` | `QuestBetrayal`（隐式值 16） | 任务背叛。**`PlayerReputationChangesLogEntry.cs:76` 对它有专门分支**，产自 `TraitLevelingHelper.cs:114`。 |
| `QuestSuccess` | `QuestSuccess`（隐式值 17） | 任务成功。**被读取最多的一个**：`PlayerReputationChangesLogEntry.cs:70` 有专属分支，`TraitLevelingHelper` 在 `:90` / `:97` / `:105` 三处产出。 |
| `QuestFailed` | `QuestFailed`（隐式值 18） | 任务失败。`TraitLevelingHelper.cs:81` 产出；日志条目对它没有专门分支。 |
| `BattleValor` | `BattleValor`（隐式值 19） | 战斗中表现英勇。`TraitLevelingHelper.cs:35` 产出（`DefaultTraits.Valor` 加经验时的语境）。 |
| `HostileAction` | `HostileAction`（隐式值 20） | 敌对行动。`TraitLevelingHelper.cs:60` / `:61` 产出，同时影响 `DefaultTraits.Honor` 与 `DefaultTraits.Mercy`。 |
| `PersuadedToDefect` | `PersuadedToDefect`（隐式值 21） | 说服对方叛逃。`TraitLevelingHelper.cs:127` 产出（加 `DefaultTraits.Calculating` 经验）。 |
| `PartyHungry` | `PartyHungry`（隐式值 22） | 部队饥饿。`TraitLevelingHelper.cs:73` 产出（`DefaultTraits.Generosity` 减经验）。 |
| `PartyTakenCareOf` | `PartyTakenCareOf`（隐式值 23） | 部队得到照料。`TraitLevelingHelper.cs:67` 产出；**`PlayerReputationChangesLogEntry.cs:83` 对它有专门分支**，且条件是「部队里 generosity > 0 的士兵 + 玩家自己就是 Generosity 特质」。 |
| `VillageRaid` | `VillageRaid`（隐式值 24） | 劫掠村庄。`TraitLevelingHelper.cs:54` 产出（`DefaultTraits.Mercy` 减经验）。 |
| `SacrificedTroops` | `SacrificedTroops`（隐式值 25） | 牺牲士兵。`TraitLevelingHelper.cs:42` / `:48` 产出（分别影响 Valor 与 Honor）。 |
| `NPCFreed` | `NPCFreed`（隐式值 26） | 释放 NPC。`TraitLevelingHelper.cs:121` 产出（`DefaultTraits.Calculating` 加经验）。 |
| `SiegeAftermath` | `SiegeAftermath`（隐式值 27） | 攻城结束后的处置。`TraitLevelingHelper.cs:135` 产出，经验量来自 `Campaign.Current.Models.SiegeAftermathModel.GetSiegeAftermathTraitXpChangeForPlayer(...)`。**这是唯一一个经验值由模型动态决定的语境标签。** |

## 真实示例

走 `TraitLevelingHelper` 的官方场景方法（标签由它写死，你选不了）：

```csharp
public override void OnVillageLooted(Village village)
{
    // OnVillageRaided 内部调私有的 AddPlayerTraitXPAndLogEntry，context 写死为 ActionNotes.VillageRaid
    TraitLevelingHelper.OnVillageRaided();
    TraitLevelingHelper.OnPartyTreatedWell();
    TraitLevelingHelper.OnPartyStarved();

    Debug.Print("village " + village.Name + " looted", 0);
}
```

`OnVillageRaided()` 的内部是 `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry(DefaultTraits.Mercy, -30, ActionNotes.VillageRaid, null);`，`OnPartyTreatedWell()` 与 `OnPartyStarved()` 分别写死 `ActionNotes.PartyTakenCareOf` 与 `ActionNotes.PartyHungry` 并作用于 `DefaultTraits.Generosity`。**这三个都是 `public static void`，可以直接调；`AddPlayerTraitXPAndLogEntry` 是 `private static`，调不到。**

**自己选标签的唯一途径**是直接构造日志条目（照抄 `BackstoryCampaignBehavior.cs:53` 的形状）：

```csharp
public override void OnVillageLooted(Village village)
{
    Hero insultee = village.Settlement.OwnerClan.Leader;
    Hero insulter = Hero.MainHero;

    LogEntry.AddLogEntry(
        new CharacterInsultedLogEntry(insultee, insulter, null, ActionNotes.LandCheatingQuarrel),
        CampaignTime.Years(1080f) + CampaignTime.Weeks(4f) + CampaignTime.Days(2f));

    LogEntry.AddLogEntry(
        new PlayerReputationChangesLogEntry(DefaultTraits.Honor, insultee, ActionNotes.SacrificedTroops));
}
```

`CharacterInsultedLogEntry` 的构造器是 `public CharacterInsultedLogEntry(Hero insultee, Hero insulter, CharacterObject overWhat, ActionNotes note)`——前三个是「被侮辱者 / 侮辱者 / 因为什么事」，第四个才是本文的类型。`PlayerReputationChangesLogEntry` 是 `public PlayerReputationChangesLogEntry(TraitObject trait, Hero referenceHero, ActionNotes note)`，**标签在第三个参数**。`LogEntry.AddLogEntry(LogEntry)` 与 `AddLogEntry(LogEntry, CampaignTime)` 都存在，后者决定日志落在时间轴的哪一刻。

## 风险与边界

- **它不改变任何数值。** 传 `BattleValor` 还是 `VillageRaid`，经验加的量完全一样。想改数值改前两个参数。
- **只有两个消费类。** 全树读它的只有 `CharacterInsultedLogEntry`（`private readonly ActionNotes _gameActionNote;`）与 `PlayerReputationChangesLogEntry`（`private readonly ActionNotes _note;`）。**它不参与任何规则判定。**
- **28 个值里只有 12 个在 `CharacterInsultedLogEntry` 有专属文案。** `switch` 的 `case` 从 `CourtshipQuarrel` 到 `ExtortingQuarrel`（`:166-199`），**`HereticQuarrel`、`LandCheatingQuarrel` 以及全部非争吵类都不在其中**，走 `default`。你若传 `HereticQuarrel`，得到的不是「异端争吵」的专属文案。
- **`PlayerReputationChangesLogEntry` 只对 3 个值有专门分支。** `QuestSuccess`（`:70`）、`QuestBetrayal`（`:76`）、`PartyTakenCareOf`（`:83`），其余一律通用文案。**28 个值里 25 个对日志没有区分度。**
- **`NoQuarrel` 名字像「没有争吵」，但它同样不在专属分支里。** 传它得到的是默认文案。
- **隐式值 0 是 `DefaultNote`。** 忘记传值得到它，而它对两个日志类都没有专属分支。
- **不是 `Flags`。** 没有 `[Flags]`，28 个成员全是互斥的分类标签，按位或无意义且不报错。
- **不存档。** 它是枚举而非 `MBObjectBase`，值是 `int`。日志条目自身有 `[SaveableField]` 存的是它。
- **嵌套在日志条目里被持有。** 两条日志的构造函数参数类型就是它，所以它没有别的宿主类型——想找它就搜 `CharacterInsultedLogEntry` 与 `PlayerReputationChangesLogEntry` 的第四/第三个参数。

## 跨版本提示

`ActionNotes` 的 28 个成员在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：同样的名字、同样的顺序、同样的隐式 0…27，无新增、无重排、无删除。

跨三个大版本零变化。**这是本批里最稳定的一个枚举**——它既没有被扩展（后续版本没有为它加新的语境标签），也没有被删减。

需要留意的是**生产端而非枚举本身**：[TraitLevelingHelper](../TraitLevelingHelper) 里的调用点数量会随新系统增长（海战、蒸汽机产业等各有自己的特质变动），但它们只会复用这 28 个已有值。所以**升级后你传旧值仍然有效**，只是某些语境可能找不到最贴切的标签，需要退而求其次用 `DefaultNote`。

## 依赖关系

- 唯一两个消费者：[CharacterInsultedLogEntry](../CharacterInsultedLogEntry)（`private readonly ActionNotes _gameActionNote`，`switch` 在 `:166-199`）与 [PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry)（`private readonly ActionNotes _note`，分支在 `:70` / `:76` / `:83`）
- 主要生产者：[TraitLevelingHelper](../TraitLevelingHelper) 的 `AddPlayerTraitXPAndLogEntry(TraitObject trait, int xpValue, ActionNotes context, Hero referenceHero)`（`:146`），以及 `BackstoryCampaignBehavior` 直接构造日志条目
- 受影响的特质：[DefaultTraits](../DefaultTraits) 的 Valor / Honor / Mercy / Generosity / Calculating——数值加在特质上，`ActionNotes` 只影响日志
- 宿主：[LogEntry](../LogEntry) 的 `AddLogEntry(LogEntry, CampaignTime)` 是日志入库入口
- 参照：[CampaignTime](../CampaignTime) 决定日志落在时间轴的哪一刻
- 桶首页：[campaign API 分区](../)