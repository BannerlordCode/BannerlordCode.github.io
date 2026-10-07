---
title: "ArmyCreationLogEntry"
description: "军团成立日志条目：把「某某创建了一支军团」这条事实同时写进战役日志、百科页与战争日志三个消费面，7 天后过期。"
---

# ArmyCreationLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyCreationLogEntry : LogEntry, IEncyclopediaLog, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyCreationLogEntry.cs`

## 概述

`ArmyCreationLogEntry` 回答「谁创建了一支军团」这一条事实，并通过同时实现 `IEncyclopediaLog` 与 `IWarLog`，让**同一条记录**被三个互不相干的消费面复用：战役日志列表、角色百科页的事件流、以及按 [StanceLink](../StanceLink) 过滤的战争日志。

它**只存一个人**：`[SaveableField(20)] private readonly CharacterObject _armyLeader`，构造时从 `army.LeaderParty.LeaderHero.CharacterObject` 抓快照。注意存的是 `CharacterObject` 而不是 [Hero](../Hero)——百科页的可见性判断靠 `_armyLeader.HeroObject` 反查回英雄。文本是硬编码的 `new TextObject("{=aXhPvVud}{HERO.LINK} created an army.")`，没有 GameText key 可覆盖，也没有 `IsVisibleNotification`——它**不参与聊天栏通知**（对比 [ArmyDispersionLogEntry](../ArmyDispersionLogEntry) 实现了 `IChatNotification`）。

## 心智模型

把它当成**一条已经构造完、不再变化的不可变记录**：构造器把 `Army` 拆成一个 `CharacterObject` 快照，之后所有方法都从这个快照算文本和可见性，不再回头读 `Army`。这一点决定了三件事：

1. **必须在 `Army` 解散前构造。** 唯一调用点是 `DefaultLogsCampaignBehavior.OnArmyCreated`（`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/DefaultLogsCampaignBehavior.cs:119`）：

   ```csharp
   ArmyCreationLogEntry armyCreationLogEntry = new ArmyCreationLogEntry(army);
   LogEntry.AddLogEntry(armyCreationLogEntry);
   if (army.LeaderParty.MapFaction == MobileParty.MainParty.MapFaction && army.LeaderParty != MobileParty.MainParty)
   {
       Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new ArmyCreationMapNotification(army, armyCreationLogEntry.GetEncyclopediaText()));
   }
   ```

   注意地图通知用的是 `armyCreationLogEntry.GetEncyclopediaText()`——**同一条文本对象**既进日志也进地图通知弹窗，这是本设计的关键复用点。

2. **`GetEncyclopediaText()` 每次调用都新建 `TextObject`。** 它不是缓存字段，每次 `new` 一个带 `{HERO.LINK}` 变量的文本，然后 `StringHelpers.SetCharacterProperties("HERO", _armyLeader, textObject)` 填入角色属性。想复用同一个实例请自己存，别指望它返回同一引用。

3. **战争日志的过滤规则是「单边阵营匹配」。** `IsRelatedToWar(stance, out effector, out effected)` 取 `stance.Faction1` / `stance.Faction2`，把 `effector` 设成军团领主的 `MapFaction`，`effected` 恒为 `null`；然后 `if (leaderFaction != faction1) return leaderFaction == faction2;` 否则 `return true`。也就是说**只要军团领主属于该 StanceLink 的任何一方，这条日志就算「与这场战争有关」**，与军团实际有没有参战无关。`effected` 永远是 null，依赖它的调用方必须自己处理 null。

过期规则由 `KeepInHistoryTime => CampaignTime.Days(7f)` 固定为 7 天——这与基类 `LogEntry` 的默认值相同，所以这个 override 其实是冗余的显式声明，不是特殊配置。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_armyLeader` | `[SaveableField(20)] private readonly CharacterObject _armyLeader` | 唯一的存档字段。构造时快照 `army.LeaderParty.LeaderHero.CharacterObject`。存 `CharacterObject` 而非 `Hero` 意味着它同时能撑起百科页的链接文本与 `IsVisibleInEncyclopediaPageOf` 里的 `HeroObject` 反查。**readonly + 构造器赋值，没有 setter。** |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime => CampaignTime.Days(7f)` | 日志在历史列表里保留多久。数值与基类 `LogEntry` 默认值相同，属显式冗余；想延长保留期得派生并 override，注意基类属性是 `virtual`。 |
| `ToString` | `public override string ToString()` | 直接返回 `GetEncyclopediaText().ToString()`。这是本族日志条目的统一约定——调试打印、某些 UI 的兜底渲染都走它，所以文本里的 `{HERO.LINK}` 变量必须已填好，否则打印出来是残缺串。 |
| `IsRelatedToWar` | `public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)` | `IWarLog` 的实现。`effector` = 领主 `MapFaction`，`effected` 恒 null；判定只看领主阵营是否等于 `stance.Faction1` 或 `stance.Faction2` 之一。**不看军团是否真的参战**，也不看 `IsAtWarWith`。 |
| `IsVisibleInEncyclopediaPageOf<T>` | `public bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase` | 百科页归属判断：`(object)obj == _armyLeader.HeroObject`。**每次调用都解引用 `HeroObject`**，若快照里的 `CharacterObject` 已不挂英雄会 NRE——正常存档里不会发生。 |
| `GetEncyclopediaText` | `public TextObject GetEncyclopediaText()` | 生成 `"{HERO.LINK} created an army."`。每次调用新建 `TextObject` 并填 `HERO` 变量。**没有 `includeReason` 之类的分支，也没有 GameText key 覆盖入口。** |

