---
title: "ActionNotes"
description: "玩家行为标签枚举：28 个成员，给「玩家做了什么导致声誉变化」这件事打一个可存档的分类，供日志条目与同伴评论查表。"
---

# ActionNotes

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ActionNotes`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ActionNotes.cs`

## 概述

`ActionNotes` 是一个**纯枚举、28 个成员、无成员体**，它唯一的工作是给「玩家刚刚做了一件会导致声誉变化的事」这件事打上一个可存档的分类标签，然后让下游查表。

两个下游消费者决定了它的全部形状：

- [PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry) 把 `_note` 存成 `[SaveableField(412)]`，在 `GetConversationScoreAndComment` 里用它决定同伴说什么话（`QuestSuccess` / `QuestBetrayal` / `PartyTakenCareOf` 三个值各有一句专属评论）。
- [CharacterInsultedLogEntry](../CharacterInsultedLogEntry) 把 `_gameActionNote` 存下来，`GetEncyclopediaText()` 里有 12 个 `case` 各配一句 GameText，其余**全部落到 `str_game_action_note` + `_gameActionNote.ToString()` 的通用兜底**。

换句话说：**枚举成员的名字本身就是最终文案的一部分**（`ToString()` 直接进文本变量），所以给枚举改名会同时改掉百科页显示的词。

## 心智模型

把它当成**「一张原因码表」**——写日志时必须给一个 `ActionNotes`，它决定日志条目后续如何被渲染和被谁评论。要记住四件事：

1. **它进存档，而且有专属 id。** `SaveableCampaignTypeDefiner.cs:316` 一行：`AddEnumDefinition(typeof(ActionNotes), 2030);`——**枚举 id 2030，无 resolver**（对比 [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver) 给 `Army.ArmyDispersionReason` 挂的 2023）。无 resolver 意味着**1.4.5 认为这些名字从未改过**；给枚举改名就会静默破坏旧存档的日志文本。

2. **28 个成员不是按「好坏」分的，是按「事件类型」分的。** 粗分四组：12 个 `*Quarrel`（争吵，被 `CharacterInsultedLogEntry` 逐个配文案）、3 个 `Quest*`（任务成败背叛）、`BattleValor` / `HostileAction` / `SacrificedTroops`（战斗行为）、`PartyHungry` / `PartyTakenCareOf`（对队伍的态度）、`VillageRaid` / `NPCFreed`（对平民的行为），以及 `NoQuarrel` 与 `DefaultNote` 两个中性值。

3. **写入路径唯一且带阈值。** `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry` 是唯一的生产入口（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitLevelingHelper.cs:158`）：

   ```csharp
   if (TaleWorlds.Library.MathF.Abs(xpValue) >= 10)
   {
       LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(trait, referenceHero, context));
   }
   ```

   **|xp| < 10 的声誉变化根本不写日志**，也就没有 `ActionNotes` 被记录。这意味着「某个 note 从未出现在日志里」可能只是 xp 太小，不代表事件没发生。

4. **谁传什么 note 决定谁读到它。** 同一个 `ActionNotes` 值在不同 `LogEntry` 子类里语义不同。`ActionNotes.DishonestBusinessQuarrel` 同时被两处写入：`TraitLevelingHelper.OnAllianceBrokenThroughHostility()` 用 `-1000` 点 Honor（读作「背信弃义的商业行为」），而 `BackstoryCampaignBehavior` 用 `VengeanceQuarrel` 写历史日志。**note 名字相同不代表语义相同，看调用方。**

第三个坑值得单列：**枚举里没有 `Invalid` / `Unknown` 哨兵**。`DefaultNote`（值 0）是实际的默认语义「一般事件」，不是「未设置」。所以 `[SaveableField(412)] private readonly ActionNotes _note` 在旧存档里读到 0 时，你无法区分「这是一次普通事件」和「这个字段没写」。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `DefaultNote` | `DefaultNote = 0` | 通用兜底值。`TraitLevelingHelper.OnIncidentResolved(trait, xpValue)` 固定用它（传 `referenceHero: Hero.MainHero`）。也是存档读出的默认值——**没有独立的「未设置」哨兵**，所以读到 0 时分不清是显式传入还是字段缺失。 |
| `NoQuarrel` | `NoQuarrel = 1` | 唯一的非 `*Quarrel` 的「无争吵」标记。全树未找到任何 `ActionNotes.NoQuarrel` 的写入点，**属于预留给 mod / 剧情脚本的语义位**。 |
| `CourtshipQuarrel` … `FiefQuarrel` | 12 个 `*Quarrel` 成员 | 被 `CharacterInsultedLogEntry.GetEncyclopediaText()` 的 `switch`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterInsultedLogEntry.cs:147` 起）**逐个配一句 GameText**（`str_insult_news_courtship`、`str_insult_news_vengeance` 等）。这 12 个之外的所有争吵值都会落到通用兜底 `"{=v7sfiv5m}{INSULT_NEWS} {GAME_ACTION_NOTES}"`。 |
| `QuestBetrayal` / `QuestSuccess` / `QuestFailed` | 三个任务类成员 | `QuestSuccess` 与 `QuestBetrayal` 在 `PlayerReputationChangesLogEntry.GetConversationScoreAndComment` 里各有专属同伴评论（`str_comment_companion_on_honor_for_quest_success` / `..._betrayal`，`ImportanceEnum.SomewhatImportant`）；`QuestFailed` 没有专属评论，仅走通用路径。 |
| `PartyTakenCareOf` / `PartyHungry` | 两个队伍态度成员 | `PartyTakenCareOf` 触发 `str_comment_companion_on_generosity_for_party_morale`（同伴赞你慷慨）；`PartyHungry` 只影响 Generosity 的 ±20 点，**没有专属评论**。 |
| `VillageRaid` / `NPCFreed` | 两个对平民行为成员 | `VillageRaid` 由 `TraitLevelingHelper` 记 Mercy `-30`；`NPCFreed` 记 Calculating `+20`。两者都无专属同伴评论。 |
| `BattleValor` / `HostileAction` / `SacrificedTroops` | 三个战斗行为成员 | 数值型：`BattleValor` 给 Valor 加 XP，`HostileAction` 同时动 Honor 与 Mercy，`SacrificedTroops` 给 Valor `-30` 或 Honor `-1000`（按上下文）。**无专属评论**。 |
| 枚举存档登记 | `AddEnumDefinition(typeof(ActionNotes), 2030)` | 在 `SaveableCampaignTypeDefiner`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:316`）。**第三个参数缺省 = 无 `IEnumResolver`**，即官方承诺这些枚举名从 1.4.5 之前到现在没变过。 |

## 真实示例

官方写入路径，从 `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry` 照抄（注意 xp 阈值）：

```csharp
int traitLevel = Hero.MainHero.GetTraitLevel(trait);
AddTraitXp(trait, xpValue);
if (traitLevel != Hero.MainHero.GetTraitLevel(trait))
{
    CampaignEventDispatcher.Instance.OnPlayerTraitChanged(trait, traitLevel);
}
if (MathF.Abs(xpValue) >= 10)
{
    LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(trait, referenceHero, ActionNotes.HostileAction));
}
```

自己写一条声誉日志（mod 里给新事件配 note 的正确形状）：

```csharp
int xp = 25;
LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(
    DefaultTraits.Honor, Hero.MainHero.CharacterObject.HeroObject, ActionNotes.QuestSuccess));