## 真实示例

在军团成立的同一帧里同时写日志与地图通知——这是唯一官方调用形态：

```csharp
ArmyCreationLogEntry entry = new ArmyCreationLogEntry(army);
LogEntry.AddLogEntry(entry);
if (army.LeaderParty.MapFaction == MobileParty.MainParty.MapFaction && army.LeaderParty != MobileParty.MainParty)
{
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new ArmyCreationMapNotification(army, entry.GetEncyclopediaText()));
}
```

按 StanceLink 查询与某场战争相关的军团成立记录——`GetLogsForWar` 在 [DiplomacyHelper](../../system/DiplomacyHelper) 上，不在 [LogEntry](../LogEntry) 上：

```csharp
foreach ((LogEntry entry, IFaction effector, IFaction effected) in DiplomacyHelper.GetLogsForWar(stance))
{
    if (entry is ArmyCreationLogEntry)
    {
        Debug.Print(entry.ToString() + " effector=" + effector.Name + " effected=" + (effected == null ? "null" : effected.Name), 0);
    }
}
```

查一个英雄的百科页上会显示哪些军团成立记录——百科页遍历的是 `Campaign.Current.LogEntryHistory.GameActionLogs`：

```csharp
MBReadOnlyList<LogEntry> logs = Campaign.Current.LogEntryHistory.GameActionLogs;
foreach (LogEntry entry in logs)
{
    if (entry is ArmyCreationLogEntry armyLog && armyLog.IsVisibleInEncyclopediaPageOf(Hero.MainHero))
    {
        Debug.Print("at " + armyLog.GameTime + ": " + armyLog.GetEncyclopediaText(), 0);
    }
}
```

## 风险与边界

- **构造器会解三层引用。** `army.LeaderParty` → `.LeaderHero` → `.CharacterObject`。传入一个 `LeaderParty` 为 null 的 [Army](../Army)（或 `LeaderHero` 为 null，例如无领主的聚兵）会直接 NRE，没有守卫分支。
- **快照，不回读。** 领主的 [Clan](../Clan)、`MapFaction` 后来变了，条目里的 `_armyLeader` 不更新；`IsRelatedToWar` 每次都重新读 `_armyLeader.HeroObject.MapFaction`，所以**过滤结果会随时间漂移**，而文本不变。
- **`effected` 永远为 null。** `IsRelatedToWar` 硬写 `effected = null`，任何不解判空就解引用的调用方都会崩。
- **`IsVisibleInEncyclopediaPageOf` 会解引用 `HeroObject`。** 快照若指向非英雄 `CharacterObject`（理论上不该发生）会 NRE。
- **不实现 `IChatNotification`。** 没有 `IsVisibleNotification`、没有 `NotificationType` 覆盖，聊天栏不会因为这条日志弹出消息。想控制聊天通知得用 [ArmyDispersionLogEntry](../ArmyDispersionLogEntry) 那条路径。
- **`GetEncyclopediaText()` 每次新建对象。** 循环里调用会产生大量短命 `TextObject`；别指望引用相等。
- **文本没有 GameText 覆盖点。** 翻译 key `{=aXhPvVud}` 硬编码在构造体里，mod 想改文案只能整个派生重写。
- **7 天过期写死在 override 里。** 想改必须派生——`KeepInHistoryTime` 在基类是 `virtual`，可以 override，但注意存档里已存在的条目按新值算过期。
- **进存档。** `[SaveableField(20)]` + `AutoGeneratedInstanceCollectObjects` 收集 `_armyLeader`，读档后由 [SaveableCampaignTypeDefiner](../SaveableCampaignTypeDefiner) 与 `AutoGeneratedSaveManager` 重建。旧存档里若有该条目，加字段需要同步 SaveManager 的 id 映射。

## 怎么用

### 怎么拿到它

**官方只有一处构造，且它与地图通知是同一次调用里的两步。** `DefaultLogsCampaignBehavior.cs:120` 先 `new ArmyCreationLogEntry(army)` 再 `LogEntry.AddLogEntry(...)`，随后在 `:124` 把同一个 `GetEncyclopediaText()` 结果交给 `ArmyCreationMapNotification`。**文案只有一份**，所以别在通知侧另写一句。