Debug.Print("logged note=" + ActionNotes.QuestSuccess + " xp=" + xp, 0);
```

写一条争吵日志，让百科页拿到专属文案：

```csharp
Hero insultee = Hero.MainHero;
Hero insulter = Hero.AllAliveHeroes.First((Hero h) => h != Hero.MainHero && h.IsLord);
CharacterObject overWhat = insulter.CharacterObject;
LogEntry.AddLogEntry(new CharacterInsultedLogEntry(insultee, insulter, overWhat, ActionNotes.VengeanceQuarrel));
```

## 风险与边界

- **枚举名就是显示文案的一部分。** `CharacterInsultedLogEntry.GetEncyclopediaText()` 的兜底路径直接 `SetTextVariable("GAME_ACTION_NOTES", GameTexts.FindText("str_game_action_note", _gameActionNote.ToString()))`。**改名 = 改玩家在百科页看到的词**，而 `str_game_action_note` 的翻译表里只有旧名字。
- **存档 id 2030 无 resolver。** 与 `Army.ArmyDispersionReason`（2023，挂了 [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver)）不同，`ActionNotes` 没有任何改名兼容层。**给枚举改名会静默破坏旧存档的日志文本**——不崩，只是显示成裸英文标识符或找不到翻译。
- **12 个争吵值才有专属文案。** `CharacterInsultedLogEntry` 的 `switch` 只处理 12 个 `*Quarrel`。`CorruptGangLeaderQuarrel`、`CompetingGangLeaderQuarrel` 这两个成员**没有专属 GameText**，落通用兜底。
- **`|xp| < 10` 不写日志。** `AddPlayerTraitXPAndLogEntry` 的阈值意味着微小声誉变化没有任何 note 记录。统计 note 频率会低估小事件。
- **没有 `Invalid` 哨兵。** `DefaultNote = 0` 同时承担「普通事件」与「默认值」两个角色，从存档读出 0 时无法区分。
- **`NoQuarrel` 全树无写入点。** 它在枚举里但没有任何代码 `new` 出它，只作语义占位。
- **同一个值在不同 LogEntry 里语义不同。** 判读日志必须同时看条目类型与 note 值，光看 note 会误判。
- **不能反查 note 的来源。** 枚举本身不记录「谁写的」「因为什么」，要溯源只能查 `PlayerReputationChangesLogEntry._trait` 与 `_referenceHero`。

## 怎么用

### 怎么拿到它

**它不是一个对象，没有构造器，也拿不到实例。** `ActionNotes` 是一个 28 成员的 `public enum`（`ActionNotes.cs:3`），你在 C# 侧唯一能做的事就是把它的某个成员当作参数**传出去**。`DefaultNote` 的隐式值是 0（`:5`）。

真正消费它的位置有三类：`TraitLevelingHelper` 的声誉写入（`TraitLevelingHelper.cs:52`、`:59`、`:64`、`:69`、`:74`、`:79`-`:80`、`:85`、`:90`、`:97`）、`BackstoryCampaignBehavior` 的开局历史补写（`BackstoryCampaignBehavior.cs:25`、`:47`、`:54`），以及各 LogEntry 类把它存成字段（如 `CharacterInsultedLogEntry.cs:23` 的 `private readonly ActionNotes _gameActionNote`）。

**它有存档 id 2030。** `SaveableCampaignTypeDefiner.cs:316` 的 `AddEnumDefinition(typeof(ActionNotes), 2030)` 把它注册进枚举序列化。枚举按**序号**存盘，不按名字——这是下面那个坑的根。

### 典型用法

文案链在 `CharacterInsultedLogEntry.GetEncyclopediaText()`：它的 `switch`（`:149` 起）逐个匹配 12 个 `*Quarrel` 值给专属 GameText，**落不到的走 `:194` 的兜底**——`textObject.SetTextVariable("GAME_ACTION_NOTES", GameTexts.FindText("str_game_action_note", _gameActionNote.ToString()))`。`FindText` 的第二个参数是 `_gameActionNote.ToString()`，**也就是枚举成员名本身**。

所以给新事件配文案之前，先确认它到底落在专属分支还是兜底分支：

```csharp
public static class ActionNoteCoverageProbe
{
    public static void Report(ActionNotes note)
    {
        string key = GameTexts.FindText("str_game_action_note", note.ToString()).ToString();
        bool hasDedicated = note.ToString().EndsWith("Quarrel");
        Debug.Print("note=" + note + " ordinal=" + (int)note, 0);
        Debug.Print("fallback text id=" + key + " dedicatedSwitch=" + hasDedicated, 0);
    }
}
```

`_hasDedicated` 那个近似判断只是给你一个排查信号：`CorruptGangLeaderQuarrel` 和 `CompetingGangLeaderQuarrel`（`:15`、`:16`）名字带 `Quarrel` 后缀，但 `switch` 里没有它们的 case，**照样落兜底**。枚举里带后缀不代表有专属文案。

`AddPlayerTraitXPAndLogEntry` 还有一个硬阀：`MathF.Abs(xpValue) >= 10` 才写日志。**调它时别指望 `|xp| = 5` 也能留痕。**

### 最容易踩的坑

**枚举名就是显示文案的一部分。** `CharacterInsultedLogEntry.GetEncyclopediaText()` 的兜底路径直接 `SetTextVariable("GAME_ACTION_NOTES", GameTexts.FindText("str_game_action_note", _gameActionNote.ToString()))`。**改名 = 改玩家在百科页看到的词**，而 `str_game_action_note` 的翻译表里只有旧名字。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ActionNotes.cs` 是 33 行、**28 个枚举成员、零方法**。逐成员比对 1.4.6 与 1.3.15 的同名文件：公开表面完全一致，未见成员增删或顺序变化——**顺序即数值，所以插入新成员会移动后续所有值，必须追加到末尾**。

`SaveableCampaignTypeDefiner` 侧的登记在 1.4.5 是 `AddEnumDefinition(typeof(ActionNotes), 2030)`（无 resolver），与 1.4.6 一致。

## 依赖关系

- 生产方：[TraitLevelingHelper](../TraitLevelingHelper).AddPlayerTraitXPAndLogEntry（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitLevelingHelper.cs:158`），是全树唯一写入 `PlayerReputationChangesLogEntry` 的入口；`BackstoryCampaignBehavior` 也用 `ActionNotes.ValorStrategyQuarrel` / `VengeanceQuarrel` 直接写 `CharacterInsultedLogEntry`
- 消费者一：[PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry) 的 `_note`（`[SaveableField(412)]`），在 `GetConversationScoreAndComment` 里决定同伴评论
- 消费者二：[CharacterInsultedLogEntry](../CharacterInsultedLogEntry) 的 `_gameActionNote`（`[SaveableField(113)]`），`GetEncyclopediaText()` 12 分支 + 通用兜底
- 数值来源：[DefaultTraits](../DefaultTraits)（Valor / Honor / Mercy / Generosity / Calculating）与 [Hero](../Hero).SetTraitLevel / GetTraitLevel
- 枚举本体：[DefaultTraits](../DefaultTraits) 所在的 `TaleWorlds.CampaignSystem` 根命名空间——本类型没有子命名空间，是 campaign 桶里少见的扁平位置
- 存档登记：`SaveableCampaignTypeDefiner` 的 `AddEnumDefinition(typeof(ActionNotes), 2030)`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:316`）
- 文本：[StringHelpers](../../system/StringHelpers) 与 [GameTexts](../../core-extra/GameTexts) 提供 `str_game_action_note` 之类的翻译查找