构造器只有一行，但它解了三层引用（`:34`）：`army.LeaderParty` → `.LeaderHero` → `.CharacterObject`。`KeepInHistoryTime` 固定 7 天（`:14`），**这条记录 7 天后从 `LogEntryHistory` 消失**。

消费入口有三个，取决于你要回答什么问题：`IsRelatedToWar`（`:42`）供战争维度查询，`IsVisibleInEncyclopediaPageOf`（`:55`）供英雄百科页过滤，`GetEncyclopediaText`（`:60`）产出文案。**战争维度的入口不在 `LogEntry` 上，而在 `DiplomacyHelper.GetLogsForWar(StanceLink)`（`DiplomacyHelper.cs:55`）。**

### 典型用法

`GetLogsForWar` 的实现值得先知道：它从 `GameActionLogs` 末尾往前扫（`:59`），先过 `IsLogInTimeRange(logEntry, warStartDate)`（`:62`），再要求 `logEntry is IWarLog`（`:62`）——**本类型实现了 `IWarLog`（`:9`）**，所以它才进得来。

`IsRelatedToWar`（`:42`）的语义要读准：它把 `_armyLeader.HeroObject.MapFaction` 当 effector（`:46`）、把 `effected` 恒置 null（`:47`），然后判「这个阵营是不是 `stance.Faction1` 或 `Faction2`」（`:48`-`:52`）。**它判的是阵营归属，不是谁打谁**——所以过滤出来的记录里分不清敌我。

百科页过滤走的是另一条完全不同的判据，`IsVisibleInEncyclopediaPageOf` 只比对象引用（`:57`）：

```csharp
public static class ArmyCreationLogReader
{
    public static void Dump()
    {
        MBReadOnlyList<LogEntry> logs = Campaign.Current.LogEntryHistory.GameActionLogs;
        int shown = 0;
        foreach (LogEntry entry in logs)
        {
            ArmyCreationLogEntry creation = entry as ArmyCreationLogEntry;
            if (creation == null || !creation.IsVisibleInEncyclopediaPageOf(Hero.MainHero))
            {
                continue;
            }
            shown++;
            Debug.Print(creation.GameTime + " -> " + creation.GetEncyclopediaText(), 0);
        }
        Debug.Print("entries on main hero page = " + shown, 0);
    }
}
```

`GetEncyclopediaText`（`:60`）产出的是 `{=aXhPvVud}{HERO.LINK} created an army.`，并用 `StringHelpers.SetCharacterProperties("HERO", _armyLeader, textObject)`（`:63`）填变量。**这个方法每次调用都新建一个 `TextObject`**，没有缓存。

### 最容易踩的坑

**构造器会解三层引用。** `army.LeaderParty` → `.LeaderHero` → `.CharacterObject`。传入一个 `LeaderParty` 为 null 的 [Army](../Army)（或 `LeaderHero` 为 null，例如无领主的聚兵）会直接 NRE，没有守卫分支。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyCreationLogEntry.cs` 是 66 行、6 个公开成员（含两个接口实现方法），`SaveableField` id 为 20。1.4.6 同名文件的公开表面与之逐成员一致；1.3.15 侧未见同名文件，说明军团成立日志是较新引入的条目类型。

## 依赖关系

- 基类：[LogEntry](../LogEntry) 提供 `Id` / `GameTime` / `KeepInHistoryTime` / `NotificationType`，以及 `MilitaryNotification` / `DiplomaticNotification` 两个 `ChatNotificationType` 构造 helper
- 接口：[IEncyclopediaLog](../IEncyclopediaLog)（百科页事件流）、[IWarLog](../IWarLog)（按 [StanceLink](../StanceLink) 过滤的战争日志）
- 唯一构造点：[DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior) 的 `OnArmyCreated`，它同时把 `GetEncyclopediaText()` 交给 [ArmyCreationMapNotification](../ArmyCreationMapNotification)
- 数据源：[Army](../Army) 的 `LeaderParty`，再经 [MobileParty](../MobileParty) 的 `LeaderHero` 到 [CharacterObject](../CharacterObject)
- 过滤器：[StanceLink](../StanceLink) 提供 `Faction1` / `Faction2`，[IFaction](../IFaction) 的 `IsEliminated` / `IsAtWarWith` 是同族判断的基础
- 归档：[LogEntry](../LogEntry) 的静态 `AddLogEntry`，经 `Campaign.Current.LogEntryHistory.AddActionLog` 落到 `LogEntryHistory.GameActionLogs`；[DiplomacyHelper](../../system/DiplomacyHelper) 的 `GetLogsForWar` 与 `EncyclopediaHeroPageVM` 分别是战争日志与百科页两条读路径；存档侧由 `SaveableCampaignTypeDefiner` 与 `AutoGeneratedSaveManager` 注册
- 文本变量：[StringHelpers](../../system/StringHelpers) 的 `SetCharacterProperties` 把 `{HERO.LINK}` 绑到角色属性上
